import { WAYS_TO_BUY_OPTIONS } from "../constants"
import { Entity, Pill } from "../types"
import { extractFromAggregation } from "./extractFromAggregation"
import { extractWaysToBuy } from "./extractWaysToBuy"
import { extractCustomSize } from "./extractCustomSize"
import { extractSizes } from "./extractSizes"
import { extractColors } from "./extractColors"
import { extractAttributions } from "./extractAttributions"
import { extractMajorPeriods } from "./extractMajorPeriods"
import { extractPriceRange } from "./extractPriceRange"

export const extractPillsFromEntities = (entities: Entity[]) => {
  const pills: (Pill | null)[] = []

  entities.forEach((entity) => {
    const { field, payload } = entity
    const waysToBuyKeys = WAYS_TO_BUY_OPTIONS.map((option) => option.value)

    if (payload?.aggregation) {
      const extractedPills = extractFromAggregation(entity)
      pills.push(...extractedPills)
    }

    if (waysToBuyKeys.includes(field)) {
      pills.push(extractWaysToBuy(entity))
    }

    if (field === "width" || field === "height") {
      pills.push(extractCustomSize(entity))
    }

    if (field === "sizes") {
      pills.push(...extractSizes(entity))
    }

    if (field === "colors") {
      pills.push(...extractColors(entity))
    }

    if (field === "attributionClass") {
      pills.push(...extractAttributions(entity))
    }

    if (field === "majorPeriods") {
      pills.push(...extractMajorPeriods(entity))
    }

    if (field === "priceRange") {
      pills.push(extractPriceRange(entity))
    }
  })

  return pills.filter((pill) => pill !== null)
}
