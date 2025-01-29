"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const vitalsData = [
  { date: "2025-01-28", heartRate: 72 },
  { date: "2025-01-27", heartRate: 75 },
  { date: "2025-01-26", heartRate: 70 },
  { date: "2025-01-25", heartRate: 73 },
  { date: "2025-01-24", heartRate: 71 },
  { date: "2025-01-23", heartRate: 74 },
  { date: "2025-01-22", heartRate: 76 },
  { date: "2025-01-21", heartRate: 69 },
  { date: "2025-01-20", heartRate: 78 },
  { date: "2025-01-19", heartRate: 77 },
]
  .slice(0, 6)
  .reverse()

const chartConfig = {
  heartRate: {
    label: "Frecuencia Cardíaca",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function HeartRateChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Frecuencia Cardíaca</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={vitalsData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
          
            />
            <YAxis
              tickLine={{ stroke: "none" }}
              axisLine={{ stroke: "none" }}
              stroke={"hsl(var(--muted-foreground))"}

            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="heartRate"
              type="natural"
              stroke="var(--color-heartRate)"
              strokeWidth={2}
              dot={{ fill: "var(--color-heartRate)" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
