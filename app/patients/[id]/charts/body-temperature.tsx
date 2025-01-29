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
  { date: "2025-01-28", temperature: 36.8 },
  { date: "2025-01-27", temperature: 37.1 },
  { date: "2025-01-26", temperature: 36.5 },
  { date: "2025-01-25", temperature: 36.9 },
  { date: "2025-01-24", temperature: 36.6 },
  { date: "2025-01-23", temperature: 37.0 },
  { date: "2025-01-22", temperature: 37.2 },
  { date: "2025-01-21", temperature: 36.4 },
  { date: "2025-01-20", temperature: 37.3 },
  { date: "2025-01-19", temperature: 37.1 },
]
  .slice(0, 6)
  .reverse()

const chartConfig = {
  temperature: {
    label: "Temperatura Corporal",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function BodyTemperatureChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Temperatura Corporal</CardTitle>
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
              dataKey="temperature"
              type="natural"
              stroke="var(--color-temperature)"
              strokeWidth={2}
              dot={{ fill: "var(--color-temperature)" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
