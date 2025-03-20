import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

import { useState } from 'react'
import Login from '../firebase/Login'
import SignupPage from '../firebase/SignupPage'
import About from '../About/About'
import BookingForm from '../navbar/Table/BookingForm'
import Service from '../service/Service'
import Menu from '../menu/Menu'



const AppRouter=()=>{
  
    return(
       <div>
       
<Routes>
  
   
<Route path='/' element={<Navbar/>}></Route>
 <Route path='/login' element={<Login/>}></Route>

 <Route path='/signup' element={<SignupPage/>}></Route>
 <Route path='/about' element={<About/>}></Route>
 <Route path='/booking' element={<BookingForm/>}></Route>
 <Route path='/service' element={<Service/>}></Route>
<Route path='menu' element={<Menu/>}></Route>


  
   
    
    </Routes>
   
    </div>
    )
}
export default AppRouter