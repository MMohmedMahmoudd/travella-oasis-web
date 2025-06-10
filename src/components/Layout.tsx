
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MessageCircle } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-primary">
              Travella
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/') ? 'text-primary' : 'text-gray-600'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/about') ? 'text-primary' : 'text-gray-600'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/properties" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/properties') ? 'text-primary' : 'text-gray-600'
                }`}
              >
                Properties
              </Link>
              <Link 
                to="/agents" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/agents') ? 'text-primary' : 'text-gray-600'
                }`}
              >
                Agents
              </Link>
              <Link 
                to="/faq" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/faq') ? 'text-primary' : 'text-gray-600'
                }`}
              >
                FAQ
              </Link>
              <Link 
                to="/contact" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/contact') ? 'text-primary' : 'text-gray-600'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:+201234567890" className="flex items-center text-sm text-gray-600 hover:text-primary">
                <Phone className="w-4 h-4 mr-1" />
                +20 123 456 7890
              </a>
              <a href="https://wa.me/201234567890" className="flex items-center text-sm text-green-600 hover:text-green-700">
                <MessageCircle className="w-4 h-4 mr-1" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Travella Egypt</h3>
              <p className="text-gray-300 mb-4">
                Your trusted partner in finding the perfect property in Egypt. 
                We provide exceptional real estate services across the country.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">About Us</Link>
                <Link to="/properties" className="block text-gray-300 hover:text-white transition-colors">Properties</Link>
                <Link to="/agents" className="block text-gray-300 hover:text-white transition-colors">Our Agents</Link>
                <Link to="/faq" className="block text-gray-300 hover:text-white transition-colors">FAQ</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                <p className="text-gray-300">Property Sales</p>
                <p className="text-gray-300">Property Rentals</p>
                <p className="text-gray-300">Investment Consultation</p>
                <p className="text-gray-300">Property Management</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-gray-300">+20 123 456 7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-gray-300">info@travellaeg.com</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <a href="https://wa.me/201234567890" className="text-green-400 hover:text-green-300">WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Travella Egypt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
