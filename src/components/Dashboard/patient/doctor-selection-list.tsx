"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Clock,
  Filter,
  MapPin,
  Phone,
  Search,
  Star,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

// Sample doctor data - in a real app, this would come from an API
const allDoctors = [
  {
    id: "dr-johnson",
    name: "Dr. Sarah Johnson",
    photo: "/placeholder.svg?height=80&width=80",
    specialty: "General Practitioner",
    subspecialty: "Family Medicine",
    experience: "12 years",
    education: "Stanford University School of Medicine",
    languages: ["English", "Spanish"],
    acceptingNewPatients: true,
    nextAvailable: "Tomorrow",
    location: "Main Clinic, Room 305",
    address: "123 Medical Center Blvd, Anytown, CA 94321",
    phone: "(555) 123-4567",
    rating: 4.8,
    reviewCount: 124,
    bio: "Dr. Sarah Johnson is a board-certified family physician with over 10 years of experience in primary care. She specializes in preventive medicine, chronic disease management, and women's health. Dr. Johnson takes a patient-centered approach to healthcare, focusing on building long-term relationships with her patients and empowering them to take an active role in their health journey.",
  },
  {
    id: "dr-chen",
    name: "Dr. Michael Chen",
    photo: "/placeholder.svg?height=80&width=80",
    specialty: "Cardiologist",
    subspecialty: "Interventional Cardiology",
    experience: "15 years",
    education: "Johns Hopkins School of Medicine",
    languages: ["English", "Mandarin"],
    acceptingNewPatients: true,
    nextAvailable: "Next week",
    location: "Specialty Clinic, Room 210",
    address: "456 Medical Center Blvd, Anytown, CA 94321",
    phone: "(555) 234-5678",
    rating: 4.9,
    reviewCount: 98,
    bio: "Dr. Michael Chen is a board-certified cardiologist specializing in interventional cardiology. With 15 years of experience, he has performed over 2,000 cardiac procedures. Dr. Chen is dedicated to providing comprehensive cardiac care and employs the latest techniques and technologies to ensure optimal outcomes for his patients.",
  },
  {
    id: "dr-patel",
    name: "Dr. Anita Patel",
    photo: "/placeholder.svg?height=80&width=80",
    specialty: "Endocrinologist",
    subspecialty: "Diabetes Management",
    experience: "10 years",
    education: "University of California, San Francisco",
    languages: ["English", "Hindi", "Gujarati"],
    acceptingNewPatients: true,
    nextAvailable: "This week",
    location: "Specialty Clinic, Room 118",
    address: "456 Medical Center Blvd, Anytown, CA 94321",
    phone: "(555) 345-6789",
    rating: 4.7,
    reviewCount: 86,
    bio: "Dr. Anita Patel is a board-certified endocrinologist with a special focus on diabetes management and thyroid disorders. She completed her fellowship at UCSF and has been practicing for 10 years. Dr. Patel is known for her compassionate care and comprehensive approach to managing complex endocrine conditions.",
  },
  {
    id: "dr-rodriguez",
    name: "Dr. Maria Rodriguez",
    photo: "/placeholder.svg?height=80&width=80",
    specialty: "Pediatrician",
    subspecialty: "Adolescent Medicine",
    experience: "8 years",
    education: "Harvard Medical School",
    languages: ["English", "Spanish"],
    acceptingNewPatients: true,
    nextAvailable: "Tomorrow",
    location: "Main Clinic, Room 203",
    address: "123 Medical Center Blvd, Anytown, CA 94321",
    phone: "(555) 456-7890",
    rating: 4.9,
    reviewCount: 112,
    bio: "Dr. Maria Rodriguez is a board-certified pediatrician with additional training in adolescent medicine. She completed her residency at Boston Children's Hospital and has been practicing for 8 years. Dr. Rodriguez is passionate about child and adolescent health and development, and she strives to create a comfortable environment for both patients and their families.",
  },
  {
    id: "dr-williams",
    name: "Dr. Robert Williams",
    photo: "/placeholder.svg?height=80&width=80",
    specialty: "Orthopedic Surgeon",
    subspecialty: "Sports Medicine",
    experience: "20 years",
    education: "Yale School of Medicine",
    languages: ["English"],
    acceptingNewPatients: false,
    nextAvailable: "Next month",
    location: "Surgical Center, Room 115",
    address: "789 Medical Center Blvd, Anytown, CA 94321",
    phone: "(555) 567-8901",
    rating: 4.6,
    reviewCount: 145,
    bio: "Dr. Robert Williams is a board-certified orthopedic surgeon specializing in sports medicine and joint replacement. With 20 years of experience, he has treated professional athletes and weekend warriors alike. Dr. Williams employs minimally invasive techniques whenever possible to promote faster recovery and better outcomes for his patients.",
  },
  {
    id: "dr-kim",
    name: "Dr. Jennifer Kim",
    photo: "/placeholder.svg?height=80&width=80",
    specialty: "Dermatologist",
    subspecialty: "Cosmetic Dermatology",
    experience: "9 years",
    education: "University of Pennsylvania",
    languages: ["English", "Korean"],
    acceptingNewPatients: true,
    nextAvailable: "This week",
    location: "Specialty Clinic, Room 225",
    address: "456 Medical Center Blvd, Anytown, CA 94321",
    phone: "(555) 678-9012",
    rating: 4.8,
    reviewCount: 92,
    bio: "Dr. Jennifer Kim is a board-certified dermatologist with expertise in both medical and cosmetic dermatology. She completed her residency at the University of Pennsylvania and has been practicing for 9 years. Dr. Kim is known for her attention to detail and her ability to address both aesthetic concerns and medical skin conditions.",
  },
  {
    id: "dr-thompson",
    name: "Dr. James Thompson",
    photo: "/placeholder.svg?height=80&width=80",
    specialty: "Neurologist",
    subspecialty: "Movement Disorders",
    experience: "14 years",
    education: "Columbia University",
    languages: ["English", "French"],
    acceptingNewPatients: true,
    nextAvailable: "Next week",
    location: "Specialty Clinic, Room 310",
    address: "456 Medical Center Blvd, Anytown, CA 94321",
    phone: "(555) 789-0123",
    rating: 4.7,
    reviewCount: 78,
    bio: "Dr. James Thompson is a board-certified neurologist specializing in movement disorders such as Parkinson's disease and essential tremor. He completed his fellowship at Columbia University and has been practicing for 14 years. Dr. Thompson combines his clinical expertise with the latest research to provide comprehensive care for patients with neurological conditions.",
  },
];

