"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { unifiedSchema } from "@/lib/validations/patient/appointment"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

interface Props {
  type: "create" | "edit"
  patientId: number
}

export function AppointmentForm({ type, patientId }: Props) {
  const [submitting, setSubmitting] = useState<boolean>(false)
  const form = useForm<z.infer<typeof unifiedSchema>>({
    resolver: zodResolver(unifiedSchema),
    // defaultValues: {

    // },
  })

  async function onSubmit(values: z.infer<typeof unifiedSchema>) {
    setSubmitting(true)

    try {
      if (type === "create") {
        // await createAppointment({ values })
      }

      if (type === "edit") {
        // await updateRegister()
      }

      toast.success(
        `Se ${type === "create" ? "creó" : "editó"} correctamente la cita`
      )

      form.reset()
    } catch (e) {
      console.error(e)
      toast.error(
        `Ocurrio un error al ${
          type === "create" ? "crear" : "editar"
        } la cita, intenta otra vez.`
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-10 bg-background rounded-xl p-8 gap-4"
        autoComplete="off"
      >
        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold">Datos de la cita</span>
          <div className="grid grid-cols-5 gap-4">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fecha de la cita *</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal w-full",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hora de la cita *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="10:30 AM"
                      {...field}
                      disabled={submitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Motivo de consulta *</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={submitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="assignedDoctor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu doctor" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Dr. Luis Fernández</SelectItem>
                      <SelectItem value="2">Dr. cueva</SelectItem>
                      <SelectItem value="3">Dr. luna</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estado de la cita</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el estado" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Pending">Pendiente</SelectItem>
                      <SelectItem value="Confirmed">Confirmado</SelectItem>
                      <SelectItem value="Cancelled">Concelado</SelectItem>
                      <SelectItem value="Completed">Completado</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold">Signos vitales</span>
          <div className="grid grid-cols-5 gap-4">
            <FormField
              control={form.control}
              name="bloodPressure"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Presión arterial</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={submitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="heartRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Frecuencia cardíaca</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={submitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bodyTemperature"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Temperatura corporal</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={submitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Peso</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={submitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Altura</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={submitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold">Diagnóstico inicial</span>
            <FormField
              control={form.control}
              name="bloodPressure"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Diagnóstico inicial</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={submitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold">
              Recomendaciones o tratamiento
            </span>
            <FormField
              control={form.control}
              name="bloodPressure"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recomendaciones o tratamiento</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={submitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex justify-between">
          <Link
            href={`/patients/${patientId}`}
            className={buttonVariants({ variant: "outline" })}
          >
            Cancelar
          </Link>
          <Button type="submit" disabled={submitting}>
            {submitting
              ? `${type === "create" ? "Creando cita" : "Actualizando cita"}`
              : `${type === "create" ? "Crear cita" : "Actualizar cita"}`}
          </Button>
        </div>
      </form>
    </Form>
  )
}
