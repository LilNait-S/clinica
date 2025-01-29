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
  { date: "2025-01-28", height: 175 },
  { date: "2025-01-27", height: 175.2 },
  { date: "2025-01-26", height: 175 },
  { date: "2025-01-25", height: 174.8 },
  { date: "2025-01-24", height: 175.1 },
  { date: "2025-01-23", height: 175.3 },
  { date: "2025-01-22", height: 175.5 },
  { date: "2025-01-21", height: 174.9 },
  { date: "2025-01-20", height: 175.6 },
  { date: "2025-01-19", height: 175.4 },
].slice(0, 10)

const chartConfig = {
  height: {
    label: "Altura Corporal",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function HeightChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Altura Corporal</CardTitle>
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
              tickFormatter={(value) => `${value} cm`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="height"
              type="natural"
              stroke="var(--color-height)"
              strokeWidth={2}
              dot={{ fill: "var(--color-height)" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
