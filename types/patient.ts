export type Gender = "Male" | "Female" | "Other"

export type HealthStatus = "Excellent" | "Good" | "Fair" | "Poor"

export type Patient = {
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
