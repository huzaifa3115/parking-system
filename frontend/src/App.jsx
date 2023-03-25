import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Parking System</h1>
      <>
        <Login />
      </>
    </div>
  )
}

export default App
