import { format } from "date-fns"

export function LabelAndValue({
  label,
  value,
}: {
  label: string
  value: Date | string | number
}) {
  const displayValue =
    value instanceof Date ? format(value, "yyyy-MM-dd") : value

  return (
    <div className="w-full flex justify-between">
      <span className="text-gray-400">{label}</span>
      <span className="font-medium">{displayValue}</span>
    </div>
  )
}
