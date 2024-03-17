import React, {useState} from 'react'
import Header from '../Navbar/Header';
import './pay.css';
import { API_URL } from '../../Config';
import  QrCode from './QrCode.png'
import axios from 'axios';
import Loader from '../Loader/Loader';
import Navbar from '../Navbar/Navbar';


export default function Pay() {

    const [phone , setPhone] = useState(null);
    const [ payAmount , setpayAmount ] = useState(null);
    const [ Fetched , setFetched] = useState(false);
    const [message , setMessage] = useState(null);
    const [popup , setPopup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e)=>{
        const phone_no = e.target.value;
        setPhone(phone_no);
    }
    const handlePopup=()=>{
        setPopup(false);
    
    }

    const handlePaymentFetch =async ()=>{
         setIsLoading(true);
         const data_ =await axios.get(`${API_URL}pay/${phone}`)
         if ((data_.data.data).length >0){  
          setIsLoading(false);
            setpayAmount(data_.data.data[0].amount);
            setFetched(true);

         }else{
          setIsLoading(false);
             setMessage("Enter Correct phone number , we are unable to find any unconfirmed or unpaid  booking with this number");
             setPopup(true);
         }
       
        
    }

  return (
    <>
     <Navbar/>
{
  isLoading?
  <Loader/>
  :
     <div className="container">
        <h2 className='alignCentre mt-4'>Payment Page</h2>
     {
        popup?
        <div className="popup col-lg-4 col-sm-12">
         <div className="background-shadow-3d  m-4 p-4  ">
          <h5>{message}</h5>
          <br></br>
          <button onClick={handlePopup} className="btn background_clr">OK</button>
         </div>
         </div>
        :
        <></>
      }
       <div className="card col-lg-4 col-sm-12 p-3 mt-3 paymentcard">
           <h4 className=''>Enter Phone number</h4>
           <br></br>
           <input type ="text" className='form-control' placeholder='Enter here'
           value={phone}
           onChange={handleChange}
           />
           <br></br><br></br>
           <button className='btn btn-success' onClick={handlePaymentFetch}>Fetch Amount </button>
           <br></br>
           <a href={QrCode} download="QR Code" className='btn btn-secondary'>Download QR code</a>
            <br></br>
          
           {
            Fetched?
            <>
            <h5>Payable Amount : {payAmount}</h5>
            <br></br>
           
            <img src={QrCode} />
            </>
            :
            <></>
           }
       </div>
     </div>
     }
    </>
  )
}
