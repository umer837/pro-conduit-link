import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle, 
  Clock, 
  MapPin, 
  DollarSign, 
  Star,
  MessageCircle,
  Phone,
  Mail,
  Calendar,
  AlertCircle
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const RequestReview = () => {
  const [selectedProposal, setSelectedProposal] = useState<number | null>(null);
  const { toast } = useToast();

  // Mock request data
  const request = {
    id: "REQ-001",
    title: "Kitchen sink repair needed",
    category: "Plumbing",
    description: "My kitchen sink is leaking underneath and the faucet is dripping. Need professional repair.",
    location: "Brooklyn, NY 11201",
    budget: "$100-300",
    timeline: "This week",
    urgency: "medium",
    status: "open",
    createdAt: "2 days ago",
    views: 12,
    proposalCount: 3
  };

  // Mock proposals data
  const proposals = [
    {
      id: 1,
      workerName: "John Smith",
      rating: 4.9,
      reviews: 127,
      experience: "8 years",
      price: "$150",
      timeline: "Tomorrow",
      message: "I can fix your kitchen sink issue quickly and efficiently. I have all the necessary tools and parts in my van. The problem sounds like it could be a loose connection under the sink and a worn washer in the faucet. I offer a 1-year warranty on all repairs.",
      verified: true,
      availability: "Available today",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      workerName: "Mike Johnson", 
      rating: 4.7,
      reviews: 89,
      experience: "12 years",
      price: "$200",
      timeline: "This afternoon",
      message: "Hello! I'm a licensed plumber with over 12 years of experience. I can diagnose and fix your sink issues today. Based on your description, this sounds like a straightforward repair that I can complete in 1-2 hours. I provide detailed estimates and clean up after all work.",
      verified: true,
      availability: "Available in 2 hours",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      workerName: "Dave Wilson",
      rating: 4.8,
      reviews: 156,
      experience: "6 years",
      price: "$125",
      timeline: "Tomorrow morning",
      message: "I specialize in kitchen plumbing repairs and can help you with your sink problem. I'll bring all necessary parts and tools. I offer competitive pricing and guarantee all my work. I can also check your other plumbing while I'm there at no extra charge.",
      verified: true,
      availability: "Available tomorrow",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const handleAcceptProposal = (proposalId: number) => {
    setSelectedProposal(proposalId);
    toast({
      title: "Proposal Accepted!",
      description: "The professional has been notified and will contact you shortly.",
    });
  };

  const handleContactWorker = (workerName: string, method: string) => {
    toast({
      title: `Contacting ${workerName}`,
      description: `Opening ${method} to reach out to the professional.`,
    });
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Service Request Review
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Review proposals and choose the best professional for your needs
              </p>
            </div>
            <Badge className="bg-green-500 text-white text-lg px-3 py-1">
              {request.proposalCount} Proposals
            </Badge>
          </div>
        </div>
      </section>

      {/* Request Details */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-card border-border shadow-blue-md mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl text-foreground">{request.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Request ID: {request.id} • Posted {request.createdAt}
                  </CardDescription>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <div>{request.views} views</div>
                  <div>{request.proposalCount} proposals</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">{request.category}</Badge>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{request.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <DollarSign className="h-4 w-4" />
                  <span>{request.budget}</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{request.timeline}</span>
                </div>
              </div>
              <p className="text-foreground">{request.description}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Proposals */}
      <section className="pb-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Professional Proposals</h2>
          
          <div className="space-y-6">
            {proposals.map((proposal) => (
              <Card key={proposal.id} className={`gradient-card border-border shadow-blue-lg transition-all duration-300 ${selectedProposal === proposal.id ? 'ring-2 ring-primary' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    {/* Worker Info */}
                    <div className="flex items-start space-x-4 flex-1">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={proposal.avatar} alt={proposal.workerName} />
                        <AvatarFallback>{proposal.workerName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl font-semibold text-foreground">{proposal.workerName}</h3>
                          {proposal.verified && (
                            <CheckCircle className="h-5 w-5 text-primary" />
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="font-medium text-foreground">{proposal.rating}</span>
                            <span>({proposal.reviews} reviews)</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{proposal.experience} experience</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 mb-4">
                          <Badge className="bg-green-500 text-white">
                            {proposal.availability}
                          </Badge>
                          <div className="text-lg font-semibold text-primary">
                            {proposal.price}
                          </div>
                          <div className="text-muted-foreground">
                            Can start: {proposal.timeline}
                          </div>
                        </div>
                        
                        <div className="bg-secondary/30 rounded-lg p-4 mb-4">
                          <h4 className="font-medium text-foreground mb-2">Proposal Message:</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {proposal.message}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex flex-col space-y-3 lg:w-48">
                      {selectedProposal === proposal.id ? (
                        <div className="space-y-3">
                          <Badge className="bg-green-500 text-white w-full text-center py-2">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Accepted
                          </Badge>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full"
                            onClick={() => handleContactWorker(proposal.workerName, "phone")}
                          >
                            <Phone className="h-4 w-4 mr-2" />
                            Call Now
                          </Button>
                        </div>
                      ) : (
                        <Button 
                          className="w-full gradient-primary border-0 text-primary-foreground"
                          onClick={() => handleAcceptProposal(proposal.id)}
                          disabled={selectedProposal !== null}
                        >
                          Accept Proposal
                        </Button>
                      )}
                      
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleContactWorker(proposal.workerName, "message")}
                        >
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleContactWorker(proposal.workerName, "email")}
                        >
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <Link to={`/worker/profile/view?id=${proposal.id}`}>
                        <Button variant="outline" size="sm" className="w-full">
                          View Full Profile
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Help Section */}
          <Card className="gradient-card border-border shadow-blue-md mt-8">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Need help choosing?</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Consider factors like rating, experience, price, and availability. You can also contact professionals directly to ask questions before accepting a proposal.
                  </p>
                  <div className="flex space-x-4">
                    <Link to="/contact">
                      <Button variant="outline" size="sm">
                        Contact Support
                      </Button>
                    </Link>
                    <Link to="/request/edit/1">
                      <Button variant="outline" size="sm">
                        Edit Request
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default RequestReview;