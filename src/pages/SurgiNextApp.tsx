import { useState } from "react";
import { BottomNavigation } from "@/components/BottomNavigation";
import { OnboardingScreen } from "@/screens/OnboardingScreen";
import { HomeScreen } from "@/screens/HomeScreen";
import { ChatScreen } from "@/screens/ChatScreen";
import { PlanScreen } from "@/screens/PlanScreen";
import { ProfileScreen } from "@/screens/ProfileScreen";

const SurgiNextApp = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isOnboarded, setIsOnboarded] = useState(false);

  const handleOnboardingComplete = () => {
    setIsOnboarded(true);
  };

  if (!isOnboarded) {
    return <OnboardingScreen onComplete={handleOnboardingComplete} />;
  }

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen />;
      case "chat":
        return <ChatScreen />;
      case "plan":
        return <PlanScreen />;
      case "profile":
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderScreen()}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default SurgiNextApp;