import { ProfileEdit } from "@/components/Profile/ProfileEdit";

export default function PatientProfilePage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="flex-1 p-8">
        <ProfileEdit />
      </main>
    </div>
  );
}
