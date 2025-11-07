import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface DataPacket {
  id: number;
  path: 'input-to-hidden' | 'hidden-to-output';
  fromNode: number;
  toNode: number;
  progress: number;
}

export default function NeuralNetworkAnimation() {
  const [dataPackets, setDataPackets] = useState<DataPacket[]>([]);
  const [activeNodes, setActiveNodes] = useState<Set<string>>(new Set());
  
  const inputNodes = [0, 1, 2];
  const hiddenNodes = [0, 1, 2, 3];
  const outputNodes = [0, 1];

  useEffect(() => {
    const interval = setInterval(() => {
      setDataPackets(prev => {
        const updated = prev
          .map(p => ({ ...p, progress: p.progress + 0.03 }))
          .filter(p => p.progress < 1);

        if (Math.random() > 0.6 && updated.length < 8) {
          const fromInput = Math.floor(Math.random() * inputNodes.length);
          updated.push({
            id: Date.now(),
            path: 'input-to-hidden',
            fromNode: fromInput,
            toNode: Math.floor(Math.random() * hiddenNodes.length),
            progress: 0,
          });
        }

        const activeSet = new Set<string>();
        updated.forEach(p => {
          if (p.progress > 0.5) {
            if (p.path === 'input-to-hidden') {
              activeSet.add(`hidden-${p.toNode}`);
              
              if (Math.random() > 0.7) {
                updated.push({
                  id: Date.now() + Math.random(),
                  path: 'hidden-to-output',
                  fromNode: p.toNode,
                  toNode: Math.floor(Math.random() * outputNodes.length),
                  progress: 0,
                });
              }
            } else {
              activeSet.add(`output-${p.toNode}`);
            }
          }
        });
        setActiveNodes(activeSet);

        return updated;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-12">
      <svg viewBox="0 0 400 200" className="w-full max-w-2xl mx-auto">
        {/* Static Connections */}
        {inputNodes.map((i) =>
          hiddenNodes.map((h) => (
            <line
              key={`input-hidden-${i}-${h}`}
              x1="50"
              y1={40 + i * 40}
              x2="200"
              y2={25 + h * 40}
              stroke="#1E40AF"
              strokeWidth="1"
              opacity="0.2"
            />
          ))
        )}
        
        {hiddenNodes.map((h) =>
          outputNodes.map((o) => (
            <line
              key={`hidden-output-${h}-${o}`}
              x1="200"
              y1={25 + h * 40}
              x2="350"
              y2={60 + o * 40}
              stroke="#7C3AED"
              strokeWidth="1"
              opacity="0.2"
            />
          ))
        )}

        {/* Animated Data Packets */}
        {dataPackets.map(packet => {
          const x1 = packet.path === 'input-to-hidden' ? 50 : 200;
          const y1 = packet.path === 'input-to-hidden' 
            ? 40 + packet.fromNode * 40 
            : 25 + packet.fromNode * 40;
          const x2 = packet.path === 'input-to-hidden' ? 200 : 350;
          const y2 = packet.path === 'input-to-hidden'
            ? 25 + packet.toNode * 40
            : 60 + packet.toNode * 40;
          
          const currentX = x1 + (x2 - x1) * packet.progress;
          const currentY = y1 + (y2 - y1) * packet.progress;

          return (
            <motion.circle
              key={packet.id}
              cx={currentX}
              cy={currentY}
              r="3"
              fill={packet.path === 'input-to-hidden' ? '#3B9EFF' : '#A855F7'}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1 }}
            />
          );
        })}

        {/* Input Nodes */}
        {inputNodes.map((i) => (
          <motion.circle
            key={`input-${i}`}
            cx="50"
            cy={40 + i * 40}
            r="8"
            fill="#3B9EFF"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Hidden Nodes */}
        {hiddenNodes.map((h) => (
          <motion.circle
            key={`hidden-${h}`}
            cx="200"
            cy={25 + h * 40}
            r="10"
            fill={activeNodes.has(`hidden-${h}`) ? '#A855F7' : '#5B21B6'}
            animate={{
              scale: activeNodes.has(`hidden-${h}`) ? [1, 1.4, 1] : 1,
              fill: activeNodes.has(`hidden-${h}`) 
                ? ['#5B21B6', '#A855F7', '#5B21B6']
                : '#5B21B6'
            }}
            transition={{ duration: 0.5 }}
          />
        ))}

        {/* Output Nodes */}
        {outputNodes.map((o) => (
          <motion.circle
            key={`output-${o}`}
            cx="350"
            cy={60 + o * 40}
            r="8"
            fill={activeNodes.has(`output-${o}`) ? '#8B5CF6' : '#6B21A8'}
            animate={{
              scale: activeNodes.has(`output-${o}`) ? [1, 1.3, 1] : 1,
            }}
            transition={{ duration: 0.5 }}
          />
        ))}

        {/* Labels */}
        <text x="50" y="15" fill="#9CA3AF" fontSize="12" textAnchor="middle">Input Data</text>
        <text x="200" y="15" fill="#9CA3AF" fontSize="12" textAnchor="middle">Processing Layers</text>
        <text x="350" y="15" fill="#9CA3AF" fontSize="12" textAnchor="middle">AI Output</text>
      </svg>
      
      <div className="text-center mt-4 text-sm text-gray-400">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🧠 Live Neural Processing
        </motion.div>
      </div>
    </div>
  );
}
