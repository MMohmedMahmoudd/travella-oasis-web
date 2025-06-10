
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSnippet = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Welcome to Travella Egypt
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              With over a decade of experience in the Egyptian real estate market, 
              we've helped thousands of families find their perfect homes. Our commitment 
              to excellence, integrity, and customer satisfaction has made us one of the 
              most trusted names in Egyptian real estate.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Whether you're looking to buy, sell, or rent, our team of expert agents 
              is here to guide you through every step of the process. We offer personalized 
              service, market expertise, and comprehensive support to ensure your real 
              estate journey is smooth and successful.
            </p>
            <Button asChild size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Travella Egypt Team"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Properties Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
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
