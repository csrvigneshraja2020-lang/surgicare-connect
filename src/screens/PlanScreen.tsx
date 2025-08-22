import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Calendar,
  Plus,
  FileText,
  Building2,
  Stethoscope,
  Pill,
  Dumbbell,
  UtensilsCrossed,
  Clock
} from "lucide-react";

export const PlanScreen = () => {
  const setupOptions = [
    {
      icon: Building2,
      title: "Connect Hospital",
      description: "Link your hospital account for automatic plan sync",
      action: "Connect Now",
      primary: true
    },
    {
      icon: FileText,
      title: "Upload Discharge Summary",
      description: "Add your discharge papers to create personalized plan",
      action: "Upload PDF",
      primary: false
    },
    {
      icon: Plus,
      title: "Manual Setup",
      description: "Create your recovery plan step by step",
      action: "Start Setup",
      primary: false
    }
  ];

  const planFeatures = [
    {
      icon: Pill,
      title: "Medication Schedule",
      description: "Smart reminders with dosage and timing"
    },
    {
      icon: Dumbbell,
      title: "Exercise Routine",
      description: "Safe, progressive exercises for your recovery"
    },
    {
      icon: UtensilsCrossed,
      title: "Nutrition Plan",
      description: "Cultural foods optimized for healing"
    },
    {
      icon: Calendar,
      title: "Appointments",
      description: "Follow-up visits and scan scheduling"
    }
  ];

  return (
    <div className="pb-20 bg-gradient-calm min-h-screen">
      {/* Header */}
      <div className="bg-gradient-primary p-4 text-primary-foreground">
        <h1 className="text-xl font-semibold">Recovery Plan</h1>
        <p className="text-primary-foreground/80 text-sm">
          Set up your personalized recovery journey
        </p>
      </div>

      <div className="p-4 space-y-6">
        {/* Setup Options */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Get Started</h2>
          
          {setupOptions.map((option, index) => (
            <Card key={index} className="p-4 shadow-card hover:shadow-elevated transition-all duration-200">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-2xl ${
                  option.primary 
                    ? "bg-gradient-primary shadow-glow" 
                    : "bg-muted"
                }`}>
                  <option.icon className={`h-6 w-6 ${
                    option.primary ? "text-primary-foreground" : "text-muted-foreground"
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-card-foreground">{option.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
                </div>
                <Button 
                  variant={option.primary ? "default" : "outline"}
                  size="sm"
                  className={option.primary ? "bg-gradient-primary hover:shadow-glow" : ""}
                >
                  {option.action}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* What You'll Get */}
        <Card className="p-4 shadow-card">
          <h2 className="font-semibold text-card-foreground mb-4">Your Plan Will Include</h2>
          <div className="space-y-4">
            {planFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="bg-primary-soft p-2 rounded-lg">
                  <feature.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Sample Timeline */}
        <Card className="p-4 bg-muted border-0">
          <div className="flex items-start space-x-3">
            <Clock className="h-5 w-5 text-muted-foreground mt-1" />
            <div>
              <h3 className="font-medium text-muted-foreground">Sample Recovery Timeline</h3>
              <div className="mt-2 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span>Day 1-3: Rest & basic mobility</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-warning rounded-full" />
                  <span>Day 4-7: Light activities & wound care</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Week 2+: Progressive recovery</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Benefits */}
        <Card className="p-4 bg-success-soft border-success">
          <h3 className="font-medium text-success-foreground mb-2">
            Why SurgiNext Works
          </h3>
          <ul className="text-sm text-success-foreground/80 space-y-1">
            <li>• 89% faster recovery vs traditional care</li>
            <li>• Reduces hospital calls by 67%</li>
            <li>• Personalized for Indian patients</li>
            <li>• Available in 10+ regional languages</li>
          </ul>
        </Card>

        {/* CTA */}
        <div className="text-center pt-4">
          <Button size="lg" className="w-full bg-gradient-primary hover:shadow-glow">
            <Stethoscope className="mr-2 h-5 w-5" />
            Start My Recovery Plan
          </Button>
        </div>
      </div>
    </div>
  );
};