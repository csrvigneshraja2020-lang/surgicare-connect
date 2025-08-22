import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskCardProps {
  title: string;
  description: string;
  status: "pending" | "completed" | "overdue";
  time?: string;
  priority?: "low" | "medium" | "high";
  onComplete?: () => void;
  className?: string;
}

export const TaskCard = ({
  title,
  description,
  status,
  time,
  priority,
  onComplete,
  className
}: TaskCardProps) => {
  const statusColors = {
    pending: "border-warning bg-warning-soft",
    completed: "border-success bg-success-soft",
    overdue: "border-danger bg-danger-soft"
  };

  const priorityColors = {
    low: "bg-muted text-muted-foreground",
    medium: "bg-warning text-warning-foreground",
    high: "bg-danger text-danger-foreground"
  };

  return (
    <Card className={cn(
      "p-4 transition-all duration-200 hover:shadow-card",
      status === "completed" && "opacity-75",
      className
    )}>
      <div className="flex items-start justify-between space-x-3">
        <div className="flex-1 space-y-2">
          <div className="flex items-center space-x-2">
            <h3 className="font-medium text-card-foreground">{title}</h3>
            {priority && (
              <Badge variant="secondary" className={cn("text-xs", priorityColors[priority])}>
                {priority}
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
          {time && (
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <Clock size={12} />
              <span>{time}</span>
            </div>
          )}
        </div>
        <div className="flex flex-col items-end space-y-2">
          <Badge className={cn("text-xs", statusColors[status])}>
            {status}
          </Badge>
          {status === "pending" && onComplete && (
            <Button
              size="sm"
              onClick={onComplete}
              className="h-8 px-3 bg-gradient-primary hover:shadow-glow transition-all duration-200"
            >
              <CheckCircle2 size={14} className="mr-1" />
              Complete
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};