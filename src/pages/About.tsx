import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Users, Clock, Star } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "All professionals are thoroughly vetted and verified for your peace of mind."
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Quick response times and dependable service delivery, every time."
    },
    {
      icon: Star,
      title: "Quality",
      description: "Only the highest-rated professionals join our platform."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building lasting relationships between customers and service providers."
    }
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
              <Link to="/about" className="text-primary font-medium">About</Link>
              <Link to="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
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
            About Connect Pro
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            We're revolutionizing how people connect with professional service providers. 
            Our mission is to create a trusted marketplace where quality meets convenience.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Connect Pro was born from a simple idea: finding reliable service providers shouldn't be complicated or stressful. 
                Too many people struggle with unreliable contractors, unclear pricing, and poor communication.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We built a platform that prioritizes transparency, quality, and trust. Every professional on our platform 
                is carefully vetted, and every interaction is designed to give you confidence in your choice.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we're proud to connect thousands of customers with skilled professionals across multiple service categories, 
                making home and business maintenance easier than ever before.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at Connect Pro
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="gradient-card border-border shadow-blue-md text-center">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl text-foreground">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Built by a Dedicated Team
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Our team combines years of experience in technology, customer service, and the trades industry. 
            We understand both sides of the marketplace and work tirelessly to create the best experience for everyone.
          </p>
          
          {/* Project Lead */}
          <Card className="gradient-card border-border shadow-blue-lg mb-8 max-w-md mx-auto">
            <CardContent className="pt-6 text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">Umar Farooq</h3>
              <p className="text-primary font-semibold mb-2">Project Lead</p>
              <p className="text-muted-foreground">
                Leading the vision and development of Connect Pro to revolutionize how people connect with professional services.
              </p>
            </CardContent>
          </Card>

          <div className="bg-secondary/50 rounded-lg p-8">
            <p className="text-lg font-medium text-foreground mb-4">
              "We believe everyone deserves access to reliable, professional services. That's why we've built 
              Connect Pro to be more than just a platform—it's a community built on trust."
            </p>
            <p className="text-muted-foreground font-medium">— Umar Farooq, Project Lead</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands who trust Connect Pro for their service needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="gradient-primary border-0 text-primary-foreground">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;