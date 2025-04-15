
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  Users, 
  ClipboardList, 
  CheckCircle, 
  AlertCircle,
  CircleUser,
  Clock,
  Plus
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import RequestsList from "@/components/dashboard/RequestsList";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Sample data for the dashboard
const pendingRequests = [
  { id: "REQ001", type: "Leave Request", submitter: "John Doe", date: "2025-04-15", status: "Pending" as const },
  { id: "REQ002", type: "Expense Claim", submitter: "Jane Smith", date: "2025-04-14", status: "Pending" as const },
  { id: "REQ003", type: "Task Update", submitter: "Robert Brown", date: "2025-04-13", status: "Pending" as const },
];

const recentRequests = [
  { id: "REQ000", type: "Leave Request", submitter: "You", date: "2025-04-12", status: "Approved" as const },
  { id: "REQ004", type: "Task Update", submitter: "You", date: "2025-04-11", status: "Rejected" as const },
  { id: "REQ005", type: "Expense Claim", submitter: "You", date: "2025-04-10", status: "Approved" as const },
];

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [userRole, setUserRole] = useState<"Worker" | "Supervisor" | "Incharge" | "Manager" | "MD">("Worker");
  const { toast } = useToast();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to simulate role switching (for demo purposes)
  const changeRole = (role: "Worker" | "Supervisor" | "Incharge" | "Manager" | "MD") => {
    setUserRole(role);
    toast({
      title: "Role Changed",
      description: `You are now viewing the dashboard as a ${role}`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} userRole={userRole} />
        
        <main className={`flex-1 p-4 md:p-6 transition-all duration-300 ${isSidebarOpen ? "md:ml-64" : "md:ml-20"}`}>
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">Welcome Back, Alex!</h1>
            <p className="text-gray-600 dark:text-gray-300">Here's what's happening with your workflow today.</p>
          </div>

          {/* Role Switcher for demo purposes */}
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md dark:bg-yellow-900/30 dark:border-yellow-700">
            <p className="text-yellow-800 dark:text-yellow-200 mb-2">Demo Mode: Select a role to view different dashboards</p>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={userRole === "Worker" ? "default" : "outline"} 
                size="sm" 
                onClick={() => changeRole("Worker")}
              >
                Worker
              </Button>
              <Button 
                variant={userRole === "Supervisor" ? "default" : "outline"} 
                size="sm" 
                onClick={() => changeRole("Supervisor")}
              >
                Supervisor
              </Button>
              <Button 
                variant={userRole === "Manager" ? "default" : "outline"} 
                size="sm" 
                onClick={() => changeRole("Manager")}
              >
                Manager
              </Button>
              <Button 
                variant={userRole === "MD" ? "default" : "outline"} 
                size="sm" 
                onClick={() => changeRole("MD")}
              >
                MD
              </Button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            <StatCard 
              title="Team Members" 
              value="12" 
              icon={<Users size={20} />} 
              description="2 pending invitations"
            />
            <StatCard 
              title="Pending Requests" 
              value="5" 
              icon={<ClipboardList size={20} />} 
              trend={{ value: 20, isPositive: false }}
              description="vs last week"
            />
            <StatCard 
              title="Approved Requests" 
              value="18" 
              icon={<CheckCircle size={20} />} 
              trend={{ value: 10, isPositive: true }}
              description="vs last week"
            />
            <StatCard 
              title="Rejected Requests" 
              value="3" 
              icon={<AlertCircle size={20} />} 
              trend={{ value: 5, isPositive: false }}
              description="vs last week"
            />
          </div>

          {/* MD/Manager Specific - Quick Charts */}
          {(userRole === "MD" || userRole === "Manager") && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Performance Overview</h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                <div className="h-64 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <BarChart3 size={48} className="mx-auto mb-2 opacity-50" />
                    <p>Interactive charts would appear here in the full implementation</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Worker's View - My Activity */}
            {userRole === "Worker" && (
              <>
                <div className="lg:col-span-3">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">My Actions</h2>
                    <Link to="/requests/new">
                      <Button className="text-white bg-benry-teal hover:bg-benry-teal/90">
                        <Plus size={16} className="mr-1" /> New Request
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Link to="/requests/leave" className="card hover:scale-105 transition-transform">
                        <div className="flex items-center">
                          <div className="p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full mr-4">
                            <Clock size={24} />
                          </div>
                          <div>
                            <h3 className="font-medium">Request Leave</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Time off & vacation</p>
                          </div>
                        </div>
                      </Link>
                      <Link to="/requests/expense" className="card hover:scale-105 transition-transform">
                        <div className="flex items-center">
                          <div className="p-3 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-receipt">
                              <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/>
                              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
                              <path d="M12 17.5v-11"/>
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium">Expense Claim</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Submit reimbursements</p>
                          </div>
                        </div>
                      </Link>
                      <Link to="/requests/task" className="card hover:scale-105 transition-transform">
                        <div className="flex items-center">
                          <div className="p-3 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-list">
                              <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
                              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                              <path d="M12 11h4"/>
                              <path d="M12 16h4"/>
                              <path d="M8 11h.01"/>
                              <path d="M8 16h.01"/>
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium">Task Update</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Report project status</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                  <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                    <RequestsList requests={recentRequests} type="recent" userRole={userRole} />
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">My Profile</h2>
                  <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                    <div className="text-center mb-4">
                      <div className="inline-block p-1 rounded-full bg-gray-100 dark:bg-gray-700">
                        <div className="h-24 w-24 rounded-full bg-benry-navy/20 flex items-center justify-center">
                          <CircleUser size={64} className="text-benry-navy dark:text-benry-teal" />
                        </div>
                      </div>
                      <h3 className="text-lg font-medium mt-2">Alex Johnson</h3>
                      <p className="text-gray-600 dark:text-gray-400">Software Developer</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Department:</span>
                        <span className="font-medium">Engineering</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Reports to:</span>
                        <span className="font-medium">Jane Smith</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Location:</span>
                        <span className="font-medium">San Francisco</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Joined:</span>
                        <span className="font-medium">Jan 15, 2024</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <Link to="/profile">
                        <Button variant="outline" className="w-full">
                          View Full Profile
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Supervisor/Manager/MD View - Approvals */}
            {(userRole === "Supervisor" || userRole === "Manager" || userRole === "MD" || userRole === "Incharge") && (
              <>
                <div className="lg:col-span-2">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Pending Approvals</h2>
                    <Link to="/approvals">
                      <Button variant="outline" size="sm">
                        View All
                      </Button>
                    </Link>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                    <RequestsList requests={pendingRequests} type="pending" userRole={userRole} />
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Team Performance</h2>
                  <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Tasks Completed</span>
                          <span className="text-sm font-medium">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                          <div className="bg-benry-teal h-2 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Attendance Rate</span>
                          <span className="text-sm font-medium">92%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                          <div className="bg-benry-teal h-2 rounded-full" style={{ width: "92%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Response Time</span>
                          <span className="text-sm font-medium">76%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                          <div className="bg-benry-teal h-2 rounded-full" style={{ width: "76%" }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <Link to="/team">
                        <Button variant="outline" className="w-full">
                          View Team Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
