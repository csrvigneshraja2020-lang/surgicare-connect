import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  Camera, 
  Pill, 
  Dumbbell, 
  UtensilsCrossed, 
  Stethoscope,
  Calendar,
  AlertTriangle
} from "lucide-react";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
  attachments?: { type: string; url: string }[];
}

export const ChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content: "Hello! I'm your recovery assistant. How can I help you today? You can ask me about medications, exercises, diet, or any concerns you have.",
      timestamp: new Date(Date.now() - 30000)
    }
  ]);
  
  const [inputValue, setInputValue] = useState("");

  const quickChips = [
    { icon: Pill, label: "Medication", query: "Help me with my medications" },
    { icon: Dumbbell, label: "Exercise", query: "Show me safe exercises" },
    { icon: UtensilsCrossed, label: "Diet", query: "What should I eat?" },
    { icon: Stethoscope, label: "Wound Care", query: "How to care for my incision" },
    { icon: Calendar, label: "Follow-up", query: "When should I see my doctor?" },
    { icon: AlertTriangle, label: "Emergency", query: "Is this an emergency?" }
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai", 
        content: "I understand you're asking about '" + inputValue + "'. Let me help you with that. Based on your recovery plan, here are some personalized recommendations...",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleChipClick = (query: string) => {
    setInputValue(query);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-calm pb-20">
      {/* Header */}
      <div className="bg-gradient-primary p-4 text-primary-foreground">
        <h1 className="text-xl font-semibold">Recovery Assistant</h1>
        <p className="text-primary-foreground/80 text-sm">AI-powered support for your recovery</p>
      </div>

      {/* Quick Action Chips */}
      <div className="p-4 border-b bg-card">
        <p className="text-sm text-muted-foreground mb-3">Quick questions:</p>
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

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                message.type === "user"
                  ? "bg-gradient-primary text-primary-foreground ml-4"
                  : "bg-card text-card-foreground shadow-card mr-4"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
              <p className={`text-xs mt-2 ${
                message.type === "user" 
                  ? "text-primary-foreground/70" 
                  : "text-muted-foreground"
              }`}>
                {message.timestamp.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Triage Alert */}
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
          <Button
            variant="outline"
            size="sm"
            className="px-3 border-primary text-primary hover:bg-primary-soft"
          >
            <Camera size={16} />
          </Button>
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
          Available 24/7 • Tap camera to share wound photos
        </p>
      </div>
    </div>
  );
};