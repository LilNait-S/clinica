import { z } from "zod"

export const dayReportSchema = z.object({
  description: z.string().min(5, {
    message: "Full name is required and must be at least 5 characters",
  }),
})
