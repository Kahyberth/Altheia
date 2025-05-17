import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface LocationFormProps {
  data: {
    address: string;
    country: string;
    city: string;
    state?: string;
    postalCode?: string;
  };
  updateData: (data: Partial<LocationFormProps["data"]>) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function LocationForm({
  data,
  updateData,
  onNext,
  onPrevious,
}: LocationFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!data.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!data.country.trim()) {
      newErrors.country = "Country is required";
    }

    if (!data.city.trim()) {
      newErrors.city = "City is required";
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

  const handleChange = (field: string, value: string) => {
    updateData({ [field]: value });

    // Clear error when user types
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  // Sample list of countries - in a real app, you'd have a more comprehensive list
  const countries = [
    "United States",
    "Canada",
    "Mexico",
    "Colombia",
    "Brazil",
    "United Kingdom",
    "France",
    "Germany",
    "Spain",
    "Italy",
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Location Details</h2>
        <p className="text-muted-foreground">
          Provide information about your clinic's location
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="address">
            Street Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="address"
            value={data.address}
            onChange={(e) => handleChange("address", e.target.value)}
            placeholder="123 Medical Center Blvd"
          />
          {errors.address && (
            <p className="text-sm text-destructive">{errors.address}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="country">
            Country <span className="text-destructive">*</span>
          </Label>
          <Select
            value={data.country}
            onValueChange={(value) => handleChange("country", value)}
          >
            <SelectTrigger id="country">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.country && (
            <p className="text-sm text-destructive">{errors.country}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">
              City <span className="text-destructive">*</span>
            </Label>
            <Input
              id="city"
              value={data.city}
              onChange={(e) => handleChange("city", e.target.value)}
              placeholder="New York"
            />
            {errors.city && (
              <p className="text-sm text-destructive">{errors.city}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="state">State/Province</Label>
            <Input
              id="state"
              value={data.state}
              onChange={(e) => handleChange("state", e.target.value)}
              placeholder="NY"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="postalCode">Postal/ZIP Code</Label>
          <Input
            id="postalCode"
            value={data.postalCode}
            onChange={(e) => handleChange("postalCode", e.target.value)}
            placeholder="10001"
          />
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button type="button" variant="outline" onClick={onPrevious}>
          Back
        </Button>
        <Button type="submit">Continue to Operations</Button>
      </div>
    </form>
  );
}
