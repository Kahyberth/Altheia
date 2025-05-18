"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { AlternativeAppointments } from "@/components/Dashboard/receptionist/appointment/alternative-appointments"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// Add these types at the top of the file after the imports
type Appointment = {
  id: number
  patientName: string
  time: string
  doctor: string
  duration: number
  date: string
  status: "confirmed" | "pending"
}

// Mock data for doctors
const doctors = [
  { id: "dr-smith", name: "Dr. Smith", specialty: "General Medicine" },
  { id: "dr-johnson", name: "Dr. Johnson", specialty: "Cardiology" },
  { id: "dr-williams", name: "Dr. Williams", specialty: "Pediatrics" },
]

// Mock appointments data
const appointments = [
  {
    id: 1,
    patientName: "John Doe",
    time: "09:00",
    doctor: "dr-smith",
    duration: 30,
    date: "2025-05-10",
    status: "confirmed",
  },
  {
    id: 2,
    patientName: "Mary Johnson",
    time: "10:30",
    doctor: "dr-williams",
    duration: 45,
    date: "2025-05-10",
    status: "confirmed",
  },
  {
    id: 3,
    patientName: "Robert Brown",
    time: "14:15",
    doctor: "dr-johnson",
    duration: 60,
    date: "2025-05-10",
    status: "confirmed",
  },
  {
    id: 4,
    patientName: "Emily Clark",
    time: "11:00",
    doctor: "dr-smith",
    duration: 30,
    date: "2025-05-10",
    status: "confirmed",
  },
  {
    id: 5,
    patientName: "David Wilson",
    time: "09:30",
    doctor: "dr-johnson",
    duration: 45,
    date: "2025-05-11",
    status: "confirmed",
  },
  {
    id: 6,
    patientName: "Sarah Thompson",
    time: "13:00",
    doctor: "dr-williams",
    duration: 30,
    date: "2025-05-11",
    status: "pending",
  },
  {
    id: 7,
    patientName: "Michael Brown",
    time: "15:30",
    doctor: "dr-smith",
    duration: 45,
    date: "2025-05-12",
    status: "confirmed",
  },
  {
    id: 8,
    patientName: "Jennifer Davis",
    time: "10:00",
    doctor: "dr-johnson",
    duration: 30,
    date: "2025-05-12",
    status: "pending",
  },
]

// Time slots from 8:00 to 17:00 (5:00 PM)
const timeSlots = Array.from({ length: 19 }, (_, i) => {
  const hour = Math.floor(i / 2) + 8
  const minute = i % 2 === 0 ? "00" : "30"
  const time24h = `${hour.toString().padStart(2, "0")}:${minute}`
  return {
    time24h,
    displayTime: `${hour > 12 ? hour - 12 : hour}:${minute} ${hour >= 12 ? "PM" : "AM"}`,
    hour,
    minute,
  }
})

