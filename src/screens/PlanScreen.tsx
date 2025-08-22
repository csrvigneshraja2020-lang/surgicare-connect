import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar,
  Clock,
  Pill,
  Dumbbell,
  UtensilsCrossed,
  Stethoscope,
  FileText,
  CheckCircle2,
  AlertCircle,
  MapPin
} from "lucide-react";

export const PlanScreen = () => {
  const [selectedDay, setSelectedDay] = useState(3);
  
  const recoveryPlan = {
    procedure: "Laparoscopic Appendectomy",
    surgeon: "Dr. Priya Sharma",
    hospital: "Apollo Hospital, Mumbai",
    daysSinceOp: 3,
    totalDays: 14
  };

  const dayPlan = {
    medications: [
      { name: "Paracetamol 500mg", timing: "8 AM, 2 PM, 8 PM", withFood: true, remaining: 12 },
      { name: "Omeprazole 20mg", timing: "Before breakfast", withFood: false, remaining: 8 }
    ],
    exercises: [
      { name: "Deep Breathing", duration: "5 minutes", frequency: "Every 2 hours", difficulty: "Easy" },
      { name: "Gentle Walking", duration: "10 minutes", frequency: "2x daily", difficulty: "Easy" }
    ],
    diet: [
      { meal: "Breakfast", items: ["Upma with vegetables", "Buttermilk", "Banana"], time: "8 AM" },
      { meal: "Lunch", items: ["Dal rice", "Steamed vegetables", "Curd"], time: "1 PM" },
      { meal: "Dinner", items: ["Khichdi", "Ghee", "Warm milk"], time: "7 PM" }
    ],
    appointments: [
      { type: "Follow-up", doctor: "Dr. Priya Sharma", date: "Jan 25", time: "10 AM", location: "Apollo Hospital" },
      { type: "Stitch Removal", doctor: "Nurse Station", date: "Jan 28", time: "3 PM", location: "Apollo Hospital" }
    ]
  };

  const milestones = [
    { day: 1, title: "Surgery Day", completed: true, description: "Rest and monitor vitals" },
    { day: 3, title: "Mobile Recovery", completed: true, description: "Start gentle walking" },
    { day: 7, title: "Increased Activity", completed: false, description: "Resume light activities" },
    { day: 14, title: "Full Recovery", completed: false, description: "Return to normal routine" }
  ];

  return (
    <div className="pb-20 bg-gradient-calm min-h-screen">
      {/* Header */}
      <div className="bg-gradient-primary p-4 text-primary-foreground">
        <h1 className="text-xl font-semibold">Recovery Plan</h1>
        <div className="flex items-center justify-between mt-2">
          <p className="text-primary-foreground/80 text-sm">{recoveryPlan.procedure}</p>
          <Badge className="bg-white/20 text-primary-foreground">
            Day {recoveryPlan.daysSinceOp} of {recoveryPlan.totalDays}
          </Badge>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Recovery Progress */}
        <Card className="p-4 shadow-card">
          <h2 className="font-semibold text-card-foreground mb-4">Recovery Milestones</h2>
          <div className="space-y-3">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  milestone.completed 
                    ? "bg-success text-success-foreground" 
                    : milestone.day === selectedDay
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {milestone.completed ? <CheckCircle2 size={16} /> : milestone.day}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{milestone.title}</p>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Today's Plan */}
        <Tabs defaultValue="medications" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="medications" className="text-xs">
              <Pill size={14} className="mr-1" />
              Meds
            </TabsTrigger>
            <TabsTrigger value="exercises" className="text-xs">
              <Dumbbell size={14} className="mr-1" />
              Exercise
            </TabsTrigger>
            <TabsTrigger value="diet" className="text-xs">
              <UtensilsCrossed size={14} className="mr-1" />
              Diet
            </TabsTrigger>
            <TabsTrigger value="appointments" className="text-xs">
              <Calendar size={14} className="mr-1" />
              Visits
            </TabsTrigger>
          </TabsList>

          <TabsContent value="medications" className="space-y-3">
            {dayPlan.medications.map((med, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium">{med.name}</h3>
                    <p className="text-sm text-muted-foreground">{med.timing}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      {med.withFood && (
                        <Badge variant="secondary" className="text-xs">With food</Badge>
                      )}
                      <Badge variant="outline" className="text-xs">
                        {med.remaining} pills left
                      </Badge>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    <CheckCircle2 size={14} className="mr-1" />
                    Taken
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="exercises" className="space-y-3">
            {dayPlan.exercises.map((exercise, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium">{exercise.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {exercise.duration} • {exercise.frequency}
                    </p>
                    <Badge 
                      variant="secondary" 
                      className="mt-2 text-xs bg-success-soft text-success-foreground"
                    >
                      {exercise.difficulty}
                    </Badge>
                  </div>
                  <Button size="sm" className="bg-gradient-primary">
                    Start
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="diet" className="space-y-3">
            {dayPlan.diet.map((meal, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium">{meal.meal}</h3>
                      <Badge variant="outline" className="text-xs">{meal.time}</Badge>
                    </div>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      {meal.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="appointments" className="space-y-3">
            {dayPlan.appointments.map((appointment, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium">{appointment.type}</h3>
                    <p className="text-sm text-muted-foreground">{appointment.doctor}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{appointment.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={12} />
                        <span>{appointment.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={12} />
                        <span>{appointment.location}</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Reschedule
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Red Flag Warning */}
        <Card className="p-4 bg-danger-soft border-danger">
          <div className="flex items-start space-x-3">
            <AlertCircle size={20} className="text-danger mt-0.5" />
            <div className="flex-1">
              <h3 className="font-medium text-danger-foreground">Watch for Warning Signs</h3>
              <ul className="text-sm text-danger-foreground/80 mt-1 space-y-1">
                <li>• Severe pain (8+ on scale)</li>
                <li>• Fever above 101°F</li>
                <li>• Excessive bleeding or discharge</li>
                <li>• Persistent nausea/vomiting</li>
              </ul>
            </div>
            <Button size="sm" className="bg-danger hover:bg-danger/90">
              Call Hospital
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};