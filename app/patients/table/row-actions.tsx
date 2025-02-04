"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PatientTable } from "@/types/patient"
import { Row } from "@tanstack/react-table"
import { Ellipsis } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface PatientRowActionsProps<TData> {
  row: Row<TData>
}

export function PatientRowActions<TData extends PatientTable>({
  row,
}: PatientRowActionsProps<TData>) {
  const patient = row.original
  const basePath = usePathname()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <Ellipsis className="h-4 w-4" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={`${basePath}/${patient.id}`}>
          <DropdownMenuItem>Ver detalles</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
