import React from 'react'
import {HashLink as HLink } from 'react-router-hash-link';
import {Link } from 'react-router-dom';
// import Logo   from '../../assets/Logo.png';
import { useEffect , useState} from 'react';
import './Navbar.css';
import MenuButton from './MenuButton';
// import { cardData } from '../../_helpers/DataConfig';
import { BasicInfo } from '../../DataConfigFile';
export default function Navbar() {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
      ]);
      
      useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize([window.innerWidth, window.innerHeight]);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      });
     
      const width = windowSize[0]  ;
      function check(){
           if(width <1125){
              return true
           }else{
              return false
           }
      }
    
      return (
        <> 
           <div className = "navbar_custom flex "> 
              <div className = "navcontent p-2 "> 
    
    {
     check()?
     <div>
        <HLink to='/'><img  src={BasicInfo.logo}  className= "alignLeft Logo"/>  </HLink>
        <MenuButton className=" botton_pos marginAlign"/> 
        
        {/* <button onClick={()=>navigate('/Signup')} className="alignRight btn botton botton_pos marginAlign">Join network</button> */}
       
     </div>:<div>
              <HLink to='/'><img  src={BasicInfo.logo}  className= " alignLeft Logo"/></HLink>
              <HLink className="nav_link link5" to='/' >Home</HLink>
              <HLink className="nav_link link4" to='/about'>About Us</HLink>
              <HLink className="nav_link link1" to='/rooms'>Book Rooms</HLink>
              <HLink className="nav_link link2" to='/gallery'>Gallery</HLink>
              <HLink className="nav_link link3" to='/contactus'>Contact Us</HLink>              
              
                           
     </div>
    }
    </div>
     </div>
</>
)
}
