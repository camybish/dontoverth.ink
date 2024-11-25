import { useState } from 'react'
import instagramLogo from './assets/Instagram_logo_2022.svg.webp';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>DONT OVERTH.INK</h1>
      {/* <img className='logo' src={instagramLogo}/> */}
      <div id='bodyContent'>
      <h2>INSTAGRAM:</h2>
      <a href='https://www.instagram.com/loelfolio/'>@loelfolio</a>
      </div>
    </div>
  )
}

export default App
