
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard = ({ title, value, icon, description, trend, className }: StatCardProps) => {
  return (
    <div className={cn("card animate-fade-in", className)}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <p className="mt-1 text-2xl font-semibold">{value}</p>
        </div>
        {icon && (
          <div className="p-2 bg-benry-teal/10 text-benry-teal rounded-md">
            {icon}
          </div>
        )}
      </div>
      
      {(description || trend) && (
        <div className="mt-3 flex items-center text-sm">
          {trend && (
            <span className={cn(
              "mr-1 font-medium",
              trend.isPositive ? "text-green-500" : "text-red-500"
            )}>
              {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
            </span>
          )}
          {description && (
            <span className="text-gray-500 dark:text-gray-400">{description}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default StatCard;
