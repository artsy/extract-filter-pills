import { Entity } from "../types"

export const extractMajorPeriods = (entity: Entity) => {
  return (entity.value as string[]).map((value) => ({
    field: entity.field,
    value,
    displayValue: isNaN(value as unknown as number) ? value : `${value}s`,
  }))
}
