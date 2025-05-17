import { z } from "zod";

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.string(),
  eps: z.string(),
  gender: z.string(),
  date_of_birth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Fecha de nacimiento inválida"),
});

export type User = z.infer<typeof userSchema>;

export const patientSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  eps: z.string(),
  gender: z.string(),
  document_number: z.string(),
  phone: z.string(),
  address: z.string(),
  blood_type: z.string(),
  date_of_birth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Fecha de nacimiento inválida"),
});

export type Patient = z.infer<typeof patientSchema>;

export const DoctorSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  physician_specialty: z.string(),
  license_number: z.string(),
  status: z.boolean(),
  clinic_id: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  gender: z.string(),
  document_number: z.string(),
  phone: z.string(),
  address: z.string(),
  date_of_birth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Fecha de nacimiento inválida"),
});

export type Doctor = z.infer<typeof DoctorSchema>;
