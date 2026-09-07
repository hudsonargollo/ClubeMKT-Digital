import { execSync } from "node:child_process";
import { copyFileSync, rmSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(import.meta.url), "../..");
const dist = path.join(root, "dist");

rmSync(dist, { recursive: true, force: true });

// New public homepage: rebranded static HUDS CLUBEMKT site.
mkdirSync(dist, { recursive: true });
copyFileSync(path.join(root, "static/homepage.html"), path.join(dist, "index.html"));
copyFileSync(path.join(root, "_headers"), path.join(dist, "_headers"));

// Previous React homepage, preserved and reachable at /classic.
execSync("vite build --outDir dist/classic --base /classic/", {
  cwd: root,
  stdio: "inherit",
});
