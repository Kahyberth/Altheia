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
