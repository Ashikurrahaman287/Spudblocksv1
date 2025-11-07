
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Mission', id: 'mission' },
    { label: 'Benefits', id: 'benefits' },
    { label: 'Roadmap', id: 'roadmap' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                SpudBlocks
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="w-full justify-start text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
