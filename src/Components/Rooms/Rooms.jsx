import React,{ useState, useEffect } from 'react'
import { rooms_data } from '../../DataConfigFile'
import './Rooms.css'
import {Link} from 'react-router-dom';
import Loader from '../Loader/Loader';

export default function Rooms() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timer to change isLoading to false after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
        // Cleanup the timer if the component unmounts before the timer completes
        return () => clearTimeout(timer);
      }, []); // The empty dependency array ensures that this effect runs only once on mount
      // <> 
      //  {isLoading ? (
      //   <Loader />
      // ) : 
  return (
    
      <>
        <div id ="rooms"></div>
        <h2 className='alignCentre mt-4'>Book Rooms</h2>
        <div className="row p-4">
          {
              rooms_data.map((items, keys)=>{
                  return(
                      <div className=" col-lg-4 p-2">
                            <img className="card-img height_img mt-3" src={items.img_url} />
                            <div className="alignCentre mt-2 description">{items.type_of_room}     </div>
                            {/* <h5 className="">Price - {items.price}/-</h5> */}
                            <div className="btnCentre">
                            <p className='description'>{items.tag_line}<br></br>{items.tag_line2}</p>
                            
                            <Link className="btn background_clr "
                            to={{ 
                              pathname: '/roomdetails', 
                              search: `?type_of_room=${items.type_of_room}` 
                          }}
                            >Book Now</Link>
                            </div>
                      </div> 
                  )
              })
          }
       
        </div>
      </>
    
  )
}

{/* }
         
         </> */}