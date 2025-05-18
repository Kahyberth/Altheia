import { Filter, Plus, Search, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PatientsList } from "@/components/Dashboard/receptionist/patients/patients-list"
import { Link } from "react-router"

export default function PatientsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <h1 className="text-lg font-semibold">Patients</h1>
        </div>
      </header>
      <main className="flex-1 container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Patient Management</h2>
            <p className="text-muted-foreground">Manage patient information and demographics</p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/patients/new"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              <Plus className="mr-2 h-4 w-4" />
              New Patient
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search patients..." className="w-full pl-8" />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold leading-none tracking-tight">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Patient Directory
                </div>
              </h3>
              <p className="text-sm text-muted-foreground">Total: 156 patients</p>
            </div>
          </div>
          <PatientsList />
        </div>
      </main>
    </div>
  )
}
