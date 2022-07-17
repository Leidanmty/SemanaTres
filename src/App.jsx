import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
//import Country from './component/Country'
import Quotes from './component/Quotes'
import PokeApi from './component/PokeApi'

function App() {
  //const [isVisible, setIsVisible] = useState(false);
  //<button onClick={() => setIsVisible(!isVisible)}>Show/hidde</button>
  //<Quotes />

  return (
    <div className="App">
      {/*isVisible && <Country />*/}
      <PokeApi />
    </div>
  )
}

export default App
