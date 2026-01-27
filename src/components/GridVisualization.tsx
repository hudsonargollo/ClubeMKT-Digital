import { motion } from "framer-motion";

const GridVisualization = () => {
  // Generate connection nodes
  const nodes = [
    { x: 70, y: 20, delay: 0 },
    { x: 85, y: 35, delay: 0.2 },
    { x: 75, y: 50, delay: 0.4 },
    { x: 90, y: 65, delay: 0.6 },
    { x: 80, y: 80, delay: 0.8 },
    { x: 65, y: 40, delay: 0.3 },
    { x: 60, y: 60, delay: 0.5 },
    { x: 95, y: 45, delay: 0.7 },
  ];

  const connections = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 5, to: 1 },
    { from: 5, to: 6 },
    { from: 7, to: 1 },
    { from: 7, to: 3 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="h-full w-full" preserveAspectRatio="none">
        {/* Connection Lines */}
        {connections.map((conn, i) => (
          <motion.line
            key={i}
            x1={`${nodes[conn.from].x}%`}
            y1={`${nodes[conn.from].y}%`}
            x2={`${nodes[conn.to].x}%`}
            y2={`${nodes[conn.to].y}%`}
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            strokeOpacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
          />
        ))}

        {/* Data Flow Animation */}
        {connections.map((conn, i) => (
          <motion.circle
            key={`flow-${i}`}
            r="2"
            fill="hsl(var(--primary))"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              cx: [`${nodes[conn.from].x}%`, `${nodes[conn.to].x}%`],
              cy: [`${nodes[conn.from].y}%`, `${nodes[conn.to].y}%`],
            }}
            transition={{
              delay: 1 + i * 0.3,
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g key={i}>
            {/* Outer Ring */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="20"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              strokeOpacity="0.1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: node.delay, duration: 0.5 }}
            />
            {/* Inner Circle */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="4"
              fill="hsl(var(--primary))"
              fillOpacity="0.8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: node.delay + 0.2, duration: 0.3 }}
            />
            {/* Pulse Effect */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="4"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{
                delay: node.delay + 1,
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
};

export default GridVisualization;
