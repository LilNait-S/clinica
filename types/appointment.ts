export type AppointmentStatus =
  | "Pending"
  | "Confirmed"
  | "Cancelled"
  | "Completed"

export interface Appointment {
  date: Date
  time: string
  reason: string
  assignedDoctor: string
  status: AppointmentStatus
}

export interface MedicalRecord {
  bloodPressure: string // Formato recomendado: '120/80'
  heartRate: number // Frecuencia cardíaca en pulsaciones por minuto (bpm)
  bodyTemperature: number // Temperatura corporal en grados Celsius
  weight: number // Peso en kilogramos (kg)
  height: number // Altura en centímetros (cm)
  initialDiagnosis: string // Diagnóstico inicial proporcionado por el médico
  recommendations: string // Recomendaciones o tratamiento sugerido
}
