import { useState } from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import QuestionCard from './components/QuestionCard'
import ResultScreen from './components/ResultScreen'
import { questions } from './data/questions'
import { coffeeTypes } from './data/coffeeTypes'
import type { CoffeeTypeId } from './data/coffeeTypes'
import { calculateResult } from './utils/calculateResult'

type Screen = 'welcome' | 'quiz' | 'result'

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<CoffeeTypeId[]>([])

  function startQuiz() {
    setCurrentQuestion(0)
    setAnswers([])
    setScreen('quiz')
  }

  function handleAnswer(optionIndex: number) {
    const option = questions[currentQuestion].options[optionIndex]
    setAnswers((prev) => [...prev, option.coffee])
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setScreen('result')
    }
  }

  const resultType = coffeeTypes[calculateResult(answers)]

  return (
    <main className="app">
      {screen === 'welcome' && <WelcomeScreen onStart={startQuiz} />}
      {screen === 'quiz' && (
        <QuestionCard
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      )}
      {screen === 'result' && <ResultScreen coffeeType={resultType} />}
    </main>
  )
}
