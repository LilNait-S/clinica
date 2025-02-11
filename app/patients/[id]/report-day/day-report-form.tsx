"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DialogFooter } from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { dayReportSchema } from "@/lib/validations/patient/day-report"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

interface Props {
  type: "create" | "edit"
}

export function DayReportForm({ type }: Props) {
  const [submitting, setSubmitting] = useState<boolean>(false)
  const form = useForm<z.infer<typeof dayReportSchema>>({
    resolver: zodResolver(dayReportSchema),
    defaultValues: {
      description: "",
    },
  })

  async function onSubmit(values: z.infer<typeof dayReportSchema>) {
    setSubmitting(true)
    console.log("values", values)

    try {
      if (type === "create") {
        // await createAppointment({ values })
      }

      if (type === "edit") {
        // await updateRegister()
      }

      toast.success(
        `Se ${type === "create" ? "creó" : "editó"} correctamente el reporte`
      )

      form.reset()
    } catch (e) {
      console.error(e)
      toast.error(
        `Ocurrio un error al ${
          type === "create" ? "crear" : "editar"
        } el reporte, intenta otra vez.`
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Crear reporte</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            autoComplete="off"
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Descripcion</FormLabel>
                  <FormControl>
                    <Textarea {...field} disabled={submitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={submitting}>
              {submitting
                ? `${type === "create" ? "Creando reporte" : "Actualizando reporte"}`
                : `${type === "create" ? "Crear reporte" : "Actualizar reporte"}`}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
