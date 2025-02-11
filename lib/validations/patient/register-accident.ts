import { z } from "zod"

export const registerAccidentSchema = z.object({
  patientId: z.number(),
  injuryLocation: z
    .string()
    .min(1, "Debe indicar la parte del cuerpo afectada"),
  description: z.string().min(1, "La descripción es requerida"),
  date: z.date(),
})
