import { Card } from "@/components/ui/card";

const successRates = [
  { year: "2020", rate: 87, description: "In our inaugural year, we established a solid foundation for client relationships, achieving a satisfaction rate of 87%." },
  { year: "2021", rate: 94, description: "Building on our early achievements, we improved our client satisfaction to 94% in 2021." },
  { year: "2022", rate: 96, description: "Our commitment to excellence continued to pay off in 2022, with a client satisfaction rate of 96%." },
  { year: "2023", rate: 97, description: "In 2023, we reached an impressive client satisfaction rate of 97%." }
];

const serviceBreakdown = [
  { name: "Project Management", percentage: 27.3, color: "bg-purple-600" },
  { name: "Social Media Management", percentage: 18.2, color: "bg-purple-500" },
  { name: "Business Development", percentage: 15.6, color: "bg-purple-400" },
  { name: "Customer Support", percentage: 14.3, color: "bg-purple-300" },
  { name: "Web Development", percentage: 10.4, color: "bg-purple-200" },
  { name: "dApp", percentage: 9.1, color: "bg-purple-100" },
  { name: "Graphic & NFT", percentage: 5.2, color: "bg-purple-50" }
];

export default function Statistics() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-100 mb-4" data-testid="text-stats-title">
            Our Success Stats
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-8" data-testid="text-satisfaction-title">
              Client Satisfaction
            </h3>
            {successRates.map((stat, index) => (
              <div key={index} className="flex items-start gap-6" data-testid={`stat-year-${index}`}>
                <div className="flex-shrink-0">
                  <div className="text-5xl font-bold text-purple-400" data-testid={`text-rate-${index}`}>
                    {stat.rate}%
                  </div>
                  <div className="text-lg text-gray-400 mt-1" data-testid={`text-year-${index}`}>
                    {stat.year}
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed pt-2" data-testid={`text-description-${index}`}>
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-8" data-testid="text-breakdown-title">
              Service Breakdown (2020-2024)
            </h3>
            <Card className="p-8 bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <div className="space-y-6">
                {serviceBreakdown.map((service, index) => (
                  <div key={index} data-testid={`service-breakdown-${index}`}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300" data-testid={`text-service-name-${index}`}>
                        {service.name}
                      </span>
                      <span className="text-purple-400 font-semibold" data-testid={`text-service-percentage-${index}`}>
                        {service.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`${service.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${service.percentage}%` }}
                        data-testid={`bar-service-${index}`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
