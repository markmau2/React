import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Map from './Mapview.jsx'
import Report from './Reportview.jsx'  
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Map />
    <Report />
    
  </React.StrictMode>
)
