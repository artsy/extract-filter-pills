import { COLOR_OPTIONS } from "../constants"
import { extractFromOptions } from "./extractFromOptions"
import { Entity } from "../types"

export const extractColors = (entity: Entity) => {
  return extractFromOptions(entity, COLOR_OPTIONS)
}
