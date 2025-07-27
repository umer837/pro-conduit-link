import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  FileText, 
  MessageSquare, 
  Shield, 
  TrendingUp, 
  AlertTriangle,
  Settings,
  BarChart3,
  UserCheck,
  Clock
} from "lucide-react";

const AdminPanel = () => {
  const stats = [
    {
      title: "Total Users",
      value: "2,847",
      change: "+12%",
      changeType: "positive" as const,
      icon: Users
    },
    {
      title: "Active Workers",
      value: "1,234",
      change: "+8%",
      changeType: "positive" as const,
      icon: UserCheck
    },
    {
      title: "Service Requests",
      value: "5,691",
      change: "+23%",
      changeType: "positive" as const,
      icon: FileText
    },
    {
      title: "Pending Reviews",
      value: "89",
      change: "-5%",
      changeType: "negative" as const,
      icon: Clock
    }
  ];

  const quickActions = [
    {
      title: "View Workers",
      description: "Manage professional accounts and verifications",
      icon: Users,
      link: "/admin/view-workers",
      color: "bg-blue-500"
    },
    {
      title: "Service Requests",
      description: "Monitor and manage all service requests",
      icon: FileText,
      link: "/admin/view-requests",
      color: "bg-green-500"
    },
    {
      title: "Contact Messages",
      description: "Review customer inquiries and support tickets",
      icon: MessageSquare,
      link: "/admin/view-contacts",
      color: "bg-purple-500"
    },
    {
      title: "System Settings",
      description: "Configure platform settings and preferences",
      icon: Settings,
      link: "#",
      color: "bg-gray-500"
    }
  ];

  const recentActivity = [
    {
      type: "user_registration",
      message: "New user registered: Sarah Johnson",
      time: "2 minutes ago",
      severity: "info"
    },
    {
      type: "worker_verification",
      message: "Worker verification pending: Mike Davis",
      time: "15 minutes ago",
      severity: "warning"
    },
    {
      type: "service_completed",
      message: "Service request #REQ-445 completed successfully",
      time: "1 hour ago",
      severity: "success"
    },
    {
      type: "security_alert",
      message: "Multiple failed login attempts detected",
      time: "2 hours ago",
      severity: "error"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "success": return "text-green-600";
      case "warning": return "text-yellow-600";
      case "error": return "text-red-600";
      default: return "text-blue-600";
    }
  };

  const getSeverityBg = (severity: string) => {
    switch (severity) {
      case "success": return "bg-green-100";
      case "warning": return "bg-yellow-100";
      case "error": return "bg-red-100";
      default: return "bg-blue-100";
    }
  };

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
              <span className="text-sm text-muted-foreground">Welcome, Admin</span>
              <Button variant="outline" size="sm">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Header */}
      <section className="gradient-hero text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Admin Dashboard
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Platform management and oversight center
          </p>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="gradient-card border-border shadow-blue-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className={`text-sm ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'} flex items-center mt-1`}>
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {stat.change} from last month
                      </p>
                    </div>
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quick Actions */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {quickActions.map((action, index) => (
                  <Link key={index} to={action.link}>
                    <Card className="gradient-card border-border shadow-blue-md hover:shadow-blue-lg transition-all duration-300 group cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-lg ${action.color} text-white group-hover:scale-110 transition-transform`}>
                            <action.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">{action.title}</h3>
                            <p className="text-sm text-muted-foreground">{action.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Platform Analytics */}
              <Card className="gradient-card border-border shadow-blue-lg mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Platform Analytics
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Key performance metrics and trends
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">94.2%</div>
                      <div className="text-sm text-muted-foreground">Platform Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">4.8/5</div>
                      <div className="text-sm text-muted-foreground">Average Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">2.3s</div>
                      <div className="text-sm text-muted-foreground">Avg Response Time</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Recent Activity</h2>
              <Card className="gradient-card border-border shadow-blue-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">System Activity</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Latest platform events and notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className={`p-3 rounded-lg ${getSeverityBg(activity.severity)}`}>
                        <div className="flex items-start space-x-3">
                          <div className={`h-2 w-2 rounded-full mt-2 ${getSeverityColor(activity.severity).replace('text-', 'bg-')}`}></div>
                          <div className="flex-1">
                            <p className="text-sm text-foreground font-medium">{activity.message}</p>
                            <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Activity
                  </Button>
                </CardContent>
              </Card>

              {/* System Status */}
              <Card className="gradient-card border-border shadow-blue-md mt-6">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">System Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground">Database</span>
                      <Badge className="bg-green-500 text-white">Operational</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground">API Services</span>
                      <Badge className="bg-green-500 text-white">Operational</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground">File Storage</span>
                      <Badge className="bg-yellow-500 text-white">Degraded</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground">Email Service</span>
                      <Badge className="bg-green-500 text-white">Operational</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminPanel;