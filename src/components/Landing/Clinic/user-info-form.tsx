import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface UserData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
}

interface UserInfoFormProps {
  data: {
    user: UserData;
  };
  updateData: (data: { user: UserData }) => void;
  onNext: () => void;
}

export default function UserInfoForm({
  data,
  updateData,
  onNext,
}: UserInfoFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!data.user.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!data.user.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.user.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!data.user.phone.trim()) {
      newErrors.phone = "Phone number is required";
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
    updateData({
      user: {
        ...data.user,
        [field]: value,
      },
    });

    // Clear error when user types
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Your Information</h2>
        <p className="text-muted-foreground">
          Please provide your personal information as the clinic administrator
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="fullName"
            value={data.user.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="text-sm text-destructive">{errors.fullName}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="userEmail">
            Email Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="userEmail"
            type="email"
            value={data.user.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="userPhone">
            Phone Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="userPhone"
            value={data.user.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="position">
            Position at Clinic <span className="text-destructive">*</span>
          </Label>
          <Input
            id="position"
            value={data.user.position}
            onChange={(e) => handleChange("position", e.target.value)}
            placeholder="e.g., Administrator, Doctor, Manager"
          />
          {errors.position && (
            <p className="text-sm text-destructive">{errors.position}</p>
          )}
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button type="submit">Continue to Clinic Information</Button>
      </div>
    </form>
  );
}
