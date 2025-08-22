import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Heart, 
  MessageCircle,
  Calendar,
  User,
  Plus,
  Stethoscope,
  FileText
} from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

export const HomeScreen = () => {
  return (
    <div className="pb-20 bg-gradient-calm min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-primary p-6 text-primary-foreground">
        <div className="relative z-10">
          <h1 className="text-2xl font-bold mb-2">Welcome to SurgiNext!</h1>
          <p className="text-primary-foreground/80">
            Let's set up your personalized recovery plan
          </p>
        </div>
        <img 
          src={heroImage} 
          alt="Medical recovery illustration" 
          className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20"
        />
      </div>

      <div className="px-4 -mt-8 relative z-10 space-y-6">
        {/* Get Started Card */}
        <Card className="p-6 shadow-elevated bg-card border-0">
          <div className="text-center space-y-4">
            <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-glow">
              <Heart className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-card-foreground mb-2">
                Start Your Recovery Journey
              </h2>
              <p className="text-muted-foreground">
                Connect with your hospital or set up your recovery plan manually
              </p>
            </div>
            <div className="flex flex-col space-y-3 pt-2">
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-200">
                <FileText className="mr-2 h-4 w-4" />
                Connect Hospital Account
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary-soft">
                <Plus className="mr-2 h-4 w-4" />
                Set Up Manually
              </Button>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Quick Start</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 hover:shadow-card transition-all duration-200 cursor-pointer">
              <div className="text-center space-y-2">
                <MessageCircle className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-medium">Ask AI</h3>
                <p className="text-sm text-muted-foreground">
                  Get instant recovery guidance
                </p>
              </div>
            </Card>
            
            <Card className="p-4 hover:shadow-card transition-all duration-200 cursor-pointer">
              <div className="text-center space-y-2">
                <Calendar className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-medium">Schedule</h3>
                <p className="text-sm text-muted-foreground">
                  Plan your appointments
                </p>
              </div>
            </Card>
            
            <Card className="p-4 hover:shadow-card transition-all duration-200 cursor-pointer">
              <div className="text-center space-y-2">
                <Stethoscope className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-medium">Health Data</h3>
                <p className="text-sm text-muted-foreground">
                  Track your progress
                </p>
              </div>
            </Card>
            
            <Card className="p-4 hover:shadow-card transition-all duration-200 cursor-pointer">
              <div className="text-center space-y-2">
                <User className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-medium">Profile</h3>
                <p className="text-sm text-muted-foreground">
                  Complete your setup
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Features Preview */}
        <Card className="p-4 bg-primary-soft border-primary">
          <div className="space-y-3">
            <h3 className="font-medium text-primary-foreground">What's Next?</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Personalized medication reminders</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Safe exercise routines for your recovery</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Cultural food recommendations</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>24/7 AI support in your language</span>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};