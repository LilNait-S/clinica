import { cn } from "@/lib/utils"

export function KPICard({
  title,
  value,
  unit = "%",
  percent,
  time = "vs el mes pasado",
}: {
  title: string
  value: number
  unit?: string
  percent: number
  time?: string
}) {
  const isPositive = percent >= 0

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm py-6 px-8 w-full">
      <div className="flex flex-col gap-2">
        <div>{title}</div>
        <span className="text-3xl font-bold">{value}</span>
        <div className="flex gap-2 items-center">
          <span
            className={cn(
              "px-2 py-1 rounded-md font-bold text-sm",
              isPositive
                ? "bg-green-600/10 text-green-600"
                : "bg-red-600/10 text-red-600"
            )}
          >
            {isPositive ? "+" : "-"}
            {Math.abs(percent)}
            {unit}
          </span>
          <p className="text-muted-foreground text-sm">{time}</p>
        </div>
      </div>
    </div>
  )
}
