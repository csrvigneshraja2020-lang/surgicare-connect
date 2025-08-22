import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Send, 
  MessageCircle, 
  Pill, 
  Dumbbell, 
  UtensilsCrossed, 
  Stethoscope,
  Calendar,
  AlertTriangle,
  Sparkles
} from "lucide-react";

export const ChatScreen = () => {
  const [inputValue, setInputValue] = useState("");

  const quickChips = [
    { icon: Pill, label: "Medication", query: "Help me with my medications" },
    { icon: Dumbbell, label: "Exercise", query: "Show me safe exercises" },
    { icon: UtensilsCrossed, label: "Diet", query: "What should I eat?" },
    { icon: Stethoscope, label: "Wound Care", query: "How to care for my incision" },
    { icon: Calendar, label: "Follow-up", query: "When should I see my doctor?" },
    { icon: AlertTriangle, label: "Emergency", query: "Is this an emergency?" }
  ];

  const handleChipClick = (query: string) => {
    setInputValue(query);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    // This would normally send the message
    console.log("Sending:", inputValue);
    setInputValue("");
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-calm pb-20">
      {/* Header */}
      <div className="bg-gradient-primary p-4 text-primary-foreground">
        <h1 className="text-xl font-semibold">Recovery Assistant</h1>
        <p className="text-primary-foreground/80 text-sm">AI-powered support for your recovery</p>
      </div>

      {/* Welcome State */}
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-6 text-center shadow-elevated">
          <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
            <MessageCircle className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="text-xl font-semibold text-card-foreground mb-2">
            AI Recovery Assistant
          </h2>
          <p className="text-muted-foreground mb-6">
            I'm here to help with your recovery questions 24/7. Ask me about medications, 
            exercises, diet, or any concerns you have.
          </p>
          
          <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground mb-4">
            <Sparkles className="h-4 w-4" />
            <span>Powered by medical AI</span>
          </div>

          <Button 
            onClick={() => setInputValue("How can I manage post-surgery pain safely?")}
            className="w-full bg-gradient-primary hover:shadow-glow"
          >
            Ask Your First Question
          </Button>
        </Card>
      </div>

      {/* Quick Action Chips */}
      <div className="p-4 border-t bg-card">
        <p className="text-sm text-muted-foreground mb-3">Common questions:</p>
        <div className="grid grid-cols-3 gap-2">
          {quickChips.map(({ icon: Icon, label, query }, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleChipClick(query)}
              className="h-auto py-2 px-3 flex-col space-y-1 text-xs hover:bg-primary-soft hover:border-primary"
            >
              <Icon size={16} />
              <span>{label}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Emergency Alert */}
      <Card className="mx-4 mb-4 p-3 bg-danger-soft border-danger">
        <div className="flex items-center space-x-2">
          <AlertTriangle size={16} className="text-danger" />
          <p className="text-sm text-danger-foreground">
            For emergencies, call <span className="font-semibold">108</span> immediately
          </p>
        </div>
      </Card>

      {/* Input */}
      <div className="p-4 bg-card border-t">
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about medications, pain, exercises..."
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="bg-gradient-primary hover:shadow-glow transition-all duration-200"
          >
            <Send size={16} />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Available 24/7 • Supports Hindi, Tamil, Bengali & more
        </p>
      </div>
    </div>
  );
};