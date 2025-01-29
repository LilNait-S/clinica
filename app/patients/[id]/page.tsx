import { getPatient } from "@/lib/actions/patients"
import { Params } from "@/types/params"
import { Vitals } from "./charts/vitals"
import { LabelAndValue } from "./label-and-value"

export default async function Patient({ params }: Params) {
  const { id } = await params
  const patient = await getPatient({ id: +id })

  if (!patient)
    return <div className="w-full h-full">El paciente no existe</div>

  return (
    <>
      <main className="bg-background rounded-xl flex gap-16 p-8">
        <div className="w-full space-y-5">
          <LabelAndValue label="Nombres Completos" value={patient.fullName} />
          <LabelAndValue label="Género" value={patient.gender} />
          <LabelAndValue
            label="Fecha de nacimiento"
            value={patient.dateOfBirth}
          />
          <LabelAndValue label="Nacionalidad" value={patient.nationality} />
          <LabelAndValue label="Dirección" value={patient.address} />
        </div>
        <div className="w-full space-y-5">
          <LabelAndValue
            label="Numero de identificación"
            value={patient.idNumber}
          />
          <LabelAndValue label="Estado civil" value={patient.maritalStatus} />
          <LabelAndValue
            label="Ocupación"
            value={patient.occupation ?? "Sin datos"}
          />
          <LabelAndValue
            label="Correo electrónico"
            value={patient.email ?? "Sin datos"}
          />
          <LabelAndValue label="Whatsapp" value={patient.whatsapp} />
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
    </>
  )
}
