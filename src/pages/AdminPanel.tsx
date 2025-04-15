
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  UserPlus, 
  Settings, 
  Building, 
  Shield, 
  Users, 
  Database,
  AlertTriangle,
  Activity
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

const AdminPanel = () => {
  const [userRole] = useState<"Worker" | "Supervisor" | "Incharge" | "Manager" | "MD">("MD");
  
  return (
    <Layout userRole={userRole}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Admin Panel</h1>
            <p className="text-sm text-gray-500">Manage system settings and organization data</p>
          </div>
        </div>

        <Tabs defaultValue="organization" className="w-full">
          <TabsList className="w-full max-w-3xl grid grid-cols-4 mb-8">
            <TabsTrigger value="organization">
              <Building size={16} className="mr-2" /> Organization
            </TabsTrigger>
            <TabsTrigger value="users">
              <Users size={16} className="mr-2" /> Users
            </TabsTrigger>
            <TabsTrigger value="roles">
              <Shield size={16} className="mr-2" /> Roles
            </TabsTrigger>
            <TabsTrigger value="system">
              <Database size={16} className="mr-2" /> System
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="organization" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Organization Details</CardTitle>
                <CardDescription>Update your organization information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Organization Name</label>
                      <Input placeholder="BenryAutomation Inc." />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Industry</label>
                      <Input placeholder="Technology" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input placeholder="contact@benryautomation.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone</label>
                      <Input placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Address</label>
                    <Textarea placeholder="123 Business St, Suite 100, City, State, Country" />
                  </div>
                  <Button className="bg-benry-teal hover:bg-benry-teal/90">Save Changes</Button>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Departments</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Department Name</TableHead>
                        <TableHead>Head</TableHead>
                        <TableHead>Employees</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Engineering</TableCell>
                        <TableCell>Alex Johnson</TableCell>
                        <TableCell>24</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">Edit</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Marketing</TableCell>
                        <TableCell>Sarah Williams</TableCell>
                        <TableCell>12</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">Edit</Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Button className="mt-4" variant="outline">
                    <Building size={16} className="mr-2" /> Add Department
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Add, edit, or remove system users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="relative max-w-sm">
                    <Input placeholder="Search users..." className="pl-10" />
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                  <Button className="bg-benry-teal hover:bg-benry-teal/90">
                    <UserPlus size={16} className="mr-2" /> Add User
                  </Button>
                </div>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell>john.doe@example.com</TableCell>
                      <TableCell>Worker</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Active</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">Edit</Button>
                          <Button variant="ghost" size="sm">Deactivate</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell>jane.smith@example.com</TableCell>
                      <TableCell>Supervisor</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Active</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">Edit</Button>
                          <Button variant="ghost" size="sm">Deactivate</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="roles" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Role Management</CardTitle>
                <CardDescription>Configure role permissions and hierarchy</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Role Name</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Users</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Worker</TableCell>
                      <TableCell>Basic access to submit requests and view own data</TableCell>
                      <TableCell>42</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">Edit Permissions</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Supervisor</TableCell>
                      <TableCell>Can approve worker requests and manage team</TableCell>
                      <TableCell>12</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">Edit Permissions</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Incharge</TableCell>
                      <TableCell>Department-level oversight and approval</TableCell>
                      <TableCell>5</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">Edit Permissions</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Manager</TableCell>
                      <TableCell>Cross-department management and reporting</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">Edit Permissions</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>MD</TableCell>
                      <TableCell>Full system access and administrative control</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">Edit Permissions</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="system" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>Configure global system parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Email Configuration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">SMTP Server</label>
                      <Input placeholder="smtp.example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Port</label>
                      <Input placeholder="587" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Username</label>
                      <Input placeholder="notifications@benryautomation.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Password</label>
                      <Input type="password" placeholder="••••••••" />
                    </div>
                  </div>
                  <Button className="bg-benry-teal hover:bg-benry-teal/90">Save Email Settings</Button>
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="text-lg font-medium mb-4">System Maintenance</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                      <div className="flex items-center">
                        <AlertTriangle size={20} className="text-yellow-600 mr-4" />
                        <div>
                          <h4 className="font-medium">Database Backup</h4>
                          <p className="text-sm text-gray-600">Last backup: 2025-04-14 02:00 AM</p>
                        </div>
                      </div>
                      <Button variant="outline">Run Backup Now</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-md">
                      <div className="flex items-center">
                        <Activity size={20} className="text-blue-600 mr-4" />
                        <div>
                          <h4 className="font-medium">System Status</h4>
                          <p className="text-sm text-gray-600">All systems operational</p>
                        </div>
                      </div>
                      <Button variant="outline">View System Logs</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AdminPanel;
