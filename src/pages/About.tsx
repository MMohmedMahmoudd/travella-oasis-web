
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
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
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Travella Egypt</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted partner in Egyptian real estate for over a decade. 
            We're committed to excellence, integrity, and helping you find your perfect property.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2010, Travella Egypt began as a small family business with a simple mission: 
                to help people find their perfect homes in Egypt. What started as a local operation in 
                Cairo has grown into one of Egypt's most trusted real estate agencies.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Over the years, we've built our reputation on honesty, professionalism, and an unwavering 
                commitment to our clients' satisfaction. We've helped over 1,000 families find their 
                dream homes and assisted countless investors in making profitable real estate decisions.
              </p>
              <p className="text-lg text-gray-700">
                Today, we continue to innovate and expand our services while maintaining the personal 
                touch and local expertise that sets us apart. Our team of experienced agents brings 
                deep knowledge of Egyptian markets, ensuring our clients receive the best possible 
                guidance and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-xl">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-xl">Properties Sold</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-xl">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-xl">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
