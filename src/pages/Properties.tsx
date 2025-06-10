
import Layout from '@/components/Layout';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

const Properties = () => {
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
      badge: "Hot",
      type: "Villa"
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
      badge: "New",
      type: "Apartment"
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
      badge: "Featured",
      type: "Resort"
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
      badge: "Premium",
      type: "Penthouse"
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
      badge: "Best Value",
      type: "House"
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
      badge: "Affordable",
      type: "Studio"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6">Our Properties</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Discover your perfect property from our extensive collection across Egypt
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input placeholder="Search location..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="studio">Studio</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-2m">Under 2M EGP</SelectItem>
                <SelectItem value="2m-5m">2M - 5M EGP</SelectItem>
                <SelectItem value="5m-10m">5M - 10M EGP</SelectItem>
                <SelectItem value="over-10m">Over 10M EGP</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
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
                  <Badge variant="secondary" className="absolute top-4 right-4">
                    {property.type}
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
                
                <CardFooter className="p-6 pt-0 flex gap-2">
                  <Button className="flex-1" variant="outline">
                    View Details
                  </Button>
                  <Button className="flex-1">
                    Contact Agent
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8">
              Load More Properties
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Properties;
