
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Plus, Search, UserPlus, Users } from "lucide-react";

// Sample employee data
const sampleEmployees = [
  {
    id: "EMP001",
    name: "John Doe",
    position: "Software Developer",
    department: "Engineering",
    role: "Worker",
    reportingTo: "Jane Smith"
  },
  {
    id: "EMP002",
    name: "Jane Smith",
    position: "Team Lead",
    department: "Engineering",
    role: "Supervisor",
    reportingTo: "Alex Johnson"
  },
  {
    id: "EMP003",
    name: "Alex Johnson",
    position: "Department Head",
    department: "Engineering",
    role: "Incharge",
    reportingTo: "Sarah Williams"
  },
];

const Employees = () => {
  const [userRole] = useState<"Worker" | "Supervisor" | "Incharge" | "Manager" | "MD">("Manager");
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredEmployees = sampleEmployees.filter(employee => 
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <Layout userRole={userRole}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Employees</h1>
            <p className="text-sm text-gray-500">Manage your team members and their access.</p>
          </div>
          {userRole === "Manager" || userRole === "MD" ? (
            <Button className="bg-benry-teal hover:bg-benry-teal/90">
              <UserPlus size={16} className="mr-2" /> Add Employee
            </Button>
          ) : null}
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search employees..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="ml-4">
              <Button variant="outline" className="flex items-center">
                <Users size={16} className="mr-2" /> Filter
              </Button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead className="hidden md:table-cell">Department</TableHead>
                  <TableHead className="hidden md:table-cell">Role</TableHead>
                  <TableHead className="hidden lg:table-cell">Reporting To</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEmployees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell className="font-medium">{employee.id}</TableCell>
                    <TableCell>{employee.name}</TableCell>
                    <TableCell>{employee.position}</TableCell>
                    <TableCell className="hidden md:table-cell">{employee.department}</TableCell>
                    <TableCell className="hidden md:table-cell">{employee.role}</TableCell>
                    <TableCell className="hidden lg:table-cell">{employee.reportingTo}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">View</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Employees;
