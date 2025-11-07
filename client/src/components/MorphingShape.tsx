import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

type ShapeState = 'blockchain' | 'ai' | 'software';

export default function MorphingShape() {
  const [shapeState, setShapeState] = useState<ShapeState>('blockchain');
  const [hovered, setHovered] = useState(false);
  
  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setShapeState(prev => {
          if (prev === 'blockchain') return 'ai';
          if (prev === 'ai') return 'software';
          return 'blockchain';
        });
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="relative w-64 h-64"
        animate={{
          rotateY: hovered ? 180 : 360,
          scale: hovered ? 1.1 : 1,
        }}
        transition={{
          duration: hovered ? 0.8 : 4,
          repeat: hovered ? 0 : Infinity,
          ease: "easeInOut"
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {shapeState === 'blockchain' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {[...Array(9)].map((_, i) => (
                <motion.rect
                  key={i}
                  x={20 + (i % 3) * 60}
                  y={20 + Math.floor(i / 3) * 60}
                  width="40"
                  height="40"
                  fill="none"
                  stroke="url(#purpleGradient)"
                  strokeWidth="2"
                  rx="4"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
              <defs>
                <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9333EA" />
                  <stop offset="100%" stopColor="#A855F7" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        )}
        
        {shapeState === 'ai' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {[...Array(12)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={100 + Math.cos(i * 30 * Math.PI / 180) * 60}
                  cy={100 + Math.sin(i * 30 * Math.PI / 180) * 60}
                  r="8"
                  fill="#9333EA"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
              <motion.circle
                cx="100"
                cy="100"
                r="15"
                fill="#A855F7"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </svg>
          </motion.div>
        )}
        
        {shapeState === 'software' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center font-mono text-purple-400"
          >
            <motion.div
              className="space-y-2 text-2xl"
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <div>&lt;/&gt;</div>
              <div>{ }</div>
              <div>[ ]</div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
