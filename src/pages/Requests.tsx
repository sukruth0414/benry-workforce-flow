
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Requests = () => {
  const navigate = useNavigate();
  const [userRole] = useState<"Worker" | "Supervisor" | "Incharge" | "Manager" | "MD">("Supervisor");
  
  return (
    <Layout userRole={userRole}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Requests</h1>
          <Button onClick={() => navigate("/requests/new")} className="bg-benry-teal hover:bg-benry-teal/90">
            <Plus size={16} className="mr-2" /> New Request
          </Button>
        </div>

        <Tabs defaultValue="my-requests" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
            <TabsTrigger value="my-requests">My Requests</TabsTrigger>
            {userRole !== "Worker" && (
              <TabsTrigger value="pending-approvals">Pending Approvals</TabsTrigger>
            )}
            <TabsTrigger value="all-requests">All Requests</TabsTrigger>
          </TabsList>
          
          <TabsContent value="my-requests" className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">Recent Requests</h2>
                <Button variant="outline" size="sm">
                  <Clock size={16} className="mr-2" /> View All
                </Button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-4 py-3">ID</th>
                      <th className="px-4 py-3">Type</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b dark:border-gray-700">
                      <td className="px-4 py-3">REQ-001</td>
                      <td className="px-4 py-3">Leave</td>
                      <td className="px-4 py-3">2025-04-10</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                      </td>
                      <td className="px-4 py-3">
                        <Button variant="ghost" size="sm">
                          <FileText size={16} className="mr-2" /> View
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b dark:border-gray-700">
                      <td className="px-4 py-3">REQ-002</td>
                      <td className="px-4 py-3">Expense</td>
                      <td className="px-4 py-3">2025-04-08</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Approved</span>
                      </td>
                      <td className="px-4 py-3">
                        <Button variant="ghost" size="sm">
                          <FileText size={16} className="mr-2" /> View
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
          
          {userRole !== "Worker" && (
            <TabsContent value="pending-approvals" className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h2 className="text-lg font-medium mb-4">Requests Awaiting Your Approval</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-4 py-3">ID</th>
                        <th className="px-4 py-3">Submitter</th>
                        <th className="px-4 py-3">Type</th>
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-gray-700">
                        <td className="px-4 py-3">REQ-003</td>
                        <td className="px-4 py-3">John Doe</td>
                        <td className="px-4 py-3">Leave</td>
                        <td className="px-4 py-3">2025-04-12</td>
                        <td className="px-4 py-3">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" className="text-green-600 hover:text-green-700 border-green-600 hover:border-green-700">Approve</Button>
                            <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 border-red-600 hover:border-red-700">Reject</Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          )}
          
          <TabsContent value="all-requests" className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-lg font-medium mb-4">All Requests</h2>
              <p className="text-sm text-gray-500">View and search through all request history.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Requests;
