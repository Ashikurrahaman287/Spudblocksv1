import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lock } from 'lucide-react';

export default function BlockchainAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const blocks = [0, 1, 2, 3];

  return (
    <div ref={ref} className="relative py-12">
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {blocks.map((index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.3, duration: 0.5 }}
            className="relative"
          >
            <motion.div
              className="w-24 h-24 bg-purple-900/30 border-2 border-purple-500 rounded-lg flex items-center justify-center relative"
              animate={isInView ? {
                boxShadow: [
                  '0 0 0px rgba(147, 51, 234, 0)',
                  '0 0 20px rgba(147, 51, 234, 0.5)',
                  '0 0 0px rgba(147, 51, 234, 0)',
                ],
              } : {}}
              transition={{
                delay: index * 0.3 + 0.5,
                duration: 1,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.3 + 0.3 }}
                className="text-purple-400 font-mono text-xs"
              >
                Block {index + 1}
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={isInView ? { scale: 1, rotate: 360 } : {}}
                transition={{ delay: index * 0.3 + 0.6, duration: 0.5 }}
                className="absolute -bottom-2 -right-2 bg-purple-600 rounded-full p-1"
              >
                <Lock className="w-4 h-4 text-white" />
              </motion.div>
            </motion.div>
            
            {index < blocks.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: index * 0.3 + 0.8, duration: 0.4 }}
                className="absolute top-1/2 -right-10 w-8 h-1 bg-purple-500 origin-left"
                style={{ transformOrigin: 'left' }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
