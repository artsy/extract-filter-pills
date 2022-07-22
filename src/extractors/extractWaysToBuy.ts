import { WAYS_TO_BUY_OPTIONS } from "../constants"
import { Entity } from "../types"

export const extractWaysToBuy = (entity: Entity) => {
  const option = WAYS_TO_BUY_OPTIONS.find((option) => option.value === entity.field)

  if (entity.value && option) {
    return {
      field: entity.field,
      value: entity.field,
      displayValue: option.displayName,
    }
  }

  return null
}
