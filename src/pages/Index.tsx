
import { Link } from "react-router-dom";
import { ArrowRight, Check, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-benry-navy to-benry-teal flex items-center justify-center">
                <span className="font-bold text-white text-xl">B</span>
              </div>
              <span className="font-bold text-xl text-benry-navy dark:text-white">
                BenryAutomation
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-benry-navy dark:text-white hover:text-benry-teal dark:hover:text-benry-teal font-medium">
                Log In
              </Link>
              <Link to="/signup" className="bg-benry-teal hover:bg-benry-teal/90 text-white px-4 py-2 rounded-md font-medium">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-benry-navy to-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Streamline Your Workforce with BenryAutomation
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Automate approval workflows, manage employees efficiently, and gain valuable insights with our intuitive employee management system.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/signup" className="btn-primary inline-flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link to="/demo" className="btn-secondary inline-flex items-center justify-center">
                  Watch Demo
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="BenryAutomation Dashboard" 
                className="rounded-lg shadow-xl max-w-full md:max-w-lg h-auto"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Powerful Features for Modern Businesses
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              BenryAutomation provides all the tools you need to manage your workforce efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card">
              <div className="mb-4 p-2 bg-benry-teal/10 text-benry-teal rounded-md w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                  <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hierarchical Management</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Organize employees into a structured hierarchy with customizable roles and permissions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-benry-teal mr-2" />
                  <span>Custom hierarchy setup</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-benry-teal mr-2" />
                  <span>Role-based permissions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-benry-teal mr-2" />
                  <span>Organizational chart</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="card">
              <div className="mb-4 p-2 bg-benry-teal/10 text-benry-teal rounded-md w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Approval Workflows</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Streamline request approvals with customizable workflows and notifications.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-benry-teal mr-2" />
                  <span>Multi-level approvals</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-benry-teal mr-2" />
                  <span>Real-time notifications</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-benry-teal mr-2" />
                  <span>Audit trail</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="card">
              <div className="mb-4 p-2 bg-benry-teal/10 text-benry-teal rounded-md w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Insightful Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Gain valuable insights with customizable reports and interactive dashboards.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-benry-teal mr-2" />
                  <span>Custom reports</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-benry-teal mr-2" />
                  <span>Visual dashboards</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-benry-teal mr-2" />
                  <span>Export capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="card border-2 border-gray-200 dark:border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium mb-2">Basic</h3>
                <div className="text-3xl font-bold">$9<span className="text-lg text-gray-500 font-normal">/month</span></div>
                <p className="text-sm text-gray-500 mt-2">per user</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check size={16} className="text-benry-teal mr-2" />
                  <span>Up to 10 employees</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-benry-teal mr-2" />
                  <span>Basic approval workflows</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-benry-teal mr-2" />
                  <span>Employee profiles</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-benry-teal mr-2" />
                  <span>Email notifications</span>
                </li>
              </ul>

              <div className="text-center">
                <Link to="/signup" className="btn-primary inline-block w-full">
                  Get Started
                </Link>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="card border-2 border-benry-teal relative transform scale-105 shadow-lg">
              <div className="absolute top-0 right-0 bg-benry-teal text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>

              <div className="text-center mb-6">
                <h3 className="text-lg font-medium mb-2">Pro</h3>
                <div className="text-3xl font-bold">$19<span className="text-lg text-gray-500 font-normal">/month</span></div>
                <p className="text-sm text-gray-500 mt-2">per user</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check size={16} className="text-benry-teal mr-2" />
                  <span>Up to 50 employees</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-benry-teal mr-2" />
                  <span>Advanced approval workflows</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-benry-teal mr-2" />
                  <span>Custom reports</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-benry-teal mr-2" />
                  <span>Analytics dashboard</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-benry-teal mr-2" />
                  <span>Priority support</span>
                </li>
              </ul>

              <div className="text-center">
                <Link to="/signup" className="btn-primary inline-block w-full">
                  Get Started
                </Link>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="card border-2 border-gray-200 dark:border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium mb-2">Enterprise</h3>
                <div className="text-3xl font-bold">$29<span className="text-lg text-gray-500 font-normal">/month</span></div>
                <p className="text-sm text-gray-500 mt-2">per user</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check size={16} className="text-benry-teal mr-2" />
                  <span>Unlimited employees</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-benry-teal mr-2" />
                  <span>Custom workflows</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-benry-teal mr-2" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-benry-teal mr-2" />
                  <span>White labeling</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-benry-teal mr-2" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-benry-teal mr-2" />
                  <span>API access</span>
                </li>
              </ul>

              <div className="text-center">
                <Link to="/contact" className="btn-primary inline-block w-full">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-benry-navy text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Workforce Management?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of businesses that have streamlined their operations with BenryAutomation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/signup" className="bg-benry-teal hover:bg-benry-teal/90 text-white font-medium py-3 px-6 rounded-md text-lg transition-colors duration-200">
              Start Free Trial
            </Link>
            <Link to="/demo" className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-md text-lg transition-colors duration-200">
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-md bg-gradient-to-br from-benry-navy to-benry-teal flex items-center justify-center">
                  <span className="font-bold text-white text-lg">B</span>
                </div>
                <span className="font-bold text-xl text-benry-navy dark:text-white">
                  BenryAutomation
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 max-w-xs">
                Automate Your Workforce, Elevate Your Business
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-benry-teal">Features</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-benry-teal">Pricing</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-benry-teal">Integrations</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-benry-teal">Roadmap</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-benry-teal">Documentation</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-benry-teal">Guides</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-benry-teal">API</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-benry-teal">Support</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-benry-teal">About</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-benry-teal">Blog</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-benry-teal">Careers</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-benry-teal">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
              © 2025 BenryAutomation. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-benry-teal">Privacy Policy</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-benry-teal">Terms of Service</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-benry-teal">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
