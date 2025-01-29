import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getPatient } from "@/lib/actions/patients"
import { Params } from "@/types/params"
import { LabelAndValue } from "./label-and-value"
import { Vitals } from "./charts/vitals"
import { PatientMenu } from "./patient-menu"
import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import { ChevronLeft, Pencil } from "lucide-react"

export default async function Patient({ params }: Params) {
  const { id } = await params
  const patient = await getPatient({ id: +id })

  if (!patient)
    return <div className="w-full h-full">El paciente no existe</div>

  return (
    <section className="flex flex-1 flex-col gap-4 p-6 bg-secondary">
      <header className="flex flex-col bg-background rounded-xl p-8 gap-4">
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <picture className="bg-white rounded-full overflow-hidden p-4">
              <img src="/patient.png" alt="image-patient" className="size-16" />
            </picture>
            <div className="flex flex-col">
              <span className="font-bold text-xl">{patient.fullName}</span>
              <span>Paciente</span>
            </div>
          </div>
          <PatientMenu patientId={id} />
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex gap-4">
            <Link
              href={"/patients"}
              className={buttonVariants({ variant: "outline" })}
            >
              <ChevronLeft /> Volver a la lista
            </Link>
          </div>
          <Button variant="outline">
            <Pencil /> Editar Paciente
          </Button>
        </div>
      </header>
      <main className="bg-background rounded-xl flex gap-16 p-8">
        <div className="w-full space-y-5">
          <LabelAndValue label="Nombres Completos" value={patient.fullName} />
          <LabelAndValue label="Género" value={patient.gender} />
          <LabelAndValue
            label="Fecha de nacimiento"
            value={patient.dateOfBirth}
          />
          <LabelAndValue label="País" value={"Perú"} />
          <LabelAndValue label="Dirección" value={patient.address} />
        </div>
        <div className="w-full space-y-5">
          <LabelAndValue label="Nro. de cliente" value={18} />
          <LabelAndValue label="Estado civil" value={"Casada"} />
          <LabelAndValue label="Vive solo" value={"No"} />
          <LabelAndValue label="Vive con" value={"Marido"} />
          <LabelAndValue label="Religión" value={"No especificado"} />
        </div>
      </main>
      {/* <footer>
        <Tabs defaultValue="data">
          <TabsList className="grid grid-cols-2 w-fit">
            <TabsTrigger value="data">Datos de enfermería</TabsTrigger>
            <TabsTrigger value="contact">
              Dirección y datos de contacto
            </TabsTrigger>
          </TabsList>
          <TabsContent value="data">
            <div className="bg-background rounded-xl flex gap-16 p-8">
              <div className="w-full space-y-5">
                <LabelAndValue
                  label="Inicio de la atención"
                  value={"01-12-2022"}
                />
                <LabelAndValue label="Cuidadores" value={""} />
                <LabelAndValue
                  label="Nivel de atención"
                  value={"Nivel 4 de atención"}
                />
                <LabelAndValue
                  label="Servicio de atención"
                  value={"Beneficio en especie"}
                />
                <LabelAndValue
                  label="Tipo de servicio"
                  value={"Artículo 37.2 SGB V, Artículo 36 SGB XI, Artículo 39"}
                />
              </div>
              <div className="w-full space-y-5">
                <LabelAndValue label="Primera visita" value={"29-11-2022"} />
                <LabelAndValue label="Ayuda" value={"No"} />
                <LabelAndValue
                  label="Llamada de emergencia a domicilio"
                  value={"No"}
                />
                <LabelAndValue label="Llave de la casa" value={"Si"} />
                <LabelAndValue label="Costos de inversión" value={"Sí"} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="contact">
            <div className="bg-background rounded-xl flex gap-16 p-8">
              <div className="w-full space-y-5"></div>
              <div className="w-full space-y-5"></div>
            </div>
          </TabsContent>
        </Tabs>
      </footer> */}
      <Vitals />
    </section>
  )
}
