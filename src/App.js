import React from 'react'
import Navbar from './Components.js/Navbar'
import Header from './Containers/Header'
import Brand from './Components.js/Brand'
import WhatGPT3 from './Containers/WhatGPT3'
import Possibility from './Containers/Possibility'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Blog from './Containers/Blog'
import Feature from './Components.js/Feature'
import Login from './Components.js/Login'
import Footer from './Containers/Footer'
const App = () => {
  return (
    <div>
    <Router>
    <Navbar/>
    <Header/>
    <Brand/>
    <Routes> 
     <Route path='/whatGPT3' element={<WhatGPT3/>}/>
    <Route path='/possibility' element={<Possibility/>}/>
     <Route path='/blog' element={<Blog/>}/>
     <Route path='/feature' element={<Feature/>}/>
     <Route path='/login' element={<Login/>}/>
    </Routes><br/><br/>
    <Footer/>
    </Router>
    </div>
  )
}

export default App