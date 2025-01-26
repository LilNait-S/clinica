"use client"

import { Patient } from "@/types/patient"
import { type Table } from "@tanstack/react-table"

interface PatientTableToolbarActionsProps {
  table: Table<Patient>
}

export function PatientTableToolbarActions({
  table,
}: PatientTableToolbarActionsProps) {
  return (
    <div className="flex items-center gap-2">
      {/* <Link
        href={"banks/create-bank"}
        className={`${buttonVariants({ variant: "default" })}`}
      >
        + Agregar Banco
      </Link> */}
    </div>
  )
}
