import React,{useEffect} from 'react'
import About from '../Components/Aboutus/About'
import Footer2 from '../Components/Footer/Footer2'
import Header from '../Components/Navbar/Header'
import { useNavigate} from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

export default function AboutUs() {
  // const navigate = useNavigate()
  // useEffect(()=>{
  //     navigate("/about/#aboutus");
  // })
  return (
    <>
    <Navbar/>
    <h2 className='alignCentre mt-4 margin-top-all-pages' id="aboutus">About Us</h2>
     <h2 className='alignCentre mt-1' id="aboutus">Where Hospitality Meets Comforts</h2>
     <div className="container">
     <About/>
     </div>
   <Footer2/>
    </>
  )
}
