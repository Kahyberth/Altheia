import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Clock, Pill } from "lucide-react";
import { useState } from "react";

// Sample medication data
const medications = [
  {
    id: 1,
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    timeOfDay: "Morning",
    remainingDays: 15,
    totalDays: 30,
    nextRefill: "May 25, 2025",
    taken: true,
  },
  {
    id: 2,
    name: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    timeOfDay: "Morning & Evening",
    remainingDays: 7,
    totalDays: 30,
    nextRefill: "May 17, 2025",
    taken: false,
  },
  {
    id: 3,
    name: "Atorvastatin",
    dosage: "20mg",
    frequency: "Once daily",
    timeOfDay: "Evening",
    remainingDays: 22,
    totalDays: 30,
    nextRefill: "June 1, 2025",
    taken: false,
  },
];

export default function MedicationsCard() {
  const [medicationList, setMedicationList] = useState(medications);

  const toggleTaken = (id: number) => {
    setMedicationList(
      medicationList.map((med) =>
        med.id === id ? { ...med, taken: !med.taken } : med
      )
    );
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">Medications</CardTitle>
            <CardDescription>Track your medication schedule</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            Request Refill
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {medicationList.map((medication) => (
            <div
              key={medication.id}
              className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium flex items-center">
                    <Pill className="h-4 w-4 mr-2 text-blue-500" />
                    {medication.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {medication.dosage} • {medication.frequency}
                  </p>
                </div>
                <Button
                  variant={medication.taken ? "default" : "outline"}
                  size="sm"
                  className={cn(
                    "h-8",
                    medication.taken &&
                      "bg-green-100 text-green-800 hover:bg-green-200 hover:text-green-800"
                  )}
                  onClick={() => toggleTaken(medication.id)}
                >
                  {medication.taken ? "Taken" : "Take Now"}
                </Button>
              </div>
              <div className="mt-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">
                    Refill in {medication.remainingDays} days
                  </span>
                  <span className="text-gray-500">
                    {medication.remainingDays}/{medication.totalDays} days
                  </span>
                </div>
                <Progress
                  value={
                    (medication.remainingDays / medication.totalDays) * 100
                  }
                  className={cn(
                    "h-2",
                    medication.remainingDays < 7 ? "bg-red-100" : "bg-gray-100"
                  )}
                />
              </div>
              <div className="mt-3 flex items-center text-sm text-gray-500">
                <Clock className="h-3.5 w-3.5 mr-1.5" />
                <span>Next refill: {medication.nextRefill}</span>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4">
          View All Medications
        </Button>
      </CardContent>
    </Card>
  );
}
