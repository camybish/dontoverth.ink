import { useState } from 'react'
import loel_image from './assets/dontoverthink_picture.jpg';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>DONT OVERTH.INK</h1>
      {/* <img className='logo' src={instagramLogo}/> */}
      <div id='bodyContent'>
      <a href='https://www.instagram.com/loelfolio/'>@loelfolio</a><br/>
      <img className='image' src={loel_image} />
      <img className='image' src={loel_image} />
      <img className='image' src={loel_image} />
      <img className='image' src={loel_image} />

      </div>
    </div>
  )
}

export default App
