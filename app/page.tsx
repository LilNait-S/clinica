import { Banner } from "@/components/banner"
import { KPICard } from "@/components/kpi-card"

export default function Home() {
  return (
    <section className="p-8 flex flex-col gap-6">
      <Banner>Panel principal</Banner>
      <div className="flex gap-6">
        <KPICard title="Citas Totales" value={1254} percent={10} />
        <KPICard title="Pacientes Activos" value={567} percent={-20} />
        <KPICard title="Citas Canceladas" value={56} percent={10} />
        <KPICard title="Pacientes Nuevos" value={25} percent={10} />
      </div>
    </section>
  )
}
