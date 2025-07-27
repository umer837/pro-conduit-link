import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  MapPin, 
  Star, 
  Clock, 
  Shield, 
  Filter,
  Phone,
  Mail
} from "lucide-react";
import { useState } from "react";

const SearchWorkers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  const workers = [
    {
      id: 1,
      name: "John Smith",
      category: "Plumbing",
      rating: 4.9,
      reviews: 127,
      location: "New York, NY",
      experience: "8 years",
      hourlyRate: "$75-90",
      verified: true,
      available: true,
      specialties: ["Bathroom Repair", "Pipe Installation", "Emergency Plumbing"],
      description: "Professional plumber with 8+ years of experience. Specializing in residential and commercial plumbing repairs.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      category: "Electrical",
      rating: 4.8,
      reviews: 93,
      location: "Brooklyn, NY",
      experience: "6 years",
      hourlyRate: "$80-100",
      verified: true,
      available: false,
      specialties: ["Wiring", "Lighting Installation", "Electrical Repairs"],
      description: "Licensed electrician providing safe and reliable electrical services for homes and businesses.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b589?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Mike Davis",
      category: "Home Repair",
      rating: 4.7,
      reviews: 156,
      location: "Queens, NY",
      experience: "12 years",
      hourlyRate: "$60-80",
      verified: true,
      available: true,
      specialties: ["Drywall", "Flooring", "General Maintenance"],
      description: "Experienced handyman offering comprehensive home repair and maintenance services.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Lisa Chen",
      category: "Painting",
      rating: 4.9,
      reviews: 78,
      location: "Manhattan, NY",
      experience: "5 years",
      hourlyRate: "$50-70",
      verified: true,
      available: true,
      specialties: ["Interior Painting", "Exterior Painting", "Color Consultation"],
      description: "Detail-oriented painter specializing in residential and commercial painting projects.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const categories = ["Plumbing", "Electrical", "Home Repair", "Painting", "Landscaping", "Automotive"];
  const locations = ["New York, NY", "Brooklyn, NY", "Queens, NY", "Manhattan, NY", "Bronx, NY"];

  const filteredWorkers = workers.filter(worker => {
    const matchesSearch = worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         worker.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         worker.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = !selectedCategory || worker.category === selectedCategory;
    const matchesLocation = !selectedLocation || worker.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

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
              <Link to="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
              <Link to="/search-workers" className="text-primary font-medium">Find Workers</Link>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Header */}
      <section className="gradient-hero text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Find Professional Service Providers
          </h1>
          
          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                className="pl-12 pr-4 py-3 bg-background text-foreground border-border text-lg"
                placeholder="Search by service, name, or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="grid md:grid-cols-4 gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-background text-foreground border-border">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="bg-background text-foreground border-border">
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Locations</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-background text-foreground border-border">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              {filteredWorkers.length} Professionals Found
            </h2>
            <Badge variant="secondary" className="px-3 py-1">
              Showing all results
            </Badge>
          </div>

          <div className="grid gap-6">
            {filteredWorkers.map((worker) => (
              <Card key={worker.id} className="gradient-card border-border shadow-blue-md hover:shadow-blue-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    {/* Worker Info */}
                    <div className="flex items-start space-x-4 flex-1">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={worker.avatar} alt={worker.name} />
                        <AvatarFallback>{worker.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl font-semibold text-foreground">{worker.name}</h3>
                          {worker.verified && (
                            <Shield className="h-5 w-5 text-primary" />
                          )}
                          <Badge 
                            variant={worker.available ? "default" : "secondary"}
                            className={worker.available ? "bg-green-500 text-white" : ""}
                          >
                            {worker.available ? "Available" : "Busy"}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                          <span className="font-medium text-primary">{worker.category}</span>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{worker.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{worker.experience}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="font-medium text-foreground">{worker.rating}</span>
                            <span className="text-muted-foreground">({worker.reviews} reviews)</span>
                          </div>
                          <span className="font-semibold text-primary">{worker.hourlyRate}/hr</span>
                        </div>
                        
                        <p className="text-muted-foreground mb-3">{worker.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {worker.specialties.map((specialty, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex flex-col space-y-3 lg:w-48">
                      <Link to={`/worker/profile/view?id=${worker.id}`}>
                        <Button className="w-full gradient-primary border-0 text-primary-foreground">
                          View Profile
                        </Button>
                      </Link>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Phone className="h-4 w-4 mr-1" />
                          Call
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Mail className="h-4 w-4 mr-1" />
                          Message
                        </Button>
                      </div>
                      <Link to="/request">
                        <Button variant="outline" className="w-full">
                          Send Request
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchWorkers;