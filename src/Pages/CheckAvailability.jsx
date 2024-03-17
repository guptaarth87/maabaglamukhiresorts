import React from 'react'
import Check from '../Components/CheckAvailability/Check'
import Note from '../Components/RoomDetails/Note'
import Footer2 from '../Components/Footer/Footer2'
import Header from '../Components/Navbar/Header'
import Navbar from '../Components/Navbar/Navbar'

export default function CheckAvailability() {
  
  return (
   <>
   <Navbar/>
       <Check/>
       <Note/>
       <Footer2/>
      
   </>
  )
}
