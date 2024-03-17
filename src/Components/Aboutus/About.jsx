import React from 'react'
import img1 from '../../Assets/about/1.jpg';
import {Link} from 'react-router-dom';
import { Aboutus } from '../../DataConfigFile';
import { BasicInfo } from '../../DataConfigFile';

import './About.css';

export default function About() {
  return (
    <>
     <div className="row mt-5">
     <div className="col-lg-6">
        <h3 >People At The Heart Of Our Business</h3>
        <br></br>
        <div className="description">
       {Aboutus.div1_content}
       <br></br>
      <br></br>
      {Aboutus.div2_content}
      </div>
      </div>
     <img src={img1} className="img-control-about col-lg-5" />
     </div>
     <br></br>
     <br></br>
     <div className="row">
      <div className="col-lg-12 col-sm-12 description">
        {Aboutus.div3_content}
        <br></br>
        {/* For reservations or inquiries, please contact us at {BasicInfo.phone_no}*/}
        {Aboutus.div4_content}
      </div>
     </div>
     <br></br>
     <Link to='/contactus' className="btn background_clr">Contact Us</Link>
     <br></br>
     <br></br>
     <div className="row ">
     <img  className="col-lg-7 border-radius m-2 galary-img-height" src={Aboutus.img1} />
     <div className="col-lg-4 ">
        <div className="row">
        <img  className="col-lg-12 border-radius m-2 galary-img2-height" src={Aboutus.img2} />
        </div>
        <div className="row">
        <img  className="col-lg-12 border-radius m-2 galary-img2-height" src={Aboutus.img3} />
        </div>
     </div>
    </div>
    
    </>
  )
}
