import Modal from 'react-bootstrap/Modal';
import './OtpModal.css';
import photo from '../images/Login.jpg'
import Logo from '../images/Logo.png'
import React, { useEffect, useState } from 'react'
import { parsePhoneNumber } from 'react-phone-number-input';
//otp
import OTPInput from 'otp-input-react';

//firebase
import { authentication } from '../Firebase';
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
function OTPmodal2(props) {
    const [OTP, setOTP] = useState("");
    const [error, setError] = useState("", setTimeout(() => {
        if (error !== "")
            setError("")
    }, 5000))

    // const navigate = useNavigate()

    // const handleChange = (element, index) => {
    //     if (isNaN(element.value)) return false;

    //     // setOtp([...otp.map((d, idx) => (idx === index) ? element.value : d)]);

    //     if (element.nextSibling) {
    //         element.nextSibling.focus()
    //     }
    // };


    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
            }
        }, authentication);
    }


    const generateOTP = (phonenum) => {
        console.log(phonenum)
        //OTP Generation
        generateRecaptcha();
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(authentication, phonenum, appVerifier)
            .then(confirmationResult => {
                window.confirmationResult = confirmationResult;
            }).catch((error) => {

                console.log(error)
            })
    }

    useEffect(() => {

        if (props.phonenum !== null) {
            generateOTP(props.phonenum)
        }

    }, [props.phonenum])
    const submitOTP = (e) => {
        e.preventDefault()

        let confirmationResult = window.confirmationResult;
        confirmationResult.confirm(OTP).then((result) => {
            // User verified successfully.

            const countrycode = parsePhoneNumber(props.phonenum).countryCallingCode;
            const num = parsePhoneNumber(props.phonenum).nationalNumber;

            props.onHide();
            props.onPhonenumHide()
            // navigate('/')


        }).catch((error) => {
            console.log("error ", error)
            // User couldn't sign in (bad verification code?)
            setError("Invalid Code")
        });
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
                            <img className="ModalImg5" src={photo} alt="" />
                            <div className="logo-img-overlay">
                                <img src={Logo} alt="" id='logo5' />
                            </div>
                            <div className='logo-text5'>
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
                            <Modal.Body style={{ marginTop: "5%" }}>
                                <div className='AC'>
                                    <div className="h my-5 mx-3">
                                        <h5> <strong> OTP has been sent to </strong></h5>
                                        <div id="Welcom" style={{ fontSize: "14px" }}> {props.phonenum} </div>
                                    </div>
                                    <form className="my-3 mx-4" onSubmit={(e) => {
                                        e.preventDefault()
                                    }}>
                                        <div className="mb-3">
                                            <OTPInput className='otp-container' value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} secure />
                                        </div>

                                        <div className='py-3'>
                                            <p className='error-msg'>{error}</p>
                                            <button type="submit" className="btn   btn-lg  w-100" id='submitbutton' onClick={submitOTP} >Submit</button>
                                        </div>

                                    </form>
                                </div>
                            </Modal.Body>
                        </div>
                    </div >



                </Modal >
                <div id='recaptcha-container' style={{ display: "none" }} ></div>
            </div >
        </>
    )
}

export default OTPmodal2
