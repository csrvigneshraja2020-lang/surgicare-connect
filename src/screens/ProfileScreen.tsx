import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  User,
  Settings,
  Languages,
  Bell,
  Shield,
  Heart,
  FileText,
  Phone,
  Building2,
  Edit,
  Plus,
  Info
} from "lucide-react";

export const ProfileScreen = () => {
  const profileSections = [
    {
      title: "Personal Information",
      items: [
        { icon: User, label: "Basic Details", status: "incomplete", action: "Complete Setup" },
        { icon: Heart, label: "Medical History", status: "empty", action: "Add Info" },
        { icon: Phone, label: "Emergency Contacts", status: "empty", action: "Add Contact" },
        { icon: Building2, label: "Hospital Connection", status: "empty", action: "Connect" }
      ]
    },
    {
      title: "Health Records",
      items: [
        { icon: FileText, label: "Discharge Summary", status: "empty", action: "Upload" },
        { icon: Heart, label: "Allergies & Conditions", status: "empty", action: "Add" }
      ]
    },
    {
      title: "App Settings",
      items: [
        { icon: Languages, label: "Language", status: "set", action: "English", detail: "Change" },
        { icon: Bell, label: "Notifications", status: "default", action: "Configure" },
        { icon: Shield, label: "Privacy & Data", status: "default", action: "Review" },
        { icon: Settings, label: "Preferences", status: "default", action: "Customize" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "incomplete":
        return "text-warning";
      case "empty":
        return "text-muted-foreground";
      case "set":
        return "text-success";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "incomplete":
        return <Edit size={12} className="text-warning" />;
      case "empty":
        return <Plus size={12} className="text-muted-foreground" />;
      case "set":
        return <div className="w-2 h-2 bg-success rounded-full" />;
      default:
        return null;
    }
  };

  return (
    <div className="pb-20 bg-gradient-calm min-h-screen">
      {/* Header */}
      <div className="bg-gradient-primary p-4 text-primary-foreground">
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16 border-2 border-primary-foreground/30">
            <AvatarFallback className="bg-white/20 text-primary-foreground text-lg font-semibold">
              ?
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-xl font-semibold">Complete Your Profile</h1>
            <p className="text-primary-foreground/80">
              Help us personalize your recovery experience
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Setup Progress */}
        <Card className="p-4 shadow-card">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-card-foreground">Setup Progress</h2>
            <span className="text-sm text-muted-foreground">2/8 complete</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-gradient-primary h-2 rounded-full w-1/4 transition-all duration-300"></div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Complete your profile to get personalized recovery recommendations
          </p>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 text-center hover:shadow-card transition-all duration-200 cursor-pointer">
            <User className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="font-medium text-sm">Add Details</h3>
            <p className="text-xs text-muted-foreground">Name, age, contacts</p>
          </Card>
          
          <Card className="p-4 text-center hover:shadow-card transition-all duration-200 cursor-pointer">
            <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="font-medium text-sm">Connect Hospital</h3>
            <p className="text-xs text-muted-foreground">Sync medical records</p>
          </Card>
        </div>

        {/* Profile Sections */}
        {profileSections.map((section, sectionIndex) => (
          <Card key={sectionIndex} className="p-4 shadow-card">
            <h2 className="font-semibold text-card-foreground mb-3">{section.title}</h2>
            <div className="space-y-3">
              {section.items.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-3">
                    <item.icon size={20} className={getStatusColor(item.status)} />
                    <div>
                      <p className="font-medium text-sm">{item.label}</p>
                      {item.detail && (
                        <p className="text-xs text-muted-foreground">{item.detail}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(item.status)}
                    <Button variant="ghost" size="sm" className="text-primary text-xs">
                      {item.action}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}

        {/* Help */}
        <Card className="p-4 bg-primary-soft border-primary">
          <div className="flex items-start space-x-3">
            <Info size={20} className="text-primary mt-0.5" />
            <div>
              <h3 className="font-medium text-primary-foreground">Need Help?</h3>
              <p className="text-sm text-primary-foreground/80 mt-1">
                Your data is secure and used only to personalize your recovery plan. 
                You can update or remove information anytime.
              </p>
            </div>
          </div>
        </Card>

        {/* App Info */}
        <div className="text-center text-muted-foreground">
          <p className="text-sm">SurgiNext v1.0.0</p>
          <p className="text-xs mt-1">AI-powered post-surgery recovery</p>
        </div>
      </div>
    </div>
  );
};