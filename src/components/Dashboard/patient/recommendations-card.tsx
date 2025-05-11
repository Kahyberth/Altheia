import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Calendar, FileText, Heart, Pill } from "lucide-react";

const recommendations = [
  {
    id: 1,
    title: "Schedule Annual Physical",
    description:
      "It's been 10 months since your last physical exam. We recommend scheduling one soon.",
    icon: Calendar,
    action: "Schedule Now",
    priority: "high",
  },
  {
    id: 2,
    title: "Complete Health Assessment",
    description:
      "Take a few minutes to complete your annual health assessment questionnaire.",
    icon: FileText,
    action: "Start Assessment",
    priority: "medium",
  },
  {
    id: 3,
    title: "Review Medication Plan",
    description:
      "Your medication plan is due for review. Schedule a consultation with your doctor.",
    icon: Pill,
    action: "Review Medications",
    priority: "medium",
  },
  {
    id: 4,
    title: "Track Blood Pressure",
    description:
      "Based on your history, we recommend tracking your blood pressure daily for the next week.",
    icon: Heart,
    action: "Start Tracking",
    priority: "low",
  },
];

export default function RecommendationsCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Personalized Recommendations</CardTitle>
        <CardDescription>Suggestions to improve your health</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recommendations.map((recommendation) => (
            <div
              key={recommendation.id}
              className={`border rounded-lg p-4 hover:bg-gray-50 transition-colors ${
                recommendation.priority === "high"
                  ? "border-red-200"
                  : recommendation.priority === "medium"
                  ? "border-amber-200"
                  : "border-blue-200"
              }`}
            >
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center mb-3 ${
                  recommendation.priority === "high"
                    ? "bg-red-100 text-red-600"
                    : recommendation.priority === "medium"
                    ? "bg-amber-100 text-amber-600"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                <recommendation.icon className="h-5 w-5" />
              </div>
              <h3 className="font-medium mb-1">{recommendation.title}</h3>
              <p className="text-sm text-gray-600 mb-3">
                {recommendation.description}
              </p>
              <Button
                variant="outline"
                size="sm"
                className={`w-full ${
                  recommendation.priority === "high"
                    ? "border-red-200 text-red-700 hover:bg-red-100"
                    : recommendation.priority === "medium"
                    ? "border-amber-200 text-amber-700 hover:bg-amber-100"
                    : "border-blue-200 text-blue-700 hover:bg-blue-100"
                }`}
              >
                {recommendation.action}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
