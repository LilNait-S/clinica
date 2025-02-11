import { Button, buttonVariants } from "@/components/ui/button"
import { ChevronLeft, Pencil } from "lucide-react"
import { PatientMenu } from "./patient-menu"
import Link from "next/link"
import { Params } from "@/types/params"
import { getPatient } from "@/lib/actions/patients"
import { Card } from "@/components/ui/card"

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
} & Params) {
  const { id } = await params
  const patient = await getPatient({ id: +id })

  if (!patient)
    return <div className="w-full h-full">El paciente no existe</div>
  return (
    <section className="flex flex-1 flex-col gap-4 p-6 bg-secondary">
      <Card className="flex flex-col rounded-xl p-8 gap-4">
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <Link href={`/patients/${id}`} className="bg-white rounded-full overflow-hidden p-4 cursor-pointer">
              <img src="/patient.png" alt="image-patient" className="size-16" />
            </Link>
            <Link href={`/patients/${id}`} className="flex flex-col cursor-pointer">
              <span className="font-bold text-xl">{patient.fullName}</span>
              <span>Paciente</span>
            </Link>
            <Button variant="ghost" size="icon">
              <Pencil className="stroke-primary" />
              <span className="sr-only">Editar Paciente</span>
            </Button>
          </div>
          <PatientMenu patientId={id} />
        </div>
        <div className="flex justify-between gap-4">
          <Link
            href={"/patients"}
            className={buttonVariants({ variant: "outline" })}
          >
            <ChevronLeft /> Volver a la lista
          </Link>
        </div>
      </Card>
      {children}
    </section>
  )
}