export function AppointmentCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2025, 4, 10)) // May 10, 2025
  const [selectedDoctor, setSelectedDoctor] = useState<string>("dr-smith")
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null)
  const [showAlternatives, setShowAlternatives] = useState(false)
  const [calendarDays, setCalendarDays] = useState<Date[][]>([])
  const [currentMonth, setCurrentMonth] = useState<string>("")

  // Generate calendar days for the month view
  useEffect(() => {
    const generateCalendarDays = () => {
      const year = selectedDate.getFullYear()
      const month = selectedDate.getMonth()

      // First day of the month
      const firstDay = new Date(year, month, 1)
      // Last day of the month
      const lastDay = new Date(year, month + 1, 0)

      // Get the day of the week for the first day (0 = Sunday, 6 = Saturday)
      const firstDayOfWeek = firstDay.getDay()

      // Calculate the number of days to show from the previous month
      const daysFromPrevMonth = firstDayOfWeek

      // Calculate the total number of days to display (max 6 weeks = 42 days)
      const totalDays = 42

      // Generate the calendar days
      const days: Date[][] = []
      let week: Date[] = []

      // Add days from the previous month
      const prevMonth = new Date(year, month, 0)
      const prevMonthDays = prevMonth.getDate()

      for (let i = prevMonthDays - daysFromPrevMonth + 1; i <= prevMonthDays; i++) {
        week.push(new Date(year, month - 1, i))
      }

      // Add days from the current month
      for (let i = 1; i <= lastDay.getDate(); i++) {
        if (week.length === 7) {
          days.push(week)
          week = []
        }
        week.push(new Date(year, month, i))
      }

      // Add days from the next month
      const remainingDays = 7 - week.length
      if (remainingDays > 0) {
        for (let i = 1; i <= remainingDays; i++) {
          week.push(new Date(year, month + 1, i))
        }
        days.push(week)
      }

      // Add more weeks if needed to reach 6 weeks total
      const weeksToAdd = 6 - days.length
      if (weeksToAdd > 0) {
        let lastDate = week[week.length - 1]
        for (let w = 0; w < weeksToAdd; w++) {
          const nextWeek: Date[] = []
          for (let d = 0; d < 7; d++) {
            lastDate = new Date(lastDate)
            lastDate.setDate(lastDate.getDate() + 1)
            nextWeek.push(new Date(lastDate))
          }
          days.push(nextWeek)
        }
      }

      setCalendarDays(days)

      // Set current month display
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]
      setCurrentMonth(`${monthNames[month]} ${year}`)
    }

    generateCalendarDays()
  }, [selectedDate])

  // Format date to YYYY-MM-DD for comparison
  const formatDateForComparison = (date: Date) => {
    return date.toISOString().split("T")[0]
  }

  // Get appointments for selected doctor and date
  const getDoctorAppointments = () => {
    const formattedDate = formatDateForComparison(selectedDate)
    return appointments.filter((app) => app.doctor === selectedDoctor && app.date === formattedDate)
  }

  // Check if a time slot has an appointment
  const getAppointmentForTimeSlot = (timeSlot: string) => {
    const doctorAppointments = getDoctorAppointments()
    return doctorAppointments.find((app) => app.time === timeSlot)
  }

  // Get appointments for a specific date and doctor
  const getAppointmentsForDate = (date: Date, doctorId: string) => {
    const formattedDate = formatDateForComparison(date)
    return appointments.filter((app) => app.doctor === doctorId && app.date === formattedDate)
  }

  // Navigate to previous month
  const goToPreviousMonth = () => {
    const newDate = new Date(selectedDate)
    newDate.setMonth(newDate.getMonth() - 1)
    setSelectedDate(newDate)
  }

  // Navigate to next month
  const goToNextMonth = () => {
    const newDate = new Date(selectedDate)
    newDate.setMonth(newDate.getMonth() + 1)
    setSelectedDate(newDate)
  }

  // Navigate to today
  const goToToday = () => {
    setSelectedDate(new Date(2025, 4, 10)) // For demo, we'll use May 10, 2025 as "today"
  }

  // Select a specific day
  const selectDay = (day: Date) => {
    setSelectedDate(day)
  }

  // Handle appointment click
  const handleAppointmentClick = (appointment: Appointment) => {
    setSelectedAppointment(appointment)
  }

  // Get doctor name by ID
  const getDoctorName = (doctorId: string) => {
    const doctor = doctors.find((doc) => doc.id === doctorId)
    return doctor ? doctor.name : doctorId
  }

  // Check if a date is in the current month
  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === selectedDate.getMonth()
  }

  // Check if a date is today
  const isToday = (date: Date) => {
    const today = new Date(2025, 4, 10) // Mock "today" as May 10, 2025
    return date.toDateString() === today.toDateString()
  }

  // Check if a date is the selected date
  const isSelectedDate = (date: Date) => {
    return date.toDateString() === selectedDate.toDateString()
  }

  return (
    <div className="bg-white rounded-lg border shadow">
      {/* Calendar Header with Doctor Selection */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border-b gap-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={goToPreviousMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="font-medium">{currentMonth}</div>
          <Button variant="outline" size="icon" onClick={goToNextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={goToToday}>
            Today
          </Button>
        </div>
        <div className="w-full md:w-auto">
          <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Select doctor" />
            </SelectTrigger>
            <SelectContent>
              {doctors.map((doctor) => (
                <SelectItem key={doctor.id} value={doctor.id}>
                  {doctor.name} - {doctor.specialty}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Traditional Calendar View */}
      <div className="p-4">
        {/* Day of Week Headers */}
        <div className="grid grid-cols-7 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-medium text-sm p-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="border rounded-lg overflow-hidden">
          {calendarDays.map((week) => (
            <div key={`week-${week[0].getTime()}`} className="grid grid-cols-7 border-b last:border-b-0">
              {week.map((day) => {
                const dayAppointments = getAppointmentsForDate(day, selectedDoctor)
                const isCurrentMonthDay = isCurrentMonth(day)
                const isTodayDay = isToday(day)
                const isSelected = isSelectedDate(day)

                return (
                  <button
                    type="button"
                    key={`day-${day.getTime()}`}
                    className={cn(
                      "min-h-[80px] p-1 border-r last:border-r-0 cursor-pointer hover:bg-muted/30 transition-colors text-left",
                      isCurrentMonthDay ? "" : "text-muted-foreground bg-muted/10",
                      isSelected ? "bg-primary/10" : "",
                      isTodayDay ? "font-bold" : "",
                    )}
                    onClick={() => selectDay(day)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        selectDay(day)
                      }
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <span
                        className={cn(
                          "text-sm p-1 rounded-full w-6 h-6 flex items-center justify-center",
                          isTodayDay ? "bg-primary text-primary-foreground" : "",
                        )}
                      >
                        {day.getDate()}
                      </span>
                      {dayAppointments.length > 0 && (
                        <Badge variant="outline" className="text-xs">
                          {dayAppointments.length}
                        </Badge>
                      )}
                    </div>

                    {/* Show first 2 appointments for the day */}
                    <div className="mt-1 space-y-1">
                      {dayAppointments.slice(0, 2).map((app) => (
                        <div
                          key={`app-${app.id}`}
                          className={cn(
                            "text-xs p-1 rounded truncate",
                            app.status === "confirmed" ? "bg-primary/10" : "bg-yellow-100",
                          )}
                        >
                          {app.time.substring(0, 5)} {app.patientName.split(" ")[0]}
                        </div>
                      ))}
                      {dayAppointments.length > 2 && (
                        <div className="text-xs text-center text-muted-foreground">
                          +{dayAppointments.length - 2} more
                        </div>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Dialog for showing alternative appointments */}
      <Dialog open={showAlternatives} onOpenChange={setShowAlternatives}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Alternative Appointment Options</DialogTitle>
            <DialogDescription>The following alternative appointments are available.</DialogDescription>
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
