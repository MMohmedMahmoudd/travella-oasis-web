
import { Shield, Users, Award, Clock } from 'lucide-react';

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
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Travella?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing exceptional real estate services that exceed your expectations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
