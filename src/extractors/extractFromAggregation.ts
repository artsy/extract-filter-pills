import { Entity } from "../types"
import { getAggregationItems } from "../utils/getAggregationItems"

export const extractFromAggregation = (entity: Entity) => {
  const aggregationByValue = getAggregationItems(entity.payload?.aggregation!)
  const pills = (entity.value as string[]).map((value) => {
    if (aggregationByValue[value]) {
      return {
        value,
        displayValue: aggregationByValue[value].name,
        field: entity.field,
      }
    }

    if (entity.payload?.options) {
      const option = entity.payload.options.find((v) => v.value === value)

      if (option) {
        return {
          value,
          displayValue: option.displayName,
          field: entity.field,
        }
      }
    }

    return null
  })

  return pills
}
