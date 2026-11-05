import { useState } from 'react'
import WelcomeScreen from './components/WelcomeScreen'

type Screen = 'welcome' | 'quiz' | 'result'

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome')

  return (
    <main className="app">
      {screen === 'welcome' && <WelcomeScreen onStart={() => setScreen('quiz')} />}
    </main>
  )
}
