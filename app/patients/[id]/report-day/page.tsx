import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ReportDay() {
  return (
    <section className="grid grid-cols-3 gap-4">
      <Card className="">
        <CardHeader>
          <CardTitle>Crear reporte</CardTitle>
        </CardHeader>
        <CardContent>
          <div>reportes </div>
        </CardContent>
      </Card>
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Reportes registrados</CardTitle>
        </CardHeader>
        <CardContent>
          <div>reportes </div>
        </CardContent>
      </Card>
    </section>
  )
}
