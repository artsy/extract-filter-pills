import { Aggregation, AggregationCount } from "./types"

export const getAggregationItems = (aggregation: Aggregation) => {
  const result: Record<string, AggregationCount> = {}

  aggregation.counts.forEach(entity => {
    result[entity.value] = entity
  })

  return result
}
