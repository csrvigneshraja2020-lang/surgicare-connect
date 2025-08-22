import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight,
  Heart,
  MessageCircle,
  Calendar,
  Shield,
  Globe,
  Smartphone,
  CheckCircle2,
  Users,
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Index = () => {
  const features = [
    {
      icon: Heart,
      title: "Personalized Recovery Plans",
      description: "AI-powered recovery plans tailored to your specific procedure and health profile"
    },
    {
      icon: MessageCircle,
      title: "24/7 AI Assistant",
      description: "Get instant answers to your recovery questions with medical-grade AI support"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automated medication reminders, exercise routines, and appointment management"
    },
    {
      icon: Shield,
      title: "Red Flag Alerts",
      description: "Intelligent monitoring for warning signs with instant escalation protocols"
    }
  ];

  const stats = [
    { number: "89%", label: "Faster Recovery", subtext: "vs traditional care" },
    { number: "67%", label: "Reduced Calls", subtext: "to healthcare providers" },
    { number: "5★", label: "Patient Satisfaction", subtext: "average rating" },
    { number: "10+", label: "Languages", subtext: "including Hindi & Tamil" }
  ];

  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-primary-foreground mb-6">
              <Award className="w-4 h-4 mr-1" />
              Trusted by 50+ hospitals across India
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Your AI-Powered
              <br />
              <span className="text-primary-glow">Recovery Companion</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              SurgiNext guides you through post-surgery recovery with personalized plans, 
              24/7 AI support, and culturally-adapted care for India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/app">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8 py-6">
                  Try Demo App
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Download App
              </Button>
            </div>
          </div>
        </div>
        <img 
          src={heroImage} 
          alt="Medical recovery illustration showing personalized care" 
          className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20"
        />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-card-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Recovery Made Simple
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every feature designed with Indian patients in mind - from language support 
              to culturally appropriate meal recommendations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 shadow-card hover:shadow-elevated transition-all duration-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-2xl shadow-glow">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Indian Healthcare Context */}
      <section className="py-20 bg-primary-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built for Indian Healthcare
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Understanding unique challenges - family involvement, language diversity, 
              cultural dietary preferences, and varying tech literacy levels.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Globe className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Multi-Language Support</h3>
                <p className="text-muted-foreground">Hindi, Tamil, Bengali, Marathi, and more</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Family Integration</h3>
                <p className="text-muted-foreground">WhatsApp updates for caregivers</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Cultural Meals</h3>
                <p className="text-muted-foreground">Dal, rice, khichdi - recovery-optimized</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the Future of Post-Surgery Care
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join thousands of patients who recovered faster and safer with SurgiNext
            </p>
            <Link to="/app">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8 py-6">
                Try Interactive Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
