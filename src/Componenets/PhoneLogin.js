import './PhoneLogin.css';
import photo from '../images/tech.jpg'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import validator from 'validator'



function PhoneLogin(props) {

    const navigate = useNavigate();

    const [value, setValue] = useState()
    const [error, setError] = useState("", setTimeout(() => {
        if (error !== "")
            setError("")
    }, 5000))
   
    const handleGetOtp=(e)=>{
        e.preventDefault();
        if (value === undefined) {
            setError("Please enter phone number!")
        }
        else if (validator.isMobilePhone(value)){
            props.setPhonenum(value)
            navigate('/Get_otp')
        }
        else{
            setError("Enter a valid phone number")
        }


    }


    return (
        <>
            <div className="container justify-content-center" id='mainmodal'>
                <div className="modal-dialog modal-dialog-centered justify-content-center">
                    <div className="modal-content ModalWrapper1">
                        <div style={{ width: "50%" }}>
                            <img className="ModalImg1" src={photo} alt='' />
                        </div>
                        <div div className="ModalContent" style={{ width: "50%" }}>

                            <div className="ModelHeader">
                                <h2> <strong> Login </strong> </h2>
                            </div>
                            <div className='AC'>
                                <div className="h my-5 mx-3">
                                    <h5> <strong> Enter Your Mobile Number </strong></h5>
                                    <div id="Welcom" style={{ fontSize: "14px" }}> You can Receive 6 digit code for your number verification. </div>
                                </div>
                                <form className="my-2 mx-4">
                                    <div className="mb-3">
                                        <PhoneInput
                                            placeholder="Enter your phone number"
                                            defaultCountry='IN'
                                            value={value}
                                            onChange={setValue} />
                                    </div>

                                    <div className='py-3'>
                                    
                                    <p className='error-msg'>{error}</p>
                                       <button type='submit' className="btn   btn-lg  w-100" id="submitbutton" onClick={handleGetOtp}>Get OTP</button>
                                        
                                    </div>
                                    
                                </form>
                            </div>



                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default PhoneLogin