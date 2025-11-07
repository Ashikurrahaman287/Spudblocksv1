import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FileCode, CheckCircle } from 'lucide-react';

export default function SmartContractAnimation() {
  const [executing, setExecuting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setExecuting(true);
      setTimeout(() => setExecuting(false), 3000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const codeLines = [
    "pragma solidity ^0.8.0;",
    "contract SpudBlocksToken {",
    "  mapping(address => uint) balances;",
    "  function transfer(address to, uint amt) {",
    "    require(balances[msg.sender] >= amt);",
    "    balances[msg.sender] -= amt;",
    "    balances[to] += amt;",
    "  }",
    "}"
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-gray-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-bold text-gray-100 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Smart Contract Execution
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <p className="text-lg text-gray-400">
            Watch as smart contracts execute on the blockchain in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contract Code */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 font-mono text-sm relative overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-4 text-blue-400">
              <FileCode className="w-5 h-5" />
              <span className="font-semibold">SmartContract.sol</span>
            </div>
            
            <div className="space-y-1">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  className="text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-gray-600 mr-4">{i + 1}</span>
                  {line}
                </motion.div>
              ))}
            </div>

            {executing && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 2 }}
              />
            )}
          </motion.div>

          {/* Execution Flow */}
          <div className="space-y-6">
            {[
              { label: "Contract Deployed", delay: 0 },
              { label: "Transaction Submitted", delay: 0.5 },
              { label: "Gas Fee Calculated", delay: 1 },
              { label: "Execution Started", delay: 1.5 },
              { label: "State Updated", delay: 2 },
              { label: "Transaction Confirmed", delay: 2.5 }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.delay }}
                className="flex items-center gap-4"
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0"
                  animate={executing ? {
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      '0 0 0px rgba(59, 158, 255, 0)',
                      '0 0 20px rgba(59, 158, 255, 0.8)',
                      '0 0 0px rgba(59, 158, 255, 0)',
                    ]
                  } : {}}
                  transition={{
                    delay: step.delay,
                    duration: 0.5,
                  }}
                >
                  <CheckCircle className="w-6 h-6 text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <div className="text-gray-200 font-semibold mb-2">{step.label}</div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: step.delay + 0.2, duration: 0.8 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
