
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <a href="#" className="relative z-10">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-jeeny to-jeeny-dark">
            Jeeny<span className="text-black">Drive</span>
          </h1>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#benefits" className="text-sm font-medium text-gray-600 hover:text-jeeny transition-colors">
            Benefits
          </a>
          <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-jeeny transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-jeeny transition-colors">
            FAQ
          </a>
          <a href="#subscribe" className="button-primary">
            Subscribe Now
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-10" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-0 flex flex-col items-center justify-center space-y-8 animate-fade-in">
            <a 
              href="#benefits" 
              className="text-xl font-medium text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#pricing" 
              className="text-xl font-medium text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className="text-xl font-medium text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#subscribe" 
              className="button-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Subscribe Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
