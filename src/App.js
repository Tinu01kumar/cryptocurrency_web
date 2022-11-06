import React from 'react'
import Header from "./components/Header"
import Home from './components/Home'
import Coins from './components/Coins'
import Exchanges from './components/Exchanges'
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"

import CoinDetails from './components/CoinDetails'

import About from "./components/About"
const App = () => {
  return (
   <Router>
  
  

 
      <Routes>
    
        <Route exact path="/" element={<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
        <Route path="coins/coin/:id" element={<CoinDetails/>}/>
        <Route path="/about" element ={<About/>}/>
      
      
      </Routes>
   </Router>
  )
}

export default App