import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Upload, X } from "lucide-react";
import { useState } from "react";

interface PhotoUploadFormProps {
  data: {
    photos: Array<{
      file: File;
      name: string;
      url: string;
      type: string;
    }>;
  };
  updateData: (data: PhotoUploadFormProps["data"]) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function PhotoUploadForm({
  data,
  updateData,
  onNext,
  onPrevious,
}: PhotoUploadFormProps) {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files: FileList) => {
    const newPhotos = [...data.photos];

    Array.from(files).forEach((file) => {
      // Check if it's an image
      if (!file.type.match("image.*")) {
        return;
      }

      // Create a URL for the file
      const photoUrl = URL.createObjectURL(file);

      // Add to photos array if not already there
      if (!newPhotos.some((photo) => photo.name === file.name)) {
        newPhotos.push({
          file,
          name: file.name,
          url: photoUrl,
          type: file.type,
        });
      }
    });

    updateData({ photos: newPhotos });
  };

  const removePhoto = (index: number) => {
    const newPhotos = [...data.photos];

    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(newPhotos[index].url);

    newPhotos.splice(index, 1);
    updateData({ photos: newPhotos });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Clinic Photos</h2>
        <p className="text-muted-foreground">
          Upload photos of your clinic to showcase your facilities
        </p>
      </div>

      <div className="space-y-6">
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center ${
            dragActive
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="rounded-full bg-muted p-3">
              <Upload className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">
                Drag photos here or click to upload
              </h3>
              <p className="text-sm text-muted-foreground">
                Upload photos of your clinic's exterior, waiting area,
                examination rooms, and other facilities
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => document.getElementById("photo-upload")?.click()}
            >
              Select Photos
            </Button>
            <input
              id="photo-upload"
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>

        {data.photos.length > 0 && (
          <div className="space-y-4">
            <Label>Uploaded Photos ({data.photos.length})</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data.photos.map((photo, index: number) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative aspect-video">
                    <img
                      src={photo.url || "/placeholder.svg"}
                      alt={`Clinic photo ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove photo</span>
                    </button>
                  </div>
                  <CardContent className="p-2">
                    <p className="text-xs truncate">{photo.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between pt-4">
        <Button type="button" variant="outline" onClick={onPrevious}>
          Back
        </Button>
        <Button type="submit">Continue to Review</Button>
      </div>
    </form>
  );
}
