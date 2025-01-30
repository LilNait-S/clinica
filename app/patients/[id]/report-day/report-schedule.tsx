import { Circle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { cn } from "@/lib/utils"

export default function AppointmentSchedule() {
  return (
    <Card className="w-full p-6">
      <div className="relative">
        {patientReports.map(({ date, description, id }, index) => (
          <div key={id} className="flex gap-4 mb-6 relative">
            {index !== patientReports.length - 1 && (
              <div className="absolute left-[11px] top-[24px] w-[2px] h-[calc(100%-2px)] bg-gray-200" />
            )}
            <div className="relative">
              <Circle
                className={cn(
                  "w-6 h-6",
                  index === 0
                    ? "fill-blue-500 text-blue-500 w-6 h-6"
                    : "fill-gray-400 text-gray-400 size-4 mx-1"
                )}
              />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-2">
                {format(date, "dd MMM yyyy", { locale: es })}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

const patientReports = [
  {
    id: 1,
    date: new Date("2025-01-29"),
    description:
      "El paciente presenta síntomas leves de gripe, recomendación de reposo y paracetamol. El paciente presenta síntomas leves de gripe, recomendación de reposo y paracetamol.El paciente presenta síntomas leves de gripe, recomendación de reposo y paracetamol.El paciente presenta síntomas leves de gripe, recomendación de reposo y paracetamol.",
  },
  {
    id: 2,
    date: new Date("2025-01-20"),
    description:
      "Se realizó control de presión arterial, valores dentro del rango normal.",
  },
  {
    id: 3,
    date: new Date("2025-01-10"),
    description:
      "Paciente refiere dolor en la rodilla derecha, se recomienda realizar estudios complementarios.",
  },
  {
    id: 4,
    date: new Date("2024-12-15"),
    description:
      "El paciente presenta dolor lumbar, se recomienda fisioterapia.",
  },
  {
    id: 5,
    date: new Date("2024-11-22"),
    description: "Chequeo general, sin novedades importantes.",
  },
  {
    id: 6,
    date: new Date("2024-10-30"),
    description:
      "Paciente con alergia estacional, se recomienda antihistamínico.",
  },
  {
    id: 7,
    date: new Date("2024-09-18"),
    description: "Molestias estomacales, dieta blanda recomendada.",
  },
  {
    id: 8,
    date: new Date("2024-08-05"),
    description: "Se realizó control de glucosa, niveles dentro de lo normal.",
  },
  {
    id: 9,
    date: new Date("2024-07-12"),
    description:
      "Paciente con síntomas de resfriado, tratamiento sintomático indicado.",
  },
  {
    id: 10,
    date: new Date("2024-06-23"),
    description: "Examen de sangre realizado, en espera de resultados.",
  },
  {
    id: 11,
    date: new Date("2024-05-14"),
    description:
      "Paciente con dolor de cabeza recurrente, se recomienda consulta con especialista.",
  },
]
