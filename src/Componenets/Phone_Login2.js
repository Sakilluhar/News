import './PhoneLogin.css';
import photo from '../images/Login.jpg'
import Logo from '../images/Logo.png'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import validator from 'validator'
import Modal from 'react-bootstrap/Modal';
import OTPmodal2 from './OTPmodal2';

function Phone_Login2(props) {

    const [PhoneOTPModalShow, setPhoneOTPModalShow] = React.useState(false);
    const [phonenum, setPhonenum] = useState(null);


    // const navigate = useNavigate();

    const [value, setValue] = useState()
    const [error, setError] = useState("", setTimeout(() => {
        if (error !== "")
            setError("")
    }, 5000))

    const handleGetOtp = () => {
        if (value === undefined) {
            setError("Please enter phone number!")
        }
        else if (validator.isMobilePhone(value)) {
            setPhonenum(value)
            setPhoneOTPModalShow(true)
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
                    size="xl"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    dialogClassName="border-radius-2"
                >
                    <div className='ModalWrapper' id='ModalWrapper' style={{ backgroundColor: "#EE2934", borderRadius: "20px" }}>
                        <div style={{ width: '100%', height: "100%", objectFit: "cover", borderRadius: "20px" }}>
                            <img className="ModalImg4" src={photo} alt="" />
                            <div className="logo-img-overlay">
                                <img src={Logo} alt="" id='logo4' />
                            </div>
                            <div className='logo-text4'>
                            <h4> This beautiful theam yours!</h4>
                            <p> " Best investment i made for a long time. Can recommend for other users."</p>
                        </div>
                        </div>

                        <div style={{ width: '100%', backgroundColor: "#ffffff", borderRadius: "0 20px 20px 0" }}>
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    Login
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{marginTop: "9%"}}>
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
                                                // props.onHide()
                                                handleGetOtp()
                                            }} >Get OTP</button>

                                        </div>

                                    </form>
                                </div>
                            </Modal.Body>
                        </div>
                    </div >
                </Modal >

            </div >

            {phonenum !== null ?
                <OTPmodal2 setisloginloading={props.setisloginloading} setIsLogout={props.setIsLogout} phonenum={phonenum} onPhonenumHide={props.onHide()} show={PhoneOTPModalShow} onHide={() => setPhoneOTPModalShow(false)} />
                : null
            }

        </>
    )
}

export default Phone_Login2