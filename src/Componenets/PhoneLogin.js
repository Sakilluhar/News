import './PhoneLogin.css';
import photo from '../1.jpg'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import React,{useState} from 'react'




export const PhoneLoginModal = () => {
    const [value, setValue] = useState()


    return (
        <>
            <div class="modal fade" id="exampleModalToggle3" data-bs-backdrop="modal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalToggleLabel3" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered justify-content-center">
                    <div class="modal-content ModalWrapper1">
                        <div style={{ width: "55%" }}>
                            <img className="ModalImg1" src={photo} alt='' />
                        </div>
                        <div div className="ModalContent">

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
                                        <button type="button" className="btn   btn-lg  w-100" id="submitbutton" data-bs-toggle="modal" data-bs-target="#exampleModalToggle4">Get OTP</button>
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