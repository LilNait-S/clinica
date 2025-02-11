"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { injuryLocations } from "@/constants/injuryLocations"
import { cn } from "@/lib/utils"
import { registerAccidentSchema } from "@/lib/validations/patient/register-accident"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

interface Props {
  type: "create" | "edit"
  patientId: number
}

export function RegisterAccidentsForm({ type, patientId }: Props) {
  const [submitting, setSubmitting] = useState<boolean>(false)
  const form = useForm<z.infer<typeof registerAccidentSchema>>({
    resolver: zodResolver(registerAccidentSchema),
    defaultValues: {
      patientId,
      description: "",
      injuryLocation: "",
    },
  })

  async function onSubmit(values: z.infer<typeof registerAccidentSchema>) {
    setSubmitting(true)
    console.log("values", values)

    try {
      if (type === "create") {
        // await createRegisterAccident({ values })
      }

      if (type === "edit") {
        // await updateRegisterAccident()
      }

      toast.success(
        `Se ${type === "create" ? "creó" : "editó"} correctamente el registro`
      )

      form.reset()
    } catch (e) {
      console.error(e)
      toast.error(
        `Ocurrio un error al ${
          type === "create" ? "crear" : "editar"
        } el registro, intenta otra vez.`
      )
    } finally {
      setSubmitting(false)
    }
  }
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Registrar accidentes</DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          autoComplete="off"
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel required>Fecha del accidente</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
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
          <FormField
            control={form.control}
            name="injuryLocation"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel required>Zona afectada</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? injuryLocations.find(
                              (location) => location.value === field.value
                            )?.label
                          : "Selecciona la zona"}
                        <ChevronsUpDown className="opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="p-0">
                    <Command>
                      <CommandInput
                        placeholder="Search body..."
                        className="h-9"
                      />
                      <CommandList>
                        <CommandEmpty>
                          No encontramos coincidencias
                        </CommandEmpty>
                        <CommandGroup>
                          {injuryLocations.map((location) => (
                            <CommandItem
                              value={location.label}
                              key={location.value}
                              onSelect={() => {
                                form.setValue("injuryLocation", location.value)
                              }}
                            >
                              {location.label}
                              <Check
                                className={cn(
                                  "ml-auto",
                                  location.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogFooter>
            <Button type="submit" disabled={submitting}>
              {submitting
                ? `${type === "create" ? "Creando registro" : "Actualizando registro"}`
                : `${type === "create" ? "Crear registro" : "Actualizar registro"}`}
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  )
}
