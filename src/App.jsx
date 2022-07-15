import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Country from './component/Country'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Country/>
    </div>
  )
}

export default App
