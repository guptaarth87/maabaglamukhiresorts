import React from 'react'
import './Landing.css'
import Wave from '../../Assets/landing/wave-2.png'

import HomeNavbar from './HomeNavbar'
import { BasicInfo } from '../../DataConfigFile'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
     <>
         <div className='hero-bg position-relative'>

          <HomeNavbar></HomeNavbar>


          {/* hero section contents starts */}
          <div className="container hero-text-div px-4">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="hero-text">
                  <h2 className="hero-heading text-light text-center text-sm-start ">Welcome to <span className="hero-heading-color">{BasicInfo.name}</span></h2>
                  <p className="hero-para text-light text-center text-sm-start">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit incidunt provident nostrum ratione. Dolor, omnis. Obcaecati unde quaerat minima dignissimos ad ab, cumque animi! </p>
                  {/* <Link to='/rooms' className=' background_clr '>Book Rooms</Link> */}


                </div>
                

              </div>

            </div>


          </div>



           {/* hero section contents ends */}

         <img className="position-absolute home-hero-wave" src={Wave} alt="" />

         </div>
     </>
  )
}

export default Hero