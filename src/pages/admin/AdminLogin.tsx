import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Shield } from "lucide-react";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // This would typically connect to your backend API with admin authentication
    setTimeout(() => {
      toast({
        title: "Admin Access Granted",
        description: "Welcome to the Connect Pro admin panel.",
      });
      setIsLoading(false);
      // Redirect to admin panel
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="inline-block">
            <h1 className="text-2xl font-bold text-primary">Connect Pro</h1>
          </Link>
          <div className="mt-6 flex items-center justify-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Admin Access</h2>
          </div>
          <p className="mt-2 text-muted-foreground">
            Secure administrator login portal
          </p>
        </div>

        {/* Security Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <Badge className="bg-amber-500 text-white">
              Restricted Access
            </Badge>
          </div>
          <p className="text-sm text-amber-800 mt-2">
            This area is restricted to authorized administrators only. All access attempts are logged and monitored.
          </p>
        </div>

        {/* Login Form */}
        <Card className="gradient-card border-border shadow-blue-lg">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Administrator Sign In</CardTitle>
            <CardDescription className="text-muted-foreground">
              Enter your administrator credentials to access the admin panel
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Administrator Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="admin@connectpro.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your admin password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                    Keep me signed in
                  </label>
                </div>
                <Link
                  to="#"
                  className="text-sm text-primary hover:text-primary-dark transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full gradient-primary border-0 text-primary-foreground"
                disabled={isLoading}
              >
                {isLoading ? "Authenticating..." : "Sign In to Admin Panel"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link
                to="/login"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to User Login
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Security Features */}
        <Card className="gradient-card border-border shadow-blue-md">
          <CardContent className="p-4">
            <h3 className="font-semibold text-foreground mb-3">Security Features</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span>Two-factor authentication enabled</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span>Session timeout protection</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span>Access logging and monitoring</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span>Encrypted data transmission</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Support */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Need technical support?{" "}
            <Link
              to="/contact"
              className="text-primary hover:text-primary-dark transition-colors"
            >
              Contact IT Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;