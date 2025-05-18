"use client"

import type React from "react"

import { useState } from "react"
import { Check, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

interface InsuranceVerificationProps {
  patient: any
  onClose: () => void
}

export function InsuranceVerification({ patient, onClose }: InsuranceVerificationProps) {
  const [verifying, setVerifying] = useState(false)
  const [verified, setVerified] = useState(false)
  const [formData, setFormData] = useState({
    patientName: patient?.name || "",
    patientId: patient?.id || "",
    insuranceProvider: patient?.insurance || "",
    insuranceId: patient?.insuranceId || "",
    groupNumber: "",
    planType: "",
    coverageStart: "",
    coverageEnd: "",
    notes: "",
  })
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleVerify = () => {
    setVerifying(true)

    // Simulate verification process
    setTimeout(() => {
      setVerifying(false)
      setVerified(true)
      toast({
        title: "Insurance verified",
        description: "Patient insurance information has been verified successfully.",
      })
    }, 2000)
  }

  if (!patient) return null

  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="patient-name">Patient Name</Label>
          <Input
            id="patient-name"
            name="patientName"
            value={formData.patientName}
            onChange={handleInputChange}
            disabled
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="patient-id">Patient ID</Label>
          <Input id="patient-id" name="patientId" value={formData.patientId} onChange={handleInputChange} disabled />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="insurance-provider">Insurance Provider</Label>
          <Input
            id="insurance-provider"
            name="insuranceProvider"
            value={formData.insuranceProvider}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="insurance-id">Insurance ID</Label>
          <Input id="insurance-id" name="insuranceId" value={formData.insuranceId} onChange={handleInputChange} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="group-number">Group Number</Label>
          <Input
            id="group-number"
            name="groupNumber"
            value={formData.groupNumber}
            onChange={handleInputChange}
            placeholder="Enter group number"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="plan-type">Plan Type</Label>
          <Input
            id="plan-type"
            name="planType"
            value={formData.planType}
            onChange={handleInputChange}
            placeholder="Enter plan type"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="coverage-dates">Coverage Dates</Label>
        <div className="flex gap-2">
          <Input
            type="date"
            id="coverage-start"
            name="coverageStart"
            value={formData.coverageStart}
            onChange={handleInputChange}
            placeholder="Start date"
          />
          <Input
            type="date"
            id="coverage-end"
            name="coverageEnd"
            value={formData.coverageEnd}
            onChange={handleInputChange}
            placeholder="End date"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="notes">Notes</Label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Add any additional notes about the insurance verification"
        />
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleVerify} disabled={verifying || verified} className="flex items-center gap-2">
          {verifying ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Verifying...
            </>
          ) : verified ? (
            <>
              <Check className="h-4 w-4" />
              Verified
            </>
          ) : (
            "Verify Insurance"
          )}
        </Button>
      </div>
    </div>
  )
}
