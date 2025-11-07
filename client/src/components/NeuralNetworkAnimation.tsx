import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function NeuralNetworkAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const inputNodes = [0, 1, 2];
  const hiddenNodes = [0, 1, 2, 3];
  const outputNodes = [0, 1];

  return (
    <div ref={ref} className="relative py-12">
      <svg viewBox="0 0 400 200" className="w-full max-w-2xl mx-auto">
        {/* Connections */}
        {inputNodes.map((i) =>
          hiddenNodes.map((h) => (
            <motion.line
              key={`input-hidden-${i}-${h}`}
              x1="50"
              y1={40 + i * 40}
              x2="200"
              y2={25 + h * 40}
              stroke="#9333EA"
              strokeWidth="1"
              opacity="0.3"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ delay: 0.5 + (i + h) * 0.05, duration: 0.5 }}
            />
          ))
        )}
        
        {hiddenNodes.map((h) =>
          outputNodes.map((o) => (
            <motion.line
              key={`hidden-output-${h}-${o}`}
              x1="200"
              y1={25 + h * 40}
              x2="350"
              y2={60 + o * 40}
              stroke="#A855F7"
              strokeWidth="1"
              opacity="0.3"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ delay: 1 + h * 0.1, duration: 0.5 }}
            />
          ))
        )}

        {/* Input Nodes */}
        {inputNodes.map((i) => (
          <motion.circle
            key={`input-${i}`}
            cx="50"
            cy={40 + i * 40}
            r="8"
            fill="#9333EA"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          />
        ))}

        {/* Hidden Nodes */}
        {hiddenNodes.map((h) => (
          <motion.circle
            key={`hidden-${h}`}
            cx="200"
            cy={25 + h * 40}
            r="10"
            fill="#7C3AED"
            initial={{ scale: 0 }}
            animate={isInView ? 
              { 
                scale: [1, 1.3, 1],
                fill: ['#7C3AED', '#A855F7', '#7C3AED']
              } : {}}
            transition={{
              scale: { delay: 0.5 + h * 0.1, duration: 0.3 },
              fill: {
                delay: 1.5,
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }
            }}
          />
        ))}

        {/* Output Nodes */}
        {outputNodes.map((o) => (
          <motion.circle
            key={`output-${o}`}
            cx="350"
            cy={60 + o * 40}
            r="8"
            fill="#A855F7"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 1.5 + o * 0.1, duration: 0.3 }}
          />
        ))}

        {/* Labels */}
        <text x="50" y="15" fill="#9CA3AF" fontSize="12" textAnchor="middle">Input</text>
        <text x="200" y="15" fill="#9CA3AF" fontSize="12" textAnchor="middle">Processing</text>
        <text x="350" y="15" fill="#9CA3AF" fontSize="12" textAnchor="middle">Output</text>
      </svg>
    </div>
  );
}
