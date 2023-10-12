import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react"
import background from '/public/maps.jpg'
import './Mapview.css'

function Mapview() {
  const [count, setCount] = useState(0)

  return (
    <>
    
 <div style={{ backgroundImage: `url(${background})`,backgroundRepeat:'no repeat',width:'1000px',height:'800px'}}>
 <div style={{ textAlign: "center" }}>
    
    <h1 style= {{color: "red"}}> 
    Map View</h1> 


      <a style= {{color: "red"}} Text style={{backgroundColor: 'black'}}>
        Zip code
      </a>
      
      <input type="text" value="xxxxx"/> 
      
      <p>
       </p>
     
       <p>
       </p>
       
      
        <button type="button">Serach</button>{}
        {}<button type="button">Clear</button>
         <p>
       </p>

        <img width="800" src="/public/FIRE MAP.JPG" Style="border: 5px inset black;"/> 
    

</div>
       
      </div>
      
    </>
  )
}

export default Mapview