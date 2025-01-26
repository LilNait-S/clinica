import { z } from "zod"

export const AppointmentStatusSchema = z.enum([
  "Pending",
  "Confirmed",
  "Cancelled",
  "Completed",
])

export const AppointmentSchema = z.object({
  date: z.date(),
  time: z
    .string()
    .regex(
      /^([01]\d|2[0-3]):([0-5]\d)$/,
      "Invalid time format (expected HH:mm)"
    ),
  reason: z.string().min(1, "Reason is required"),
  assignedDoctor: z.string().min(1, "Assigned doctor is required"),
  status: AppointmentStatusSchema,
})

export const MedicalRecordSchema = z.object({
  bloodPressure: z
    .string()
    .regex(
      /^\d{2,3}\/\d{2,3}$/,
      "Invalid blood pressure format (expected 120/80)"
    ),
  heartRate: z.number().int().positive("Heart rate must be a positive integer"),
  bodyTemperature: z.number().positive("Body temperature must be positive"),
  weight: z.number().positive("Weight must be positive"),
  height: z.number().positive("Height must be positive"),
  initialDiagnosis: z.string().min(1, "Initial diagnosis is required"),
  recommendations: z
    .string()
    .min(1, "Recommendations or treatment is required"),
})

export const unifiedSchema = z.object({
  ...AppointmentSchema.shape,
  ...MedicalRecordSchema.shape,
})
