import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

export default function Header() {
 
  
    const navigate = useNavigate();
  
    const handleGoBack = () => {
      navigate(-1);
    };
  
  return (
    <>
     <div className = "navbar_custom flex shadow_bottom">
     <div className = "navcontent ">
        {/* Logo */}
     </div>
     <button onClick={handleGoBack} className='btn background_clr m-2 button-back' >
      Go Back
    </button>
     </div>
    </>
  )
}
