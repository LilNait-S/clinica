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
  { date: "2025-01-28", weight: 70 },
  { date: "2025-01-27", weight: 70.2 },
  { date: "2025-01-26", weight: 69.8 },
  { date: "2025-01-25", weight: 70.1 },
  { date: "2025-01-24", weight: 69.7 },
  { date: "2025-01-23", weight: 70.3 },
  { date: "2025-01-22", weight: 70.5 },
  { date: "2025-01-21", weight: 69.5 },
  { date: "2025-01-20", weight: 70.6 },
  { date: "2025-01-19", weight: 70.4 },
]
  .slice(0, 6)
  .reverse()

const chartConfig = {
  weight: {
    label: "Peso Corporal",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function WeightChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Peso Corporal</CardTitle>
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
              tickFormatter={(value) => `${value} kg`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="weight"
              type="natural"
              stroke="var(--color-weight)"
              strokeWidth={2}
              dot={{ fill: "var(--color-weight)" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
