import { Metric } from "../types"
import { localizeDimension } from "./localizeDimension"
import { parseRange } from "./parseRange"

export const extractCustomSizeLabel = ({
  prefix,
  value,
  metric,
}: {
  prefix: string
  value: string
  metric: Metric
}) => {
  const range = parseRange(value)
  const min = localizeDimension(range[0], metric)
  const max = localizeDimension(range[1], metric)
  let label

  if (max === "*") {
    label = `from ${min}`
  } else if (min === "*") {
    label = `to ${max}`
  } else {
    label = `${min}-${max}`
  }

  return `${prefix}: ${label} ${metric.toLowerCase()}`
}
