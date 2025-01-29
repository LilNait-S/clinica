export type Gender = "Male" | "Female" | "Other"

export type HealthStatus = "Excellent" | "Good" | "Fair" | "Poor"

export type PatientTable = {
  id: number
  fullName: string
  dateOfBirth: Date
  gender: Gender
  address: string
  phone: string
  insuranceNumber: string
  medicalInsurance: string
  lastAppointment: Date | null
  healthStatus: HealthStatus
}

export type Patient = {
  id: number
  fullName: string
  dateOfBirth: Date
  gender: string
  idNumber: string
  nationality: string
  maritalStatus: string
  occupation?: string
  address: string
  phone?: string
  alternative_phone?: string
  email: string
  whatsapp: string
}
