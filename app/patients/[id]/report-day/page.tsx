import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DayReportForm } from "./day-report-form"
import AppointmentSchedule from "./report-schedule"

export default function ReportDay() {
  return (
    <section className="grid grid-cols-3 gap-4">
      <DayReportForm type="create" />
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Reportes registrados</CardTitle>
        </CardHeader>
        <CardContent>
          <AppointmentSchedule />
        </CardContent>
      </Card>
    </section>
  )
}
