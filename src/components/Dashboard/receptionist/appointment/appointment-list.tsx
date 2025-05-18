"use client"

import { useState } from "react"
import { Calendar, Clock, MoreHorizontal, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { AlternativeAppointments } from "@/components/Dashboard/receptionist/appointment/alternative-appointments"

interface Appointment {
  id: number
  patientName: string
  date: string
  time: string
  doctor: string
  duration: number
  status: "Confirmed" | "Pending"
  type: string
}

export function AppointmentList() {
  const [showAlternatives, setShowAlternatives] = useState(false)
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null)

  // Mock appointments data
  const appointments: Appointment[] = [
    {
      id: 1,
      patientName: "John Doe",
      date: "May 10, 2025",
      time: "9:00 AM",
      doctor: "Dr. Smith",
      duration: 30,
      status: "Confirmed",
      type: "Check-up",
    },
    {
      id: 2,
      patientName: "Mary Johnson",
      date: "May 10, 2025",
      time: "10:30 AM",
      doctor: "Dr. Williams",
      duration: 45,
      status: "Pending",
      type: "Follow-up",
    },
    {
      id: 3,
      patientName: "Robert Brown",
      date: "May 10, 2025",
      time: "2:15 PM",
      doctor: "Dr. Johnson",
      duration: 60,
      status: "Confirmed",
      type: "Consultation",
    },
    {
      id: 4,
      patientName: "Emily Clark",
      date: "May 11, 2025",
      time: "11:00 AM",
      doctor: "Dr. Smith",
      duration: 30,
      status: "Confirmed",
      type: "Check-up",
    },
    {
      id: 5,
      patientName: "David Wilson",
      date: "May 11, 2025",
      time: "1:30 PM",
      doctor: "Dr. Johnson",
      duration: 45,
      status: "Pending",
      type: "New Patient",
    },
    {
      id: 6,
      patientName: "Sarah Thompson",
      date: "May 12, 2025",
      time: "9:45 AM",
      doctor: "Dr. Williams",
      duration: 30,
      status: "Confirmed",
      type: "Follow-up",
    },
  ]

  const handleFindAlternatives = (appointment: Appointment) => {
    setSelectedAppointment(appointment)
    setShowAlternatives(true)
  }

  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <div
          key={appointment.id}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 border rounded-lg bg-white"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
              {appointment.patientName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <div className="font-medium">{appointment.patientName}</div>
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-3 w-3" />
                  {appointment.date}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  {appointment.time} ({appointment.duration} min)
                </div>
                <div className="flex items-center">
                  <User className="mr-1 h-3 w-3" />
                  {appointment.doctor}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div
              className={`text-xs rounded-full px-2 py-1 ${
                appointment.status === "Confirmed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {appointment.status}
            </div>
            <div className="text-xs rounded-full bg-blue-100 text-blue-800 px-2 py-1">{appointment.type}</div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Actions</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFindAlternatives(appointment)}>
                  Find Alternatives
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Cancel</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}

      {/* Dialog for showing alternative appointments */}
      <Dialog open={showAlternatives} onOpenChange={setShowAlternatives}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Alternative Appointment Options</DialogTitle>
            <DialogDescription>
              The following alternative appointments are available for {selectedAppointment?.patientName}.
            </DialogDescription>
          </DialogHeader>
          <AlternativeAppointments
            patientName={selectedAppointment?.patientName || ""}
            onSelect={() => setShowAlternatives(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
