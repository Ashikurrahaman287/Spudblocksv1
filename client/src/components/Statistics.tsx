import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const successRates = [
  { year: "2020", rate: 87, description: "In our inaugural year, we established a solid foundation for client relationships, achieving a satisfaction rate of 87%." },
  { year: "2021", rate: 94, description: "Building on our early achievements, we improved our client satisfaction to 94% in 2021." },
  { year: "2022", rate: 96, description: "Our commitment to excellence continued to pay off in 2022, with a client satisfaction rate of 96%." },
  { year: "2023", rate: 97, description: "In 2023, we reached an impressive client satisfaction rate of 97%." },
  { year: "2024", rate: 98, partnership: "COPX", description: "Strategic partnership with COPX elevated our service quality, achieving 98% client satisfaction." },
  { year: "2025", rate: 99, partnership: "Ascendex", description: "Our collaboration with Ascendex drives innovation, reaching 99% client satisfaction." }
];

const serviceBreakdown = [
  { name: "Project Management", percentage: 27.3, color: "from-blue-600 to-blue-500" },
  { name: "Social Media Management", percentage: 18.2, color: "from-blue-500 to-purple-600" },
  { name: "Business Development", percentage: 15.6, color: "from-purple-600 to-purple-500" },
  { name: "Customer Support", percentage: 14.3, color: "from-purple-500 to-purple-400" },
  { name: "Web Development", percentage: 10.4, color: "from-purple-400 to-blue-400" },
  { name: "dApp & AI", percentage: 9.1, color: "from-blue-400 to-blue-300" },
  { name: "Graphic & NFT", percentage: 5.2, color: "from-blue-300 to-purple-300" }
];

export default function Statistics() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background blockchain animation */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 border-2 border-blue-500 rounded"
            style={{
              left: `${(i % 5) * 20}%`,
              top: `${Math.floor(i / 5) * 25}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-bold text-gray-100 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            data-testid="text-stats-title"
          >
            Our Success Stats
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-8" data-testid="text-satisfaction-title">
              Client Satisfaction
            </h3>
            {successRates.map((stat, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                data-testid={`stat-year-${index}`}
              >
                <div className="flex items-start gap-6">
                  {/* Blockchain chain connector */}
                  {index < successRates.length - 1 && (
                    <div className="absolute left-12 top-20 w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500">
                      <motion.div
                        className="w-full h-full bg-gradient-to-b from-blue-400 to-purple-400"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scaleY: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                    </div>
                  )}
                  
                  <div className="flex-shrink-0 relative">
                    <motion.div
                      className="relative"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-testid={`text-rate-${index}`}>
                        {stat.rate}%
                      </div>
                      <motion.div
                        className="absolute -top-1 -right-1 bg-blue-600 rounded-full p-1"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Lock className="w-3 h-3 text-white" />
                      </motion.div>
                    </motion.div>
                    <div className="text-lg text-gray-400 mt-1" data-testid={`text-year-${index}`}>
                      {stat.year}
                      {stat.partnership && (
                        <motion.span 
                          className="ml-2 text-sm text-blue-400"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          × {stat.partnership}
                        </motion.span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed pt-2" data-testid={`text-description-${index}`}>
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-8" data-testid="text-breakdown-title">
              Service Breakdown (2020-2025)
            </h3>
            <Card className="p-8 bg-gray-800/50 backdrop-blur-sm border-gray-700 relative overflow-hidden">
              {/* Animated background blocks */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <motion.div
                  className="w-full h-full border-2 border-blue-500"
                  animate={{
                    rotate: [0, 90, 180, 270, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
              
              <div className="space-y-6 relative z-10">
                {serviceBreakdown.map((service, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    data-testid={`service-breakdown-${index}`}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300" data-testid={`text-service-name-${index}`}>
                        {service.name}
                      </span>
                      <motion.span 
                        className="text-blue-400 font-semibold"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        data-testid={`text-service-percentage-${index}`}
                      >
                        {service.percentage}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div 
                        className={`bg-gradient-to-r ${service.color} h-3 rounded-full relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${service.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        data-testid={`bar-service-${index}`}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          animate={{
                            x: ['-100%', '200%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
