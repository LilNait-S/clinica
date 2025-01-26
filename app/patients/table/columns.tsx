import { DataTableColumnHeader } from "@/components/ui-custom/table-server/table-column-header"
import { Patient } from "@/types/patient"
import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
import { PatientRowActions } from "./row-actions"

const parseStatus = (level: Patient["healthStatus"]) => {
  switch (level) {
    case "Excellent":
      return (
        <div className="bg-green-600/10 text-green-600 flex justify-center items-center py-1 rounded-md">
          Excelente
        </div>
      )

    case "Good":
      return (
        <div className="bg-teal-600/10 text-teal-600 flex justify-center items-center py-1 rounded-md">
          Bueno
        </div>
      )

    case "Fair":
      return (
        <div className="bg-yellow-500/10 text-yellow-500 flex justify-center items-center py-1 rounded-md">
          regular
        </div>
      )
    case "Poor":
      return (
        <div className="bg-red-600/10 text-red-600 flex justify-center items-center py-1 rounded-md">
          Deficiente
        </div>
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
        return <div>{row.getValue("fullName")}</div>
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

        return <div>{dateOfBirth}</div>
      },
      enableSorting: false,
    },
    {
      accessorKey: "gender",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Género" />
      ),
      cell: ({ row }) => {
        return <div>{row.getValue("gender")}</div>
      },
      enableSorting: false,
    },
    {
      accessorKey: "address",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Dirección" />
      ),
      cell: ({ row }) => {
        return <div>{row.getValue("address")}</div>
      },
      enableSorting: false,
    },
    {
      accessorKey: "phone",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Teléfono" />
      ),
      cell: ({ row }) => {
        return <div>{row.getValue("phone")}</div>
      },
      enableSorting: false,
    },
    {
      accessorKey: "insuranceNumber",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Nro. de seguro" />
      ),
      cell: ({ row }) => {
        return <div>{row.getValue("insuranceNumber")}</div>
      },
      enableSorting: false,
    },
    {
      accessorKey: "medicalInsurance",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Seguro medico" />
      ),
      cell: ({ row }) => {
        return <div>{row.getValue("medicalInsurance")}</div>
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

        return <div>{lastAppointment}</div>
      },
      enableSorting: false,
    },
    {
      accessorKey: "healthStatus",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Estado de Salud" />
      ),
      cell: ({ row }) => {
        const status = parseStatus(row.getValue("healthStatus"))
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
