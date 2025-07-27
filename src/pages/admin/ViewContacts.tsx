import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

const ViewContacts = () => {
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
          <h1 className="text-3xl font-bold">Contact Messages</h1>
        </div>
      </section>
    </div>
  );
};

export default ViewContacts;