import { Home, Calendar, MessageCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigationItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "plan", label: "Plan", icon: Calendar },
  { id: "chat", label: "Chat", icon: MessageCircle },
  { id: "profile", label: "Profile", icon: User },
];

export const BottomNavigation = ({ activeTab, onTabChange }: BottomNavigationProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto px-4">
        {navigationItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={cn(
              "flex flex-col items-center justify-center space-y-1 min-w-0 flex-1 py-2 px-1 transition-colors",
              activeTab === id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon size={20} />
            <span className="text-xs font-medium leading-none">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};