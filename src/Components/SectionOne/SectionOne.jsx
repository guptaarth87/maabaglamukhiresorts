import React from 'react'
import { BasicInfo } from '../../DataConfigFile';
import './SectionOne.css';
import { LandingpageData } from '../../DataConfigFile';

export default function SectionOne() {
  return (
    <>
    <div className="landing_background " id="SectionOne">
    <div className="overlay"></div>
       <video className="video_control" src={LandingpageData.video1} autoPlay muted loop />
       <div className="contentx">
            <h1 className='font-sectionone'>Welcome</h1>
            <h2 className='font-sectionone'>To {BasicInfo.name} </h2>
          
           <div className="container">
            <h2 className='alignCentre font-sectionone'>{BasicInfo.tag_line}</h2>
            </div>
            
        </div>
       </div>
    </>
  )
}
