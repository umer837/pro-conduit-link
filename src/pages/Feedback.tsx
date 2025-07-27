import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Feedback = () => {
  const [formData, setFormData] = useState({
    workerName: "",
    serviceCategory: "",
    rating: "",
    title: "",
    review: "",
    wouldRecommend: ""
  });
  const [hoveredStar, setHoveredStar] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // This would typically connect to your backend API
    setTimeout(() => {
      toast({
        title: "Feedback Submitted!",
        description: "Thank you for your review. It helps other customers make informed decisions.",
      });
      setIsLoading(false);
      // Reset form
      setFormData({
        workerName: "",
        serviceCategory: "",
        rating: "",
        title: "",
        review: "",
        wouldRecommend: ""
      });
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleStarClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating: rating.toString() }));
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const starValue = index + 1;
      const isActive = starValue <= (hoveredStar || parseInt(formData.rating) || 0);
      
      return (
        <Star
          key={index}
          className={`h-8 w-8 cursor-pointer transition-colors ${
            isActive ? 'text-yellow-500 fill-current' : 'text-muted-foreground'
          }`}
          onMouseEnter={() => setHoveredStar(starValue)}
          onMouseLeave={() => setHoveredStar(0)}
          onClick={() => handleStarClick(starValue)}
        />
      );
    });
  };

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
            Leave Feedback
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Share your experience and help other customers make informed decisions
          </p>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="gradient-card border-border shadow-blue-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Rate Your Experience</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Your honest feedback helps us maintain quality standards and helps other customers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="workerName">Professional's Name</Label>
                        <Input
                          id="workerName"
                          name="workerName"
                          value={formData.workerName}
                          onChange={handleInputChange}
                          placeholder="Enter the professional's name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="serviceCategory">Service Category</Label>
                        <Select value={formData.serviceCategory} onValueChange={(value) => setFormData(prev => ({ ...prev, serviceCategory: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service category" />
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
                    </div>

                    <div className="space-y-3">
                      <Label>Overall Rating</Label>
                      <div className="flex items-center space-x-2">
                        {renderStars()}
                        {formData.rating && (
                          <span className="ml-4 text-muted-foreground">
                            {formData.rating} out of 5 stars
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="title">Review Title</Label>
                      <Input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="e.g., Excellent plumbing service"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="review">Detailed Review</Label>
                      <Textarea
                        id="review"
                        name="review"
                        value={formData.review}
                        onChange={handleInputChange}
                        placeholder="Share details about your experience - what went well, any issues, quality of work, timeliness, professionalism, etc."
                        rows={6}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="wouldRecommend">Would you recommend this professional?</Label>
                      <Select value={formData.wouldRecommend} onValueChange={(value) => setFormData(prev => ({ ...prev, wouldRecommend: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Would you recommend them?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes, definitely</SelectItem>
                          <SelectItem value="maybe">Maybe, with conditions</SelectItem>
                          <SelectItem value="no">No, I would not</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        className="w-full gradient-primary border-0 text-primary-foreground"
                        disabled={isLoading || !formData.rating}
                      >
                        {isLoading ? "Submitting Feedback..." : "Submit Feedback"}
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
                  <CardTitle className="text-lg text-foreground flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    Why Reviews Matter
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>• Help other customers make informed decisions</p>
                  <p>• Recognize excellent service providers</p>
                  <p>• Provide valuable feedback for improvement</p>
                  <p>• Build trust in our community</p>
                  <p>• Maintain quality standards</p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-border shadow-blue-md">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Review Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>• Be honest and specific about your experience</p>
                  <p>• Focus on the service quality and professionalism</p>
                  <p>• Avoid personal information or inappropriate content</p>
                  <p>• Consider both positive and constructive feedback</p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-border shadow-blue-md">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Having issues with your service experience? Our support team can help.
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

export default Feedback;