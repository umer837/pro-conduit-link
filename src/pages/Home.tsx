import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Shield, Star, Wrench, Home as HomeIcon, Zap } from "lucide-react";
import StaticNavbar from "@/components/StaticNavbar";

const Home = () => {
  const services = [
    { icon: Wrench, title: "Plumbing", description: "Expert plumbers for all your needs" },
    { icon: Zap, title: "Electrical", description: "Licensed electricians available 24/7" },
    { icon: HomeIcon, title: "Home Repair", description: "General maintenance and repairs" },
  ];

  const stats = [
    { icon: Users, number: "10,000+", label: "Trusted Professionals" },
    { icon: Shield, number: "99.9%", label: "Success Rate" },
    { icon: Star, number: "4.9/5", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <StaticNavbar />

      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Connect with Professional
            <span className="block">Service Providers</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Find trusted professionals for all your service needs. Fast, reliable, and secure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-primary">
                Find Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/worker/register">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Join as Professional
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get connected with verified professionals across various service categories
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="gradient-card border-border shadow-blue-md hover:shadow-blue-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Link to="/services">
                    <Button variant="outline" className="w-full">
                      View Professionals
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of satisfied customers who trust Connect Pro for their service needs.
          </p>
          <Link to="/register">
            <Button size="lg" className="gradient-primary border-0 text-primary-foreground">
              Start Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect Pro</h3>
              <p className="text-primary-foreground/80">Connecting you with trusted professionals.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><Link to="/services" className="hover:text-primary-foreground transition-colors">All Services</Link></li>
                <li><Link to="/search-workers" className="hover:text-primary-foreground transition-colors">Find Workers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About</Link></li>
                <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><Link to="/register" className="hover:text-primary-foreground transition-colors">Sign Up</Link></li>
                <li><Link to="/login" className="hover:text-primary-foreground transition-colors">Login</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2024 Connect Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;