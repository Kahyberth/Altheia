import { useState } from "react"
import { Download, FileText, MoreHorizontal, Send, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function LabResultsList() {
  const [showSendDialog, setShowSendDialog] = useState(false)
  const [selectedResult, setSelectedResult] = useState<any | null>(null)
  const { toast } = useToast()

  // Mock lab results data
  const labResults = [
    {
      id: 1,
      patientName: "John Doe",
      patientId: "P10023",
      testType: "Complete Blood Count (CBC)",
      date: "May 5, 2025",
      status: "Completed",
      doctor: "Dr. Smith",
      fileName: "john_doe_cbc_results.pdf",
    },
    {
      id: 2,
      patientName: "Mary Johnson",
      patientId: "P10045",
      testType: "Comprehensive Metabolic Panel",
      date: "May 6, 2025",
      status: "Completed",
      doctor: "Dr. Williams",
      fileName: "mary_johnson_cmp_results.pdf",
    },
    {
      id: 3,
      patientName: "Robert Brown",
      patientId: "P10067",
      testType: "Lipid Panel",
      date: "May 7, 2025",
      status: "Completed",
      doctor: "Dr. Johnson",
      fileName: "robert_brown_lipid_results.pdf",
    },
    {
      id: 4,
      patientName: "Emily Clark",
      patientId: "P10089",
      testType: "Thyroid Function Test",
      date: "May 8, 2025",
      status: "Completed",
      doctor: "Dr. Smith",
      fileName: "emily_clark_thyroid_results.pdf",
    },
    {
      id: 5,
      patientName: "David Wilson",
      patientId: "P10112",
      testType: "Urinalysis",
      date: "May 9, 2025",
      status: "Completed",
      doctor: "Dr. Johnson",
      fileName: "david_wilson_urinalysis_results.pdf",
    },
  ]

  const handleSendResults = (result: any) => {
    setSelectedResult(result)
    setShowSendDialog(true)
  }

  const handleConfirmSend = () => {
    toast({
      title: "Results sent successfully",
      description: `Lab results have been sent to ${selectedResult?.patientName}.`,
    })
    setShowSendDialog(false)
  }

  return (
    <div className="space-y-4">
      {labResults.map((result) => (
        <div
          key={result.id}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 border rounded-lg bg-white"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <div className="font-medium">{result.testType}</div>
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <User className="mr-1 h-3 w-3" />
                  {result.patientName} ({result.patientId})
                </div>
                <div>Date: {result.date}</div>
                <div>Ordered by: {result.doctor}</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick={() => handleSendResults(result)}
            >
              <Send className="h-3 w-3" />
              Send to Patient
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Download className="h-3 w-3" />
              Download
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Actions</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem>Print</DropdownMenuItem>
                <DropdownMenuItem>Archive</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}

      {/* Dialog for sending results to patient */}
      <Dialog open={showSendDialog} onOpenChange={setShowSendDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Send Lab Results to Patient</DialogTitle>
            <DialogDescription>
              Send the lab results directly to the patient's profile in the EHR system.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="patient">Patient</Label>
              <Input id="patient" value={selectedResult?.patientName} disabled />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="test">Test</Label>
              <Input id="test" value={selectedResult?.testType} disabled />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Additional Message (Optional)</Label>
              <Textarea id="message" placeholder="Add any additional information for the patient..." />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowSendDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleConfirmSend}>Send Results</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
