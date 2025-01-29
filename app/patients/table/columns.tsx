import { DataTableColumnHeader } from "@/components/ui-custom/table-server/table-column-header"
import { Patient } from "@/types/patient"
import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
import { PatientRowActions } from "./row-actions"
import Link from "next/link"

const parseStatus = (level: Patient["healthStatus"], id?: number) => {
  switch (level) {
    case "Excellent":
      return (
        <Link href={`/patients/${id}`} className="flex p-4">
          <div className="bg-green-600/10 text-green-600 flex w-full justify-center items-center py-1 rounded-md">
            Excelente
          </div>
        </Link>
      )

    case "Good":
      return (
        <Link href={`/patients/${id}`} className="flex p-4">
          <div className="bg-teal-600/10 text-teal-600 flex w-full justify-center items-center py-1 rounded-md">
            Bueno
          </div>
        </Link>
      )

    case "Fair":
      return (
        <Link href={`/patients/${id}`} className="flex p-4">
          <div className="bg-yellow-500/10 text-yellow-500 flex w-full justify-center items-center py-1 rounded-md">
            Regular
          </div>
        </Link>
      )
    case "Poor":
      return (
        <Link href={`/patients/${id}`} className="flex p-4">
          <div className="bg-red-600/10 text-red-600 flex w-full justify-center items-center py-1 rounded-md">
            Deficiente
          </div>
        </Link>
      )

    default:
      const _exhaustiveCheck: never = level
      return _exhaustiveCheck
  }
}

export function getPatientColumns(): ColumnDef<Patient>[] {
  return [
    {
      accessorKey: "fullName",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Nombres Completos" />
      ),
      cell: ({ row }) => {
        return (
          <Link href={`/patients/${row.original.id}`} className="flex p-4 shrink-0">
            {row.getValue("fullName")}
          </Link>
        )
      },
      enableSorting: false,
    },
    {
      accessorKey: "dateOfBirth",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Fecha de nacimiento" />
      ),
      cell: ({ row }) => {
        const rawValue = row.getValue("dateOfBirth")
        const isValidDate =
          rawValue instanceof Date && !isNaN(rawValue.getTime())

        const dateOfBirth = isValidDate
          ? format(rawValue, "yyyy-MM-dd")
          : "No existe"

        return (
          <Link href={`/patients/${row.original.id}`} className="flex p-4">
            {dateOfBirth}
          </Link>
        )
      },
      enableSorting: false,
    },
    {
      accessorKey: "gender",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Género" />
      ),
      cell: ({ row }) => {
        return (
          <Link href={`/patients/${row.original.id}`} className="flex p-4">
            {row.getValue("gender")}
          </Link>
        )
      },
      enableSorting: false,
    },
    {
      accessorKey: "address",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Dirección" />
      ),
      cell: ({ row }) => {
        return (
          <Link href={`/patients/${row.original.id}`} className="flex p-4">
            {row.getValue("address")}
          </Link>
        )
      },
      enableSorting: false,
    },
    {
      accessorKey: "phone",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Teléfono" />
      ),
      cell: ({ row }) => {
        return (
          <Link href={`/patients/${row.original.id}`} className="flex p-4">
            {row.getValue("phone")}
          </Link>
        )
      },
      enableSorting: false,
    },
    {
      accessorKey: "insuranceNumber",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Nro. de seguro" />
      ),
      cell: ({ row }) => {
        return (
          <Link href={`/patients/${row.original.id}`} className="flex p-4">
            {row.getValue("insuranceNumber")}
          </Link>
        )
      },
      enableSorting: false,
    },
    {
      accessorKey: "medicalInsurance",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Seguro medico" />
      ),
      cell: ({ row }) => {
        return (
          <Link href={`/patients/${row.original.id}`} className="flex p-4">
            {row.getValue("medicalInsurance")}
          </Link>
        )
      },
      enableSorting: false,
    },
    {
      accessorKey: "lastAppointment",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Última Cita" />
      ),
      cell: ({ row }) => {
        const rawValue = row.getValue("lastAppointment")
        const isValidDate =
          rawValue instanceof Date && !isNaN(rawValue.getTime())

        const lastAppointment = isValidDate
          ? format(rawValue, "yyyy-MM-dd")
          : "No existe"

        return (
          <Link href={`/patients/${row.original.id}`} className="flex p-4">
            {lastAppointment}
          </Link>
        )
      },
      enableSorting: false,
    },
    {
      accessorKey: "healthStatus",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Estado de Salud" />
      ),
      cell: ({ row }) => {
        const status = parseStatus(
          row.getValue("healthStatus"),
          row.original.id
        )
        return status
      },
      enableSorting: false,
    },
    {
      id: "actions",
      cell: ({ row }) => <PatientRowActions row={row} />,
    },
  ]
}
