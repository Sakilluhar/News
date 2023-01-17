import './OtpModal.css';
import photo from '../1.jpg'
// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react'




export const OtpModal = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index) ? element.value : d)]);

        if (element.nextSibling) {
            element.nextSibling.focus()
        }
    };
    return (
        <>
            <div className="modal fade" id="exampleModalToggle4" data-bs-backdrop="modal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalToggleLabel4" aria-hidden="true">
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
                                    <h5> <strong> OTP has been sand to </strong></h5>
                                    <div id="Welcom" style={{ fontSize: "14px" }}> ... </div>
                                </div>
                                <form className="my-2 mx-4" onSubmit={(e) => {
                                    e.preventDefault()
                                }}>
                                    <div className="mb-3">

                                        <div class="userInput">
                                            {otp.map((data, index) => {
                                                return (
                                                    <input
                                                        className="otp-field"
                                                        type="text"
                                                        name="otp"
                                                        maxlength="1"
                                                        key={index}
                                                        value={data}
                                                        onChange={e=> handleChange(e.target, index)}
                                                        onFocus={e=> e.target.select()}
                                                    />

                                                );
                                            })}

                                        </div>

                                    </div>

                                    <div className='py-3'>
                                        <button type="submit" className="btn   btn-lg  w-100" id='submitbutton'  >Submit</button>
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