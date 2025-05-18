"use client"

import { useState } from "react"
import { Calendar, FileText, MoreHorizontal, Phone, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { InsuranceVerification } from "@/components/Dashboard/receptionist/patients/insurance-verification"

export function PatientsList() {
  const [showInsuranceDialog, setShowInsuranceDialog] = useState(false)
  const [selectedPatient, setSelectedPatient] = useState<any | null>(null)

  // Mock patients data
  const patients = [
    {
      id: "P10023",
      name: "John Doe",
      dob: "05/12/1980",
      phone: "(555) 123-4567",
      email: "john.doe@example.com",
      address: "123 Main St, Anytown, CA 12345",
      insurance: "Blue Cross Blue Shield",
      insuranceId: "BCBS12345678",
      lastVisit: "04/15/2025",
    },
    {
      id: "P10045",
      name: "Mary Johnson",
      dob: "09/23/1975",
      phone: "(555) 234-5678",
      email: "mary.johnson@example.com",
      address: "456 Oak Ave, Somewhere, CA 67890",
      insurance: "Aetna",
      insuranceId: "AET87654321",
      lastVisit: "05/02/2025",
    },
    {
      id: "P10067",
      name: "Robert Brown",
      dob: "11/30/1992",
      phone: "(555) 345-6789",
      email: "robert.brown@example.com",
      address: "789 Pine St, Nowhere, CA 54321",
      insurance: "UnitedHealthcare",
      insuranceId: "UHC56781234",
      lastVisit: "04/28/2025",
    },
    {
      id: "P10089",
      name: "Emily Clark",
      dob: "02/15/1988",
      phone: "(555) 456-7890",
      email: "emily.clark@example.com",
      address: "321 Elm St, Elsewhere, CA 98765",
      insurance: "Cigna",
      insuranceId: "CIG43218765",
      lastVisit: "05/05/2025",
    },
    {
      id: "P10112",
      name: "David Wilson",
      dob: "07/08/1965",
      phone: "(555) 567-8901",
      email: "david.wilson@example.com",
      address: "654 Maple Ave, Anywhere, CA 13579",
      insurance: "Humana",
      insuranceId: "HUM98761234",
      lastVisit: "04/20/2025",
    },
  ]

  const handleVerifyInsurance = (patient: any) => {
    setSelectedPatient(patient)
    setShowInsuranceDialog(true)
  }

  return (
    <div className="relative w-full overflow-auto">
      <table className="w-full caption-bottom text-sm">
        <thead className="[&_tr]:border-b">
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">ID</th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Name</th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Date of Birth</th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Contact</th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Insurance</th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Last Visit</th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Actions</th>
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          {patients.map((patient) => (
            <tr
              key={patient.id}
              className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
            >
              <td className="p-4 align-middle">{patient.id}</td>
              <td className="p-4 align-middle font-medium">{patient.name}</td>
              <td className="p-4 align-middle">{patient.dob}</td>
              <td className="p-4 align-middle">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <Phone className="h-3 w-3 text-muted-foreground" />
                    <span>{patient.phone}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">{patient.email}</div>
                </div>
              </td>
              <td className="p-4 align-middle">
                <div className="flex flex-col">
                  <div>{patient.insurance}</div>
                  <div className="text-xs text-muted-foreground">ID: {patient.insuranceId}</div>
                </div>
              </td>
              <td className="p-4 align-middle">{patient.lastVisit}</td>
              <td className="p-4 align-middle">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8" onClick={() => handleVerifyInsurance(patient)}>
                    Verify Insurance
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        View Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Calendar className="mr-2 h-4 w-4" />
                        Schedule Appointment
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FileText className="mr-2 h-4 w-4" />
                        View Medical Records
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Dialog for insurance verification */}
      <Dialog open={showInsuranceDialog} onOpenChange={setShowInsuranceDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Insurance Verification</DialogTitle>
            <DialogDescription>Verify insurance information for {selectedPatient?.name}.</DialogDescription>
          </DialogHeader>
          <InsuranceVerification patient={selectedPatient} onClose={() => setShowInsuranceDialog(false)} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
