import { z } from "zod"

export const patientSchema = z.object({
  fullName: z.string().min(5, {
    message: "Full name is required and must be at least 5 characters",
  }),
  dateOfBirth: z.date().refine((val) => !isNaN(val.getTime()), {
    message: "Date of birth is required",
  }),
  gender: z.string().min(1, { message: "Gender is required" }),
  idNumber: z.string().min(1, { message: "ID number is required" }),
  nationality: z.string().min(1, { message: "Nationality is required" }),
  maritalStatus: z.string().min(1, { message: "Marital status is required" }),
  occupation: z.string().optional(),
  // emergency_contact: z
  //   .object({
  //     name: z.string().optional(),
  //     relationship: z.string().optional(),
  //     phone: z.string().optional(),
  //   })
  //   .optional(),
  address: z.string().min(1, { message: "Address is required" }),
  phone: z.string().optional(),
  alternative_phone: z.string().optional(),
  email: z.string().email({ message: "Valid email is required" }),
  whatsapp: z.string().min(1, { message: "WhatsApp number is required" }),
})
