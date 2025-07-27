import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Shield, 
  Star, 
  MapPin,
  Filter,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Eye,
  Ban,
  UserCheck
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ViewWorkers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const { toast } = useToast();

  const workers = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      category: "Plumbing",
      rating: 4.9,
      reviews: 127,
      location: "New York, NY",
      joinDate: "2023-01-15",
      status: "verified",
      lastActive: "2 hours ago",
      totalJobs: 89,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      category: "Electrical",
      rating: 4.8,
      reviews: 93,
      location: "Brooklyn, NY",
      joinDate: "2023-03-22",
      status: "pending",
      lastActive: "1 day ago",
      totalJobs: 45,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b589?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Mike Davis",
      email: "mike.davis@email.com",
      category: "Home Repair",
      rating: 4.7,
      reviews: 156,
      location: "Queens, NY",
      joinDate: "2022-11-08",
      status: "verified",
      lastActive: "5 minutes ago",
      totalJobs: 234,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Lisa Chen",
      email: "lisa.chen@email.com",
      category: "Painting",
      rating: 4.9,
      reviews: 78,
      location: "Manhattan, NY",
      joinDate: "2023-05-10",
      status: "suspended",
      lastActive: "1 week ago",
      totalJobs: 67,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return <Badge className="bg-green-500 text-white"><CheckCircle className="h-3 w-3 mr-1" />Verified</Badge>;
      case "pending":
        return <Badge className="bg-yellow-500 text-white"><AlertTriangle className="h-3 w-3 mr-1" />Pending</Badge>;
      case "suspended":
        return <Badge className="bg-red-500 text-white"><XCircle className="h-3 w-3 mr-1" />Suspended</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const handleStatusChange = (workerId: number, newStatus: string) => {
    toast({
      title: "Status Updated",
      description: `Worker status has been changed to ${newStatus}.`,
    });
  };

  const filteredWorkers = workers.filter(worker => {
    const matchesSearch = worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         worker.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         worker.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || worker.status === statusFilter;
    const matchesCategory = !categoryFilter || worker.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center">
                <h1 className="text-xl font-bold text-primary">Connect Pro</h1>
              </Link>
              <Badge className="bg-red-500 text-white">
                <Shield className="h-3 w-3 mr-1" />
                Admin
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/admin/panel" className="text-foreground hover:text-primary transition-colors">Dashboard</Link>
              <Button variant="outline" size="sm">Logout</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="gradient-hero text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Workers Management
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Manage and monitor all professional service providers
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-card border-border shadow-blue-md mb-8">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    className="pl-10"
                    placeholder="Search workers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Statuses</SelectItem>
                    <SelectItem value="verified">Verified</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    <SelectItem value="Plumbing">Plumbing</SelectItem>
                    <SelectItem value="Electrical">Electrical</SelectItem>
                    <SelectItem value="Home Repair">Home Repair</SelectItem>
                    <SelectItem value="Painting">Painting</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Advanced Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Summary Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="gradient-card border-border shadow-blue-md">
              <CardContent className="p-6 text-center">
                <UserCheck className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">1,234</div>
                <div className="text-sm text-muted-foreground">Total Workers</div>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border shadow-blue-md">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">1,089</div>
                <div className="text-sm text-muted-foreground">Verified</div>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border shadow-blue-md">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">89</div>
                <div className="text-sm text-muted-foreground">Pending</div>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border shadow-blue-md">
              <CardContent className="p-6 text-center">
                <XCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">56</div>
                <div className="text-sm text-muted-foreground">Suspended</div>
              </CardContent>
            </Card>
          </div>

          {/* Workers List */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">
                Workers ({filteredWorkers.length})
              </h2>
              <Button className="gradient-primary border-0 text-primary-foreground">
                Export Data
              </Button>
            </div>

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
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{worker.name}</h3>
                          {getStatusBadge(worker.status)}
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-2 mb-3 text-sm text-muted-foreground">
                          <div>Email: {worker.email}</div>
                          <div>Category: {worker.category}</div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{worker.location}</span>
                          </div>
                          <div>Joined: {worker.joinDate}</div>
                        </div>
                        
                        <div className="flex items-center space-x-6 text-sm">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="font-medium text-foreground">{worker.rating}</span>
                            <span className="text-muted-foreground">({worker.reviews} reviews)</span>
                          </div>
                          <div className="text-muted-foreground">
                            {worker.totalJobs} jobs completed
                          </div>
                          <div className="text-muted-foreground">
                            Last active: {worker.lastActive}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex flex-col space-y-3 lg:w-48">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Select onValueChange={(value) => handleStatusChange(worker.id, value)}>
                          <SelectTrigger className="flex-1">
                            <SelectValue placeholder="Actions" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="verify">Verify Worker</SelectItem>
                            <SelectItem value="suspend">Suspend Account</SelectItem>
                            <SelectItem value="message">Send Message</SelectItem>
                            <SelectItem value="review">Review Profile</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      {worker.status === "pending" && (
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                            onClick={() => handleStatusChange(worker.id, "verify")}
                          >
                            Approve
                          </Button>
                          <Button 
                            size="sm" 
                            variant="destructive"
                            className="flex-1"
                            onClick={() => handleStatusChange(worker.id, "reject")}
                          >
                            Reject
                          </Button>
                        </div>
                      )}
                      
                      {worker.status === "suspended" && (
                        <Button 
                          size="sm" 
                          className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                          onClick={() => handleStatusChange(worker.id, "reactivate")}
                        >
                          Reactivate
                        </Button>
                      )}
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

export default ViewWorkers;