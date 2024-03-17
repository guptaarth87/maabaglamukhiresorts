import React from 'react'
import note from './note.svg'
import './RoomDetails.css';
import { NoteData } from '../../DataConfigFile';

export default function Note() {
  return (
    <>
    <div className="container mt-3">
            <div className="card p-4 ">
           
        <div className="row">
        <h4 className='alignCentre'>Terms & Condition - </h4>
           <img src={note} className="col-lg-5 img_control_hidden" /> 
          <div className="col-lg-6">
          {
            NoteData.map((item,key)=>{
              return(
                <>
                <div>{item}</div>
                <hr></hr>
                </>
              )
            })
          }   
        
      
          </div>
        </div>
        
    </div>
    </div>

    </>
  )
}
