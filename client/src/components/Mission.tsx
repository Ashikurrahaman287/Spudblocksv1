import { motion } from "framer-motion";
import BlockchainParticles from "./BlockchainParticles";

export default function Mission() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-950 to-background relative overflow-hidden">
      <BlockchainParticles />
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-100 mb-4" data-testid="text-mission-title">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed text-center italic" data-testid="text-mission-statement">
            "At SpudBlocks, our mission is to revolutionize how businesses operate in the evolving digital landscape by providing cutting-edge Web3 solutions. We aim to empower organizations, regardless of their size or industry, to unlock the full potential of blockchain technology, decentralized applications, and digital assets. By delivering tailored strategies and innovative services, we help our clients achieve their business objectives and stay ahead in the competitive Web3 ecosystem."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
