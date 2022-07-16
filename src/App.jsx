import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Country from './component/Country'

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsVisible(!isVisible)}>Show/hidde</button>
      {isVisible && <Country />}
    </div>
  )
}

export default App
