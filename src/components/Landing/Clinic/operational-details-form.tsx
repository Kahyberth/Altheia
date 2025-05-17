import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

interface OperationalDetailsFormProps {
  data: {
    staffCount: number;
    servicesOffered: string[];
    isOpen24Hours?: boolean;
    openingHours: {
      [key: string]: {
        isOpen: boolean;
        open: string;
        close: string;
      };
    };
  };
  updateData: (data: Partial<OperationalDetailsFormProps["data"]>) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function OperationalDetailsForm({
  data,
  updateData,
  onNext,
  onPrevious,
}: OperationalDetailsFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Sample list of common medical services
  const availableServices = [
    "General Medicine",
    "Pediatrics",
    "Cardiology",
    "Dermatology",
    "Orthopedics",
    "Gynecology",
    "Neurology",
    "Ophthalmology",
    "Dentistry",
    "Physical Therapy",
    "Laboratory Services",
    "Radiology",
    "Emergency Care",
    "Mental Health",
    "Nutrition Counseling",
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!data.staffCount) {
      newErrors.staffCount = "Staff count is required";
    } else if (data.staffCount <= 0) {
      newErrors.staffCount = "Staff count must be a positive number";
    }

    if (data.servicesOffered.length === 0) {
      newErrors.servicesOffered = "At least one service must be selected";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onNext();
    }
  };

  const handleServiceToggle = (service: string) => {
    const updatedServices = data.servicesOffered.includes(service)
      ? data.servicesOffered.filter((s: string) => s !== service)
      : [...data.servicesOffered, service];

    updateData({ servicesOffered: updatedServices });

    // Clear error when user selects a service
    if (errors.servicesOffered && updatedServices.length > 0) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.servicesOffered;
        return newErrors;
      });
    }
  };

  const handleHoursChange = (
    day: string,
    field: "open" | "close",
    value: string
  ) => {
    updateData({
      openingHours: {
        ...data.openingHours,
        [day]: {
          ...data.openingHours[day],
          [field]: value,
        },
      },
    });
  };

  const handleDayToggle = (day: string) => {
    updateData({
      openingHours: {
        ...data.openingHours,
        [day]: {
          ...data.openingHours[day],
          isOpen: !data.openingHours[day].isOpen,
        },
      },
    });
  };

  const weekdays = [
    { id: "monday", label: "Monday" },
    { id: "tuesday", label: "Tuesday" },
    { id: "wednesday", label: "Wednesday" },
    { id: "thursday", label: "Thursday" },
    { id: "friday", label: "Friday" },
    { id: "saturday", label: "Saturday" },
    { id: "sunday", label: "Sunday" },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Operational Details</h2>
        <p className="text-muted-foreground">
          Provide information about your clinic's operations
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="staffCount">
            Number of Staff Members <span className="text-destructive">*</span>
          </Label>
          <Input
            id="staffCount"
            type="number"
            min="1"
            value={data.staffCount}
            onChange={(e) => {
              updateData({ staffCount: Number(e.target.value) });
              if (errors.staffCount) {
                setErrors((prev) => {
                  const newErrors = { ...prev };
                  delete newErrors.staffCount;
                  return newErrors;
                });
              }
            }}
            placeholder="Enter the number of staff members"
          />
          {errors.staffCount && (
            <p className="text-sm text-destructive">{errors.staffCount}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>
            Services Offered <span className="text-destructive">*</span>
          </Label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
            {availableServices.map((service) => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox
                  id={`service-${service}`}
                  checked={data.servicesOffered.includes(service)}
                  onCheckedChange={() => handleServiceToggle(service)}
                />
                <label
                  htmlFor={`service-${service}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {service}
                </label>
              </div>
            ))}
          </div>
          {errors.servicesOffered && (
            <p className="text-sm text-destructive">{errors.servicesOffered}</p>
          )}
        </div>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Opening Hours</h3>
            <div className="space-y-4">
              {weekdays.map((day) => (
                <div
                  key={day.id}
                  className="grid grid-cols-12 gap-4 items-center"
                >
                  <div className="col-span-4 md:col-span-3 flex items-center space-x-2">
                    <Switch
                      id={`day-${day.id}`}
                      checked={data.openingHours[day.id].isOpen}
                      onCheckedChange={() => handleDayToggle(day.id)}
                    />
                    <Label htmlFor={`day-${day.id}`} className="font-medium">
                      {day.label}
                    </Label>
                  </div>

                  {data.openingHours[day.id].isOpen ? (
                    <>
                      <div className="col-span-4 md:col-span-3">
                        <Input
                          type="time"
                          value={data.openingHours[day.id].open}
                          onChange={(e) =>
                            handleHoursChange(day.id, "open", e.target.value)
                          }
                        />
                      </div>
                      <div className="col-span-1 text-center">to</div>
                      <div className="col-span-4 md:col-span-3">
                        <Input
                          type="time"
                          value={data.openingHours[day.id].close}
                          onChange={(e) =>
                            handleHoursChange(day.id, "close", e.target.value)
                          }
                        />
                      </div>
                    </>
                  ) : (
                    <div className="col-span-8 md:col-span-7 text-muted-foreground">
                      Closed
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between pt-4">
        <Button type="button" variant="outline" onClick={onPrevious}>
          Back
        </Button>
        <Button type="submit">Continue to Insurance</Button>
      </div>
    </form>
  );
}
