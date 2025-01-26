import { Banner } from "@/components/banner"
import { LayerHeaderApp } from "@/components/layer-header-app"
import { getPatients } from "@/lib/actions/patients"
import { getPatientsSchema } from "@/lib/validations/patient/search-params"
import { Params } from "@/types/params"
import { Suspense } from "react"
import { PatientsTable } from "./table/patients"

export default async function Patients({ searchParams }: Params) {
  const search = getPatientsSchema.parse(await searchParams)
  const patients = getPatients(search)
  return (
    <LayerHeaderApp>
      <Banner>Patients</Banner>
      <main>
        <Suspense fallback="Loading">
          <PatientsTable patientsPromise={patients} />
        </Suspense>
      </main>
    </LayerHeaderApp>
  )
}
