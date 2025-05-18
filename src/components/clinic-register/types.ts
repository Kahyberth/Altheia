import * as z from "zod";

export const formSchema = z.object({
  owner_name: z
    .string()
    .min(2, { message: "Nombre debe tener al menos 2 caracteres" }),
  owner_email: z
    .string()
    .email({ message: "Dirección de correo electrónico inválida" }),
  owner_phone: z.string().min(6, { message: "Número de teléfono requerido" }),
  owner_position: z.string().min(2, { message: "Cargo requerido" }),
  owner_document_number: z
    .string()
    .min(1, { message: "Número de documento requerido" }),
  owner_gender: z.enum(["male", "female", "other"], {
    required_error: "Por favor, seleccione un género",
  }),

  name: z.string().min(2, { message: "Nombre de la clínica requerido" }),
  email: z
    .string()
    .email({ message: "Dirección de correo electrónico inválida" }),
  description: z
    .string()
    .min(10, { message: "Descripción debe tener al menos 10 caracteres" }),
  phone: z.string().min(6, { message: "Número de teléfono requerido" }),
  website: z.string().or(z.string().length(0)),

  address: z.string().min(5, { message: "Dirección requerida" }),
  country: z.string().min(1, { message: "País requerido" }),
  city: z.string().min(1, { message: "Ciudad requerida" }),
  state: z.string().min(1, { message: "Departamento/Provincia requerida" }),
  postal_code: z.string().min(1, { message: "Código postal requerido" }),

  member_count: z
    .number()
    .min(1, { message: "Número de miembros debe ser al menos 1" }),
  services_offered: z
    .array(z.string())
    .min(1, { message: "Seleccionar al menos un servicio" }),
  accepted_eps: z
    .array(z.string())
    .min(1, { message: "Seleccionar al menos una EPS" }),

  clinic_photos: z.array(z.instanceof(File)).optional(),
});

export type FormData = z.infer<typeof formSchema>;

export interface EPS {
  id: string;
  name: string;
}

export interface ApiResponse<T> {
  error: boolean;
  data: T;
}
