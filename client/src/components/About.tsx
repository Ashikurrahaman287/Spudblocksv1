import { motion } from "framer-motion";
import BlockchainParticles from "./BlockchainParticles";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <BlockchainParticles />
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-100 mb-4" data-testid="text-about-title">
            About Us
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed" data-testid="text-about-intro">
            SpudBlocks is a pioneering Web3 consultancy firm dedicated to delivering innovative blockchain and digital solutions for businesses navigating the fast-evolving digital landscape.
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed" data-testid="text-about-description">
            With a team of experienced professionals and tech enthusiasts, we specialize in helping businesses harness the power of Web3 technologies to drive growth and achieve their goals.
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed" data-testid="text-about-offerings">
            Our service offerings include comprehensive Customer Support, Social Media Management, Business Development, and Project Management. We are committed to excellence, tailoring each solution to meet the unique needs of our clients.
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed" data-testid="text-about-approach">
            Our collaborative approach ensures that we stay ahead of industry trends, providing cutting-edge strategies that help businesses thrive in a decentralized world.
          </p>
        </div>
      </div>
    </section>
  );
}
