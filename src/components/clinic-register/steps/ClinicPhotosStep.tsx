import { Label } from "@/components/ui/label";
import { Upload, X } from "lucide-react";

interface ClinicPhotosStepProps {
  photos: File[];
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: (index: number) => void;
}

export function ClinicPhotosStep({
  photos,
  onUpload,
  onRemove,
}: ClinicPhotosStepProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label className="text-sm font-medium">Fotos de la Clínica</Label>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/30 hover:bg-muted/50"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
              <p className="mb-1 text-sm text-muted-foreground">
                <span className="font-semibold">Haz clic para subir</span> o
                arrastra y suelta
              </p>
              <p className="text-xs text-muted-foreground">
                PNG, JPG o WEBP (MAX. 5MB)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              accept="image/*"
              multiple
              onChange={onUpload}
            />
          </label>
        </div>
      </div>

      {photos.length > 0 && (
        <div className="space-y-2">
          <Label className="text-sm font-medium">Fotos Subidas</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="relative group">
                <div className="aspect-square rounded-md overflow-hidden border bg-muted">
                  <img
                    src={URL.createObjectURL(photo) || "/placeholder.svg"}
                    alt={`Clinic photo ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(index)}
                  className="absolute top-1 right-1 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-4 w-4" />
                </button>
                <p className="text-xs truncate mt-1">{photo.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
