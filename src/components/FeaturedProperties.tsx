import { useRef } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useScrollAnimation';

const properties = [
  {
    id: 1,
    title: "Luxury Villa in New Cairo",
    price: "EGP 8,500,000",
    location: "New Cairo, Cairo",
    beds: 4,
    baths: 3,
    area: "350 sqm",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Hot"
  },
  {
    id: 2,
    title: "Modern Apartment in Zamalek",
    price: "EGP 3,200,000",
    location: "Zamalek, Cairo",
    beds: 2,
    baths: 2,
    area: "120 sqm",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "New"
  },
  {
    id: 3,
    title: "Beachfront Resort in Hurghada",
    price: "EGP 5,800,000",
    location: "Hurghada, Red Sea",
    beds: 3,
    baths: 2,
    area: "200 sqm",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Featured"
  },
  {
    id: 4,
    title: "Penthouse in Alexandria",
    price: "EGP 4,500,000",
    location: "Alexandria",
    beds: 3,
    baths: 3,
    area: "180 sqm",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Premium"
  },
  {
    id: 5,
    title: "Family Home in 6th October",
    price: "EGP 2,800,000",
    location: "6th October City",
    beds: 4,
    baths: 2,
    area: "280 sqm",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Best Value"
  },
  {
    id: 6,
    title: "Studio in Downtown Cairo",
    price: "EGP 1,200,000",
    location: "Downtown, Cairo",
    beds: 1,
    baths: 1,
    area: "65 sqm",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Affordable"
  }
];

const FeaturedProperties = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section ref={sectionRef} className="py-24 bg-muted/50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-gradient">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium properties across Egypt, 
            each offering unique charm and exceptional value
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Card 
              key={property.id} 
              className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 card-3d bg-card/80 backdrop-blur-sm border-2 hover:border-primary/50 overflow-hidden ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 font-semibold shadow-lg">
                  {property.badge}
                </Badge>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {property.title}
                </h3>
                
                <div className="flex items-center text-muted-foreground mb-3 group-hover:text-primary transition-colors">
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <p className="text-2xl font-bold text-primary mb-4 group-hover:scale-105 transition-transform">
                  {property.price}
                </p>
                
                <div className="flex justify-between items-center text-sm text-muted-foreground border-t border-border pt-4">
                  <div className="flex items-center space-x-1 hover:text-primary transition-colors">
                    <Bed className="w-4 h-4" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center space-x-1 hover:text-primary transition-colors">
                    <Bath className="w-4 h-4" />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center space-x-1 hover:text-primary transition-colors">
                    <Square className="w-4 h-4" />
                    <span>{property.area}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button 
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-green-400"
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className={`text-center mt-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '800ms' }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-white font-semibold px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
