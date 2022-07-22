import { Metric, Numeric } from "../types"
import { inToCm } from "./inToCm"

/**
 * Accepts a value and it's input unit type and returns a localized conversion (or leaves it alone)
 */
export const localizeDimension = (value: Numeric, unit: Metric) => {
  if (unit === "cm") {
    return inToCm(value)
  }

  return value
}
