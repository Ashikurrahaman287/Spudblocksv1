import { Button } from "@/components/ui/button";
import heroBackground from "@assets/generated_images/Web3_network_hero_background_b301fd1b.png";

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-gray-900/60 to-black/80" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-gray-100 mb-6" data-testid="text-hero-title">
          SpudBlocks
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-purple-400 mb-8 font-medium" data-testid="text-hero-tagline">
          Empowering Your Business in the Web3 Universe
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto" data-testid="text-hero-description">
          Cutting-edge Web3 consultancy specializing in blockchain technology, decentralized applications, and digital solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            variant="default"
            onClick={scrollToContact}
            className="bg-purple-600 hover:bg-purple-700 text-white border-purple-700"
            data-testid="button-get-connected"
          >
            Get Connected
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={scrollToServices}
            className="backdrop-blur-lg bg-white/10 border-white/30 text-white hover:bg-white/20"
            data-testid="button-learn-more"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
