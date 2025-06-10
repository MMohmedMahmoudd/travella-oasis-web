
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MessageCircle, Star } from 'lucide-react';

const Agents = () => {
  const agents = [
    {
      id: 1,
      name: "Ahmed El-Masry",
      title: "Senior Property Consultant",
      specialization: "Luxury Properties",
      location: "Cairo & Giza",
      experience: "8 years",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      phone: "+20 101 234 5678",
      email: "ahmed@travellaeg.com",
      whatsapp: "+20 101 234 5678",
      languages: ["Arabic", "English"],
      properties: 45
    },
    {
      id: 2,
      name: "Fatima Hassan",
      title: "Property Sales Manager",
      specialization: "Residential Properties",
      location: "New Cairo & New Capital",
      experience: "6 years",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b002?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      phone: "+20 102 345 6789",
      email: "fatima@travellaeg.com",
      whatsapp: "+20 102 345 6789",
      languages: ["Arabic", "English", "French"],
      properties: 38
    },
    {
      id: 3,
      name: "Omar Ibrahim",
      title: "Investment Consultant",
      specialization: "Commercial Properties",
      location: "Alexandria & North Coast",
      experience: "10 years",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      phone: "+20 103 456 7890",
      email: "omar@travellaeg.com",
      whatsapp: "+20 103 456 7890",
      languages: ["Arabic", "English", "German"],
      properties: 62
    },
    {
      id: 4,
      name: "Menna Saeed",
      title: "First-Time Buyer Specialist",
      specialization: "Affordable Housing",
      location: "6th October & Sheikh Zayed",
      experience: "4 years",
      rating: 4.7,
      reviews: 73,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      phone: "+20 104 567 8901",
      email: "menna@travellaeg.com",
      whatsapp: "+20 104 567 8901",
      languages: ["Arabic", "English"],
      properties: 29
    },
    {
      id: 5,
      name: "Youssef Mansour",
      title: "Luxury Property Expert",
      specialization: "High-End Developments",
      location: "Zamalek & Maadi",
      experience: "12 years",
      rating: 5.0,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      phone: "+20 105 678 9012",
      email: "youssef@travellaeg.com",
      whatsapp: "+20 105 678 9012",
      languages: ["Arabic", "English", "Italian"],
      properties: 71
    },
    {
      id: 6,
      name: "Nadia Adel",
      title: "Coastal Properties Specialist",
      specialization: "Beach & Resort Properties",
      location: "Hurghada & Sharm El Sheikh",
      experience: "7 years",
      rating: 4.8,
      reviews: 94,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      phone: "+20 106 789 0123",
      email: "nadia@travellaeg.com",
      whatsapp: "+20 106 789 0123",
      languages: ["Arabic", "English", "Russian"],
      properties: 41
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6">Meet Our Expert Agents</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Our experienced team of real estate professionals is here to help you find your perfect property
          </p>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <Card key={agent.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <img 
                      src={agent.image} 
                      alt={agent.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{agent.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{agent.title}</p>
                    
                    <div className="flex items-center justify-center mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium">{agent.rating}</span>
                        <span className="ml-1 text-sm text-gray-500">({agent.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Specialization:</span>
                      <Badge variant="secondary">{agent.specialization}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="text-sm font-medium">{agent.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Experience:</span>
                      <span className="text-sm font-medium">{agent.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Properties:</span>
                      <span className="text-sm font-medium">{agent.properties} listings</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Languages:</span>
                      <span className="text-sm font-medium">{agent.languages.join(', ')}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button className="w-full" size="sm">
                      <Phone className="w-4 h-4 mr-2" />
                      Call {agent.phone}
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={`mailto:${agent.email}`}>
                          <Mail className="w-4 h-4 mr-1" />
                          Email
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50" asChild>
                        <a href={`https://wa.me/${agent.whatsapp.replace(/\s+/g, '')}`} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Agents;
