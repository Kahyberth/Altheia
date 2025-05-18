import { Download, FileText, Filter, Search, Upload, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LabResultsList } from "@/components/Dashboard/receptionist/lab results/lab-results-list"
import { LabResultsUpload } from "@/components/Dashboard/receptionist/lab results/lab-results-upload"

export default function LabResultsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <h1 className="text-lg font-semibold">Laboratory Results</h1>
        </div>
      </header>
      <main className="flex-1 container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Lab Results Management</h2>
            <p className="text-muted-foreground">Upload and manage patient laboratory results</p>
          </div>
          <div className="flex items-center gap-2">
            <Button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              <Upload className="mr-2 h-4 w-4" />
              Upload Results
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search by patient name or test type..." className="w-full pl-8" />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              All Results
            </TabsTrigger>
            <TabsTrigger value="pending" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Pending Review
            </TabsTrigger>
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload New
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <LabResultsList />
          </TabsContent>
          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle>Pending Review</CardTitle>
                <CardDescription>Lab results that need to be reviewed before sending to patients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingResults.map((result) => (
                    <div
                      key={result.id}
                      className="flex flex-col md:flex-row justify-between gap-4 p-4 border rounded-lg"
                    >
                      <div className="space-y-1">
                        <div className="font-medium">{result.patientName}</div>
                        <div className="text-sm text-muted-foreground">Test: {result.testType}</div>
                        <div className="text-sm text-muted-foreground">Date: {result.date}</div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button size="sm" className="w-full md:w-auto">
                          Review
                        </Button>
                        <Button variant="outline" size="sm" className="w-full md:w-auto flex items-center gap-2">
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="upload">
            <LabResultsUpload />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

const pendingResults = [
  {
    id: "pending-1",
    patientName: "Emily Wilson",
    testType: "Complete Blood Count (CBC)",
    date: "May 9, 2025",
  },
  {
    id: "pending-2",
    patientName: "Michael Thompson",
    testType: "Lipid Panel",
    date: "May 8, 2025",
  },
  {
    id: "pending-3",
    patientName: "Jessica Martinez",
    testType: "Thyroid Function Test",
    date: "May 7, 2025",
  },
]
