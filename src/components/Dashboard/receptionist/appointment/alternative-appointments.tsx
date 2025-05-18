"use client"

import { Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface AlternativeAppointmentsProps {
  patientName: string
  onSelect: () => void
}

export function AlternativeAppointments({ patientName, onSelect }: AlternativeAppointmentsProps) {
  // Mock alternative appointment slots
  const alternatives = [
    {
      id: "alt-1",
      date: "May 11, 2025",
      time: "10:15 AM",
      doctor: "Dr. Smith",
      duration: 30,
    },
    {
      id: "alt-2",
      date: "May 11, 2025",
      time: "2:30 PM",
      doctor: "Dr. Johnson",
      duration: 30,
    },
    {
      id: "alt-3",
      date: "May 12, 2025",
      time: "9:00 AM",
      doctor: "Dr. Williams",
      duration: 30,
    },
    {
      id: "alt-4",
      date: "May 12, 2025",
      time: "11:45 AM",
      doctor: "Dr. Smith",
      duration: 30,
    },
  ]

  return (
    <div className="py-4">
      <RadioGroup defaultValue="alt-1">
        <div className="space-y-3">
          {alternatives.map((alt) => (
            <div
              key={alt.id}
              className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-muted/50 transition-colors"
            >
              <RadioGroupItem value={alt.id} id={alt.id} />
              <Label htmlFor={alt.id} className="flex-1 cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    {alt.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    {alt.time} ({alt.duration} min)
                  </div>
                  <div className="flex items-center">
                    <User className="mr-1 h-3 w-3" />
                    {alt.doctor}
                  </div>
                </div>
              </Label>
            </div>
          ))}
        </div>
      </RadioGroup>

      <div className="flex justify-end gap-2 mt-6">
        <Button variant="outline" onClick={onSelect}>
          Cancel
        </Button>
        <Button onClick={onSelect}>Confirm Selection</Button>
      </div>
    </div>
  )
}
