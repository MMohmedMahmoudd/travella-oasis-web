import { useRef } from 'react';
import { Shield, Users, Award, Clock } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useScrollAnimation';

const features = [
  {
    icon: Shield,
    title: "Verified Properties",
    description: "All our properties are thoroughly verified and inspected to ensure quality and authenticity."
  },
  {
    icon: Users,
    title: "Expert Agents",
    description: "Work with experienced real estate professionals who know the Egyptian market inside out."
  },
  {
    icon: Award,
    title: "Best Prices",
    description: "We guarantee competitive pricing and help you get the best value for your investment."
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "Get fast responses to your inquiries. We're here to help you 24/7."
  }
];

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section ref={sectionRef} className="py-24 bg-background transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-gradient">
            Why Choose Travella?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're committed to providing exceptional real estate services that exceed your expectations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`text-center group cursor-pointer transition-all duration-700 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 card-3d border border-border hover:border-primary/50">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
