
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

const RequestForm = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [requestType, setRequestType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Success",
        description: "Your request has been submitted for approval.",
      });
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} />

        <main className={`flex-1 p-4 md:p-6 transition-all duration-300 ${isSidebarOpen ? "md:ml-64" : "md:ml-20"}`}>
          <div className="mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate(-1)} 
              className="mb-4"
            >
              <ArrowLeft size={16} className="mr-1" /> Back
            </Button>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">New Request</h1>
            <p className="text-gray-600 dark:text-gray-300">Submit a new request for approval</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <div className="space-y-6">
                {/* Request Type */}
                <div className="space-y-2">
                  <Label htmlFor="request-type" className="text-base">Request Type</Label>
                  <Select value={requestType} onValueChange={setRequestType} required>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select request type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="leave">Leave Request</SelectItem>
                      <SelectItem value="expense">Expense Claim</SelectItem>
                      <SelectItem value="task">Task Update</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Dynamic form fields based on request type */}
                {requestType === "leave" && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="leave-type" className="text-base">Leave Type</Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select leave type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vacation">Vacation</SelectItem>
                          <SelectItem value="sick">Sick Leave</SelectItem>
                          <SelectItem value="personal">Personal Leave</SelectItem>
                          <SelectItem value="bereavement">Bereavement</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="start-date" className="text-base">Start Date</Label>
                        <div className="relative">
                          <Calendar className="absolute top-3 left-3 h-4 w-4 text-gray-500" />
                          <Input
                            id="start-date"
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="end-date" className="text-base">End Date</Label>
                        <div className="relative">
                          <Calendar className="absolute top-3 left-3 h-4 w-4 text-gray-500" />
                          <Input
                            id="end-date"
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {requestType === "expense" && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="expense-category" className="text-base">Expense Category</Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="travel">Travel</SelectItem>
                          <SelectItem value="meals">Meals</SelectItem>
                          <SelectItem value="supplies">Office Supplies</SelectItem>
                          <SelectItem value="tech">Technology</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="expense-amount" className="text-base">Amount</Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">$</span>
                        </div>
                        <Input
                          id="expense-amount"
                          type="number"
                          min="0.01"
                          step="0.01"
                          placeholder="0.00"
                          className="pl-8"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="expense-date" className="text-base">Date of Expense</Label>
                      <div className="relative">
                        <Calendar className="absolute top-3 left-3 h-4 w-4 text-gray-500" />
                        <Input
                          id="expense-date"
                          type="date"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {requestType === "task" && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="task-project" className="text-base">Project</Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select project" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="website">Website Redesign</SelectItem>
                          <SelectItem value="app">Mobile App Development</SelectItem>
                          <SelectItem value="crm">CRM Integration</SelectItem>
                          <SelectItem value="marketing">Marketing Campaign</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="task-status" className="text-base">Status Update</Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="not-started">Not Started</SelectItem>
                          <SelectItem value="in-progress">In Progress</SelectItem>
                          <SelectItem value="waiting">Waiting on Review</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="blocked">Blocked</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="completion" className="text-base">Completion Percentage</Label>
                      <div className="relative">
                        <Input
                          id="completion"
                          type="number"
                          min="0"
                          max="100"
                          placeholder="0"
                          className="pr-8"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Common fields for all request types */}
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-base">Title</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Brief title for your request"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-base">Description</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Provide details about your request"
                    rows={5}
                    required
                  />
                </div>

                {/* File upload */}
                <div className="space-y-2">
                  <Label htmlFor="attachments" className="text-base">Attachments (Optional)</Label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md p-6 text-center">
                    <Upload className="mx-auto h-8 w-8 text-gray-400" />
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Drag and drop files here, or click to select files
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        PDF, DOCX, XLSX, JPG, PNG (Max 10MB)
                      </p>
                    </div>
                    <Input
                      id="attachments"
                      type="file"
                      multiple
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-4"
                      onClick={() => document.getElementById("attachments")?.click()}
                    >
                      Select Files
                    </Button>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-end gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => navigate(-1)}
                      disabled={isSubmitting}
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit"
                      disabled={!requestType || !title || !description || isSubmitting}
                      className="bg-benry-teal hover:bg-benry-teal/90 text-white"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RequestForm;
