import { Numeric } from "../types"

/**
 * Accepts a string in the form: `"*-*"` | `"*-1"` | `"1-*"`| `"1-2"`
 * and returns a `Range`
 */
export const parseRange = (range: string): Numeric[] => {
  return range.split("-").map(s => {
    if (s === "*") {
      return s
    }

    return parseFloat(s)
  })
}