import { AdditionalInformationStep } from "@/components/clinic-register/steps/AdditionalInformationStep";
import { AddressInformationStep } from "@/components/clinic-register/steps/AddressInformationStep";
import { ClinicInformationStep } from "@/components/clinic-register/steps/ClinicInformationStep";
import { ClinicPhotosStep } from "@/components/clinic-register/steps/ClinicPhotosStep";
import { OwnerInformationStep } from "@/components/clinic-register/steps/OwnerInformationStep";
import type { FormData } from "@/components/clinic-register/types";
import { formSchema } from "@/components/clinic-register/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { createClinic } from "@/service/clinicServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronLeft, ChevronRight, Home } from "lucide-react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface MultiStepStepperProps {
  initialData?: Partial<FormData>;
  onSubmit?: (data: FormData) => void;
}

export function ClinicRegisterPage({
  initialData,
  onSubmit,
}: MultiStepStepperProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [photos, setPhotos] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...initialData,
      owner_gender: initialData?.owner_gender || "male",
      services_offered: initialData?.services_offered || [],
      accepted_eps: initialData?.accepted_eps || [],
      member_count: initialData?.member_count || 1,
      clinic_photos: [],
    },
    mode: "onChange",
  });

  const steps = [
    { title: "Información del Propietario", icon: "user" },
    { title: "Información de la Clínica", icon: "building" },
    { title: "Información de la Dirección", icon: "map" },
    { title: "Información Adicional", icon: "plus" },
    { title: "Fotos de la Clínica", icon: "image" },
  ];

  const goToNextStep = async () => {
    const fieldsToValidate = {
      0: [
        "owner_name",
        "owner_email",
        "owner_phone",
        "owner_position",
        "owner_document_number",
        "owner_gender",
      ],
      1: ["name", "email", "description", "phone", "website"],
      2: ["address", "country", "city", "state", "postal_code"],
      3: ["member_count", "services_offered", "accepted_eps"],
      4: ["clinic_photos"],
    }[currentStep] as (keyof FormData)[];

    const isValid = await methods.trigger(fieldsToValidate);

    if (isValid) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setIsSubmitting(true);
        try {
          const formData = methods.getValues();
          const response = await createClinic({
            ...formData,
            clinic_photos: photos,
          });

          if (response.error) {
            console.error("Failed to create clinic:", response.data);
          } else {
            console.log("Clinic created successfully:", response.data);
            if (onSubmit) {
              onSubmit(formData);
            }
          }
        } catch (error) {
          console.error("Error submitting form:", error);
        } finally {
          setIsSubmitting(false);
        }
      }
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setPhotos((prev) => [...prev, ...newFiles]);
    }
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <FormProvider {...methods}>
      <div className="w-full max-w-4xl mx-auto">
        {/* Botón para volver al menú principal */}
        <div className="flex justify-end pt-6 pb-2">
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 text-muted-foreground hover:text-primary"
            onClick={() => navigate("/")}
          >
            <Home className="w-4 h-4" />
            Menú principal
          </Button>
        </div>
        {/* Stepper Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200",
                    index < currentStep
                      ? "bg-primary border-primary text-primary-foreground"
                      : index === currentStep
                      ? "border-primary text-primary"
                      : "border-muted-foreground/30 text-muted-foreground/50"
                  )}
                >
                  {index < currentStep ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span
                  className={cn(
                    "mt-2 text-sm font-medium hidden md:block",
                    index === currentStep
                      ? "text-primary"
                      : "text-muted-foreground/70"
                  )}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          <div className="relative mt-2">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-muted-foreground/20" />
            <div
              className="absolute top-0 left-0 h-0.5 bg-primary transition-all duration-300"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <Card className="border shadow-sm">
          <CardHeader className="pb-4" style={{ marginBottom: "12px" }}>
            <CardTitle>{steps[currentStep].title}</CardTitle>
          </CardHeader>
          <CardContent className="py-8 px-6">
            {currentStep === 0 && <OwnerInformationStep />}
            {currentStep === 1 && <ClinicInformationStep />}
            {currentStep === 2 && <AddressInformationStep />}
            {currentStep === 3 && <AdditionalInformationStep />}
            {currentStep === 4 && (
              <ClinicPhotosStep
                photos={photos}
                onUpload={handleFileUpload}
                onRemove={removePhoto}
              />
            )}
          </CardContent>
          <CardFooter className="flex justify-between border-t p-6 mt-4">
            <Button
              variant="outline"
              onClick={goToPreviousStep}
              disabled={currentStep === 0}
              className="gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            <div className="text-sm text-muted-foreground">
              Step {currentStep + 1} of {steps.length}
            </div>
            <Button
              onClick={goToNextStep}
              className="gap-1"
              disabled={isSubmitting}
            >
              {currentStep === steps.length - 1 ? "Submit" : "Next"}
              {currentStep < steps.length - 1 && (
                <ChevronRight className="w-4 h-4" />
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </FormProvider>
  );
}
