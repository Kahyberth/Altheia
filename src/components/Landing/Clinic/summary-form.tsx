import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Check,
  Clock,
  Globe,
  Mail,
  MapPin,
  Phone,
  Shield,
  Users,
} from "lucide-react";
import { useState } from "react";

interface SummaryFormProps {
  data: {
    user: {
      fullName?: string;
      position?: string;
      email?: string;
      phone?: string;
    };
    clinicName?: string;
    email?: string;
    phone?: string;
    website?: string;
    description?: string;
    socialMedia?: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
    };
    address?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    staffCount?: number;
    servicesOffered: string[];
    openingHours: {
      [day: string]: {
        isOpen: boolean;
        open?: string;
        close?: string;
      };
    };
    insuranceProviders: string[];
    photos: Array<{
      url: string;
      name: string;
    }>;
  };
  onSubmit: () => void;
  onPrevious: () => void;
}

export default function SummaryForm({
  data,
  onSubmit,
  onPrevious,
}: SummaryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await onSubmit();
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
    }
  };

  const formatOpeningHours = (day: string) => {
    const dayData = data.openingHours[day];
    if (!dayData.isOpen) return "Closed";
    return `${dayData.open} - ${dayData.close}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Review Your Information</h2>
        <p className="text-muted-foreground">
          Please review all the information before submitting your clinic
          registration
        </p>
      </div>

      <div className="space-y-6">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="user-info"
        >
          <AccordionItem value="user-info">
            <AccordionTrigger className="text-lg font-medium">
              Your Information
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 p-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Full Name
                    </h4>
                    <p className="text-base">
                      {data.user.fullName || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Position
                    </h4>
                    <p className="text-base">
                      {data.user.position || "Not provided"}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Email
                    </h4>
                    <p className="text-base flex items-center">
                      <Mail className="h-4 w-4 mr-1 text-muted-foreground" />
                      {data.user.email || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Phone
                    </h4>
                    <p className="text-base flex items-center">
                      <Phone className="h-4 w-4 mr-1 text-muted-foreground" />
                      {data.user.phone || "Not provided"}
                    </p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="basic-info">
            <AccordionTrigger className="text-lg font-medium">
              Basic Information
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 p-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Clinic Name
                    </h4>
                    <p className="text-base">
                      {data.clinicName || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Email
                    </h4>
                    <p className="text-base flex items-center">
                      <Mail className="h-4 w-4 mr-1 text-muted-foreground" />
                      {data.email || "Not provided"}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Phone
                    </h4>
                    <p className="text-base flex items-center">
                      <Phone className="h-4 w-4 mr-1 text-muted-foreground" />
                      {data.phone || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Website
                    </h4>
                    <p className="text-base flex items-center">
                      <Globe className="h-4 w-4 mr-1 text-muted-foreground" />
                      {data.website || "Not provided"}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Description
                  </h4>
                  <p className="text-base">
                    {data.description || "Not provided"}
                  </p>
                </div>

                {(data.socialMedia?.facebook ||
                  data.socialMedia?.instagram ||
                  data.socialMedia?.twitter) && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Social Media
                    </h4>
                    <div className="space-y-1 mt-1">
                      {data.socialMedia?.facebook && (
                        <p className="text-sm">
                          Facebook: {data.socialMedia.facebook}
                        </p>
                      )}
                      {data.socialMedia?.instagram && (
                        <p className="text-sm">
                          Instagram: {data.socialMedia.instagram}
                        </p>
                      )}
                      {data.socialMedia?.twitter && (
                        <p className="text-sm">
                          Twitter: {data.socialMedia.twitter}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="location">
            <AccordionTrigger className="text-lg font-medium">
              Location
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 p-2">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Address
                  </h4>
                  <p className="text-base flex items-start">
                    <MapPin className="h-4 w-4 mr-1 mt-1 text-muted-foreground shrink-0" />
                    <span>
                      {data.address || "Not provided"}
                      {data.address && (
                        <>
                          <br />
                          {[
                            data.city,
                            data.state,
                            data.postalCode,
                            data.country,
                          ]
                            .filter(Boolean)
                            .join(", ")}
                        </>
                      )}
                    </span>
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="operations">
            <AccordionTrigger className="text-lg font-medium">
              Operational Details
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 p-2">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Staff Count
                  </h4>
                  <p className="text-base flex items-center">
                    <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                    {data.staffCount || "Not provided"}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Services Offered
                  </h4>
                  {data.servicesOffered.length > 0 ? (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {data.servicesOffered.map((service: string) => (
                        <Badge key={service} variant="outline">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-base">No services selected</p>
                  )}
                </div>

                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Opening Hours
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-2">
                    {Object.entries(data.openingHours).map(([day]) => (
                      <div key={day} className="flex justify-between">
                        <span className="capitalize">{day}:</span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
                          {formatOpeningHours(day)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="insurance">
            <AccordionTrigger className="text-lg font-medium">
              Insurance & EPS
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 p-2">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Insurance Providers & EPS
                  </h4>
                  {data.insuranceProviders.length > 0 ? (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {data.insuranceProviders.map((provider: string) => (
                        <Badge
                          key={provider}
                          variant="outline"
                          className="flex items-center gap-1"
                        >
                          <Shield className="h-3 w-3" />
                          {provider}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-base">No insurance providers selected</p>
                  )}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="photos">
            <AccordionTrigger className="text-lg font-medium">
              Photos
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 p-2">
                {data.photos.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {data.photos.map(
                      (photo: { url: string; name: string }, index: number) => (
                        <div
                          key={index}
                          className="relative aspect-video rounded-md overflow-hidden"
                        >
                          <img
                            src={photo.url || "/placeholder.svg"}
                            alt={`Clinic photo ${index + 1}`}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <p className="text-base">No photos uploaded</p>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Card className="bg-muted/50 border-primary/20">
        <CardContent className="p-4">
          <div className="flex items-start space-x-2">
            <Check className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium">Ready to Submit</h3>
              <p className="text-sm text-muted-foreground">
                By submitting this form, you confirm that all the information
                provided is accurate and complete. Your clinic registration will
                be reviewed by our team.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between pt-4">
        <Button type="button" variant="outline" onClick={onPrevious}>
          Back
        </Button>
        <Button type="submit" disabled={isSubmitting} className="min-w-[150px]">
          {isSubmitting ? "Submitting..." : "Submit Registration"}
        </Button>
      </div>
    </form>
  );
}
