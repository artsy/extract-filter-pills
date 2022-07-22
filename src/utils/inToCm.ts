import { ONE_IN_TO_CM } from "../constants"
import { Numeric } from "../types"

export const inToCm = (inches: Numeric) => {
  if (inches === "*") {
    return inches
  }

  return Math.round(inches * ONE_IN_TO_CM)
}