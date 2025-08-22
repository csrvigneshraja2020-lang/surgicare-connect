import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  User,
  Heart,
  FileText,
  Phone,
  Settings,
  Languages,
  Bell,
  Shield,
  Download,
  MapPin,
  Calendar,
  AlertTriangle,
  Building2
} from "lucide-react";

export const ProfileScreen = () => {
  const patientProfile = {
    name: "Rajesh Kumar",
    age: 34,
    gender: "Male",
    bloodGroup: "O+",
    phone: "+91 98765 43210",
    emergencyContact: "Priya Kumar (Wife) - +91 98765 43211",
    address: "Bandra, Mumbai, Maharashtra",
    procedure: "Laparoscopic Appendectomy",
    surgeon: "Dr. Priya Sharma",
    hospital: "Apollo Hospital, Mumbai",
    admissionDate: "Jan 20, 2025",
    dischargeDate: "Jan 21, 2025"
  };

  const healthData = [
    { label: "Allergies", value: "Penicillin, Shellfish", status: "critical" },
    { label: "Chronic Conditions", value: "Hypertension", status: "warning" },
    { label: "Blood Group", value: "O+ Positive", status: "normal" },
    { label: "Last BMI", value: "24.5 (Normal)", status: "normal" }
  ];

  const menuSections = [
    {
      title: "Health Records",
      items: [
        { icon: FileText, label: "Discharge Summary", action: "View PDF" },
        { icon: Heart, label: "Medical History", action: "View Details" },
        { icon: Download, label: "Lab Reports", action: "Download" },
        { icon: Calendar, label: "Previous Surgeries", action: "View Timeline" }
      ]
    },
    {
      title: "App Settings",
      items: [
        { icon: Languages, label: "Language", action: "English", detail: "Hindi, Tamil available" },
        { icon: Bell, label: "Notifications", action: "Manage" },
        { icon: Shield, label: "Privacy & Data", action: "Settings" },
        { icon: Settings, label: "App Preferences", action: "Configure" }
      ]
    }
  ];

  return (
    <div className="pb-20 bg-gradient-calm min-h-screen">
      {/* Header */}
      <div className="bg-gradient-primary p-4 text-primary-foreground">
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16 border-2 border-primary-foreground/30">
            <AvatarFallback className="bg-white/20 text-primary-foreground text-lg font-semibold">
              {patientProfile.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-xl font-semibold">{patientProfile.name}</h1>
            <p className="text-primary-foreground/80">
              {patientProfile.age} years • {patientProfile.gender} • {patientProfile.bloodGroup}
            </p>
            <div className="flex items-center space-x-2 mt-1">
              <Building2 size={14} />
              <span className="text-sm text-primary-foreground/80">{patientProfile.hospital}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Current Recovery */}
        <Card className="p-4 shadow-card">
          <h2 className="font-semibold text-card-foreground mb-3">Current Recovery</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Procedure</span>
              <span className="font-medium">{patientProfile.procedure}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Surgeon</span>
              <span className="font-medium">{patientProfile.surgeon}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Surgery Date</span>
              <span className="font-medium">{patientProfile.admissionDate}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Recovery Day</span>
              <Badge className="bg-primary text-primary-foreground">Day 3</Badge>
            </div>
          </div>
        </Card>

        {/* Health Information */}
        <Card className="p-4 shadow-card">
          <h2 className="font-semibold text-card-foreground mb-3">Health Information</h2>
          <div className="space-y-3">
            {healthData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-muted-foreground">{item.label}</span>
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-right">{item.value}</span>
                  {item.status === "critical" && (
                    <AlertTriangle size={16} className="text-danger" />
                  )}
                  {item.status === "warning" && (
                    <AlertTriangle size={16} className="text-warning" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Emergency Contact */}
        <Card className="p-4 bg-warning-soft border-warning">
          <div className="flex items-start space-x-3">
            <Phone size={20} className="text-warning mt-0.5" />
            <div className="flex-1">
              <h3 className="font-medium text-warning-foreground">Emergency Contact</h3>
              <p className="text-sm text-warning-foreground/80 mt-1">
                {patientProfile.emergencyContact}
              </p>
            </div>
            <Button size="sm" className="bg-warning hover:bg-warning/90">
              Call
            </Button>
          </div>
        </Card>

        {/* Menu Sections */}
        {menuSections.map((section, sectionIndex) => (
          <Card key={sectionIndex} className="p-4 shadow-card">
            <h2 className="font-semibold text-card-foreground mb-3">{section.title}</h2>
            <div className="space-y-3">
              {section.items.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-3">
                    <item.icon size={20} className="text-muted-foreground" />
                    <div>
                      <p className="font-medium">{item.label}</p>
                      {item.detail && (
                        <p className="text-sm text-muted-foreground">{item.detail}</p>
                      )}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary">
                    {item.action}
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        ))}

        {/* Contact Info */}
        <Card className="p-4 shadow-card">
          <h2 className="font-semibold text-card-foreground mb-3">Contact Information</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Phone size={16} className="text-muted-foreground" />
              <span className="font-medium">{patientProfile.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={16} className="text-muted-foreground" />
              <span className="font-medium">{patientProfile.address}</span>
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