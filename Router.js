import Home from "../Components/Home";
import Contact from "../Components/Contact";
import User from "../Components/User";
import Navbar from "../Components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from 'react'

function Router() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path="/user" element ={<User/>}/>
            <Route path="/contact" element ={<Contact/>}/>
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default Router
