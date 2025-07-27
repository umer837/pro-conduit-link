import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, 
  Zap, 
  Home as HomeIcon, 
  Car, 
  Brush, 
  Scissors, 
  Laptop, 
  Camera,
  Search,
  MapPin,
  Star,
  Clock
} from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const serviceCategories = [
    {
      icon: Wrench,
      title: "Plumbing",
      description: "Professional plumbers for repairs, installations, and emergencies",
      count: "245 professionals",
      featured: true
    },
    {
      icon: Zap,
      title: "Electrical",
      description: "Licensed electricians for all your electrical needs",
      count: "189 professionals",
      featured: true
    },
    {
      icon: HomeIcon,
      title: "Home Repair",
      description: "General contractors and handymen for home maintenance",
      count: "312 professionals",
      featured: true
    },
    {
      icon: Car,
      title: "Automotive",
      description: "Mechanics and auto repair specialists",
      count: "156 professionals",
      featured: false
    },
    {
      icon: Brush,
      title: "Painting",
      description: "Interior and exterior painting professionals",
      count: "98 professionals",
      featured: false
    },
    {
      icon: Scissors,
      title: "Landscaping",
      description: "Garden design, maintenance, and lawn care",
      count: "134 professionals",
      featured: false
    },
    {
      icon: Laptop,
      title: "Tech Support",
      description: "IT support and computer repair services",
      count: "67 professionals",
      featured: false
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Event photographers and photo services",
      count: "89 professionals",
      featured: false
    }
  ];

  const featuredServices = serviceCategories.filter(service => service.featured);

  const filteredServices = serviceCategories.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <h1 className="text-xl font-bold text-primary">Connect Pro</h1>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/services" className="text-primary font-medium">Services</Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Services
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Find trusted professionals for all your service needs
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                className="pl-10 pr-4 py-3 bg-background text-foreground border-border"
                placeholder="Search for services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <Badge variant="secondary" className="text-xs">Plumbing</Badge>
              <Badge variant="secondary" className="text-xs">Electrical</Badge>
              <Badge variant="secondary" className="text-xs">Home Repair</Badge>
              <Badge variant="secondary" className="text-xs">Landscaping</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our most popular service categories with verified professionals
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Card key={index} className="gradient-card border-border shadow-blue-lg hover:shadow-blue-xl transition-all duration-300 group">
                <CardHeader className="text-center">
                  <service.icon className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{service.count}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-muted-foreground">4.8+</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">24/7</span>
                    </div>
                  </div>
                  <Link to="/search-workers">
                    <Button className="w-full gradient-primary border-0 text-primary-foreground">
                      Find Professionals
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              All Service Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse through all available service categories
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServices.map((service, index) => (
              <Card key={index} className="gradient-card border-border shadow-blue-md hover:shadow-blue-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center space-y-4">
                  <service.icon className="h-12 w-12 text-primary mx-auto group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                    <p className="text-xs text-muted-foreground">{service.count}</p>
                  </div>
                  {service.featured && (
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="h-16 w-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground">Choose Service</h3>
              <p className="text-muted-foreground">Select the service category you need help with</p>
            </div>
            <div className="space-y-4">
              <div className="h-16 w-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground">Browse Professionals</h3>
              <p className="text-muted-foreground">View profiles, ratings, and reviews of local professionals</p>
            </div>
            <div className="space-y-4">
              <div className="h-16 w-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground">Book & Connect</h3>
              <p className="text-muted-foreground">Send requests and get connected with the right professional</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Find Your Professional?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join Connect Pro and get connected with trusted service providers in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="gradient-primary border-0 text-primary-foreground">
                Get Started
              </Button>
            </Link>
            <Link to="/search-workers">
              <Button size="lg" variant="outline">
                Browse Professionals
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;