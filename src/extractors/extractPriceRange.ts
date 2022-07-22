import { extractPriceLabel } from "../utils/extractPriceLabel"
import { Entity } from "../types"

export const extractPriceRange = (entity: Entity) => {
  const { field, value } = entity

  if (value && value !== "*-*") {
    return {
      field,
      value,
      displayValue: extractPriceLabel(value),
    }
  }

  return null
}
