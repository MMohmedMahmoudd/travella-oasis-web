
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    name: "Ahmed Mohamed",
    role: "Property Buyer",
    content: "Travella helped me find the perfect villa in New Cairo. The team was professional, responsive, and guided me through every step. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Sarah Hassan",
    role: "Property Investor",
    content: "I've worked with many real estate agencies, but Travella stands out. Their market knowledge and professional service made my investment decision easy and profitable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b002?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Mohamed Farid",
    role: "First-time Buyer",
    content: "As a first-time buyer, I was nervous about the process. Travella's team made everything clear and simple. I couldn't be happier with my new apartment!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-900 dark:via-gray-900 dark:to-zinc-900 relative overflow-hidden transition-all duration-300"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-32 right-20 w-72 h-72 bg-purple-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Horizontal Desert Camel Animation */}
      <div className="absolute bottom-10 w-full pointer-events-none">
        <div className="animate-camel-walk">
          <div className="text-6xl animate-camel-legs">🐪</div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-gradient">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="glass-effect hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 card-3d border border-white/20 dark:border-white/10 group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 italic leading-relaxed group-hover:text-foreground transition-colors">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4 border-4 border-primary/20 group-hover:border-primary/50 transition-all duration-300"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
