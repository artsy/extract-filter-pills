import { Entity, OptionItem } from "../types"

export const extractFromOptions = (entity: Entity, options: OptionItem[]) => {
  return (entity.value as string[]).map((value) => {
    const option = options.find((sizeOption) => sizeOption.value === value)

    if (option) {
      return {
        field: entity.field,
        value,
        displayValue: option.displayName,
      }
    }

    return null
  })
}
