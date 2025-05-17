import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface BasicInfoFormProps {
  data: {
    clinicName: string;
    email: string;
    phone: string;
    description: string;
    website?: string;
    socialMedia?: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
    };
  };
  updateData: (data: Partial<BasicInfoFormProps["data"]>) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function BasicInfoForm({
  data,
  updateData,
  onNext,
  onPrevious,
}: BasicInfoFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!data.clinicName.trim()) {
      newErrors.clinicName = "Clinic name is required";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!data.description.trim()) {
      newErrors.description = "Description is required";
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Basic Information</h2>
        <p className="text-muted-foreground">
          Provide the basic details about your clinic
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="clinicName">
            Clinic Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="clinicName"
            value={data.clinicName}
            onChange={(e) => handleChange("clinicName", e.target.value)}
            placeholder="Enter clinic name"
          />
          {errors.clinicName && (
            <p className="text-sm text-destructive">{errors.clinicName}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">
              Email Address <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="contact@clinic.com"
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              value={data.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+1 (555) 123-4567"
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">
            Clinic Description <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="description"
            value={data.description}
            onChange={(e) => handleChange("description", e.target.value)}
            placeholder="Provide a brief description of your clinic"
            rows={4}
          />
          {errors.description && (
            <p className="text-sm text-destructive">{errors.description}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="website">Website (Optional)</Label>
          <Input
            id="website"
            value={data.website}
            onChange={(e) => handleChange("website", e.target.value)}
            placeholder="https://www.yourclinic.com"
          />
        </div>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-2">
              Social Media (Optional)
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="facebook">Facebook</Label>
                <Input
                  id="facebook"
                  value={data.socialMedia?.facebook}
                  onChange={(e) =>
                    updateData({
                      socialMedia: {
                        ...data.socialMedia,
                        facebook: e.target.value,
                      },
                    })
                  }
                  placeholder="https://facebook.com/yourclinic"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  id="instagram"
                  value={data.socialMedia?.instagram}
                  onChange={(e) =>
                    updateData({
                      socialMedia: {
                        ...data.socialMedia,
                        instagram: e.target.value,
                      },
                    })
                  }
                  placeholder="https://instagram.com/yourclinic"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter</Label>
                <Input
                  id="twitter"
                  value={data.socialMedia?.twitter}
                  onChange={(e) =>
                    updateData({
                      socialMedia: {
                        ...data.socialMedia,
                        twitter: e.target.value,
                      },
                    })
                  }
                  placeholder="https://twitter.com/yourclinic"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between pt-4">
        <Button type="button" variant="outline" onClick={onPrevious}>
          Back
        </Button>
        <Button type="submit">Continue to Location</Button>
      </div>
    </form>
  );
}
