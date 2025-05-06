import { useState } from 'react'
import './App.css'
import {ExerciseTracker} from "./exercise-tracker.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ExerciseTracker />
    </>
  )
}

export default App
