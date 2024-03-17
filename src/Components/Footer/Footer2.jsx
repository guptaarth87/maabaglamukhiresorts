import React from 'react'
import './Footer.css';
import { BasicInfo } from '../../DataConfigFile';

export default function Footer2() {
  return (
    <>
     <div id = "contactus" className=" wrapbox w-100 py-2 flex-shrink-0">
     
     
     <div className="footercomponent ">
    
         <div className="row gy-3 gx-5">
             <div className="col-lg-4 col-md-6">
                <h5 className="h1 white">Hotel</h5>
                 <h5 className="h1 white">{BasicInfo.name}</h5>
                 <p className="small white subhead">Best room , Staff Services and food services!</p>
                 <p className="small white mb-0">&copy; Copyrights. All rights reserved. Hotel Amar Shanti</p>
             </div>
             <div className="subdiv col-lg-7">
             <div className="row">
            
             
             <div className="col-lg-4 col-md-6 ">
                 <h5 className="mb-3 white">Get In Contact With Us</h5>
                 <ul className="list-unstyled text-muted">
                 <li className='white'> {BasicInfo.address}</li>
                 
                 </ul>
             </div>
            <div className="col-lg-5 col-md-6 ">
                 <h5 className="mb-3 white"></h5>
                 <br></br>
                 <ul className="list-unstyled text-muted">
                   <li className='white'>Phone No : {BasicInfo.phone_no}</li>
                     <li className='white'>Email : {BasicInfo.email}</li>
                    
                     
                 </ul>
             </div>
             {/*  <div className="col-lg-4 col-md-6 ">
                 <h5 className="mb-3 white">Contact info</h5>
                 <ul className="list-unstyled text-muted">
                 <li className='white'>Address : {BasicInfo.address}</li>
                     <li className='white'>Phone No : {BasicInfo.phone_no}</li>
                     
                     
                 </ul>
             </div> */}
            
             </div>
          </div>
         </div>
        
     </div>
    
      
     
 </div>
    </>
  )
}
