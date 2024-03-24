import React from 'react'
import BookRoom from '../Components/BookRoom/BookRoom'
import Footer2 from '../Components/Footer/Footer2'
import Note from '../Components/RoomDetails/Note'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'


export default function BookPage() {
  return (
    <>
    <Navbar/>
    <h2 className='alignCentre mt-4 margin-top-all-pages'>Rooms Available</h2><br></br><br></br>
   
     <BookRoom/>
     <Note/>
     <Footer/>
    </>
  )
}
