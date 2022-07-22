import { extractFromOptions } from "./extractFromOptions"
import { getPredefinedSizesByMetric } from "../utils/getPredefinedSizesByMetric"
import { Entity } from "../types"

export const extractSizes = (entity: Entity) => {
  const SIZE_OPTIONS = getPredefinedSizesByMetric(entity.payload!.metric!)
  return extractFromOptions(entity, SIZE_OPTIONS)
}
