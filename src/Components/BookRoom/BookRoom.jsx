import React,{useState} from 'react'
import booking from './booking.svg'
import { useLocation, useNavigate  } from "react-router-dom";
import { API_URL } from '../../Config';
import { BasicInfo } from '../../DataConfigFile';
import axios from 'axios';
// import './BookRoom.css';
import moment from 'moment';

export default function BookRoom() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const TypeOfRoom = searchParams.get('type_of_room');
  const Price = searchParams.get('price');
  const Checkindate = searchParams.get('check_in_date');
  const Checkoutdate = searchParams.get('check_out_date');
  const Rooms = searchParams.get('no_of_rooms');
  let Amount = Rooms *Price  ; 
  Amount = Amount + (Amount*.12)
  

  const [formData, setFormData] = useState({
    name_: '',
    phone_no: '',
  });
  const [message , setMessage] = useState(null);
  const [popup , setPopup] = useState(false);

 const  handleChange=(e)=>{
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  const handlePopup=()=>{
    setPopup(false);
    navigate('/payment')
}
let today = new Date();
today = moment(today).format('DD-MM-YYYY');
console.log(today);
  const handleBooking =async ()=>{
     const BookingData={
      name:formData.name_,
      phone_no : formData.phone_no,
      check_in_date : Checkindate,
      check_out_date : Checkoutdate,
      no_of_rooms : Rooms,
      type_of_room : TypeOfRoom,
      booking_date: today,
      amount : Amount
     }
     try {
      const response = await axios.post(`${API_URL}addbooking`,BookingData);
      console.log(response.data);
      setMessage(`${response.data.user.name} You have to text us on Whatapp at ${BasicInfo.phone_no} for payment and booking confirmation. `)
      setPopup(true);
     
    } catch (error) {
      console.error('Error Adding Booking data', error);
    }

  }
  return (
    <>
    <div class="container">
       
            {
        popup?
        <div className="popup">
         <div className="background-shadow-3d p-4  col-lg-8 col-sm-12 ">
          <div className="heading">{message}</div>
          <br></br>
          <button onClick={handlePopup} className="btn background_clr">OK</button>
         </div>
         </div>
        :
        <></>
      }
       <div class="background-shadow-3d  m-4 p-4">
            <div class="row">
                <img class="col-lg-5" src={booking} />
                
               
                <div class="col-lg-6">
                <div class="row g-3" >
                  <strong>Note** You have to text us on Whatapp at number {BasicInfo.phone_no} for payment and booking confirmation. </strong>
                <h5 className=' alignCentre'>Enter Details To Book</h5>
                    <div class="col-md-12">
                      <label for="fullname" class="form-label">Full name</label>
                      <input type="text" class="form-control" id="inputFullname"
                      value={formData.name_}
                      name="name_"
                      onChange={handleChange}
                      />
                    </div>
                    <div class="col-12">
                      <label for="inputAddress" class="form-label">Phone Number</label>
                      <input type="text" class="form-control" id="inputPhonenumber" 
                      value={formData.phone_no}
                      name="phone_no"
                      onChange={handleChange}
                      />
                    </div>
                    <h5>Total Amount - {Amount}</h5>
                    <div class="col-12">
                    <div className="btnCentre">
                        <button type="submit" class="btn background_clr" onClick={handleBooking}>Book Room</button>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
     
    </>
  )
}
