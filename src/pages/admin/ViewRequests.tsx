import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, MapPin, DollarSign } from "lucide-react";

const ViewRequests = () => {
  const requests = [
    { id: 1, title: "Kitchen sink repair", category: "Plumbing", status: "open", budget: "$100-300", location: "Brooklyn, NY" },
    { id: 2, title: "Electrical wiring", category: "Electrical", status: "in-progress", budget: "$200-500", location: "Queens, NY" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center">
                <h1 className="text-xl font-bold text-primary">Connect Pro</h1>
              </Link>
              <Badge className="bg-red-500 text-white">
                <Shield className="h-3 w-3 mr-1" />Admin
              </Badge>
            </div>
            <Link to="/admin/panel" className="text-foreground hover:text-primary">Dashboard</Link>
          </div>
        </div>
      </nav>

      <section className="gradient-hero text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">Service Requests Management</h1>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {requests.map((request) => (
            <Card key={request.id} className="gradient-card border-border shadow-blue-md mb-4">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-foreground">{request.title}</h3>
                    <div className="flex space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center"><FileText className="h-4 w-4 mr-1" />{request.category}</span>
                      <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" />{request.location}</span>
                      <span className="flex items-center"><DollarSign className="h-4 w-4 mr-1" />{request.budget}</span>
                    </div>
                  </div>
                  <Badge className={request.status === 'open' ? 'bg-green-500' : 'bg-blue-500'}>{request.status}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ViewRequests;