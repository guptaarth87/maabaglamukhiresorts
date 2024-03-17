import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Rooms from '../Components/Rooms/Rooms'
import Footer2 from '../Components/Footer/Footer2'

export default function BookRoompage() {
  return (
   <>
   <Navbar/>
   <div className="container">
    <Rooms/>
   </div>
   <Footer2/>
   </>
  )
}
