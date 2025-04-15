
import { useState } from "react";
import { ArrowLeft, Search, Filter, Clock, Check, X, Clock3, ArrowDownUp, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

// Sample data
const pendingRequests = [
  {
    id: "REQ001",
    type: "Leave Request",
    title: "Vacation Leave",
    submitter: {
      name: "John Doe",
      avatar: "",
      department: "Engineering"
    },
    date: "2025-04-15",
    status: "Pending",
    description: "I would like to request a vacation leave for a family trip. I have already completed all my pending tasks and delegated my responsibilities to Sarah for this period.",
    dateSubmitted: "2025-04-10",
  },
  {
    id: "REQ002",
    type: "Expense Claim",
    title: "Office Supplies",
    submitter: {
      name: "Jane Smith",
      avatar: "",
      department: "Marketing"
    },
    date: "2025-04-14",
    status: "Pending",
    description: "Expense claim for purchasing office supplies including notebooks, pens, and a new whiteboard for the meeting room as per previous discussion.",
    amount: 120.75,
    dateSubmitted: "2025-04-12",
  },
  {
    id: "REQ003",
    type: "Task Update",
    title: "Website Redesign Progress",
    submitter: {
      name: "Robert Brown",
      avatar: "",
      department: "Design"
    },
    date: "2025-04-13",
    status: "Pending",
    description: "Completed 75% of the website redesign project. The homepage and about us sections are ready for review. Awaiting feedback before proceeding with the remaining pages.",
    completion: 75,
    dateSubmitted: "2025-04-11",
  },
  {
    id: "REQ004",
    type: "Leave Request",
    title: "Sick Leave",
    submitter: {
      name: "Emily Johnson",
      avatar: "",
      department: "Customer Support"
    },
    date: "2025-04-16",
    status: "Pending",
    description: "Requesting sick leave due to flu. Doctor has advised rest for 2 days. I've updated the support schedule and informed the team.",
    dateSubmitted: "2025-04-13",
  },
  {
    id: "REQ005",
    type: "Expense Claim",
    title: "Conference Registration",
    submitter: {
      name: "Michael Wilson",
      avatar: "",
      department: "Sales"
    },
    date: "2025-04-18",
    status: "Pending",
    description: "Registration fee for the Annual Sales Conference to be held next month. The conference will provide valuable networking opportunities and industry insights.",
    amount: 550.00,
    dateSubmitted: "2025-04-14",
  },
];

const RequestApproval = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [comment, setComment] = useState("");
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [bulkSelected, setBulkSelected] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const filteredRequests = pendingRequests.filter(request => {
    const matchesSearch = search === "" ||
      request.title.toLowerCase().includes(search.toLowerCase()) ||
      request.submitter.name.toLowerCase().includes(search.toLowerCase()) ||
      request.id.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = selectedStatus === null || request.status.toLowerCase() === selectedStatus.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const handleSelectRequest = (request: any) => {
    setSelectedRequest(request);
    setComment("");
  };

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status === "all" ? null : status);
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setBulkSelected(filteredRequests.map(r => r.id));
    } else {
      setBulkSelected([]);
    }
  };

  const handleBulkAction = (action: 'approve' | 'reject') => {
    if (bulkSelected.length === 0) return;

    setIsProcessing(true);
    
    // Simulate bulk action processing
    setTimeout(() => {
      setIsProcessing(false);
      setBulkSelected([]);
      toast({
        title: `Bulk ${action} successful`,
        description: `${bulkSelected.length} requests have been ${action === 'approve' ? 'approved' : 'rejected'}.`,
      });
    }, 1000);
  };

  const handleAction = (action: 'approve' | 'reject') => {
    if (!selectedRequest) return;

    setIsProcessing(true);
    
    // Simulate action processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: `Request ${action === 'approve' ? 'Approved' : 'Rejected'}`,
        description: `You have ${action === 'approve' ? 'approved' : 'rejected'} the ${selectedRequest.type.toLowerCase()} from ${selectedRequest.submitter.name}.`,
      });
      setSelectedRequest(null);
    }, 1000);
  };

  const toggleSelectRequest = (id: string) => {
    if (bulkSelected.includes(id)) {
      setBulkSelected(bulkSelected.filter(r => r !== id));
    } else {
      setBulkSelected([...bulkSelected, id]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} userRole="Supervisor" />

        <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "md:ml-64" : "md:ml-20"}`}>
          <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => navigate(-1)} 
                  className="mb-2"
                >
                  <ArrowLeft size={16} className="mr-1" /> Back
                </Button>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Request Approvals</h1>
                <p className="text-gray-600 dark:text-gray-300">Review and manage pending requests from your team</p>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                {bulkSelected.length > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{bulkSelected.length} selected</span>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      onClick={() => setBulkSelected([])}
                    >
                      Clear
                    </Button>
                    <Button 
                      size="sm"
                      className="bg-benry-teal hover:bg-benry-teal/90 text-white"
                      onClick={() => handleBulkAction('approve')}
                      disabled={isProcessing}
                    >
                      <Check size={16} className="mr-1" />
                      Approve
                    </Button>
                    <Button 
                      size="sm"
                      variant="destructive"
                      onClick={() => handleBulkAction('reject')}
                      disabled={isProcessing}
                    >
                      <X size={16} className="mr-1" />
                      Reject
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 flex flex-col">
              {/* Search and filters */}
              <div className="mb-4 flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search requests..."
                    className="pl-9"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Filter size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handleStatusChange("all")}>
                      All
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleStatusChange("pending")}>
                      Pending
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <ArrowDownUp size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Newest First</DropdownMenuItem>
                    <DropdownMenuItem>Oldest First</DropdownMenuItem>
                    <DropdownMenuItem>Request Type</DropdownMenuItem>
                    <DropdownMenuItem>Submitter Name</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Requests list */}
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex-1">
                <div className="p-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center">
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      className="rounded border-gray-300 text-benry-teal focus:ring-benry-teal"
                      checked={bulkSelected.length === filteredRequests.length && filteredRequests.length > 0}
                      onChange={handleSelectAll}
                    />
                    <span className="text-sm font-medium">Select All</span>
                  </div>
                </div>

                {filteredRequests.length === 0 ? (
                  <div className="p-6 text-center">
                    <p className="text-gray-500 dark:text-gray-400">No matching requests found</p>
                  </div>
                ) : (
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700 max-h-[calc(100vh-320px)] overflow-y-auto">
                    {filteredRequests.map((request) => (
                      <li 
                        key={request.id}
                        className={`relative hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors ${selectedRequest?.id === request.id ? 'bg-gray-50 dark:bg-gray-700' : ''}`}
                        onClick={() => handleSelectRequest(request)}
                      >
                        <div className="flex items-center p-4">
                          <div className="mr-3 flex-shrink-0">
                            <input 
                              type="checkbox" 
                              className="rounded border-gray-300 text-benry-teal focus:ring-benry-teal"
                              checked={bulkSelected.includes(request.id)}
                              onChange={() => toggleSelectRequest(request.id)}
                              onClick={(e) => e.stopPropagation()}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium truncate">
                                {request.title}
                              </p>
                              <Badge 
                                variant="outline" 
                                className="ml-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 shrink-0"
                              >
                                {request.status}
                              </Badge>
                            </div>
                            <div className="mt-1 flex items-center text-xs text-gray-500 dark:text-gray-400">
                              <span className="truncate">{request.submitter.name}</span>
                              <span className="mx-1">•</span>
                              <span className="truncate">{request.type}</span>
                            </div>
                            <div className="mt-1 flex items-center text-xs text-gray-500 dark:text-gray-400">
                              <Clock3 size={12} className="mr-1" />
                              <span>Submitted {request.dateSubmitted}</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Request details */}
            <div className="lg:col-span-2">
              {selectedRequest ? (
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
                    <div>
                      <div className="flex items-center">
                        <h2 className="text-xl font-semibold">{selectedRequest.title}</h2>
                        <Badge 
                          variant="outline" 
                          className="ml-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        >
                          {selectedRequest.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{selectedRequest.type} • {selectedRequest.id}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="destructive"
                        onClick={() => handleAction('reject')}
                        disabled={isProcessing}
                      >
                        <X size={16} className="mr-1" />
                        Reject
                      </Button>
                      <Button 
                        className="bg-benry-teal hover:bg-benry-teal/90 text-white"
                        onClick={() => handleAction('approve')}
                        disabled={isProcessing}
                      >
                        <Check size={16} className="mr-1" />
                        Approve
                      </Button>
                    </div>
                  </div>

                  {/* Submitter Info */}
                  <div className="mb-6 flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
                    <div className="h-12 w-12 rounded-full bg-benry-navy/20 flex items-center justify-center mr-4">
                      <span className="font-medium text-benry-navy dark:text-benry-teal">
                        {selectedRequest.submitter.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium">{selectedRequest.submitter.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{selectedRequest.submitter.department}</p>
                    </div>
                  </div>

                  {/* Request Details */}
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">Request Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Request ID</p>
                        <p className="font-medium">{selectedRequest.id}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Date Submitted</p>
                        <p className="font-medium">{selectedRequest.dateSubmitted}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Type</p>
                        <p className="font-medium">{selectedRequest.type}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                          {selectedRequest.status}
                        </Badge>
                      </div>
                      {/* For expense claims */}
                      {selectedRequest.amount && (
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Amount</p>
                          <p className="font-medium">${selectedRequest.amount.toFixed(2)}</p>
                        </div>
                      )}
                      {/* For task updates */}
                      {selectedRequest.completion !== undefined && (
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Completion</p>
                          <p className="font-medium">{selectedRequest.completion}%</p>
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Description</p>
                      <p className="text-gray-900 dark:text-gray-100">{selectedRequest.description}</p>
                    </div>
                  </div>

                  {/* Attachments (if any) */}
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">Attachments</h3>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-md p-4 flex items-center justify-center">
                      <p className="text-gray-500 dark:text-gray-400 text-sm">No attachments</p>
                    </div>
                  </div>

                  {/* Comment Box */}
                  <div>
                    <h3 className="text-lg font-medium mb-2">Add a Comment</h3>
                    <Textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Add a comment or reason for approval/rejection..."
                      className="mb-4"
                    />
                    <div className="flex justify-end gap-3">
                      <Button 
                        variant="destructive"
                        onClick={() => handleAction('reject')}
                        disabled={isProcessing}
                      >
                        <X size={16} className="mr-1" />
                        Reject
                      </Button>
                      <Button 
                        className="bg-benry-teal hover:bg-benry-teal/90 text-white"
                        onClick={() => handleAction('approve')}
                        disabled={isProcessing}
                      >
                        <Check size={16} className="mr-1" />
                        Approve
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 h-full flex items-center justify-center">
                  <div className="text-center">
                    <Clock className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Select a Request</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Click on a request from the list to view its details
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RequestApproval;
