import React from 'react'
// import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 
 <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)


