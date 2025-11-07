import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Lock } from 'lucide-react';

interface Transaction {
  id: number;
  blockIndex: number;
  progress: number;
}

export default function BlockchainAnimation() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const blocks = [0, 1, 2, 3];

  useEffect(() => {
    const interval = setInterval(() => {
      setTransactions(prev => {
        const newTransactions = prev
          .map(t => ({ ...t, progress: t.progress + 0.02 }))
          .filter(t => t.progress < 1.2);

        if (Math.random() > 0.7 && newTransactions.length < 3) {
          newTransactions.push({
            id: Date.now(),
            blockIndex: Math.floor(Math.random() * blocks.length),
            progress: 0,
          });
        }

        return newTransactions;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-12">
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {blocks.map((index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="relative"
          >
            <motion.div
              className="w-24 h-24 bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-2 border-blue-500 rounded-lg flex items-center justify-center relative overflow-hidden"
              animate={{
                boxShadow: [
                  '0 0 0px rgba(59, 158, 255, 0)',
                  '0 0 20px rgba(59, 158, 255, 0.5)',
                  '0 0 0px rgba(59, 158, 255, 0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.5,
              }}
            >
              <div className="text-blue-400 font-mono text-xs z-10">
                Block {index + 1}
              </div>
              
              {/* Live data flow */}
              {transactions
                .filter(t => t.blockIndex === index)
                .map(t => (
                  <motion.div
                    key={t.id}
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ 
                      y: 96,
                      opacity: t.progress < 0.8 ? [0, 1, 1, 0] : 0
                    }}
                    transition={{ duration: 1.5 }}
                  />
                ))}
              
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-1"
              >
                <Lock className="w-4 h-4 text-white" />
              </motion.div>

              {/* Hash generation effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent"
                animate={{
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              />
            </motion.div>
            
            {index < blocks.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.4 }}
                className="absolute top-1/2 -right-10 w-8 h-1 origin-left"
              >
                <motion.div
                  className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-8 text-sm text-gray-400">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ⚡ Live Transaction Processing
        </motion.div>
      </div>
    </div>
  );
}
