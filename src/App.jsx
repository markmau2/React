import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react"
import background from '/public/forest2.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{ backgroundImage: `url(${background})`,backgroundRepeat:'no repeat',width:'1000px',height:'800px'}}>
     <div style={{ textAlign: "center" }}>
     .
     <h1>        
                               </h1> 
    
    <h1>        
    Welcom to Fire Managing</h1> 
      <a className="read-the-docs">

        User name: 
      </a>
      
      <input type="text" value="User"/> 
      
      <p>
       </p>
        <a className="read-the-docs">
        Password: 
       </a>
       <input type="text" value="Pass"/> 
        <p>
       </p>
      
        <button type="button">Log in</button>{}
        {}<button type="button">Sign in</button>
        </div>
        </div>
      </>
  )
}

export default App
