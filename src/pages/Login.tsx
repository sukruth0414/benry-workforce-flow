
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login - in a real app, this would be an API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success",
        description: "You have been logged in successfully.",
      });
      
      // In a real app, redirect to dashboard after successful login
      // For now, we'll just navigate to the dashboard page
      window.location.href = "/dashboard";
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-block">
            <div className="h-12 w-12 rounded-md bg-gradient-to-br from-benry-navy to-benry-teal flex items-center justify-center mx-auto">
              <span className="font-bold text-white text-2xl">B</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold text-benry-navy dark:text-white">BenryAutomation</h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Log in to your account</p>
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Tenant Selector - shown on public logins */}
            <div className="space-y-2">
              <Label htmlFor="tenant">Organization</Label>
              <div className="relative">
                <Input
                  id="tenant"
                  name="tenant"
                  type="text"
                  placeholder="your-company"
                  className="pl-4 pr-24"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-500">.benryautomation.com</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Enter your organization's subdomain
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-sm text-benry-teal hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <Button 
                type="submit" 
                className="w-full bg-benry-teal hover:bg-benry-teal/90" 
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Log in"}
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Don't have an account?{" "}
              <Link to="/signup" className="text-benry-teal hover:underline">
                Start a free trial
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2025 BenryAutomation. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
