import { LayerHeaderApp } from "@/components/layer-header-app"
import { buttonVariants } from "@/components/ui/button"
import { getPatient } from "@/lib/actions/patients"
import { Params } from "@/types/params"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { AppointmentForm } from "./add-register"

export default async function RegisterAppointment({ params }: Params) {
  const { id } = await params
  const patient = await getPatient({ id: +id })

  if (!patient)
    return <div className="w-full h-full">El paciente no existe</div>
  return (
    <LayerHeaderApp className="bg-border">
      <header className="flex flex-col bg-background rounded-xl p-8 gap-4">
        <div className="flex gap-4 items-center">
          <picture className="bg-gray-100 rounded-full overflow-hidden p-4">
            <img src="/patient.png" alt="image-patient" className="size-16" />
          </picture>
          <div className="flex flex-col">
            <span className="font-bold text-xl">{patient.fullName}</span>
            <span>Paciente</span>
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex gap-4">
            <Link
              href={`/patients/${id}`}
              className={buttonVariants({ variant: "outline" })}
            >
              <ChevronLeft /> Volver
            </Link>
          </div>
        </div>
      </header>
      <AppointmentForm patientId={+id} type="create" />
    </LayerHeaderApp>
  )
}
