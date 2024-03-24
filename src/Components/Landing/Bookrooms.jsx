import React from 'react'
import "./Landing.css";
import { Link } from 'react-router-dom';
import { LandingpageData } from '../../DataConfigFile';

export default function Bookrooms() {
  return (
    <>
    <h2 className='alignCentre mt-4'>Rooms</h2>
    <br></br>
    <div className="row">
    <div className="col-lg-6 ">
        <h3>Rooms & Services</h3>
        <br></br>
        <div className="description">
        {LandingpageData.room_section_data1}
        <br></br>
        <br></br>
        {LandingpageData.room_section_data2}
        <br></br>
        <br></br>
        {/* <div className="col-lg-10 col-sm-12 description">
      {LandingpageData.room_section_data3}
        <br></br>
        <br></br>
        {LandingpageData.room_section_data4}
        <br></br>
        <br></br>
        </div> */}
        <Link to='/rooms' className='btn background_clr '>Book Rooms</Link>
       
      </div>
      <br></br>
   <br></br>
      </div>
     
     <img src={LandingpageData.room_section_img} className="col-lg-5 img-control m-1" />
    </div>
     
    </>

  )
}
