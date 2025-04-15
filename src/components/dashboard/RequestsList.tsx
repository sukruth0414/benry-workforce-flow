
import { useState } from "react";
import { Check, X, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Request {
  id: string;
  type: string;
  submitter: string;
  date: string;
  status: "Pending" | "Approved" | "Rejected";
  description?: string;
}

interface RequestsListProps {
  requests: Request[];
  type: "pending" | "recent";
  userRole?: "Worker" | "Supervisor" | "Incharge" | "Manager" | "MD";
}

const RequestsList = ({ requests, type, userRole = "Worker" }: RequestsListProps) => {
  const [expandedRequests, setExpandedRequests] = useState<Record<string, boolean>>({});

  const toggleRequest = (requestId: string) => {
    setExpandedRequests(prev => ({
      ...prev,
      [requestId]: !prev[requestId]
    }));
  };

  const canApprove = userRole !== "Worker";

  const statusColors = {
    Pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    Approved: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Rejected: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  };

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
            <tr>
              <th className="px-4 py-3 hidden sm:table-cell">ID</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">{type === "pending" ? "Submitter" : "Status"}</th>
              <th className="px-4 py-3 hidden md:table-cell">Date</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr
                key={request.id}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="px-4 py-3 hidden sm:table-cell">{request.id}</td>
                <td className="px-4 py-3 font-medium">{request.type}</td>
                <td className="px-4 py-3">
                  {type === "pending" ? (
                    request.submitter
                  ) : (
                    <Badge variant="outline" className={statusColors[request.status]}>
                      {request.status}
                    </Badge>
                  )}
                </td>
                <td className="px-4 py-3 hidden md:table-cell">{request.date}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end space-x-2">
                    {type === "pending" && canApprove && (
                      <>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="text-green-600 hover:text-green-700 hover:bg-green-50"
                        >
                          <Check size={16} />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <X size={16} />
                        </Button>
                      </>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleRequest(request.id)}
                      className="flex items-center"
                    >
                      {expandedRequests[request.id] ? (
                        <ChevronDown size={16} />
                      ) : (
                        <ChevronRight size={16} />
                      )}
                      <span className="ml-1">Details</span>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestsList;
