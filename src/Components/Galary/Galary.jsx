import React from 'react'
import { GallaryImages } from '../../DataConfigFile';
import './Galary.css';

export default function Galary() {
  return (
    <>  
      <h2 className='alignCentre m-4 ' id="gallery">Gallery Section</h2>
    <div className="row ">
     <img  className="col-lg-7 border-radius m-2 galary-img-height" src={GallaryImages.img1} />
     <div className="col-lg-4 ">
        <div className="row">
        <img  className="col-lg-12 border-radius m-2 galary-img2-height" src={GallaryImages.img2} />
        </div>
        <div className="row">
        <img  className="col-lg-12 border-radius m-2 galary-img2-height" src={GallaryImages.img3} />
        </div>
     </div>
    </div>
    <div className="row">
    <img  className="col-lg-6 border-radius m-2 galary-img-height" src={GallaryImages.img4} />
    <img  className="col-lg-5 border-radius m-2 galary-img-height" src={GallaryImages.img5} />
    </div>
    </>

  )
}
