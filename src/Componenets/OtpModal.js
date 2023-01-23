import './OtpModal.css';
import photo from '../images/tech.jpg';
import React, { useEffect, useState } from 'react'
import { parsePhoneNumber } from 'react-phone-number-input';

//otp
import OTPInput from 'otp-input-react';

//firebase
import { authentication } from '../Firebase';
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { RecaptchaVerifier, signInWithPhoneNumber  } from 'firebase/auth';
import { useNavigate } from 'react-router';


function OtpModal(props) {

    // const [otp, setOtp] = useState(new Array(6).fill(""));
    const [OTP, setOTP] = useState("");
    const [error, setError] = useState("", setTimeout(() => {
        if (error !== "")
            setError("")
    }, 5000))

    const navigate = useNavigate()

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        // setOtp([...otp.map((d, idx) => (idx === index) ? element.value : d)]);

        if (element.nextSibling) {
            element.nextSibling.focus()
        }
    };


    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
            }
        }, authentication);
    }


    const generateOTP = (phonenum) => {
        console.log(props.phonenum)
         //OTP Generation
         generateRecaptcha();
         let appVerifier = window.recaptchaVerifier;
         signInWithPhoneNumber(authentication, phonenum,appVerifier)  
             .then(confirmationResult => {
                 window.confirmationResult = confirmationResult;
             }).catch((error) => {
                 console.log(error)
             })
    }

    useEffect(()=>{
       
        if(props.phonenum!==null){
            generateOTP(props.phonenum)
        }
        else{
            navigate('/phone_login')
        }
    },[props.phonenum])


    const submitOTP = (e) => {
        e.preventDefault()

        let confirmationResult = window.confirmationResult;
        confirmationResult.confirm(OTP).then((result) => {
            // User verified successfully.

            const countrycode = parsePhoneNumber(props.phonenum).countryCallingCode;
            const num = parsePhoneNumber(props.phonenum).nationalNumber;

            navigate('/')


        }).catch((error) => {
            console.log("error ",error)
            // User couldn't sign in (bad verification code?)
            setError("Invalid Code")
        });
    }


    return (
        <>
            <div className="container justify-content-center" id='mainmodal'>
                <div className="modal-dialog modal-dialog-centered justify-content-center">
                    <div className="modal-content ModalWrapper1 ">
                        <div>
                            <img className="ModalImg2" src={photo} alt='' />
                        </div>
                        <div div className="ModalContent">

                            <div className="ModelHeader">
                                <h2> <strong> OTP Verification </strong> </h2>
                            </div>
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
                                        <button type="submit" className="btn   btn-lg  w-100" id='submitbutton'  onClick={submitOTP}>Submit</button>
                                    </div>

                                </form>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
            <div id="recaptcha-container" style={{display:"none"}}></div>

        </>
    )
}

export default OtpModal