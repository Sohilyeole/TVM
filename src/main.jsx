import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Front from './Front.jsx'
import { BrowserRouter } from "react-router-dom";

import { Route } from "react-router-dom";
import{Routes} from "react-router-dom";
import Online from "./Online.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Front/>}></Route>
        <Route path="/cash" element={<App/>}></Route>
        <Route path="/online" element={<Online/>}></Route>
        
    </Routes>
    </BrowserRouter>
    
   
  </React.StrictMode>
)
