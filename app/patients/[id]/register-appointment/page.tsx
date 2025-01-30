import { getPatient } from "@/lib/actions/patients"
import { Params } from "@/types/params"
import { AppointmentForm } from "./add-register"

export default async function RegisterAppointment({ params }: Params) {
  const { id } = await params
  const patient = await getPatient({ id: +id })

  if (!patient)
    return <div className="w-full h-full">El paciente no existe</div>
  return (
    <section>
      <AppointmentForm patientId={+id} type="create" />
    </section>
  )
}
