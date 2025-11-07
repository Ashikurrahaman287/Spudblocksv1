import { Card } from "@/components/ui/card";
import { Target, Rocket, Leaf } from "lucide-react";

const objectives = [
  {
    icon: Target,
    title: "Lead Web3 Innovation",
    description: "Establish SpudBlocks as a global leader in Web3 consultancy, pioneering advancements in blockchain, decentralized applications, and digital assets."
  },
  {
    icon: Rocket,
    title: "Empower Business Growth",
    description: "Help businesses of all sizes leverage Web3 technologies to drive innovation, efficiency, and long-term success in an increasingly digital world."
  },
  {
    icon: Leaf,
    title: "Foster Sustainable Success",
    description: "Provide tailored, future-focused solutions that enable clients to stay competitive, adapt to evolving trends, and thrive in the decentralized economy."
  }
];

export default function Vision() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-100 mb-4" data-testid="text-vision-title">
            Our Vision
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed" data-testid="text-vision-statement">
            At SpudBlocks, our vision is to become a global leader in Web3 innovation, empowering businesses to fully realize the transformative potential of blockchain technology and decentralized solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <Card 
              key={index}
              className="p-8 bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-purple-500 transition-all duration-300 hover-elevate"
              data-testid={`card-objective-${index}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mb-6">
                  <objective.icon className="w-8 h-8 text-purple-400" data-testid={`icon-objective-${index}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-4" data-testid={`text-objective-title-${index}`}>
                  {objective.title}
                </h3>
                <p className="text-gray-400 leading-relaxed" data-testid={`text-objective-description-${index}`}>
                  {objective.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
