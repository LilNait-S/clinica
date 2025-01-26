"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  ChevronLeft,
  Clipboard,
  Download,
  HeartPulse,
  MessageCircle,
  Pencil,
  UserPlus,
} from "lucide-react"
import Link from "next/link"

export function PatientToolbar({ patientId }: { patientId: string }) {
  return (
    <div className="flex justify-between gap-4">
      <div className="flex gap-4">
        <Link
          href={"/patients"}
          className={buttonVariants({ variant: "outline" })}
        >
          <ChevronLeft /> Volver a la lista
        </Link>
        <Button variant="outline">
          <Clipboard /> Notas
        </Button>
        <Button variant="outline">
          <Pencil /> Editar Paciente
        </Button>
        <Button variant="outline">
          <Download /> Descargar ficha del paciente
        </Button>
        <Button variant="outline">
          <MessageCircle /> Mensaje
        </Button>
        <Button variant="outline">
          <UserPlus /> Agregar nueva cita
        </Button>
      </div>
      <Link
        href={`${patientId}/register-appointment`}
        className={buttonVariants()}
      >
        <HeartPulse />
        Registrar cita
      </Link>
    </div>
  )
}
