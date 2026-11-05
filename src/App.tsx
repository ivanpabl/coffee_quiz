import { useState } from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import QuestionCard from './components/QuestionCard'
import { questions } from './data/questions'

type Screen = 'welcome' | 'quiz' | 'result'

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome')
  const [currentQuestion, setCurrentQuestion] = useState(0)

  function startQuiz() {
    setCurrentQuestion(0)
    setScreen('quiz')
  }

  function handleAnswer() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setScreen('result')
    }
  }

  return (
    <main className="app">
      {screen === 'welcome' && <WelcomeScreen onStart={startQuiz} />}
      {screen === 'quiz' && (
        <QuestionCard
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          onAnswer={() => handleAnswer()}
        />
      )}
    </main>
  )
}
