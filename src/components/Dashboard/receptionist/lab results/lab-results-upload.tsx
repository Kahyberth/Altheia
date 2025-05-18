"use client"

import type React from "react"

import { useState } from "react"
import { Check, File, Upload, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export function LabResultsUpload() {
  const [files, setFiles] = useState<File[]>([])
  const [uploading, setUploading] = useState(false)
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles([...files, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    const newFiles = [...files]
    newFiles.splice(index, 1)
    setFiles(newFiles)
  }

  const handleUpload = () => {
    setUploading(true)

    // Simulate upload process
    setTimeout(() => {
      setUploading(false)
      setFiles([])
      toast({
        title: "Upload successful",
        description: "Lab results have been uploaded successfully.",
      })
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Lab Results</CardTitle>
        <CardDescription>Upload laboratory results to associate with a patient's record</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="patient">Patient</Label>
            <Select>
              <SelectTrigger id="patient">
                <SelectValue placeholder="Select patient" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="john-doe">John Doe</SelectItem>
                <SelectItem value="mary-johnson">Mary Johnson</SelectItem>
                <SelectItem value="robert-brown">Robert Brown</SelectItem>
                <SelectItem value="emily-clark">Emily Clark</SelectItem>
                <SelectItem value="david-wilson">David Wilson</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="test-type">Test Type</Label>
            <Select>
              <SelectTrigger id="test-type">
                <SelectValue placeholder="Select test type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cbc">Complete Blood Count (CBC)</SelectItem>
                <SelectItem value="cmp">Comprehensive Metabolic Panel</SelectItem>
                <SelectItem value="lipid">Lipid Panel</SelectItem>
                <SelectItem value="thyroid">Thyroid Function Test</SelectItem>
                <SelectItem value="urinalysis">Urinalysis</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="test-date">Test Date</Label>
          <Input type="date" id="test-date" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="doctor">Ordering Doctor</Label>
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
          <Label htmlFor="file-upload">Upload Files</Label>
          <div className="border-2 border-dashed rounded-lg p-6 text-center">
            <Input id="file-upload" type="file" className="hidden" onChange={handleFileChange} multiple />
            <Label htmlFor="file-upload" className="cursor-pointer">
              <div className="flex flex-col items-center gap-2">
                <Upload className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm font-medium">Drag and drop files here or click to browse</p>
                <p className="text-xs text-muted-foreground">Support for PDF, JPG, PNG files up to 10MB</p>
              </div>
            </Label>
          </div>
        </div>

        {files.length > 0 && (
          <div className="space-y-2">
            <Label>Selected Files</Label>
            <div className="space-y-2">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-2 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <File className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{file.name}</span>
                    <span className="text-xs text-muted-foreground">({(file.size / 1024).toFixed(2)} KB)</span>
                  </div>
                  <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeFile(index)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button onClick={handleUpload} disabled={files.length === 0 || uploading} className="flex items-center gap-2">
          {uploading ? (
            <>Processing...</>
          ) : (
            <>
              <Check className="h-4 w-4" />
              Upload Results
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
