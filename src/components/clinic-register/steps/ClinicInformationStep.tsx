import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";
import { FormField } from "../FormField";

export function ClinicInformationStep() {
  const { register } = useFormContext();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <FormField name="name" label="Nombre de la Clínica">
        <Input
          id="name"
          placeholder="Clínica MedClinic"
          {...register("name")}
        />
      </FormField>

      <FormField name="email" label="Correo Electrónico de la Clínica">
        <Input
          id="email"
          type="email"
          placeholder="info@medclinic.com"
          {...register("email")}
        />
      </FormField>

      <FormField name="phone" label="Teléfono de la Clínica">
        <Input
          id="phone"
          type="tel"
          placeholder="+1 (555) 987-6543"
          {...register("phone")}
        />
      </FormField>

      <FormField name="website" label="Sitio Web">
        <Input
          id="website"
          type="url"
          placeholder="https://www.medclinic.com"
          {...register("website")}
        />
      </FormField>

      <FormField
        name="description"
        label="Descripción"
        className="md:col-span-2"
      >
        <Textarea
          id="description"
          placeholder="Una clínica de atención médica integral que ofrece una amplia gama de servicios médicos..."
          className="min-h-[100px]"
          {...register("description")}
        />
      </FormField>
    </div>
  );
}
