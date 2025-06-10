
import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/properties', label: 'Properties' },
    { to: '/agents', label: 'Agents' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-background transition-all duration-300">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-md shadow-lg border-b border-border sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="text-3xl font-bold text-gradient hover:scale-105 transition-transform duration-300">
              Travella
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 relative group ${
                    isActive(link.to) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full hover:bg-accent hover:scale-110 transition-all duration-300"
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>

              {/* Contact Info - Desktop */}
              <div className="hidden xl:flex items-center space-x-4">
                <a 
                  href="tel:+201234567890" 
                  className="flex items-center text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +20 123 456 7890
                </a>
                <a 
                  href="https://wa.me/201234567890" 
                  className="flex items-center text-sm text-green-600 hover:text-green-700 transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </div>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-full hover:bg-accent"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 glass-effect rounded-lg mb-4 animate-fade-in-up">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.to}
                    to={link.to} 
                    className={`text-sm font-medium transition-all duration-300 hover:text-primary px-4 py-2 rounded-lg hover:bg-accent ${
                      isActive(link.to) ? 'text-primary bg-accent' : 'text-muted-foreground'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-border">
                  <a 
                    href="tel:+201234567890" 
                    className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    +20 123 456 7890
                  </a>
                  <a 
                    href="https://wa.me/201234567890" 
                    className="flex items-center text-sm text-green-600 hover:text-green-700 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="transition-all duration-300">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="scroll-animate animate-fade-in-left">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Travella Egypt</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your trusted partner in finding the perfect property in Egypt. 
                We provide exceptional real estate services across the country.
              </p>
            </div>
            
            <div className="scroll-animate animate-fade-in-up">
              <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
              <div className="space-y-3">
                {navLinks.slice(1).map((link) => (
                  <Link 
                    key={link.to}
                    to={link.to} 
                    className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="scroll-animate animate-fade-in-up">
              <h4 className="font-semibold mb-6 text-lg">Services</h4>
              <div className="space-y-3">
                <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Property Sales</p>
                <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Property Rentals</p>
                <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Investment Consultation</p>
                <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Property Management</p>
              </div>
            </div>
            
            <div className="scroll-animate animate-fade-in-right">
              <h4 className="font-semibold mb-6 text-lg">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center group">
                  <Phone className="w-5 h-5 mr-3 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">+20 123 456 7890</span>
                </div>
                <div className="flex items-center group">
                  <Mail className="w-5 h-5 mr-3 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">info@travellaeg.com</span>
                </div>
                <div className="flex items-center group">
                  <MessageCircle className="w-5 h-5 mr-3 text-green-500 group-hover:scale-110 transition-transform" />
                  <a href="https://wa.me/201234567890" className="text-green-500 hover:text-green-400 transition-colors">WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-muted-foreground">&copy; 2024 Travella Egypt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
