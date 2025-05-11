import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Clock,
  MapPin,
  MoreHorizontal,
  Plus,
  Video,
} from "lucide-react";
import { useState } from "react";

const appointments = [
  {
    id: 1,
    doctor: {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "May 15, 2025",
    time: "10:00 AM",
    type: "In-person",
    location: "Altheia Medical Center",
    status: "confirmed",
  },
  {
    id: 2,
    doctor: {
      name: "Dr. Michael Chen",
      specialty: "Dermatologist",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "May 22, 2025",
    time: "2:30 PM",
    type: "Virtual",
    location: "Video Consultation",
    status: "confirmed",
  },
  {
    id: 3,
    doctor: {
      name: "Dr. Emily Rodriguez",
      specialty: "Neurologist",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "June 5, 2025",
    time: "11:15 AM",
    type: "In-person",
    location: "Altheia Medical Center",
    status: "pending",
  },
];

// Past appointments
const pastAppointments = [
  {
    id: 4,
    doctor: {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "April 10, 2025",
    time: "9:00 AM",
    type: "In-person",
    location: "Altheia Medical Center",
    status: "completed",
  },
  {
    id: 5,
    doctor: {
      name: "Dr. Robert Williams",
      specialty: "General Practitioner",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "March 25, 2025",
    time: "3:45 PM",
    type: "Virtual",
    location: "Video Consultation",
    status: "completed",
  },
];

export default function AppointmentsCard() {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-xl">Appointments</CardTitle>
          <CardDescription>View and manage your appointments</CardDescription>
        </div>
        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          New Appointment
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="upcoming"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="space-y-4">
            {appointments.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No upcoming appointments</p>
                <Button variant="outline" className="mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  Schedule Appointment
                </Button>
              </div>
            ) : (
              appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div>
                      <h3 className="font-medium">{appointment.doctor.name}</h3>
                      <p className="text-sm text-gray-500">
                        {appointment.doctor.specialty}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-6">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{appointment.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{appointment.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {appointment.type === "Virtual" ? (
                        <Video className="h-4 w-4 text-gray-500" />
                      ) : (
                        <MapPin className="h-4 w-4 text-gray-500" />
                      )}
                      <span className="text-sm">{appointment.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          appointment.status === "confirmed"
                            ? "default"
                            : appointment.status === "pending"
                            ? "outline"
                            : "secondary"
                        }
                        className={
                          appointment.status === "confirmed"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : appointment.status === "pending"
                            ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                            : ""
                        }
                      >
                        {appointment.status.charAt(0).toUpperCase() +
                          appointment.status.slice(1)}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Reschedule</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            Cancel
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              ))
            )}
          </TabsContent>
          <TabsContent value="past" className="space-y-4">
            {pastAppointments.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No past appointments</p>
              </div>
            ) : (
              pastAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div>
                      <h3 className="font-medium">{appointment.doctor.name}</h3>
                      <p className="text-sm text-gray-500">
                        {appointment.doctor.specialty}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-6">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{appointment.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{appointment.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {appointment.type === "Virtual" ? (
                        <Video className="h-4 w-4 text-gray-500" />
                      ) : (
                        <MapPin className="h-4 w-4 text-gray-500" />
                      )}
                      <span className="text-sm">{appointment.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Completed</Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>View Summary</DropdownMenuItem>
                          <DropdownMenuItem>Book Follow-up</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              ))
            )}
          </TabsContent>
        </Tabs>
        {activeTab === "upcoming" && appointments.length > 0 && (
          <Button variant="outline" className="w-full mt-4">
            View All Appointments
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
