import { Card } from "@/components/ui/card";
import { Blocks, TrendingUp, ClipboardList, Share2, HeadphonesIcon, Palette, Code, Smartphone } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Blocks,
    title: "Web3 Consultancy",
    description: "The right decentralized technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth in the blockchain space."
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Business Development",
    description: "Strategic business development support to identify opportunities, drive growth, and expand market reach."
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Project Management",
    description: "Expert project management for efficient execution, resource allocation, and timely delivery of Web3 projects."
  },
  {
    number: "04",
    icon: Share2,
    title: "Social Media Management",
    description: "Tailored social media strategies to boost brand presence, engagement, and growth across platforms."
  },
  {
    number: "05",
    icon: HeadphonesIcon,
    title: "Customer Support",
    description: "Comprehensive customer service solutions to enhance client satisfaction and retention."
  },
  {
    number: "06",
    icon: Palette,
    title: "Graphic Design",
    description: "Creative services for NFT creation, marketing, and graphic design in the digital asset space."
  },
  {
    number: "07",
    icon: Code,
    title: "Web Development",
    description: "Seamless integration of Web3 technology into intuitive web and mobile interfaces."
  },
  {
    number: "08",
    icon: Smartphone,
    title: "dApp Development",
    description: "Custom web and mobile dApp solutions for enhanced engagement and functionality."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-background to-gray-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-100 mb-4" data-testid="text-services-title">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto" data-testid="text-services-subtitle">
            Comprehensive Web3 solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 md:p-8 bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-purple-500 transition-all duration-300 hover-elevate"
              data-testid={`card-service-${index}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-purple-400 bg-purple-900/30 px-3 py-1 rounded-full" data-testid={`text-service-number-${index}`}>
                  {service.number}
                </span>
                <service.icon className="w-8 h-8 text-purple-400" data-testid={`icon-service-${index}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3" data-testid={`text-service-title-${index}`}>
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed" data-testid={`text-service-description-${index}`}>
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
