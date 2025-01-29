import { Banner } from "@/components/banner"
import { getPatients } from "@/lib/actions/patients"
import { getPatientsSchema } from "@/lib/validations/patient/search-params"
import { Params } from "@/types/params"
import { Suspense } from "react"
import { PatientsTable } from "./table/patients"

export default async function Patients({ searchParams }: Params) {
  const search = getPatientsSchema.parse(await searchParams)
  const patients = getPatients(search)
  return (
    <section className="flex flex-1 flex-col gap-2 p-6">
      <Banner>Pacientes</Banner>
      <main>
        <Suspense fallback="Loading">
          <PatientsTable patientsPromise={patients} />
        </Suspense>
      </main>
    </section>
  )
}
