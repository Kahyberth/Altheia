import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

interface FormFieldProps {
  name: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}

export function FormField({
  name,
  label,
  children,
  className,
}: FormFieldProps) {
  const {
    formState: { errors },
  } = useFormContext();
  const error = errors[name];

  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={name} className="text-sm font-medium">
        {label}
      </Label>
      {children}
      {error && (
        <p className="text-xs text-destructive">{error.message as string}</p>
      )}
    </div>
  );
}
