import type { QuizQuestion } from '../data/questions'

type QuestionCardProps = {
  question: QuizQuestion
  questionNumber: number
  totalQuestions: number
  onAnswer: (optionIndex: number) => void
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}: QuestionCardProps) {
  return (
    <section className="question">
      <p className="question__progress">
        Вопрос {questionNumber} из {totalQuestions}
      </p>
      <h2 className="question__title">{question.question}</h2>
      <div className="question__options">
        {question.options.map((option, index) => (
          <button
            key={option.text}
            type="button"
            className="option"
            onClick={() => onAnswer(index)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </section>
  )
}
