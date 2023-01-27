import './PhoneLogin.css';
import photo from '../images/tech.jpg'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import validator from 'validator'
import Modal from 'react-bootstrap/Modal';
import OTPmodal2 from './OTPmodal2';

function Phone_Login2(props) {

    const [PhoneOTPModalShow, setPhoneOTPModalShow] = React.useState(false);
    const [phonenum,setPhonenum] = useState(null);


    const navigate = useNavigate();

    const [value, setValue] = useState()
    const [error, setError] = useState("", setTimeout(() => {
        if (error !== "")
            setError("")
    }, 5000))

    const handleGetOtp = (e) => {
        e.preventDefault();
        if (value === undefined) {
            setError("Please enter phone number!")
        }
        else if (validator.isMobilePhone(value)) {
            props.setPhonenum(value)
            navigate('/Get_otp')
        }
        else {
            setError("Enter a valid phone number")
        }


    }

    return (
        <>
    <div>
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <div className='d-flex ModalWrapper'>
            <div style={{ width: '80%' }}>
                <img className="ModalImg" src={photo} alt="" />
            </div>

            <div style={{ width: '100%' }}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                   Login 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                                       <button type='button' className="btn   btn-lg  w-100" id="submitbutton" onClick={() => {
                                                    props.onHide()
                                                   
                                                    setPhoneOTPModalShow(true)}} >Get OTP</button>
                                        
                                    </div>
                                    
                                </form>
                            </div>
                </Modal.Body>
            </div>
        </div >
    </Modal >
   
</div >

 <OTPmodal2 phonenum={phonenum} show={PhoneOTPModalShow} onHide={() => setPhoneOTPModalShow(false)}/>
 </>
    )
}

export default Phone_Login2