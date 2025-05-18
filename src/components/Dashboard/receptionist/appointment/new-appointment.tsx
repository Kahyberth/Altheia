import type React from "react"

import { useState } from "react"
import { ArrowLeft, Search, UserPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from "react-router"

// Mock patient data
const mockPatients = [
  {
    id: "p1",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    documentNumber: "1234567890",
    gender: "Male",
    dateOfBirth: "1980-05-12",
    address: "123 Main St, Anytown, CA 12345",
    eps: "Blue Cross Blue Shield",
    bloodType: "O+",
  },
  {
    id: "p2",
    name: "Mary Johnson",
    email: "mary.johnson@example.com",
    phone: "(555) 234-5678",
    documentNumber: "0987654321",
    gender: "Female",
    dateOfBirth: "1975-09-23",
    address: "456 Oak Ave, Somewhere, CA 67890",
    eps: "Aetna",
    bloodType: "A+",
  },
]

export default function NewAppointmentPage() {
  const [submitting, setSubmitting] = useState(false)
  const [showNewPatientDialog, setShowNewPatientDialog] = useState(false)
  const [documentSearch, setDocumentSearch] = useState("")
  const [searchResult, setSearchResult] = useState<any | null>(null)
  const [selectedPatient, setSelectedPatient] = useState<any | null>(null)
  const { toast } = useToast()

  // Form state for new patient
  const [newPatient, setNewPatient] = useState({
    name: "",
    email: "",
    phone: "",
    documentNumber: "",
    gender: "Male",
    dateOfBirth: "",
    address: "",
    eps: "",
    bloodType: "O+",
  })

  const handleSearchPatient = () => {
    // In a real app, this would be an API call
    const found = mockPatients.find((p) => p.documentNumber === documentSearch)
    setSearchResult(found)
    if (found) {
      setSelectedPatient(found)
      toast({
        title: "Patient found",
        description: `Found patient: ${found.name}`,
      })
    } else {
      toast({
        title: "Patient not found",
        description: "No patient found with that document number. You can register a new patient.",
        variant: "destructive",
      })
    }
  }

  const handleNewPatientChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewPatient((prev) => ({ ...prev, [name]: value }))
  }

  const handleGenderChange = (value: string) => {
    setNewPatient((prev) => ({ ...prev, gender: value }))
  }

  const handleBloodTypeChange = (value: string) => {
    setNewPatient((prev) => ({ ...prev, bloodType: value }))
  }

  const handleRegisterPatient = () => {
    // In a real app, this would be an API call to register the patient
    const newPatientData = {
      ...newPatient,
      id: `p${Math.floor(Math.random() * 1000)}`, // Generate a random ID for demo
    }

    setSelectedPatient(newPatientData)
    setShowNewPatientDialog(false)

    toast({
      title: "Patient registered",
      description: `Successfully registered ${newPatient.name} as a new patient.`,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedPatient) {
      toast({
        title: "Patient required",
        description: "Please select or register a patient for this appointment.",
        variant: "destructive",
      })
      return
    }

    setSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false)
      toast({
        title: "Appointment created",
        description: `The appointment has been successfully created for ${selectedPatient.name}.`,
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link to="/receptionist/dashboard/appointment-page" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to Appointments
          </Link>
        </div>
      </header>
      <main className="flex-1 container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Create New Appointment</h2>
            <p className="text-muted-foreground">Schedule a new appointment for a patient</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Appointment Details</CardTitle>
              <CardDescription>Enter the details for the new appointment</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label>Patient Selection</Label>
                    <div className="flex gap-2">
                      <div className="flex-1 relative">
                        <Input
                          placeholder="Search by document number/cedula"
                          value={documentSearch}
                          onChange={(e) => setDocumentSearch(e.target.value)}
                        />
                      </div>
                      <Button type="button" variant="outline" onClick={handleSearchPatient}>
                        <Search className="h-4 w-4 mr-2" />
                        Search
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setShowNewPatientDialog(true)
                          setNewPatient((prev) => ({
                            ...prev,
                            documentNumber: documentSearch,
                          }))
                        }}
                      >
                        <UserPlus className="h-4 w-4 mr-2" />
                        New
                      </Button>
                    </div>
                  </div>

                  {selectedPatient && (
                    <div className="border rounded-lg p-4 bg-muted/20">
                      <h4 className="font-medium mb-2">Selected Patient</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Name:</span> {selectedPatient.name}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Document:</span> {selectedPatient.documentNumber}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Phone:</span> {selectedPatient.phone}
                        </div>
                        <div>
                          <span className="text-muted-foreground">EPS:</span> {selectedPatient.eps}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="doctor">Doctor</Label>
                  <Select>
                    <SelectTrigger id="doctor">
                      <SelectValue placeholder="Select doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dr-smith">Dr. Smith</SelectItem>
                      <SelectItem value="dr-johnson">Dr. Johnson</SelectItem>
                      <SelectItem value="dr-williams">Dr. Williams</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="appointment-type">Appointment Type</Label>
                  <Select>
                    <SelectTrigger id="appointment-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="check-up">Check-up</SelectItem>
                      <SelectItem value="follow-up">Follow-up</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="new-patient">New Patient</SelectItem>
                      <SelectItem value="procedure">Procedure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="date">Date</Label>
                  <Input type="date" id="date" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="time">Time</Label>
                  <Input type="time" id="time" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="duration">Duration (minutes)</Label>
                  <Select>
                    <SelectTrigger id="duration">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="45">45 minutes</SelectItem>
                      <SelectItem value="60">60 minutes</SelectItem>
                      <SelectItem value="90">90 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea id="notes" placeholder="Add any additional notes about the appointment" />
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Link to="/receptionist/dashboard/appointment-management">
                    <Button variant="outline" type="button">
                      Cancel
                    </Button>
                  </Link>
                  <Button type="submit" disabled={submitting || !selectedPatient}>
                    {submitting ? "Creating..." : "Create Appointment"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Doctor Availability</CardTitle>
                <CardDescription>Available time slots for selected doctor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Select a doctor to see their available time slots</p>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Dr. Smith</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-sm p-2 border rounded bg-muted/50">9:00 AM</div>
                      <div className="text-sm p-2 border rounded bg-muted/50">9:30 AM</div>
                      <div className="text-sm p-2 border rounded bg-muted/50">10:00 AM</div>
                      <div className="text-sm p-2 border rounded bg-muted/50">11:30 AM</div>
                      <div className="text-sm p-2 border rounded bg-muted/50">1:00 PM</div>
                      <div className="text-sm p-2 border rounded bg-muted/50">2:30 PM</div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Dr. Johnson</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-sm p-2 border rounded bg-muted/50">10:15 AM</div>
                      <div className="text-sm p-2 border rounded bg-muted/50">11:00 AM</div>
                      <div className="text-sm p-2 border rounded bg-muted/50">1:30 PM</div>
                      <div className="text-sm p-2 border rounded bg-muted/50">3:00 PM</div>
                      <div className="text-sm p-2 border rounded bg-muted/50">4:15 PM</div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Dr. Williams</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-sm p-2 border rounded bg-muted/50">9:15 AM</div>
                      <div className="text-sm p-2 border rounded bg-muted/50">10:45 AM</div>
                      <div className="text-sm p-2 border rounded bg-muted/50">12:30 PM</div>
                      <div className="text-sm p-2 border rounded bg-muted/50">2:00 PM</div>
                      <div className="text-sm p-2 border rounded bg-muted/50">3:30 PM</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* New Patient Registration Dialog */}
      <Dialog open={showNewPatientDialog} onOpenChange={setShowNewPatientDialog}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Register New Patient</DialogTitle>
            <DialogDescription>Enter the patient's information to register them in the system.</DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="personal">Personal Information</TabsTrigger>
              <TabsTrigger value="medical">Medical Information</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={newPatient.name}
                    onChange={handleNewPatientChange}
                    placeholder="Enter full name"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="documentNumber">Document Number/Cedula</Label>
                  <Input
                    id="documentNumber"
                    name="documentNumber"
                    value={newPatient.documentNumber}
                    onChange={handleNewPatientChange}
                    placeholder="Enter document number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={newPatient.email}
                    onChange={handleNewPatientChange}
                    placeholder="Enter email address"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={newPatient.phone}
                    onChange={handleNewPatientChange}
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={newPatient.dateOfBirth}
                    onChange={handleNewPatientChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Gender</Label>
                  <RadioGroup
                    defaultValue={newPatient.gender}
                    onValueChange={handleGenderChange}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={newPatient.address}
                  onChange={handleNewPatientChange}
                  placeholder="Enter full address"
                />
              </div>
            </TabsContent>

            <TabsContent value="medical" className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="eps">EPS / Insurance</Label>
                  <Input
                    id="eps"
                    name="eps"
                    value={newPatient.eps}
                    onChange={handleNewPatientChange}
                    placeholder="Enter EPS or insurance provider"
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Blood Type</Label>
                  <RadioGroup
                    defaultValue={newPatient.bloodType}
                    onValueChange={handleBloodTypeChange}
                    className="grid grid-cols-4 gap-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="A+" id="a-pos" />
                      <Label htmlFor="a-pos">A+</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="A-" id="a-neg" />
                      <Label htmlFor="a-neg">A-</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="B+" id="b-pos" />
                      <Label htmlFor="b-pos">B+</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="B-" id="b-neg" />
                      <Label htmlFor="b-neg">B-</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="AB+" id="ab-pos" />
                      <Label htmlFor="ab-pos">AB+</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="AB-" id="ab-neg" />
                      <Label htmlFor="ab-neg">AB-</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="O+" id="o-pos" />
                      <Label htmlFor="o-pos">O+</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="O-" id="o-neg" />
                      <Label htmlFor="o-neg">O-</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setShowNewPatientDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleRegisterPatient}>Register Patient</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
