export interface Env {
  TWENTY_API_KEY?: string;
  TWENTY_API_URL?: string;
  N8N_WEBHOOK_URL?: string;
  CRM_NOTIFY_EMAIL?: string;
}

export interface LeadPayload {
  name?: string;
  email: string;
  message?: string;
  company?: string;
  phone?: string;
  source?: string;
  channel?: string;
  language?: string;
}

interface EventContext<TEnv = Env> {
  request: Request;
  env: TEnv;
  params: Record<string, string | string[]>;
  waitUntil: (promise: Promise<unknown>) => void;
  next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
  data: Record<string, unknown>;
}

export const onRequestOptions = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
};

export const onRequestPost = async ({ request, env }: EventContext<Env>) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  try {
    const body: LeadPayload = await request.json();

    if (!body || !body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())) {
      return new Response(
        JSON.stringify({ success: false, error: "A valid email address is required." }),
        { status: 400, headers: corsHeaders }
      );
    }

    const email = body.email.trim().toLowerCase();
    const fullName = body.name?.trim() || "Lead";
    const nameParts = fullName.split(" ");
    const firstName = nameParts[0] || "Lead";
    const lastName = nameParts.slice(1).join(" ") || "";
    const message = body.message?.trim() || "";
    const source = body.source || "clubemkt_contact";
    const channel = body.channel || "clubemkt.digital";
    const language = body.language || "en";

    const timestamp = new Date().toISOString();
    let twentySyncStatus = "unconfigured";
    let leadId = `lead_${Date.now()}`;

    // 1. Sync with Twenty CRM if API key configured
    if (env.TWENTY_API_KEY) {
      const twentyUrl = (env.TWENTY_API_URL || "https://api.twenty.com").replace(/\/$/, "");
      
      try {
        // Create or find Person in Twenty CRM via REST API
        const twentyRes = await fetch(`${twentyUrl}/rest/people`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${env.TWENTY_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: {
              firstName,
              lastName,
            },
            emails: {
              primaryEmail: email,
            },
            ...(body.phone ? { phones: { primaryPhone: body.phone } } : {}),
            ...(body.company ? { company: body.company } : {}),
            jobTitle: body.company ? `Representative at ${body.company}` : undefined,
          }),
        });

        if (twentyRes.ok) {
          const twentyData: any = await twentyRes.json();
          twentySyncStatus = "synced";
          leadId = twentyData.data?.createPerson?.id || twentyData.id || leadId;
        } else {
          twentySyncStatus = `api_error_${twentyRes.status}`;
          console.error("Twenty CRM API error:", await twentyRes.text());
        }
      } catch (err: any) {
        twentySyncStatus = "sync_exception";
        console.error("Twenty CRM sync failed:", err.message);
      }
    }

    // 2. Dispatch to n8n / automation webhook if configured
    if (env.N8N_WEBHOOK_URL) {
      try {
        await fetch(env.N8N_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "lead.captured",
            timestamp,
            lead: {
              id: leadId,
              email,
              name: fullName,
              company: body.company,
              phone: body.phone,
              message,
              source,
              channel,
              language,
              twentySyncStatus,
            },
          }),
        });
      } catch (webhookErr) {
        console.error("n8n webhook dispatch error:", webhookErr);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Lead recorded successfully.",
        lead_id: leadId,
        twenty_status: twentySyncStatus,
        timestamp,
      }),
      { status: 200, headers: corsHeaders }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Internal server error processing lead.",
        details: err.message,
      }),
      { status: 500, headers: corsHeaders }
    );
  }
};
