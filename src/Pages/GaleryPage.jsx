import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Galary from '../Components/Galary/Galary';
import Footer2 from '../Components/Footer/Footer2'

export default function GaleryPage() {
  return (
    <>
    <Navbar/>
    <div className="container">
     <Galary/>
    </div>
    <Footer2/>
    </>
  )
}
