import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Game from './components/pages/game/game'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Game/>
    </div>
  )
}