import React from 'react'
import Check from '../Components/CheckAvailability/Check'
import Note from '../Components/RoomDetails/Note'
import Footer2 from '../Components/Footer/Footer2'
import Header from '../Components/Navbar/Header'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

export default function CheckAvailability() {
  
  return (
   <>
   <Navbar/>
     <div className='margin-top-all-pages'></div>
       <Check/>
       <Note/>
       <Footer/>
      
   </>
  )
}
