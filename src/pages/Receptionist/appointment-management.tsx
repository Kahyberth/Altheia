import { Calendar, Clock, Filter, Plus, Search } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppointmentCalendar } from "@/components/Dashboard/receptionist/appointment/appointment-calendar"
import { AppointmentList } from "@/components/Dashboard/receptionist/appointment/appointment-list"

export default function AppointmentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <h1 className="text-lg font-semibold">Appointments</h1>
        </div>
      </header>
      <main className="flex-1 container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Appointment Management</h2>
            <p className="text-muted-foreground">View and manage patient appointments</p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/receptionist/dashboard/appointment-management/new"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              <Plus className="mr-2 h-4 w-4" />
              New Appointment
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search appointments..." className="w-full pl-8" />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        <Tabs defaultValue="calendar" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="calendar" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Calendar View
            </TabsTrigger>
            <TabsTrigger value="list" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              List View
            </TabsTrigger>
            <TabsTrigger value="requests" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Appointment Requests
            </TabsTrigger>
          </TabsList>
          <TabsContent value="calendar">
            <AppointmentCalendar />
          </TabsContent>
          <TabsContent value="list">
            <AppointmentList />
          </TabsContent>
          <TabsContent value="requests">
            <Card>
              <CardHeader>
                <CardTitle>Appointment Requests</CardTitle>
                <CardDescription>Review and manage incoming appointment requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appointmentRequests.map((request) => (
                    <div
                      key={request.id}
                      className="flex flex-col md:flex-row justify-between gap-4 p-4 border rounded-lg"
                    >
                      <div className="space-y-1">
                        <div className="font-medium">{request.patientName}</div>
                        <div className="text-sm text-muted-foreground">
                          Requested: {request.requestedDate} at {request.requestedTime} with Dr. {request.doctor}
                        </div>
                        <div className="text-sm text-muted-foreground">Reason: {request.reason}</div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button size="sm" className="w-full md:w-auto">
                          Accept
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full md:w-auto"
                          onClick={() => {
                            // In a real app, this would open a modal with alternative slots
                          }}
                        >
                          Suggest Alternative
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

const appointmentRequests = [
  {
    id: "req-1",
    patientName: "Emily Wilson",
    requestedDate: "May 12, 2025",
    requestedTime: "10:30 AM",
    doctor: "Smith",
    reason: "Annual physical examination",
  },
  {
    id: "req-2",
    patientName: "Michael Thompson",
    requestedDate: "May 15, 2025",
    requestedTime: "2:00 PM",
    doctor: "Johnson",
    reason: "Follow-up appointment",
  },
  {
    id: "req-3",
    patientName: "Jessica Martinez",
    requestedDate: "May 11, 2025",
    requestedTime: "9:15 AM",
    doctor: "Williams",
    reason: "Consultation for persistent headaches",
  },
]
