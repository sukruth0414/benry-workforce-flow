
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  ClipboardList, 
  Users, 
  BarChart, 
  UserCog,
  Settings,
  ChevronDown,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  userRole?: "Worker" | "Supervisor" | "Incharge" | "Manager" | "MD";
}

const Sidebar = ({ isOpen, userRole = "Worker" }: SidebarProps) => {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (menuId: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  // Define menu items based on user role
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} />, path: '/dashboard', roles: ["Worker", "Supervisor", "Incharge", "Manager", "MD"] },
    { id: 'requests', label: 'Requests', icon: <ClipboardList size={20} />, path: '/requests', roles: ["Worker", "Supervisor", "Incharge", "Manager", "MD"] },
    { id: 'employees', label: 'Employees', icon: <Users size={20} />, path: '/employees', roles: ["Supervisor", "Incharge", "Manager", "MD"] },
    { id: 'reports', label: 'Reports', icon: <BarChart size={20} />, path: '/reports', roles: ["Manager", "MD"] },
    { id: 'admin', label: 'Admin Panel', icon: <UserCog size={20} />, path: '/admin', roles: ["MD"] },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} />, path: '/settings', roles: ["Worker", "Supervisor", "Incharge", "Manager", "MD"] },
  ].filter(item => item.roles.includes(userRole));

  return (
    <aside
      className={cn(
        "fixed left-0 top-16 bottom-0 z-20 w-64 bg-sidebar transition-all duration-300 ease-in-out transform border-r border-sidebar-border",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0 md:w-20"
      )}
    >
      <div className="flex flex-col h-full">
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link 
                  to={item.path}
                  className={cn(
                    "flex items-center p-3 text-sidebar-foreground rounded-md hover:bg-sidebar-accent group",
                    location.pathname === item.path && "bg-sidebar-accent"
                  )}
                >
                  <span className="mr-3 flex-shrink-0">{item.icon}</span>
                  <span className={cn(
                    "transition-opacity duration-300",
                    isOpen ? "opacity-100" : "opacity-0 md:hidden"
                  )}>
                    {item.label}
                  </span>
                  {item.id === 'requests' && (
                    <span className={cn(
                      "ml-auto bg-sidebar-primary text-sidebar-primary-foreground text-xs font-medium px-2 py-1 rounded-full",
                      isOpen ? "opacity-100" : "opacity-0 md:hidden"
                    )}>
                      3
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-sidebar-border">
          <Link 
            to="/login" 
            className={cn(
              "flex items-center p-3 text-sidebar-foreground rounded-md hover:bg-sidebar-accent",
              !isOpen && "justify-center"
            )}
          >
            <LogOut size={20} className="mr-3 flex-shrink-0" />
            <span className={cn(
              "transition-opacity duration-300",
              isOpen ? "opacity-100" : "opacity-0 md:hidden"
            )}>
              Logout
            </span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
