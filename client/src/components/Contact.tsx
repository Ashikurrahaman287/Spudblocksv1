import { Mail, Phone, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-background to-black">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-100 mb-4" data-testid="text-thank-you">
              Thank You
            </h2>
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-8" data-testid="text-brand-name">
              SpudBlocks
            </div>
            <p className="text-lg text-gray-400" data-testid="text-contact-tagline">
              Get Connected With Us and Make Your Dream Live
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-8" data-testid="text-contact-title">
              Contact Us
            </h3>
            
            <div className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors">
              <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6" data-testid="icon-website" />
              </div>
              <a 
                href="https://www.spudblocks.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg"
                data-testid="link-website"
              >
                www.spudblocks.com
              </a>
            </div>
            
            <div className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors">
              <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" data-testid="icon-email" />
              </div>
              <a 
                href="mailto:business@spudblocks.com"
                className="text-lg"
                data-testid="link-email"
              >
                business@spudblocks.com
              </a>
            </div>
            
            <div className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors">
              <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" data-testid="icon-phone" />
              </div>
              <a 
                href="tel:+14099655574"
                className="text-lg"
                data-testid="link-phone"
              >
                +1 (409) 965-5574
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500" data-testid="text-copyright">
            &copy; {new Date().getFullYear()} SpudBlocks. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
