import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useFormContext } from "react-hook-form";
import { FormField } from "../FormField";

export function OwnerInformationStep() {
  const { register } = useFormContext();

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <FormField name="owner_name" label="Nombre">
        <Input
          id="owner_name"
          placeholder="Ingrese su nombre completo"
          {...register("owner_name")}
        />
      </FormField>

      <FormField name="owner_email" label="Correo Electrónico">
        <Input
          id="owner_email"
          type="email"
          placeholder="Ingrese su correo electrónico"
          {...register("owner_email")}
        />
      </FormField>

      <FormField name="owner_phone" label="Teléfono">
        <Input
          id="owner_phone"
          type="tel"
          placeholder="Ingrese su número de teléfono"
          {...register("owner_phone")}
        />
      </FormField>

      <FormField name="owner_position" label="Cargo">
        <Input
          id="owner_position"
          placeholder="Médico Director"
          {...register("owner_position")}
        />
      </FormField>

      <FormField name="owner_document_number" label="Número de Documento">
        <Input
          id="owner_document_number"
          placeholder="MD-12345678"
          {...register("owner_document_number")}
        />
      </FormField>

      <FormField name="owner_gender" label="Género" className="md:col-span-2">
        <RadioGroup
          defaultValue="male"
          {...register("owner_gender")}
          className="mt-2"
        >
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Male" id="male" />
              <Label htmlFor="male">Hombre</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Female" id="female" />
              <Label htmlFor="female">Mujer</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Other" id="other" />
              <Label htmlFor="other">Otro</Label>
            </div>
          </div>
        </RadioGroup>
      </FormField>
    </div>
  );
}
