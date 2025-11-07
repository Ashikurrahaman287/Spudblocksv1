import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Monitor, Smartphone } from 'lucide-react';

export default function BlueprintAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="relative py-12">
      <div className="max-w-3xl mx-auto">
        {/* Blueprint Stage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <svg viewBox="0 0 400 250" className="w-full">
            {/* Wireframe boxes */}
            <motion.rect
              x="20" y="20" width="360" height="50"
              fill="none" stroke="#4B5563" strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1 }}
            />
            <motion.rect
              x="20" y="80" width="170" height="150"
              fill="none" stroke="#4B5563" strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ delay: 0.3, duration: 1 }}
            />
            <motion.rect
              x="210" y="80" width="170" height="150"
              fill="none" stroke="#4B5563" strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ delay: 0.6, duration: 1 }}
            />
          </svg>
        </motion.div>

        {/* Code Stage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="bg-gray-900/50 border border-purple-500/30 rounded-lg p-4 mb-8 font-mono text-sm"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100%' } : {}}
            transition={{ delay: 2, duration: 1.5 }}
            className="overflow-hidden"
          >
            <div className="text-purple-400">&lt;div className="header"&gt;</div>
            <div className="text-gray-400 pl-4">  &lt;h1&gt;Title&lt;/h1&gt;</div>
            <div className="text-purple-400">&lt;/div&gt;</div>
          </motion.div>
        </motion.div>

        {/* Final UI Stage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 3, duration: 0.5 }}
          className="flex gap-4 justify-center items-end"
        >
          {/* Desktop */}
          <div className="flex-1 max-w-xs">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <Monitor className="w-5 h-5 text-white" />
                <div className="text-white text-xs font-semibold">Desktop</div>
              </div>
              <div className="bg-white/10 rounded h-24 backdrop-blur"></div>
            </div>
          </div>

          {/* Mobile */}
          <div className="w-24">
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg p-3 shadow-xl">
              <div className="flex flex-col items-center gap-1 mb-2">
                <Smartphone className="w-4 h-4 text-white" />
                <div className="text-white text-xs font-semibold">Mobile</div>
              </div>
              <div className="bg-white/10 rounded h-32 backdrop-blur"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
