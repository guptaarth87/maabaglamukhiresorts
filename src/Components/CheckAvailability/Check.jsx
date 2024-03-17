import React, { useState , useEffect}  from 'react'
import 'react-calendar/dist/Calendar.css';
import { useLocation , useNavigate } from "react-router-dom";
import moment from 'moment';
import check from './check.svg'
import { API_URL } from '../../Config';
import axios from 'axios';
import './Check.css';
import Loader from '../Loader/Loader';

export default function Check() {
  // useEffect(() => {
  //   const Api_req = async () => {
  //     try {
  //       const resp = await axios.post(`${API_URL}checkavailaiblity`)
  //       console.log(resp);
  //       // Handle the response if needed
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   // Call Api_req when the component is mounted
  //   Api_req();

  //   // Optionally, you can return a cleanup function if needed
   
  // }, []);
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const TypeOfRoom = searchParams.get('type_of_room');
  const Price = searchParams.get('price');

    const [checkindate, setcheckinDate] = useState(null);
    const [checkoutdate, setcheckoutDate] = useState(null);
    const [rooms , setRooms] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const [message , setMessage] = useState("Check in date cannot be before today and check out date cannot be before check in date, So re-enter the dates to check");
    const [popup , setPopup] = useState(false);

   

   

    const handleRooms =(e) =>{
            setRooms(e.target.value);
            console.log(e.target.value);
    }
   
    const onChangeCheckin = (e) => {
      let date_ = e.target.value;
      // date_ =moment(date_).format('DD-MM-YYYY');
       setcheckinDate(date_);
       
     
    };

    const onChangeCheckout= (e) => {
      let date_ = e.target.value;
       setcheckoutDate(date_);
       
    }
  
    // console.log(date_);
      
      const handlePopup=()=>{
            setPopup(false);
            window.location.reload();
      }
      const ParamCheck = ()=>{
        let today = new Date();
        today = today.toISOString().split('T')[0];
        console.log("today x checkin",(checkindate > today  ))
        console.log("checkin",checkindate);
        console.log("checkout" , checkoutdate);
        console.log("today",today);
        if (checkindate > today  ){
          if (checkindate < checkoutdate){
            return true;
          }else{
            return false;
          }
        }else{
          return false;
        }
      }

      const AvailabilityCheck =async() =>{
        setIsLoading(true);
        if (ParamCheck()){

      
        try {
          const checkin = moment(checkindate).format('DD-MM-YYYY')
          const checkout = moment(checkoutdate).format('DD-MM-YYYY')
          const response = await axios.post(`${API_URL}checkavailaiblity`,
          {
            check_in_date: checkin ,
            check_out_date: checkout,
            no_of_rooms:  rooms,
            type_of_room: TypeOfRoom
          });
          console.log(response.data.available);
          setData(response.data);
          setIsLoading(false);
          if (response.data.available == true){
                  navigate(`/BookRoom?type_of_room=${TypeOfRoom}&price=${Price}&check_in_date=${checkin}&check_out_date=${checkout}&no_of_rooms=${rooms}`)
          }else{
            setMessage("Rooms not available try entering lesser number of rooms or change dates");
            setPopup(true)
            // alert("Rooms not available try entering lesser number of rooms or change dates")
          }
          
        } catch (error) {
          setIsLoading(false);
          alert.error('Error fetching data', error);
        }
      }else{
        // param check failed
        setIsLoading(false);
        setPopup(true);
      }
      }
  return (
  
  <>
  {
    isLoading?
    <Loader/>
    :

  <div className="container">
    <div className="row">
      {
        popup?
        <div className="popup">
         <div className="background-shadow-3d  m-4 p-4  col-lg-6 col-md-6 col-sm-12 ">
          <h5>{message}</h5>
          <br></br>

          <button onClick={handlePopup} className="btn background_clr">OK</button>
         </div>
         </div>
        :
        <></>
      }
    <img  className ="col-lg-6 mt-5 " src={check} />
    <div className="col-1"></div>
    <div className="card col-lg-4 p-3 " style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
    <h3 className='alignCentre'>Check Availability</h3>
   <h5>Check in Date(YYYY-MM-DD) :   {checkindate}</h5>
   <input className='form-control' type='date'
   value={checkindate}
   
   onChange={onChangeCheckin}/>
   <hr></hr>
   <h5>Check out Date(YYYY-MM-DD) :  {checkoutdate}</h5>
     <input className='form-control' type='date'
     value={checkoutdate}
     onChange={onChangeCheckout}
      />
   <hr></hr>
   <h5 >Enter No of rooms (1 to 5)</h5>
   <select id="inputState" class="form-control" value={rooms} onChange={handleRooms}>
        <option selected>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
      </select>
      <div className="btnCentre">
   <button className='btn background_clr col-lg-5 mt-2 ' onClick={AvailabilityCheck}>Check Availability</button>
    </div>
    </div>
 
    </div>
  
  
  </div>
   
  }
  </>
   

  )
  
}


