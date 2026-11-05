type WelcomeScreenProps = {
  onStart: () => void
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <section className="welcome">
      <span className="welcome__steam" aria-hidden>
        ☕
      </span>
      <h1 className="welcome__title">Какая ты кофейня?</h1>
      <p className="welcome__subtitle">
        7 вопросов — и ты узнаешь, какому напитку из нашего меню подходишь:
        от дерзкого эспрессо до уютного рафа.
      </p>
      <button type="button" className="button button--primary" onClick={onStart}>
        Начать
      </button>
      <p className="welcome__hint">Без регистрации. Пенку не снимаем.</p>
    </section>
  )
}
