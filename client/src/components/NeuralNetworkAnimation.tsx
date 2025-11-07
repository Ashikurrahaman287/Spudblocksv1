import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface DataPacket {
  id: number;
  path: 'input-to-hidden' | 'hidden-to-output';
  fromNode: number;
  toNode: number;
  progress: number;
  data?: string;
}

const inputExamples = [
  { input: "What is BTC Price?", output: "$110,256" },
  { input: "10 + 5", output: "15" },
  { input: "Analyze Market", output: "Buy Signal" },
  { input: "ETH Gas Fee?", output: "12 Gwei" },
  { input: "Best DeFi?", output: "Uniswap" },
];

export default function NeuralNetworkAnimation() {
  const [dataPackets, setDataPackets] = useState<DataPacket[]>([]);
  const [activeNodes, setActiveNodes] = useState<Set<string>>(new Set());
  const [currentExample, setCurrentExample] = useState(0);
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  
  const inputNodes = [0, 1, 2];
  const hiddenNodes = [0, 1, 2, 3];
  const outputNodes = [0, 1];

  useEffect(() => {
    const exampleInterval = setInterval(() => {
      setCurrentExample(prev => (prev + 1) % inputExamples.length);
      setInputText('');
      setOutputText('');
      
      // Type input text
      const example = inputExamples[(currentExample + 1) % inputExamples.length];
      let inputIndex = 0;
      const inputTyping = setInterval(() => {
        if (inputIndex < example.input.length) {
          setInputText(example.input.slice(0, inputIndex + 1));
          inputIndex++;
        } else {
          clearInterval(inputTyping);
          
          // Wait then type output
          setTimeout(() => {
            let outputIndex = 0;
            const outputTyping = setInterval(() => {
              if (outputIndex < example.output.length) {
                setOutputText(example.output.slice(0, outputIndex + 1));
                outputIndex++;
              } else {
                clearInterval(outputTyping);
              }
            }, 50);
          }, 500);
        }
      }, 50);
    }, 6000);

    const packetInterval = setInterval(() => {
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

    return () => {
      clearInterval(exampleInterval);
      clearInterval(packetInterval);
    };
  }, [currentExample]);

  return (
    <div className="relative py-12">
      {/* Input and Output Display */}
      <div className="flex justify-between items-start mb-8 max-w-2xl mx-auto">
        <div className="flex-1 text-left">
          <div className="text-sm text-blue-400 font-semibold mb-2">Input Query:</div>
          <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4 min-h-[60px] font-mono text-gray-300">
            {inputText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              |
            </motion.span>
          </div>
        </div>
        
        <div className="mx-4 text-purple-400 text-2xl mt-8">→</div>
        
        <div className="flex-1 text-right">
          <div className="text-sm text-purple-400 font-semibold mb-2">AI Output:</div>
          <div className="bg-gray-900/50 border border-purple-500/30 rounded-lg p-4 min-h-[60px] font-mono text-gray-300">
            {outputText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              |
            </motion.span>
          </div>
        </div>
      </div>

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

        {/* Input Nodes with Labels */}
        {inputNodes.map((i) => (
          <g key={`input-node-${i}`}>
            <motion.circle
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
            <text x="20" y={44 + i * 40} fill="#60A5FA" fontSize="10" textAnchor="end">
              IN{i + 1}
            </text>
          </g>
        ))}

        {/* Hidden Nodes with Labels */}
        {hiddenNodes.map((h) => (
          <g key={`hidden-node-${h}`}>
            <motion.circle
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
            <text x="200" y={32 + h * 40} fill="#A78BFA" fontSize="10" textAnchor="middle">
              H{h + 1}
            </text>
          </g>
        ))}

        {/* Output Nodes with Labels */}
        {outputNodes.map((o) => (
          <g key={`output-node-${o}`}>
            <motion.circle
              cx="350"
              cy={60 + o * 40}
              r="8"
              fill={activeNodes.has(`output-${o}`) ? '#8B5CF6' : '#6B21A8'}
              animate={{
                scale: activeNodes.has(`output-${o}`) ? [1, 1.3, 1] : 1,
              }}
              transition={{ duration: 0.5 }}
            />
            <text x="370" y={64 + o * 40} fill="#C4B5FD" fontSize="10">
              OUT{o + 1}
            </text>
          </g>
        ))}

        {/* Section Labels */}
        <text x="50" y="15" fill="#9CA3AF" fontSize="12" textAnchor="middle">Input Layer</text>
        <text x="200" y="15" fill="#9CA3AF" fontSize="12" textAnchor="middle">Processing Layers</text>
        <text x="350" y="15" fill="#9CA3AF" fontSize="12" textAnchor="middle">Output Layer</text>
      </svg>
      
      <div className="text-center mt-4 text-sm text-gray-400">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🧠 Live Neural Processing with Real Examples
        </motion.div>
      </div>
    </div>
  );
}