// Available specialties for filtering
const specialties = [
  "All Specialties",
  "General Practitioner",
  "Cardiologist",
  "Endocrinologist",
  "Pediatrician",
  "Orthopedic Surgeon",
  "Dermatologist",
  "Neurologist",
];

// 1. Add a helper to extract unique clinics
const clinics = [
  "Todas las clínicas",
  ...Array.from(
    new Set(allDoctors.map((d) => d.location.split(",")[0].trim()))
  ),
];

interface DoctorSelectionListProps {
  onDoctorSelect: (doctorId: string) => void;
  selectedDoctorId?: string;
}

export default function DoctorSelectionList({
  onDoctorSelect,
  selectedDoctorId,
}: DoctorSelectionListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState(
    "Todas las especialidades"
  );
  const [selectedClinic, setSelectedClinic] = useState("Todas las clínicas");
  const [acceptingNewPatients, setAcceptingNewPatients] = useState(false);
  const [filteredDoctors, setFilteredDoctors] = useState(allDoctors);
  const [detailsDoctor, setDetailsDoctor] = useState<
    (typeof allDoctors)[0] | null
  >(null);

  useEffect(() => {
    let results = [...allDoctors];
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (doctor) =>
          doctor.name.toLowerCase().includes(query) ||
          doctor.specialty.toLowerCase().includes(query) ||
          doctor.subspecialty.toLowerCase().includes(query)
      );
    }
    if (selectedSpecialty !== "Todas las especialidades") {
      results = results.filter(
        (doctor) => doctor.specialty === selectedSpecialty
      );
    }
    if (selectedClinic !== "Todas las clínicas") {
      results = results.filter(
        (doctor) => doctor.location.split(",")[0].trim() === selectedClinic
      );
    }
    if (acceptingNewPatients) {
      results = results.filter((doctor) => doctor.acceptingNewPatients);
    }
    setFilteredDoctors(results);
  }, [searchQuery, selectedSpecialty, acceptingNewPatients, selectedClinic]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedSpecialty("Todas las especialidades");
    setSelectedClinic("Todas las clínicas");
    setAcceptingNewPatients(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nombre o especialidad..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6"
              onClick={() => setSearchQuery("")}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        <div className="flex gap-2">
          <Select
            value={selectedSpecialty}
            onValueChange={setSelectedSpecialty}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Especialidad" />
            </SelectTrigger>
            <SelectContent>
              {["Todas las especialidades", ...specialties.slice(1)].map(
                (specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
          <Select value={selectedClinic} onValueChange={setSelectedClinic}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Clínica" />
            </SelectTrigger>
            <SelectContent>
              {clinics.map((clinic) => (
                <SelectItem key={clinic} value={clinic}>
                  {clinic}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="accepting-new-patients"
            checked={acceptingNewPatients}
            onCheckedChange={(checked) =>
              setAcceptingNewPatients(checked as boolean)
            }
          />
          <Label htmlFor="accepting-new-patients">
            Aceptando nuevos pacientes
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm text-muted-foreground">
            {filteredDoctors.length}{" "}
            {filteredDoctors.length === 1
              ? "doctor encontrado"
              : "doctores encontrados"}
          </div>
          {(searchQuery ||
            selectedSpecialty !== "Todas las especialidades" ||
            acceptingNewPatients ||
            selectedClinic !== "Todas las clínicas") && (
            <Button
              variant="ghost"
              size="sm"
              onClick={resetFilters}
              className="h-8 px-2 text-xs"
            >
              <Filter className="mr-1 h-3 w-3" />
              Restablecer filtros
            </Button>
          )}
        </div>
      </div>
      <div className="space-y-4">
        {filteredDoctors.length === 0 ? (
          <div className="text-center py-12 bg-muted/20 rounded-lg">
            <div className="text-3xl mb-2">🔍</div>
            <h3 className="text-lg font-medium">No se encontraron doctores</h3>
            <p className="text-muted-foreground">
              Intenta ajustar tus filtros o criterios de búsqueda
            </p>
            <Button variant="outline" className="mt-4" onClick={resetFilters}>
              Restablecer todos los filtros
            </Button>
          </div>
        ) : (
          filteredDoctors.map((doctor) => (
            <Card
              key={doctor.id}
              className={`overflow-hidden transition-all ${
                selectedDoctorId === doctor.id
                  ? "ring-2 ring-primary"
                  : "hover:shadow-md"
              }`}
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="flex items-start gap-4 p-6 md:w-1/2 lg:w-2/5 border-b md:border-b-0 md:border-r">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src={doctor.photo || "/placeholder.svg"}
                        alt={doctor.name}
                      />
                      <AvatarFallback>
                        {doctor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-lg">{doctor.name}</h3>
                      <p className="text-muted-foreground">
                        {doctor.specialty}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {doctor.subspecialty}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < Math.floor(doctor.rating)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs">{doctor.rating}</span>
                        <span className="text-xs text-muted-foreground">
                          ({doctor.reviewCount})
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {doctor.languages.map((language) => (
                          <Badge
                            key={language}
                            variant="outline"
                            className="text-xs"
                          >
                            {language}
                          </Badge>
                        ))}
                        {doctor.acceptingNewPatients ? (
                          <Badge
                            variant="outline"
                            className="bg-green-50 text-green-700 border-green-200 text-xs"
                          >
                            Aceptando nuevos pacientes
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="bg-amber-50 text-amber-700 border-amber-200 text-xs"
                          >
                            Disponibilidad limitada
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 mt-0.5 text-primary" />
                        <div>
                          <p className="text-sm font-medium">
                            Próxima disponibilidad
                          </p>
                          <p className="text-sm">{doctor.nextAvailable}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Ubicación</p>
                          <p className="text-sm">{doctor.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Phone className="h-4 w-4 mt-0.5 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Teléfono</p>
                          <p className="text-sm">{doctor.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar className="h-4 w-4 mt-0.5 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Experiencia</p>
                          <p className="text-sm">{doctor.experience}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 mt-4 justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setDetailsDoctor(doctor)}
                      >
                        Ver detalles
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => onDoctorSelect(doctor.id)}
                        variant={
                          selectedDoctorId === doctor.id
                            ? "default"
                            : "secondary"
                        }
                      >
                        Seleccionar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Doctor Details Dialog */}
      <Dialog
        open={!!detailsDoctor}
        onOpenChange={(open) => !open && setDetailsDoctor(null)}
      >
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {detailsDoctor && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">
                  {detailsDoctor.name}
                </DialogTitle>
                <DialogDescription>
                  {detailsDoctor.specialty} • {detailsDoctor.subspecialty}
                </DialogDescription>
              </DialogHeader>

              <div className="grid md:grid-cols-3 gap-6 mt-4">
                <div className="md:col-span-1">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-32 w-32 mb-4">
                      <AvatarImage
                        src={detailsDoctor.photo || "/placeholder.svg"}
                        alt={detailsDoctor.name}
                      />
                      <AvatarFallback>
                        {detailsDoctor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex items-center gap-1 mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(detailsDoctor.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">
                        {detailsDoctor.rating}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        ({detailsDoctor.reviewCount} reviews)
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-3 justify-center">
                      {detailsDoctor.languages.map((language) => (
                        <Badge key={language} variant="outline">
                          {language}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t w-full">
                      <div className="flex items-center justify-center gap-2 text-sm text-green-600 font-medium">
                        <Clock className="h-4 w-4" />
                        <span>
                          Next Available: {detailsDoctor.nextAvailable}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p>{detailsDoctor.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Office</p>
                        <p>{detailsDoctor.location}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {detailsDoctor.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <h3 className="font-semibold mb-2">Professional Biography</h3>
                  <p className="text-sm">{detailsDoctor.bio}</p>

                  <Separator className="my-4" />

                  <h3 className="font-semibold mb-2">Education & Experience</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <div>
                        <p className="font-medium">Education</p>
                        <p className="text-sm">{detailsDoctor.education}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <div>
                        <p className="font-medium">Experience</p>
                        <p className="text-sm">
                          {detailsDoctor.experience} of clinical practice
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setDetailsDoctor(null)}
                    >
                      Close
                    </Button>
                    <Button
                      onClick={() => {
                        onDoctorSelect(detailsDoctor.id);
                        setDetailsDoctor(null);
                      }}
                    >
                      Select This Doctor
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
