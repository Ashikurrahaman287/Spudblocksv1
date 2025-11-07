import { motion } from "framer-motion";

const partners = [
  { name: "COPX" },
  { name: "Ascendex" },
  { name: "Bybit" },
  { name: "IOTEX" },
  { name: "TAPBIT" },
  { name: "NEO" },
  { name: "ERA7" },
  { name: "BIGONE" },
  { name: "MEXC" },
  { name: "HOTBIT" }
];

export default function Partners() {
  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-100 mb-4" data-testid="text-partners-title">
            Meet Our Partners
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        {/* Marquee container */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8 py-8"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-48 h-32 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg flex items-center justify-center hover:border-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  data-testid={`card-partner-${index % partners.length}`}
                >
                  <div className="text-center">
                    <motion.div 
                      className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                      animate={{
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.1,
                      }}
                      data-testid={`text-partner-name-${index % partners.length}`}
                    >
                      {partner.name}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
