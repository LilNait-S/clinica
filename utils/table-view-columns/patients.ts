type TranslationDict = {
  [key: string]: string
}

const banktranslationView: TranslationDict = {
  fullName: "Nombres Completos",
  dateOfBirth: "Fecha de nacimiento",
  gender: "Género",
  address: "Dirección",
  phone: "Teléfono",
  insuranceNumber: "Nro. de seguro",
  medicalInsurance: "Seguro medico",
  lastAppointment: "Última Cita",
  healthStatus: "Estado de Salud",
}

export function patientViewTable(key: string) {
  return banktranslationView[key] || key
}
