import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Calendar, DollarSign } from "lucide-react";

const Request = () => {
  const [formData, setFormData] = useState({
    title: "",
    serviceCategory: "",
    description: "",
    location: "",
    budget: "",
    timeline: "",
    urgency: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const serviceCategories = [
    "Plumbing",
    "Electrical",
    "Home Repair",
    "Automotive",
    "Painting",
    "Landscaping",
    "Tech Support",
    "Photography"
  ];

  const urgencyLevels = [
    { value: "low", label: "Low - Within a week" },
    { value: "medium", label: "Medium - Within 2-3 days" },
    { value: "high", label: "High - Within 24 hours" },
    { value: "emergency", label: "Emergency - ASAP" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // This would typically connect to your backend API
    setTimeout(() => {
      toast({
        title: "Request Submitted!",
        description: "Your service request has been posted. Professionals will contact you soon.",
      });
      setIsLoading(false);
      // Redirect to request review page
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
              <Link to="/user/home" className="text-foreground hover:text-primary transition-colors">Dashboard</Link>
              <Button variant="outline">Logout</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="gradient-hero text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Post a Service Request
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Describe what you need and get connected with qualified professionals
          </p>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="gradient-card border-border shadow-blue-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Service Request Details</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Provide detailed information about your service needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Request Title</Label>
                      <Input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="e.g., Kitchen sink repair needed"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="serviceCategory">Service Category</Label>
                      <Select value={formData.serviceCategory} onValueChange={(value) => setFormData(prev => ({ ...prev, serviceCategory: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service category" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceCategories.map((category) => (
                            <SelectItem key={category} value={category.toLowerCase()}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Detailed Description</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Describe the work you need done, any specific requirements, materials needed, etc."
                        rows={6}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            placeholder="City, State or ZIP code"
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            placeholder="e.g., $100-300"
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Preferred Timeline</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            placeholder="e.g., Next week"
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="urgency">Urgency Level</Label>
                        <Select value={formData.urgency} onValueChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            {urgencyLevels.map((level) => (
                              <SelectItem key={level.value} value={level.value}>
                                {level.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        className="w-full gradient-primary border-0 text-primary-foreground"
                        disabled={isLoading}
                      >
                        {isLoading ? "Posting Request..." : "Post Service Request"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="gradient-card border-border shadow-blue-md">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Tips for Better Responses</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>• Be specific about what you need</p>
                  <p>• Include your budget range if possible</p>
                  <p>• Mention any time constraints</p>
                  <p>• Add photos if relevant</p>
                  <p>• Specify your location accurately</p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-border shadow-blue-md">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>1. Your request is posted to our network</p>
                  <p>2. Qualified professionals will review it</p>
                  <p>3. You'll receive proposals and quotes</p>
                  <p>4. Choose the best professional for your needs</p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-border shadow-blue-md">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Our support team is here to help you create the perfect request.
                  </p>
                  <Link to="/contact">
                    <Button variant="outline" size="sm" className="w-full">
                      Contact Support
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Request;