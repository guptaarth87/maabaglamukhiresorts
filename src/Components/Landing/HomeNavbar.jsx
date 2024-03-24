import React from 'react'
import { HashLink as HLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
// import Logo   from '../../assets/Logo.png';
import { useEffect, useState } from 'react';
import './HomeNavbar.css';
// import MenuButton from './MenuButton';
// import { cardData } from '../../_helpers/DataConfig';
import { BasicInfo } from '../../DataConfigFile';
import { RiMenuFoldLine } from "react-icons/ri";

import { IoCloseCircle } from "react-icons/io5";
import Logo from '../../Assets/logo-3.png'

import Offcanvas from 'react-bootstrap/Offcanvas';

export default function HomeNavbar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <div className={`navbar_custom flex ${isScrolled ? " bg-dark " : " "} `}>
        <div className="navcontent p-2 d-flex align-items-center justify-content-between">

          <HLink to='/'><img src={Logo} className=" alignLeft Logo" /></HLink>

          <div className='d-none d-lg-flex'>


            <HLink className="nav_link link5" to='/' >Home</HLink>
            <HLink className="nav_link link4" to='/about'>About Us</HLink>
            <HLink className="nav_link link1" to='/rooms'>Book Rooms</HLink>
            <HLink className="nav_link link2" to='/gallery'>Gallery</HLink>
            <HLink className="nav_link link3" to='/contactus'>Contact Us</HLink>


          </div>

          <RiMenuFoldLine onClick={handleShow} className="d-flex d-lg-none nav-hamburger" />
        </div>
      </div>

      <Offcanvas className="sidebar bg-dark" show={show} onHide={handleClose} placement='end' backdrop="true" backdropClassName>
     
        <Offcanvas.Header className='sidebar_header '>
        
          <Offcanvas.Title>{BasicInfo.name}</Offcanvas.Title>

          <span type="button" className="btn-close close-button" onClick={handleClose} aria-label="Close"> <IoCloseCircle></IoCloseCircle> </span>
        </Offcanvas.Header>
        <Offcanvas.Body>

          <ul className='sidebar_ul'>
            <li>
              <HLink className="sidebar_nav link5" to='/' >Home</HLink>
            </li>
            <li>
              <HLink className="sidebar_nav link4" to='/about'>About Us</HLink>
            </li>
            <li>
              <HLink className="sidebar_nav link1" to='/rooms'>Book Rooms</HLink>
            </li>
            <li>
              <HLink className="sidebar_nav link2" to='/gallery'>Gallery</HLink>
            </li>
            <li>
              <HLink className="sidebar_nav link3" to='/contactus'>Contact Us</HLink>
            </li>
          </ul>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}