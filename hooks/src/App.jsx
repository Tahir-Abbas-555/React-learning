import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let value = 0
  const [Counter, setcounter] = useState(0)
  const addvalue = ()=> {
    if (Counter<100){
      setcounter(Counter+1)
    }
  }
  const removevalue = ()=> {
    if (Counter>0){
    setcounter(Counter-1)
    }
  }
  return (
    <>
      <h1>Tahir Abbas Hooks learning</h1>
      <h2>Counter: {Counter}</h2>
      <button onClick={addvalue}>Add</button>
      <br />
      <br />
      <button onClick={removevalue}>Remove</button>
    </>
  )
}

export default App
