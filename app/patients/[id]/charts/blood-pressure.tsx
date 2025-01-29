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
  { date: "2025-01-28", systolic: 120, diastolic: 80 },
  { date: "2025-01-27", systolic: 125, diastolic: 82 },
  { date: "2025-01-26", systolic: 118, diastolic: 78 },
  { date: "2025-01-25", systolic: 122, diastolic: 79 },
  { date: "2025-01-24", systolic: 119, diastolic: 77 },
  { date: "2025-01-23", systolic: 121, diastolic: 81 },
  { date: "2025-01-22", systolic: 123, diastolic: 83 },
  { date: "2025-01-21", systolic: 117, diastolic: 76 },
  { date: "2025-01-20", systolic: 126, diastolic: 84 },
  { date: "2025-01-19", systolic: 124, diastolic: 79 },
]
  .slice(0, 6)
  .reverse()

const chartConfig = {
  systolic: {
    label: "Sistólica",
    color: "hsl(var(--chart-1))",
  },
  diastolic: {
    label: "Diastólica",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function BloodPressureChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Presión Arterial</CardTitle>
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
              tickFormatter={(value) => value}
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
              dataKey="systolic"
              type="natural"
              stroke="var(--color-systolic)"
              strokeWidth={2}
              dot={{ fill: "var(--color-systolic)" }}
              activeDot={{ r: 6 }}
            />
            <Line
              dataKey="diastolic"
              type="natural"
              stroke="var(--color-diastolic)"
              strokeWidth={2}
              dot={{ fill: "var(--color-diastolic)" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
