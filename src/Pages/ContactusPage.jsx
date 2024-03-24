import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer2 from '../Components/Footer/Footer2'
import contact from './contact.svg';
import { BasicInfo } from '../DataConfigFile';
import Footer from '../Components/Footer/Footer';

export default function ContactusPage() {
  return (
    <>
      <Navbar/>
      <div className="container margin-top-all-pages">
        <h2 className='alignCentre mt-4'>Get In Touch With Us</h2>
    <div className="row mt-4">
    <div className="col-lg-7">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2514128333037!2d74.54053047511263!3d22.904095879256985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3961147f09d36c0b%3A0x78661a460eee5e06!2sHotel%20Amar%20Shanti!5e0!3m2!1sen!2sin!4v1699623167539!5m2!1sen!2sin"
        className='col-12' height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
                        
        <div className=" card col-lg-4 p-3 m-1 position_style_card">
             <div className='alignCentre heading'>Contact Us </div>
           <br></br>
           <img src={contact}  className='img_control_hidden col-lg-6 col-sm-2'/>
           <h5 className=''>Address</h5>
           <div className='description'>{BasicInfo.address}</div>
           <br></br>
           <h5 className=''>Phone No </h5>
           <div className='description'>{BasicInfo.phone_no}</div>
        </div>
      
       
    </div>
      </div>
      <Footer/>
      </>
  )
}
