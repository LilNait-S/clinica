"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { RegisterAccidentsForm } from "./register-accidents-form"
import { format } from "date-fns"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Calendar } from "lucide-react"
import { injuryLocations } from "@/constants/injuryLocations"
import { cn } from "@/lib/utils"

const patientAccidents = [
  {
    id: 1,
    patientId: 1,
    injuryLocation: "1", // Cabeza
    description: "Golpe fuerte en la cabeza debido a una caída.",
    date: new Date("2024-02-01"),
  },
  {
    id: 2,
    patientId: 1,
    injuryLocation: "5", // Brazo
    description: "Fractura en el brazo derecho tras accidente en bicicleta.",
    date: new Date("2024-01-15"),
  },
  {
    id: 3,
    patientId: 1,
    injuryLocation: "10", // Espalda
    description:
      "Dolor en la espalda baja debido a levantamiento de peso excesivo.",
    date: new Date("2023-12-20"),
  },
  {
    id: 4,
    patientId: 1,
    injuryLocation: "14", // Rodilla
    description: "Lesión en la rodilla izquierda tras resbalar en el baño.",
    date: new Date("2023-11-10"),
  },
  {
    id: 5,
    patientId: 1,
    injuryLocation: "8", // Mano
    description: "Corte profundo en la mano al manipular un cuchillo.",
    date: new Date("2023-10-05"),
  },
  {
    id: 6,
    patientId: 1,
    injuryLocation: "16", // Mano
    description: "Corte profundo pie la mano al manipular un cuchillo.",
    date: new Date("2023-10-05"),
  },
]

const findInjuryLocation = (value: string) => {
  return injuryLocations.find((location) => location.value === value) || null
}

const getClassNameById = (id: string) => {
  switch (id) {
    case "1":
    case "2":
    case "3":
      return "top-5 left-[38%]"
    case "4":
    case "5":
    case "6":
      return "top-32 left-32"
    case "7":
    case "8":
      return "top-42 left-16"
    case "9":
    case "10":
    case "11":
    case "12":
      return "top-40 left-[38%]"
    case "13":
    case "14":
    case "15":
    case "16":
      return "top-80 left-48"
    default:
      return "bg-gray-500"
  }
}

export default function RegisterAccidents() {
  const [selectedInjury, setSelectedInjury] = useState<string | null>(null)

  return (
    <section className="flex flex-col xl:flex-row gap-4">
      <Card className="flex justify-center items-center">
        <div className="p-8 relative flex justify-center items-center w-[520px] h-[520px] max-h-[520px] max-w-[520px]">
          <img
            src="/body.png"
            alt="body"
            className="w-[520px] h-[520px] max-h-[520px] max-w-[520px]"
          />

          {selectedInjury && (
            <div
              className={cn(
                "absolute size-32 bg-red-500 bg-opacity-50 rounded-full ",
                getClassNameById(selectedInjury)
              )}
            ></div>
          )}
        </div>
      </Card>
      <div className="flex flex-col gap-4 w-full">
        <Card className="p-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold leading-none tracking-tight">
              Registros
            </h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Registrar accidente</Button>
              </DialogTrigger>
              <RegisterAccidentsForm type="create" patientId={1} />
            </Dialog>
          </div>
        </Card>
        <div className="grid grid-cols-4 gap-4">
          {patientAccidents.map(({ id, date, description, injuryLocation }) => (
            <Card
              key={id}
              className="flex flex-col p-8 gap-2 cursor-pointer w-full"
              onClick={() => setSelectedInjury(injuryLocation)}
            >
              <div className="flex items-center gap-1">
                <Calendar className="stroke-muted-foreground size-4" />
                <span className="text-xs text-muted-foreground">
                  {format(date, "yyyy-MM-dd")}
                </span>
              </div>

              <span className="font-medium">
                {findInjuryLocation(injuryLocation)?.label}
              </span>
              <p className="text-balance text-muted-foreground">
                {description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
