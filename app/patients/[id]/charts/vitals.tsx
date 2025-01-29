import { BloodPressureChart } from "./blood-pressure"
import { BodyTemperatureChart } from "./body-temperature"
import { HeartRateChart } from "./heart-rate"
import { HeightChart } from "./height"
import { WeightChart } from "./weight"

export function Vitals() {
  return (
    <section className="grid grid-cols-2 gap-4">
      <HeartRateChart />
      <BodyTemperatureChart />
      <WeightChart />
      <HeightChart />
      <BloodPressureChart />
    </section>
  )
}
