
import { useRef } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Globe } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useScrollAnimation';

const About = () => {
  const heroRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);

  const heroVisible = useIntersectionObserver(heroRef);
  const valuesVisible = useIntersectionObserver(valuesRef);
  const storyVisible = useIntersectionObserver(storyRef);
  const teamVisible = useIntersectionObserver(teamRef);
  const statsVisible = useIntersectionObserver(statsRef);

  const teamMembers = [
    {
      name: "Ahmed El-Masry",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "15+ years in Egyptian real estate, passionate about helping families find their perfect homes."
    },
    {
      name: "Fatima Hassan",
      role: "Head of Sales",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b002?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Expert negotiator with deep knowledge of Cairo and Giza property markets."
    },
    {
      name: "Omar Ibrahim",
      role: "Property Consultant",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Specialized in luxury properties and investment opportunities across Egypt."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide exceptional real estate services that help our clients make informed decisions and achieve their property goals."
    },
    {
      icon: Users,
      title: "Our Vision",
      description: "To be the most trusted and respected real estate agency in Egypt, known for our integrity and customer satisfaction."
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Integrity, professionalism, transparency, and dedication to exceeding our clients' expectations in every transaction."
    },
    {
      icon: Globe,
      title: "Our Reach",
      description: "Serving clients across Egypt with local expertise and international standards of service excellence."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="py-24 gradient-bg text-white relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className={`container mx-auto px-4 text-center relative z-10 transition-all duration-1000 ${
          heroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            About Travella Egypt
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Your trusted partner in Egyptian real estate for over a decade. 
            We're committed to excellence, integrity, and helping you find your perfect property.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section 
        ref={valuesRef}
        className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-300"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  valuesVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="text-center glass-effect hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 card-3d border border-white/20 dark:border-white/10 group h-full">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-orange-600 rounded-full mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <value.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section 
        ref={storyRef}
        className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-900 dark:via-gray-900 dark:to-zinc-900 transition-all duration-300"
      >
        <div className="container mx-auto px-4">
          <div className={`max-w-5xl mx-auto transition-all duration-1000 ${
            storyVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">Our Story</h2>
            <div className="glass-effect rounded-3xl p-8 md:p-12 backdrop-blur-xl border border-white/20 dark:border-white/10">
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="text-lg mb-6 leading-relaxed">
                  Founded in 2010, Travella Egypt began as a small family business with a simple mission: 
                  to help people find their perfect homes in Egypt. What started as a local operation in 
                  Cairo has grown into one of Egypt's most trusted real estate agencies.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  Over the years, we've built our reputation on honesty, professionalism, and an unwavering 
                  commitment to our clients' satisfaction. We've helped over 1,000 families find their 
                  dream homes and assisted countless investors in making profitable real estate decisions.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we continue to innovate and expand our services while maintaining the personal 
                  touch and local expertise that sets us apart. Our team of experienced agents brings 
                  deep knowledge of Egyptian markets, ensuring our clients receive the best possible 
                  guidance and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section 
        ref={teamRef}
        className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-300"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            teamVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  teamVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Card className="text-center glass-effect hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 card-3d border border-white/20 dark:border-white/10 group">
                  <CardContent className="p-8">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-primary/20 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-4 text-lg">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section 
        ref={statsRef}
        className="py-24 gradient-bg text-white relative overflow-hidden"
      >
        {/* Desert Camel Animation */}
        <div className="absolute bottom-10 w-full pointer-events-none">
          <div className="animate-camel-walk">
            <div className="text-6xl">🐪</div>
          </div>
        </div>

        <div className={`container mx-auto px-4 transition-all duration-1000 ${
          statsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold mb-4 group-hover:scale-110 transition-transform">1000+</div>
              <div className="text-xl">Happy Clients</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold mb-4 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-xl">Properties Sold</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold mb-4 group-hover:scale-110 transition-transform">10+</div>
              <div className="text-xl">Years Experience</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold mb-4 group-hover:scale-110 transition-transform">50+</div>
              <div className="text-xl">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
