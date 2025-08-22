import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight,
  Heart,
  Shield,
  Globe,
  Building2,
  User,
  Phone,
  Calendar
} from "lucide-react";

interface OnboardingScreenProps {
  onComplete: () => void;
}

export const OnboardingScreen = ({ onComplete }: OnboardingScreenProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    hospitalCode: "",
    language: "English"
  });

  const languages = ["English", "हिंदी", "தமிழ்", "বাংলা", "मराठी"];
  
  const features = [
    {
      icon: Heart,
      title: "Personalized Recovery",
      description: "AI-powered plans tailored to your procedure"
    },
    {
      icon: Shield,
      title: "24/7 Support", 
      description: "Instant help when you need it most"
    },
    {
      icon: Globe,
      title: "Multi-Language",
      description: "Available in your preferred language"
    }
  ];

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Welcome to SurgiNext
              </h2>
              <p className="text-muted-foreground">
                Your AI-powered recovery companion
              </p>
            </div>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <Card key={index} className="p-4 shadow-card">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-primary p-2 rounded-lg">
                      <feature.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Choose Your Language
              </h2>
              <p className="text-muted-foreground">
                Select your preferred language for the app
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {languages.map((lang) => (
                <Button
                  key={lang}
                  variant={formData.language === lang ? "default" : "outline"}
                  onClick={() => setFormData({...formData, language: lang})}
                  className={`h-12 justify-start text-left ${
                    formData.language === lang 
                      ? "bg-gradient-primary shadow-glow" 
                      : "hover:bg-primary-soft hover:border-primary"
                  }`}
                >
                  <Globe className="mr-2 h-4 w-4" />
                  {lang}
                </Button>
              ))}
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Basic Information
              </h2>
              <p className="text-muted-foreground">
                Help us personalize your recovery experience
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="hospital">Hospital Code (Optional)</Label>
                <Input
                  id="hospital"
                  placeholder="Enter hospital code or leave blank"
                  value={formData.hospitalCode}
                  onChange={(e) => setFormData({...formData, hospitalCode: e.target.value})}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Get this from your hospital to sync your records
                </p>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-calm flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 shadow-elevated">
        {/* Progress */}
        <div className="flex items-center justify-center mb-6">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                num <= step 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              }`}>
                {num}
              </div>
              {num < 3 && (
                <div className={`w-8 h-0.5 mx-2 ${
                  num < step ? "bg-primary" : "bg-muted"
                }`} />
              )}
            </div>
          ))}
        </div>

        {renderStep()}

        {/* Actions */}
        <div className="flex justify-between mt-8">
          <Button
            variant="ghost"
            onClick={() => step > 1 && setStep(step - 1)}
            disabled={step === 1}
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={step === 3 && (!formData.name || !formData.phone)}
            className="bg-gradient-primary hover:shadow-glow"
          >
            {step === 3 ? "Get Started" : "Next"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Skip */}
        {step === 3 && (
          <div className="text-center mt-4">
            <Button variant="ghost" size="sm" onClick={onComplete}>
              Skip for now
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};