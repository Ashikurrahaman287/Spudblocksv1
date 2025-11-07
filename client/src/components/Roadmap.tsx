import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Rocket, Target, Zap, Globe, Brain, Shield } from 'lucide-react';

const milestones = [
  {
    quarter: "Q1 2026",
    icon: Rocket,
    title: "AI Integration Expansion",
    description: "Launch advanced AI-powered analytics and automation tools",
    status: "upcoming"
  },
  {
    quarter: "Q4 2025",
    icon: Brain,
    title: "Neural Network Services",
    description: "Introduce machine learning consultancy services",
    status: "upcoming"
  },
  {
    quarter: "Q3 2025",
    icon: Globe,
    title: "Global Market Expansion",
    description: "Expand operations to Asian and European markets",
    status: "in-progress"
  },
  {
    quarter: "Q2 2025",
    icon: Zap,
    title: "Layer 2 Solutions",
    description: "Deploy scalable Layer 2 blockchain solutions",
    status: "in-progress"
  },
  {
    quarter: "Q1 2025",
    icon: Shield,
    title: "Enhanced Security",
    description: "Implement advanced security protocols and auditing",
    status: "completed"
  },
  {
    quarter: "Q4 2024",
    icon: Target,
    title: "Strategic Partnerships",
    description: "Partnerships with COPX and Ascendex established",
    status: "completed"
  }
];

export default function Roadmap() {
  const [visibleMilestones, setVisibleMilestones] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMilestones(prev => {
        if (prev < milestones.length) return prev + 1;
        return 0;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <motion.path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#3B9EFF"
                strokeWidth="1"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-bold text-gray-100 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Roadmap
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <p className="text-lg text-gray-400">
            Watch our journey grow as we achieve new milestones
          </p>
        </div>

        {/* Growing vertical roadmap */}
        <div className="relative">
          {/* Central animated line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"
              initial={{ height: 0 }}
              animate={{ height: `${(visibleMilestones / milestones.length) * 100}%` }}
              transition={{ duration: 1 }}
            />
          </div>

          {/* Milestones */}
          <div className="space-y-16">
            {milestones.slice(0, visibleMilestones).map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <motion.div
                    className="inline-block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-sm text-blue-400 font-semibold mb-2">
                      {milestone.quarter}
                    </div>
                    <h3 className="text-xl font-bold text-gray-100 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {milestone.description}
                    </p>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      milestone.status === 'completed' ? 'bg-green-900/30 text-green-400' :
                      milestone.status === 'in-progress' ? 'bg-blue-900/30 text-blue-400' :
                      'bg-purple-900/30 text-purple-400'
                    }`}>
                      {milestone.status === 'completed' ? '✓ Completed' :
                       milestone.status === 'in-progress' ? '⚡ In Progress' :
                       '🚀 Upcoming'}
                    </div>
                  </motion.div>
                </div>

                {/* Icon */}
                <motion.div
                  className="relative z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-xl">
                    <milestone.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Pulsing ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-blue-500"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>

                {/* Spacer for other side */}
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>

          {/* Growing indicator */}
          {visibleMilestones < milestones.length && (
            <motion.div
              className="flex justify-center mt-12"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <div className="text-blue-400 text-sm font-semibold">
                ↓ Growing...
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
