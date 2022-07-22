import { ATTRIBUTION_OPTIONS } from "../constants"
import { extractFromOptions } from "./extractFromOptions"
import { Entity } from "../types"

export const extractAttributions = (entity: Entity) => {
  return extractFromOptions(entity, ATTRIBUTION_OPTIONS)
}
