import AppointmentsCard from "@/components/Dashboard/patient/appointments-card";
import MedicationsCard from "@/components/Dashboard/patient/medications-card";
//import WellnessTrackerCard from "@/components/Dashboard/patient/wellness-tracker-card"
import DocumentsCard from "@/components/Dashboard/patient/documents-card";
import RecommendationsCard from "@/components/Dashboard/patient/recommendations-card";

export default function PatientDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-6 flex flex-col">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
          {/* Left column */}
          <div className="flex flex-col gap-6 h-full">
            <AppointmentsCard />
            <RecommendationsCard />
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-6 h-full">
            <MedicationsCard />
            <DocumentsCard />
          </div>
        </div>
      </main>
    </div>
  );
}
