import BasicInfoForm from "@/components/Landing/Clinic/basic-info-form";
import InsuranceForm from "@/components/Landing/Clinic/insurance-form";
import LocationForm from "@/components/Landing/Clinic/location-form";
import OperationalDetailsForm from "@/components/Landing/Clinic/operational-details-form";
import PhotoUploadForm from "@/components/Landing/Clinic/photo-upload-form";
import { Stepper } from "@/components/Landing/Clinic/stepper";
import SummaryForm from "@/components/Landing/Clinic/summary-form";
import UserInfoForm from "@/components/Landing/Clinic/user-info-form";
import { Card, CardContent } from "@/components/ui/card";
import { createClinic } from "@/service/clinicServices";
import { Loader } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

type FormData = {
  user: {
    fullName: string;
    email: string;
    phone: string;
    position: string;
  };
  clinicName: string;
  email: string;
  phone: string;
  description: string;
  website: string;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  address: string;
  country: string;
  city: string;
  state: string;
  postalCode: string;
  staffCount: number;
  servicesOffered: string[];
  openingHours: {
    [key: string]: {
      isOpen: boolean;
      open: string;
      close: string;
    };
  };
  insuranceProviders: string[];
  photos: Array<{ file: File; name: string; url: string; type: string }>;
};

export default function ClinicRegistrationPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    // User Info
    user: {
      fullName: "",
      email: "",
      phone: "",
      position: "",
    },

    // Basic Info
    clinicName: "",
    email: "",
    phone: "",
    description: "",
    website: "",
    socialMedia: { facebook: "", instagram: "", twitter: "" },

    // Location
    address: "",
    country: "",
    city: "",
    state: "",
    postalCode: "",

    // Operational Details
    staffCount: 0,
    servicesOffered: [],
    openingHours: {
      monday: { open: "09:00", close: "17:00", isOpen: true },
      tuesday: { open: "09:00", close: "17:00", isOpen: true },
      wednesday: { open: "09:00", close: "17:00", isOpen: true },
      thursday: { open: "09:00", close: "17:00", isOpen: true },
      friday: { open: "09:00", close: "17:00", isOpen: true },
      saturday: { open: "09:00", close: "13:00", isOpen: true },
      sunday: { open: "09:00", close: "13:00", isOpen: false },
    },

    // Insurance
    insuranceProviders: [],

    // Photos
    photos: [],
  });

  const steps = [
    { label: "Your Information", description: "Personal contact details" },
    {
      label: "Basic Information",
      description: "Clinic name and contact details",
    },
    { label: "Location", description: "Address and geographical information" },
    { label: "Operations", description: "Staff and services information" },
    { label: "Insurance", description: "Insurance and EPS agreements" },
    { label: "Photos", description: "Upload clinic photos" },
    { label: "Review", description: "Review and submit" },
  ];

  const updateFormData = (stepData: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await createClinic(formData).then((res) => {
        if (res.error) {
          toast.error(res.data);
        } else {
          toast.success(res.data);
        }
      });

      navigate("/register-clinic/success");
    } catch (error) {
      console.error("Error submitting clinic data:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <UserInfoForm
            data={formData}
            updateData={updateFormData}
            onNext={handleNext}
          />
        );
      case 1:
        return (
          <BasicInfoForm
            data={formData}
            updateData={updateFormData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 2:
        return (
          <LocationForm
            data={formData}
            updateData={updateFormData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 3:
        return (
          <OperationalDetailsForm
            data={formData}
            updateData={updateFormData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 4:
        return (
          <InsuranceForm
            data={formData}
            updateData={updateFormData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 5:
        return (
          <PhotoUploadForm
            data={formData}
            updateData={updateFormData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 6:
        return (
          <SummaryForm
            data={formData}
            onSubmit={handleSubmit}
            onPrevious={handlePrevious}
          />
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader color="indigo" type="dots" />
      </div>
    );
  }

  return (
    <>
      <div className="w-full bg-white shadow-sm mb-6">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-indigo-700">Altheia</span>
          <span className="text-sm text-muted-foreground">
            Clinic Registration Portal
          </span>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-2">
          Clinic Registration
        </h1>
        <p className="text-muted-foreground text-center mb-8">
          Complete the following steps to register your clinic in our system
        </p>

        <Stepper currentStep={currentStep} steps={steps} />

        <Card className="mt-8 w-full">
          <CardContent className="pt-6">{renderStepContent()}</CardContent>
        </Card>
      </div>
    </>
  );
}
