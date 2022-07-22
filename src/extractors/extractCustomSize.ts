import { Entity } from "../types"
import { extractCustomSizeLabel } from "../utils/extractCustomSizeLabel"

export const extractCustomSize = (entity: Entity) => {
  const { field, value, payload } = entity

  if (value && value !== "*-*") {
    const displayValue = extractCustomSizeLabel({
      prefix: entity.field[0],
      value: entity.value,
      metric: payload!.metric!,
    })

    return {
      field,
      value,
      displayValue,
    }
  }

  return null
}
