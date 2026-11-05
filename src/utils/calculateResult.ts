import { coffeeTypes } from '../data/coffeeTypes'
import type { CoffeeTypeId } from '../data/coffeeTypes'

export function calculateResult(answers: CoffeeTypeId[]): CoffeeTypeId {
  const scores = new Map<CoffeeTypeId, number>()
  for (const id of Object.keys(coffeeTypes) as CoffeeTypeId[]) {
    scores.set(id, 0)
  }
  for (const answer of answers) {
    scores.set(answer, (scores.get(answer) ?? 0) + 1)
  }

  let best: CoffeeTypeId = 'americano'
  let bestScore = -1
  for (const [id, score] of scores) {
    if (score > bestScore) {
      best = id
      bestScore = score
    }
  }
  return best
}
