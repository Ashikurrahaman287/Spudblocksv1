import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const recognitions = [
  {
    year: "2025",
    exchange: "Ascendex",
    award: "Innovation Excellence",
    description: "Outstanding Innovation Partner"
  },
  {
    year: "2024",
    exchange: "COPX",
    award: "Strategic Partnership",
    description: "Premier Strategic Alliance"
  },
  {
    year: "2023",
    exchange: "BIGONE",
    award: "Business Management",
    description: "Best Business Management Team"
  },
  {
    year: "2022",
    exchange: "TAPBIT",
    award: "Business Development",
    description: "Top Business Development Team"
  },
  {
    year: "2022",
    exchange: "MEXC",
    award: "Business Growth Award",
    description: "Business Growth Partner"
  },
  {
    year: "2021",
    exchange: "HOTBIT",
    award: "CSR Award",
    description: "Best CSR Partner"
  }
];

export default function Recognition() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-950 to-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-100 mb-4" data-testid="text-recognition-title">
            Our Humble Recognitions
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {recognitions.map((recognition, index) => (
            <Card 
              key={index}
              className="p-6 bg-gray-800/50 backdrop-blur-sm border-2 border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover-elevate"
              data-testid={`card-recognition-${index}`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-purple-900/40 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-purple-400" data-testid={`icon-award-${index}`} />
                </div>
                <div>
                  <div className="text-sm text-purple-400 font-semibold mb-2" data-testid={`text-year-${index}`}>
                    {recognition.year}
                  </div>
                  <div className="text-2xl font-bold text-gray-100 mb-2" data-testid={`text-exchange-${index}`}>
                    {recognition.exchange}
                  </div>
                  <div className="text-lg text-gray-300 mb-2" data-testid={`text-award-${index}`}>
                    {recognition.award}
                  </div>
                  <div className="text-sm text-gray-500" data-testid={`text-description-${index}`}>
                    {recognition.description}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
