import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Calendar, DollarSign, Edit3, Trash2 } from "lucide-react";

const RequestEdit = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    serviceCategory: "",
    description: "",
    location: "",
    budget: "",
    timeline: "",
    urgency: "",
    status: "open"
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Mock data - in real app, this would come from API
  useEffect(() => {
    // Simulate loading existing request data
    const mockRequest = {
      title: "Kitchen sink repair needed",
      serviceCategory: "plumbing",
      description: "My kitchen sink is leaking underneath and the faucet is dripping. Need professional repair.",
      location: "Brooklyn, NY 11201",
      budget: "$100-300",
      timeline: "This week",
      urgency: "medium",
      status: "open"
    };
    setFormData(mockRequest);
  }, [id]);

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

  const statusOptions = [
    { value: "open", label: "Open", color: "bg-green-500" },
    { value: "in-progress", label: "In Progress", color: "bg-blue-500" },
    { value: "completed", label: "Completed", color: "bg-gray-500" },
    { value: "cancelled", label: "Cancelled", color: "bg-red-500" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // This would typically connect to your backend API
    setTimeout(() => {
      toast({
        title: "Request Updated!",
        description: "Your service request has been successfully updated.",
      });
      setIsLoading(false);
    }, 1000);
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this request? This action cannot be undone.")) {
      setIsLoading(true);
      
      // This would typically connect to your backend API
      setTimeout(() => {
        toast({
          title: "Request Deleted",
          description: "Your service request has been deleted.",
          variant: "destructive"
        });
        setIsLoading(false);
        // Redirect to requests list
      }, 1000);
    }
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
              <Link to="/user/home" className="text-foreground hover:text-primary transition-colors">Dashboard</Link>
              <Link to="/view/requests" className="text-foreground hover:text-primary transition-colors">My Requests</Link>
              <Button variant="outline">Logout</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="gradient-hero text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Edit Service Request
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Update your request details or change its status
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Badge className={`${statusOptions.find(s => s.value === formData.status)?.color} text-white`}>
                {statusOptions.find(s => s.value === formData.status)?.label}
              </Badge>
              <span className="text-primary-foreground/70">ID: #{id}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Edit Form */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="gradient-card border-border shadow-blue-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center">
                    <Edit3 className="h-6 w-6 mr-2" />
                    Request Details
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Update your service request information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="status">Request Status</Label>
                      <Select value={formData.status} onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          {statusOptions.map((status) => (
                            <SelectItem key={status.value} value={status.value}>
                              {status.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

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
                        placeholder="Describe the work you need done..."
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

                    <div className="flex space-x-4 pt-4">
                      <Button
                        type="submit"
                        className="flex-1 gradient-primary border-0 text-primary-foreground"
                        disabled={isLoading}
                      >
                        {isLoading ? "Updating..." : "Update Request"}
                      </Button>
                      <Button
                        type="button"
                        variant="destructive"
                        onClick={handleDelete}
                        disabled={isLoading}
                        className="flex items-center"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
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
                  <CardTitle className="text-lg text-foreground">Request Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-foreground">Created:</span>
                    <span className="text-muted-foreground ml-2">2 days ago</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Proposals:</span>
                    <span className="text-muted-foreground ml-2">3 received</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Views:</span>
                    <span className="text-muted-foreground ml-2">12 professionals</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card border-border shadow-blue-md">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Status Guide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p><strong className="text-green-600">Open:</strong> Accepting proposals</p>
                  <p><strong className="text-blue-600">In Progress:</strong> Work has started</p>
                  <p><strong className="text-gray-600">Completed:</strong> Work finished</p>
                  <p><strong className="text-red-600">Cancelled:</strong> Request cancelled</p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-border shadow-blue-md">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/view/requests">
                    <Button variant="outline" size="sm" className="w-full">
                      View All Requests
                    </Button>
                  </Link>
                  <Link to="/request">
                    <Button variant="outline" size="sm" className="w-full">
                      Create New Request
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

export default RequestEdit;