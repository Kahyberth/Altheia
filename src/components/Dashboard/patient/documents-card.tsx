import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, Upload } from "lucide-react";

const documents = [
  {
    id: 1,
    name: "Lab Results - Blood Work",
    date: "May 2, 2025",
    type: "PDF",
    size: "1.2 MB",
  },
  {
    id: 2,
    name: "Cardiology Report",
    date: "April 15, 2025",
    type: "PDF",
    size: "3.5 MB",
  },
  {
    id: 3,
    name: "Prescription - Lisinopril",
    date: "April 10, 2025",
    type: "PDF",
    size: "0.8 MB",
  },
  {
    id: 4,
    name: "Imaging Results - X-Ray",
    date: "March 22, 2025",
    type: "DICOM",
    size: "15.7 MB",
  },
];

export default function DocumentsCard() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">Documents</CardTitle>
            <CardDescription>Access your medical documents</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {documents.map((document) => (
            <div
              key={document.id}
              className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm truncate">
                  {document.name}
                </h3>
                <div className="flex items-center text-xs text-gray-500">
                  <span>{document.date}</span>
                  <span className="mx-1.5">•</span>
                  <span>{document.type}</span>
                  <span className="mx-1.5">•</span>
                  <span>{document.size}</span>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                View
              </Button>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4">
          View All Documents
        </Button>
      </CardContent>
    </Card>
  );
}
