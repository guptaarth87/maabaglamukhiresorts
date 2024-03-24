import React from 'react'
import './Landing.css'
import HospitalityImg from "../../Assets/landing/hopitality.svg"

const Hopitality = () => {
    return (
        <>
            <div className="container hospitality-main-div">
                <div className="row">
                    <div className="col-md-12 hopitality-black-bg bg-dark ">

                        <p>Enjoy diverse dining at our Meghnagar restaurant, savor homestay meals, and receive attentive service for a seamless, memorable stay. </p>

                        <img className='hospitality-img' src={HospitalityImg} alt="" />

                    </div>

                </div>

            </div>

        </>
    )
}

export default Hopitality