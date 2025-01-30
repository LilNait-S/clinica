import { Button, buttonVariants } from "@/components/ui/button"
import {
  Clipboard,
  ClipboardPlus,
  ClipboardPlusIcon,
  Download,
  HeartPulse,
} from "lucide-react"
import Link from "next/link"

export function PatientMenu({ patientId }: { patientId: string }) {
  return (
    <div className="flex flex-wrap gap-2 justify-end items-end max-w-3xl">
      <Link
        href={`/patients/${patientId}/report-day`}
        className={buttonVariants({ size: "sm", variant: "outline" })}
      >
        <Clipboard />
        Reportes del dia
      </Link>
      <Button variant="outline" size="sm">
        <ClipboardPlusIcon /> Reportes de accidentes
      </Button>
      <Button variant="outline" size="sm">
        <ClipboardPlus /> Registrar accidentes
      </Button>
      <Button variant="outline" size="sm">
        <Download /> Descargar ficha del paciente
      </Button>
      <Link
        href={`/patients/${patientId}/register-appointment`}
        className={buttonVariants({ size: "sm" })}
      >
        <HeartPulse />
        Registrar vitales
      </Link>
      {/* <Button variant="outline">
        <MessageCircle /> Mensaje
      </Button>
      <Button variant="outline">
        <UserPlus /> Agregar nueva cita
      </Button> */}
    </div>
  )
}
