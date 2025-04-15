
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Bell, Shield, User, Lock, Globe, Moon, Palette } from "lucide-react";

const Settings = () => {
  const [userRole] = useState<"Worker" | "Supervisor" | "Incharge" | "Manager" | "MD">("Worker");
  
  return (
    <Layout userRole={userRole}>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-sm text-gray-500">Manage your account preferences and settings</p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="w-full max-w-md grid grid-cols-3 mb-8">
            <TabsTrigger value="profile">
              <User size={16} className="mr-2" /> Profile
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell size={16} className="mr-2" /> Notifications
            </TabsTrigger>
            <TabsTrigger value="appearance">
              <Palette size={16} className="mr-2" /> Appearance
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your profile details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-2xl font-bold">
                    JD
                  </div>
                  <Button variant="outline">Change Avatar</Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="displayName">Display Name</Label>
                    <Input id="displayName" placeholder="John" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button className="bg-benry-teal hover:bg-benry-teal/90">Save Changes</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Security</CardTitle>
                <CardDescription>Manage your password and security settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" placeholder="••••••••" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" placeholder="••••••••" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" placeholder="••••••••" />
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Button className="bg-benry-teal hover:bg-benry-teal/90">
                      <Lock size={16} className="mr-2" /> Update Password
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Email Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between py-2">
                      <div>
                        <p className="font-medium">Request Updates</p>
                        <p className="text-sm text-gray-500">Receive notifications when your requests are updated</p>
                      </div>
                      <div>
                        <input type="checkbox" id="request-updates" className="w-4 h-4" defaultChecked />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-2 border-t">
                      <div>
                        <p className="font-medium">Approval Requests</p>
                        <p className="text-sm text-gray-500">Get notified when there are requests waiting for your approval</p>
                      </div>
                      <div>
                        <input type="checkbox" id="approval-requests" className="w-4 h-4" defaultChecked />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-2 border-t">
                      <div>
                        <p className="font-medium">System Announcements</p>
                        <p className="text-sm text-gray-500">Important updates about BenryAutomation</p>
                      </div>
                      <div>
                        <input type="checkbox" id="system-announcements" className="w-4 h-4" defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-medium pt-4">Push Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between py-2">
                      <div>
                        <p className="font-medium">Browser Notifications</p>
                        <p className="text-sm text-gray-500">Allow desktop notifications when your browser is open</p>
                      </div>
                      <div>
                        <input type="checkbox" id="browser-notifications" className="w-4 h-4" defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="bg-benry-teal hover:bg-benry-teal/90">Save Notification Settings</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Display Settings</CardTitle>
                <CardDescription>Customize how BenryAutomation looks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Theme</h3>
                    <div className="flex items-center space-x-4">
                      <Moon size={20} className="text-gray-500" />
                      <div className="flex-1">
                        <p className="font-medium">Dark Mode</p>
                        <p className="text-sm text-gray-500">Toggle between light and dark themes</p>
                      </div>
                      <ThemeToggle />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Language</h3>
                    <div className="flex items-center space-x-4">
                      <Globe size={20} className="text-gray-500" />
                      <div className="flex-1">
                        <p className="font-medium">Interface Language</p>
                        <p className="text-sm text-gray-500">Select your preferred language</p>
                      </div>
                      <select className="border rounded-md p-2">
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Accessibility</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between py-2">
                        <div>
                          <p className="font-medium">High Contrast Mode</p>
                          <p className="text-sm text-gray-500">Increase contrast for better readability</p>
                        </div>
                        <div>
                          <input type="checkbox" id="high-contrast" className="w-4 h-4" />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between py-2 border-t">
                        <div>
                          <p className="font-medium">Large Text</p>
                          <p className="text-sm text-gray-500">Increase text size across the application</p>
                        </div>
                        <div>
                          <input type="checkbox" id="large-text" className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="bg-benry-teal hover:bg-benry-teal/90">Save Appearance Settings</Button>
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

export default Settings;
