import React from 'react';
import { Link } from 'react-router-dom';
import "./Landing.css"
import { LandingpageData } from '../../DataConfigFile';

export default function Gallery() {
  return (
    <>
      
    <br></br>
    <div className="row">
    <img src={LandingpageData.gallary_section_img} className="img-control col-lg-5" />
   
    <div className="col-lg-6 ">
    <br></br>
  
        <h3>Events & Images</h3>
        <br></br>
        <div className="description">
       {LandingpageData.gallary_section_data1}
       <br></br><br></br>
       {LandingpageData.gallary_section_data2}
        <br></br>
        <br></br>
        <div className="col-lg-10 col-sm-12 description">
      {LandingpageData.gallary_section_data3}
      <br></br>
      <br></br>
      </div>
      <Link to='/gallery' className='btn background_clr alignCenter'>Know More</Link>
    </div> 
      </div>
   
    </div>
    </>
  
  )
}
