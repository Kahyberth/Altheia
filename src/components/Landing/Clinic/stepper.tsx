import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface StepProps {
  step: number;
  currentStep: number;
  label: string;
  description: string;
  isLast?: boolean;
}

export function Step({
  step,
  currentStep,
  label,
  description,
  isLast = false,
}: StepProps) {
  const isCompleted = currentStep > step;
  const isActive = currentStep === step;

  return (
    <div className="flex items-start">
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border-2 border-muted z-10",
            isCompleted ? "bg-primary border-primary" : "",
            isActive ? "border-primary" : ""
          )}
        >
          {isCompleted ? (
            <Check className="h-6 w-6 text-primary-foreground" />
          ) : (
            <span
              className={cn(
                "text-sm font-medium",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              {step + 1}
            </span>
          )}
        </div>
        {!isLast && (
          <div
            className={cn(
              "w-0.5 h-12 bg-muted mt-1",
              isCompleted ? "bg-primary" : ""
            )}
          />
        )}
      </div>
      <div className="ml-4 mt-1">
        <h3
          className={cn(
            "text-sm font-medium",
            isActive || isCompleted
              ? "text-foreground"
              : "text-muted-foreground"
          )}
        >
          {label}
        </h3>
        <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
      </div>
    </div>
  );
}

interface StepperProps {
  currentStep: number;
  steps: { label: string; description: string }[];
}

export function Stepper({ currentStep, steps }: StepperProps) {
  return (
    <div className="hidden md:block">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <Step
            key={index}
            step={index}
            currentStep={currentStep}
            label={step.label}
            description={step.description}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
