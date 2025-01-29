"use client"

import { DataTableRoot } from "@/components/ui-custom/table-server/table-root"
import { DataTableToolbar } from "@/components/ui-custom/table-server/table-toolbar"
import { DataTableFilterField } from "@/components/ui-custom/table-server/types"
import { useDataTable } from "@/hooks/use-data-table"
import { getPatients } from "@/lib/actions/patients"
import { PatientTable } from "@/types/patient"
import { patientViewTable } from "@/utils/table-view-columns/patients"
import { use, useMemo } from "react"
import { getPatientColumns } from "./columns"
import { PatientTableToolbarActions } from "./toolbar-action"

interface PatientsTableProps {
  patientsPromise: ReturnType<typeof getPatients>
}

export function PatientsTable({ patientsPromise }: PatientsTableProps) {
  const {
    payload: { data, total, pageCount },
  } = use(patientsPromise)

  const filterFields: DataTableFilterField<PatientTable>[] = [
    { label: "buscar", value: "fullName", placeholder: "Buscar" },
  ]

  const columns = useMemo(() => getPatientColumns(), [])

  const { table } = useDataTable({
    data,
    columns,
    pageCount,
    filterFields,
    getRowId: (originalRow, index) => `${originalRow.id}-${index}`,
    shallow: false,
    clearOnDefault: true,
    history: "push",
  })

  return (
    <DataTableRoot table={table} totalElements={total}>
      <DataTableToolbar
        table={table}
        filterFields={filterFields}
        changeTitle={patientViewTable}
        isPending={false}
      >
        <PatientTableToolbarActions table={table} />
      </DataTableToolbar>
    </DataTableRoot>
  )
}
