import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '@/hooks/useScrollAnimation';

const AboutSnippet = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden transition-all duration-300"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-indigo-300 rounded-full blur-3xl animate-sand-drift"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-30px]'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-gradient">
              Welcome to Travella Egypt
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over a decade of experience in the Egyptian real estate market, 
              we've helped thousands of families find their perfect homes. Our commitment 
              to excellence, integrity, and customer satisfaction has made us one of the 
              most trusted names in Egyptian real estate.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you're looking to buy, sell, or rent, our team of expert agents 
              is here to guide you through every step of the process. We offer personalized 
              service, market expertise, and comprehensive support to ensure your real 
              estate journey is smooth and successful.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-[30px]'
          }`}>
            <div className="glass-effect rounded-3xl p-2 shadow-2xl transform hover:scale-105 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Travella Egypt Team"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-effect p-6 rounded-2xl shadow-lg border border-white/20 dark:border-white/10 backdrop-blur-xl">
              <div className="flex items-center space-x-6">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-gradient group-hover:scale-110 transition-transform">1000+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-gradient group-hover:scale-110 transition-transform">500+</div>
                  <div className="text-sm text-muted-foreground">Properties Sold</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-gradient group-hover:scale-110 transition-transform">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;
