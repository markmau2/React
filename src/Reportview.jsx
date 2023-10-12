import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, { useMemo} from 'react'
import background from '/public/maps.jpg'
import BasicTable from './Components/BasicTable'
import './Reportview.css'

function Report() {
 const [count, setCount] = useState(0)
  
return (
     <>
    
 <div style={{ backgroundImage: `url(${background})`,backgroundRepeat:'no repeat',width:'1000px',height:'800px'}}>
 
 
    
 <div style={{ textAlign: "center" }}>
    
    <h1 style= {{color: "red"}}> 
    Report View
    </h1>     
    <div>
        <BasicTable/>
        </div>
    </div>
        </div>
    </>
  )
}

export default Report
