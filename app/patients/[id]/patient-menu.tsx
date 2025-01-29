import { Button, buttonVariants } from "@/components/ui/button"
import {
  Clipboard,
  ClipboardPlus,
  ClipboardPlusIcon,
  Download,
  HeartPulse,
  MessageCircle,
  UserPlus,
} from "lucide-react"
import Link from "next/link"

export function PatientMenu({ patientId }: { patientId: string }) {
  return (
    <div className="flex flex-wrap gap-2 justify-end items-end max-w-3xl">
      <Button variant="outline" size="sm">
        <Clipboard /> Reporte del dia
      </Button>
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
        href={`${patientId}/register-appointment`}
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
