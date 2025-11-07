import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface BlockData {
  id: number;
  ethAddress: string;
  date: string;
  time: string;
  txHash: string;
}

const generateRandomEthAddress = () => {
  return '0x' + Array.from({ length: 40 }, () => 
    Math.floor(Math.random() * 16).toString(16)
  ).join('');
};

const generateRandomHash = () => {
  return '0x' + Array.from({ length: 16 }, () => 
    Math.floor(Math.random() * 16).toString(16)
  ).join('');
};

export default function RubixBlockchain() {
  const [blocks, setBlocks] = useState<BlockData[]>([]);
  const [activeBlock, setActiveBlock] = useState(0);

  useEffect(() => {
    // Generate initial blocks
    const initialBlocks = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      ethAddress: generateRandomEthAddress(),
      date: new Date(Date.now() - Math.random() * 86400000).toLocaleDateString(),
      time: new Date(Date.now() - Math.random() * 86400000).toLocaleTimeString(),
      txHash: generateRandomHash(),
    }));
    setBlocks(initialBlocks);

    // Rotate active block and update data
    const interval = setInterval(() => {
      setActiveBlock(prev => (prev + 1) % 6);
      
      // Randomly update a block
      const randomIndex = Math.floor(Math.random() * 6);
      setBlocks(prev => prev.map((block, i) => 
        i === randomIndex ? {
          ...block,
          ethAddress: generateRandomEthAddress(),
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
          txHash: generateRandomHash(),
        } : block
      ));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-12">
      <div className="max-w-4xl mx-auto">
        {/* 3D Rubix Cube Structure */}
        <div className="relative h-96 flex items-center justify-center" style={{ perspective: '1000px' }}>
          <motion.div
            className="relative w-80 h-80"
            animate={{
              rotateY: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front face */}
            <div 
              className="absolute inset-0 grid grid-cols-2 grid-rows-3 gap-2 p-4"
              style={{ transform: 'translateZ(100px)' }}
            >
              {blocks.map((block, i) => (
                <motion.div
                  key={`front-${i}`}
                  className={`bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm border-2 rounded-lg p-2 ${
                    activeBlock === i ? 'border-blue-400' : 'border-gray-700'
                  }`}
                  animate={{
                    scale: activeBlock === i ? 1.05 : 1,
                    boxShadow: activeBlock === i 
                      ? '0 0 20px rgba(59, 158, 255, 0.8)'
                      : '0 0 0px rgba(59, 158, 255, 0)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-xs font-mono text-blue-300 overflow-hidden text-ellipsis whitespace-nowrap">
                    {block.ethAddress.slice(0, 12)}...
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{block.date}</div>
                  <div className="text-xs text-gray-500">{block.time}</div>
                </motion.div>
              ))}
            </div>

            {/* Back face */}
            <div 
              className="absolute inset-0 grid grid-cols-2 grid-rows-3 gap-2 p-4"
              style={{ transform: 'translateZ(-100px) rotateY(180deg)' }}
            >
              {blocks.map((block, i) => (
                <div
                  key={`back-${i}`}
                  className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border-2 border-gray-700 rounded-lg p-2"
                >
                  <div className="text-xs font-mono text-purple-300 overflow-hidden text-ellipsis whitespace-nowrap">
                    {block.txHash}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">TX Hash</div>
                </div>
              ))}
            </div>

            {/* Right face */}
            <div 
              className="absolute inset-0 grid grid-cols-2 grid-rows-3 gap-2 p-4"
              style={{ transform: 'rotateY(90deg) translateZ(100px)' }}
            >
              {blocks.map((_, i) => (
                <div
                  key={`right-${i}`}
                  className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 backdrop-blur-sm border-2 border-gray-700 rounded-lg"
                />
              ))}
            </div>

            {/* Left face */}
            <div 
              className="absolute inset-0 grid grid-cols-2 grid-rows-3 gap-2 p-4"
              style={{ transform: 'rotateY(-90deg) translateZ(100px)' }}
            >
              {blocks.map((_, i) => (
                <div
                  key={`left-${i}`}
                  className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 backdrop-blur-sm border-2 border-gray-700 rounded-lg"
                />
              ))}
            </div>

            {/* Top face */}
            <div 
              className="absolute inset-0 grid grid-cols-2 grid-rows-3 gap-2 p-4"
              style={{ transform: 'rotateX(90deg) translateZ(100px)' }}
            >
              {blocks.map((_, i) => (
                <div
                  key={`top-${i}`}
                  className="bg-gradient-to-br from-blue-700/50 to-purple-700/50 backdrop-blur-sm border-2 border-gray-700 rounded-lg"
                />
              ))}
            </div>

            {/* Bottom face */}
            <div 
              className="absolute inset-0 grid grid-cols-2 grid-rows-3 gap-2 p-4"
              style={{ transform: 'rotateX(-90deg) translateZ(100px)' }}
            >
              {blocks.map((_, i) => (
                <div
                  key={`bottom-${i}`}
                  className="bg-gradient-to-br from-purple-700/50 to-blue-700/50 backdrop-blur-sm border-2 border-gray-700 rounded-lg"
                />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-8">
          <motion.div
            className="text-sm text-gray-400"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🔄 Live Blockchain Data Cube - Rotating & Updating
          </motion.div>
        </div>
      </div>
    </div>
  );
}
