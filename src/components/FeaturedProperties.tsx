
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties across Egypt
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-yellow-500 text-black hover:bg-yellow-600">
                  {property.badge}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {property.title}
                </h3>
                <p className="text-gray-600 mb-3">{property.location}</p>
                <p className="text-2xl font-bold text-primary mb-4">{property.price}</p>
                
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.area}</span>
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button className="w-full" variant="outline">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
