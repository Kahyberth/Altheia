import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function StaffPage() {
  const [staffType, setStaffType] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [specialtyFilter, setSpecialtyFilter] = useState<string>("all");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Staff Management
          </h1>
          <p className="text-muted-foreground">
            Manage doctors and receptionists in your clinic
          </p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link to="/staff/new">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Staff
            </Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <Label htmlFor="staff-type-filter">Tipo de Personal</Label>
              <Select value={staffType} onValueChange={setStaffType}>
                <SelectTrigger id="staff-type-filter">
                  <SelectValue placeholder="Filtrar por tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="doctors">Doctores</SelectItem>
                  <SelectItem value="receptionists">Recepcionistas</SelectItem>
                  <SelectItem value="nurses">Enfermeros</SelectItem>
                  <SelectItem value="admin">Administradores</SelectItem>
                  <SelectItem value="technicians">Técnicos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status-filter">Estado</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger id="status-filter">
                  <SelectValue placeholder="Filtrar por estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="active">Activo</SelectItem>
                  <SelectItem value="inactive">Inactivo</SelectItem>
                  <SelectItem value="on-leave">De permiso</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {staffType === "doctors" && (
              <div className="space-y-2">
                <Label htmlFor="specialty-filter">Especialidad</Label>
                <Select
                  value={specialtyFilter}
                  onValueChange={setSpecialtyFilter}
                >
                  <SelectTrigger id="specialty-filter">
                    <SelectValue placeholder="Filtrar por especialidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    <SelectItem value="cardiology">Cardiología</SelectItem>
                    <SelectItem value="dermatology">Dermatología</SelectItem>
                    <SelectItem value="neurology">Neurología</SelectItem>
                    <SelectItem value="pediatrics">Pediatría</SelectItem>
                    <SelectItem value="general">Medicina General</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="search-staff">Buscar</Label>
              <div className="relative">
                <Input
                  id="search-staff"
                  placeholder="Buscar por nombre, email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
