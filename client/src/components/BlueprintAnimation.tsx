import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Monitor, Smartphone } from 'lucide-react';

export default function BlueprintAnimation() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStage(prev => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-12">
      <div className="max-w-3xl mx-auto bg-gray-900/50 rounded-lg p-8 border border-gray-700">
        {/* Stage 1: Blueprint */}
        {stage === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative mb-8"
          >
            <div className="text-center mb-4 text-blue-400 font-semibold">Stage 1: Wireframe Design</div>
            <svg viewBox="0 0 400 250" className="w-full">
              <motion.rect
                x="20" y="20" width="360" height="50"
                fill="none" stroke="#3B9EFF" strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5 }}
              />
              <motion.rect
                x="20" y="80" width="170" height="150"
                fill="none" stroke="#3B9EFF" strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.3, duration: 1.5 }}
              />
              <motion.rect
                x="210" y="80" width="170" height="150"
                fill="none" stroke="#3B9EFF" strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.6, duration: 1.5 }}
              />
            </svg>
          </motion.div>
        )}

        {/* Stage 2: Code */}
        {stage === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div className="text-center mb-4 text-purple-400 font-semibold">Stage 2: Code Implementation</div>
            <div className="bg-black/50 border border-blue-500/30 rounded-lg p-6 font-mono text-sm">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2 }}
                className="overflow-hidden space-y-2"
              >
                <div className="text-blue-400">&lt;div className="app-header"&gt;</div>
                <div className="text-gray-400 pl-4">  &lt;nav&gt;Navigation&lt;/nav&gt;</div>
                <div className="text-gray-400 pl-4">  &lt;h1&gt;SpudBlocks&lt;/h1&gt;</div>
                <div className="text-blue-400">&lt;/div&gt;</div>
                <div className="text-purple-400 mt-4">&lt;main className="content"&gt;</div>
                <div className="text-gray-400 pl-4">  &lt;section&gt;Services&lt;/section&gt;</div>
                <div className="text-purple-400">&lt;/main&gt;</div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Stage 3: Final UI */}
        {stage === 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div className="text-center mb-4 text-green-400 font-semibold">Stage 3: Final Product</div>
            <div className="flex gap-6 justify-center items-end">
              <div className="flex-1 max-w-xs">
                <motion.div 
                  className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 shadow-2xl"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(59, 158, 255, 0.3)',
                      '0 0 40px rgba(139, 92, 246, 0.5)',
                      '0 0 20px rgba(59, 158, 255, 0.3)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Monitor className="w-5 h-5 text-white" />
                    <div className="text-white text-sm font-semibold">Desktop App</div>
                  </div>
                  <div className="bg-white/20 rounded-md h-32 backdrop-blur-sm p-3">
                    <div className="bg-white/30 rounded w-full h-4 mb-2"></div>
                    <div className="bg-white/20 rounded w-3/4 h-3 mb-2"></div>
                    <div className="bg-white/20 rounded w-5/6 h-3"></div>
                  </div>
                </motion.div>
              </div>

              <div className="w-32">
                <motion.div 
                  className="bg-gradient-to-br from-blue-500 to-purple-700 rounded-xl p-4 shadow-2xl"
                  animate={{
                    boxShadow: [
                      '0 0 15px rgba(59, 158, 255, 0.3)',
                      '0 0 30px rgba(139, 92, 246, 0.5)',
                      '0 0 15px rgba(59, 158, 255, 0.3)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="flex flex-col items-center gap-2 mb-3">
                    <Smartphone className="w-4 h-4 text-white" />
                    <div className="text-white text-xs font-semibold">Mobile</div>
                  </div>
                  <div className="bg-white/20 rounded-md h-40 backdrop-blur-sm p-2">
                    <div className="bg-white/30 rounded w-full h-3 mb-2"></div>
                    <div className="bg-white/20 rounded w-2/3 h-2 mb-2"></div>
                    <div className="bg-white/20 rounded w-full h-2"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="text-center mt-6">
          <div className="flex gap-2 justify-center">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                className={`w-2 h-2 rounded-full ${stage === i ? 'bg-blue-500' : 'bg-gray-600'}`}
                animate={{
                  scale: stage === i ? [1, 1.5, 1] : 1,
                }}
                transition={{ duration: 0.5, repeat: stage === i ? Infinity : 0 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
