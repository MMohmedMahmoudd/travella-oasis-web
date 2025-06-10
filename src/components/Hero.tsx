
import { useRef } from 'react';
import { MessageCircle, Phone, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(heroRef);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center gradient-bg overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Vertical Camel Animations */}
      <div className="absolute left-5 top-0 h-full pointer-events-none">
        <div className="animate-camel-vertical-down">
          <div className="text-4xl animate-camel-legs">🐪</div>
        </div>
      </div>
      
      <div className="absolute right-5 top-0 h-full pointer-events-none">
        <div className="animate-camel-vertical-up" style={{ animationDelay: '8s' }}>
          <div className="text-4xl animate-camel-legs">🐪</div>
        </div>
      </div>

      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 dark:opacity-5"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      
      {/* Content */}
      <div className={`relative z-10 text-center text-foreground px-4 max-w-6xl mx-auto transition-all duration-1000 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
      }`}>
        <div className="glass-effect rounded-3xl p-8 md:p-12 backdrop-blur-xl border border-white/20 dark:border-white/10 card-3d">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Find Your Perfect Home
            <span className="block text-gradient mt-2">in Egypt</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover exceptional properties across Egypt with trusted experts. 
            Your dream home awaits in the land of pharaohs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-400"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-background/50 backdrop-blur-sm"
              asChild
            >
              <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-muted-foreground">
            <div className="flex items-center space-x-2 hover:text-primary transition-colors">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Verified Properties</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-primary transition-colors">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>Trusted Agents</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-primary transition-colors">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
              <span>Best Prices</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group">
        <div className="w-8 h-12 border-2 border-foreground/50 rounded-full flex justify-center group-hover:border-primary transition-colors">
          <ArrowDown className="w-4 h-4 mt-2 text-foreground/50 group-hover:text-primary transition-colors" />
        </div>
        <p className="text-xs mt-2 text-muted-foreground group-hover:text-primary transition-colors">Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;
