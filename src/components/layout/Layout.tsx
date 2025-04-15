
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  userRole?: "Worker" | "Supervisor" | "Incharge" | "Manager" | "MD";
}

const Layout = ({ children, userRole = "Worker" }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar isOpen={isSidebarOpen} userRole={userRole} />
        <main 
          className={cn(
            "flex-1 p-6 overflow-y-auto transition-all duration-300 ease-in-out",
            isSidebarOpen ? "md:ml-64" : "md:ml-20"
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
