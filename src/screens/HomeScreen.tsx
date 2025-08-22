import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProgressRing } from "@/components/ProgressRing";
import { TaskCard } from "@/components/TaskCard";
import { 
  Bell, 
  Heart, 
  Droplets, 
  Pill, 
  Dumbbell,
  UtensilsCrossed,
  AlertCircle,
  MessageCircle
} from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

export const HomeScreen = () => {
  const [todayProgress] = useState(65);
  
  const todayTasks = [
    {
      id: "1",
      title: "Morning Medication",
      description: "Take prescribed pain medication with food",
      status: "completed" as const,
      time: "8:00 AM",
      priority: "high" as const
    },
    {
      id: "2", 
      title: "Wound Check",
      description: "Clean incision site and check for signs of infection",
      status: "pending" as const,
      time: "12:00 PM",
      priority: "high" as const
    },
    {
      id: "3",
      title: "Gentle Walking",
      description: "10-minute walk around the house",
      status: "pending" as const,
      time: "2:00 PM", 
      priority: "medium" as const
    },
    {
      id: "4",
      title: "Hydration Goal",
      description: "Drink 2 more glasses of water",
      status: "pending" as const,
      priority: "medium" as const
    }
  ];

  const quickStats = [
    { icon: Heart, label: "Recovery", value: "Day 3", color: "text-primary" },
    { icon: Pill, label: "Meds Today", value: "2/3", color: "text-warning" },
    { icon: Droplets, label: "Water", value: "6/8", color: "text-primary" },
    { icon: Dumbbell, label: "Exercise", value: "0/1", color: "text-muted-foreground" }
  ];

  return (
    <div className="pb-20 bg-gradient-calm min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-primary p-6 text-primary-foreground">
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold">Good morning!</h1>
              <p className="text-primary-foreground/80">How are you feeling today?</p>
            </div>
            <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30">
              <Bell size={16} />
            </Button>
          </div>
        </div>
        <img 
          src={heroImage} 
          alt="Medical recovery illustration" 
          className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20"
        />
      </div>

      <div className="px-4 -mt-8 relative z-10">
        {/* Progress Card */}
        <Card className="p-6 shadow-elevated bg-card border-0 mb-6">
          <div className="flex items-center space-x-6">
            <ProgressRing progress={todayProgress} />
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-card-foreground mb-2">
                Today's Recovery
              </h2>
              <p className="text-muted-foreground mb-4">
                You're doing great! Keep following your plan.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {quickStats.map(({ icon: Icon, label, value, color }, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon size={16} className={color} />
                    <div>
                      <p className="text-sm font-medium">{value}</p>
                      <p className="text-xs text-muted-foreground">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Alert Card */}
        <Card className="p-4 bg-warning-soft border-warning mb-6">
          <div className="flex items-start space-x-3">
            <AlertCircle size={20} className="text-warning mt-0.5" />
            <div className="flex-1">
              <h3 className="font-medium text-warning-foreground">Medication Reminder</h3>
              <p className="text-sm text-warning-foreground/80">
                Your next pain medication is due in 2 hours
              </p>
            </div>
            <Button size="sm" variant="outline" className="border-warning text-warning hover:bg-warning hover:text-warning-foreground">
              Set Reminder
            </Button>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Button 
            className="h-20 bg-gradient-primary hover:shadow-glow transition-all duration-200 flex-col space-y-1"
          >
            <MessageCircle size={20} />
            <span className="text-sm">Ask AI</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-20 flex-col space-y-1 border-primary text-primary hover:bg-primary-soft"
          >
            <UtensilsCrossed size={20} />
            <span className="text-sm">Meal Plan</span>
          </Button>
        </div>

        {/* Today's Tasks */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Today's Tasks</h2>
            <Badge variant="secondary">{todayTasks.filter(t => t.status !== 'completed').length} pending</Badge>
          </div>
          
          {todayTasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              status={task.status}
              time={task.time}
              priority={task.priority}
              onComplete={() => console.log('Complete task', task.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};