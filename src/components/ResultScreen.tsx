import type { CoffeeType } from '../data/coffeeTypes'

type ResultScreenProps = {
  coffeeType: CoffeeType
  onRestart: () => void
}

export default function ResultScreen({ coffeeType, onRestart }: ResultScreenProps) {
  return (
    <section className="result">
      <span className="result__emoji" aria-hidden>
        {coffeeType.emoji}
      </span>
      <h2 className="result__headline">{coffeeType.headline}</h2>
      <p className="result__description">{coffeeType.description}</p>
      <div className="result__recommendation">
        <p className="result__recommendation-label">Напиток для тебя</p>
        <p className="result__recommendation-text">{coffeeType.recommendation}</p>
      </div>
      <button type="button" className="button button--primary" onClick={onRestart}>
        Пройти ещё раз
      </button>
    </section>
  )
}
