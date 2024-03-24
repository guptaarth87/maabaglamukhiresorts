import React , {useState} from 'react'
import { useLocation } from "react-router-dom";
import { rooms_data } from '../../DataConfigFile';
import './RoomDetails.css'
import {Link} from 'react-router-dom';
import Note from './Note';
import Footer2 from '../Footer/Footer2';
import Navbar from '../Navbar/Navbar';

export default function RoomDetails() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const dataValue = searchParams.get('type_of_room');

    const filteredObjects = rooms_data.filter(obj => obj.type_of_room === dataValue);
    const images = filteredObjects[0].images;
    const description = filteredObjects[0].description;
    console.log(images)

    
        const [currentImageIndex, setCurrentImageIndex] = useState(0);
      
        const goToNextSlide = () => {
          const newIndex = (currentImageIndex + 1) % images.length;
          setCurrentImageIndex(newIndex);
        };
      
        const goToPreviousSlide = () => {
          const newIndex = (currentImageIndex - 1 + images.length) % images.length;
          setCurrentImageIndex(newIndex);
        };
  return (
    <>
    <Navbar/>
    <div className="container margin-top-all-pages">
    <h2 className='mt-4 alignCentre'>Details For {dataValue}</h2>
    <div className="row mt-4">
    
     <div className="carousel-container col-lg-7">
      <div className="carousel-wrapper">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="carousel-image"
        />
        <button className="carousel-button" onClick={goToPreviousSlide}  style={{ left: 0 }}>
          Previous
        </button>
        <button className="carousel-button" onClick={goToNextSlide} style={{ right: 0 }}>
          Next
        </button>
      </div>
    </div>

    <div className="col-lg-4 mt-2">
          <p className='description ss'>{filteredObjects[0].description}</p>
          <br></br>
           <h3>Facilities</h3>
          <div className="description">{filteredObjects[0].tag_line}<br></br>{filteredObjects[0].tag_line2}</div>
          <br></br>
          
          <h5>Price - &#8377;{filteredObjects[0].price} + 12% gst</h5>
          <br></br>
        
          <Link className='btn background_clr'
          to={{ 
            pathname: '/checkavailability', 
            search: `?type_of_room=${dataValue}&price=${filteredObjects[0].price}` 
        }}
          >Book Now</Link>
         
  </div>
    </div>
      
    </div>
    <Note/>
    <Footer2/>
    </>
  )
}
