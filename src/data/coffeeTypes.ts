export type CoffeeTypeId = 'espresso' | 'flat-white' | 'raf' | 'americano' | 'matcha'

export type CoffeeType = {
  id: CoffeeTypeId
  name: string
  emoji: string
  headline: string
  description: string
  recommendation: string
}

export const coffeeTypes: Record<CoffeeTypeId, CoffeeType> = {
  espresso: {
    id: 'espresso',
    name: 'Эспрессо',
    emoji: '⚡',
    headline: 'Ты — Эспрессо!',
    description:
      'Энергичный прагматик. Ты не тратишь время на прелюдии: увидел цель — взял её. Люди рядом либо заряжаются твоим темпом, либо просто держатся за поручни.',
    recommendation:
      'Твоя рекомендация: наш двойной эспрессо и десерт «на вынос» — у тебя большие планы.',
  },
  'flat-white': {
    id: 'flat-white',
    name: 'Флэт Уайт',
    emoji: '🎨',
    headline: 'Ты — Флэт Уайт!',
    description:
      'Сдержанный эстет. Ты замечаешь детали, которые другие пропускают: баланс, текстуру, настроение. Не кричишь о себе, но без тебя всё кажется недоделанным.',
    recommendation:
      'Твоя рекомендация: флэт уайт у окна — идеальный баланс, как и ты.',
  },
  raf: {
    id: 'raf',
    name: 'Раф',
    emoji: '🤗',
    headline: 'Ты — Раф!',
    description:
      'Домашний уют. Вокруг тебя людям тепло и спокойно. Ты умеешь превращать обычный вторник в маленький праздник — без лишнего шума.',
    recommendation:
      'Твоя рекомендация: раф на карамели и место у окна с пледом.',
  },
  americano: {
    id: 'americano',
    name: 'Американо',
    emoji: '🧭',
    headline: 'Ты — Американо!',
    description:
      'Минималист. Лишнее тебе не нужно: главное — суть. Ты уважаешь ясность и честность, а вода — это не разбавление, а свобода выбора.',
    recommendation: 'Твоя рекомендация: американо без сахара — чистый вкус без компромиссов.',
  },
  matcha: {
    id: 'matcha',
    name: 'Матча-латте',
    emoji: '🌿',
    headline: 'Ты — Матча-латте!',
    description:
      'Спокойный исследователь. Ты открыт новому и любишь пробовать то, чего не пробовал никто. Осознанность — не тренд для тебя, а образ жизни.',
    recommendation: 'Твоя рекомендация: матча-латте на овсяном и новое в меню — что бы это ни было.',
  },
}
