"use client"

import { Patient } from "@/types/patient"
import { type Table } from "@tanstack/react-table"
import { PatientForm } from "../create-patient"

interface PatientTableToolbarActionsProps {
  table: Table<Patient>
}

export function PatientTableToolbarActions({
  table,
}: PatientTableToolbarActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <PatientForm type="create" />
    </div>
  )
}
