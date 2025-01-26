import { z } from "zod"

export const spPatientsSchema = z.object({
  page: z.coerce.number().default(1),
  limit: z.coerce.number().default(10),
  banco: z.string().optional(),
})

export const getPatientsSchema = spPatientsSchema

export type GetPatientsSchema = z.infer<typeof getPatientsSchema>
