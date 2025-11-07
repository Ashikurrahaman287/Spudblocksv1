import { Card } from "@/components/ui/card";

const partners = [
  { name: "TAPBIT" },
  { name: "NEO" },
  { name: "ERA7" },
  { name: "BIGONE" },
  { name: "MEXC" },
  { name: "HOTBIT" }
];

export default function Partners() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-100 mb-4" data-testid="text-partners-title">
            Meet Our Partners
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <Card 
              key={index}
              className="p-6 bg-gray-800/30 backdrop-blur-sm border-gray-700 hover:border-purple-500 transition-all duration-300 hover-elevate flex items-center justify-center"
              data-testid={`card-partner-${index}`}
            >
              <div className="text-center">
                <div className="text-xl font-bold text-gray-400 hover:text-purple-400 transition-colors" data-testid={`text-partner-name-${index}`}>
                  {partner.name}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
