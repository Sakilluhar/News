import React from 'react'
import photo from '../images/tech.jpg'
import './Contact_Us.css'
function ContactUs() {


    return (

        <div>
            <div className="fonton">
                <div>
                    <div className="modal-dialog modal-dialog-centered justify-content-center">
                        <div className="modal-content flex-row ModalWrapper12">
                            <div style={{ width: '50%' }}>
                                <img className="ModalImg" src={photo} alt='' />
                            </div>
                            <div className="ModalContent" style={{ width: '50%', padding: '8%', fontSize: '150%', backgroundColor:"#1B2D51", color: "#fff"}}>

                                <div className='container p1'>
                                    <h2 className=" my-4" style={{ color: "#fff" }}><strong> Contact Us </strong></h2>
                                    <p className=''><strong>How can we help you?</strong></p>
                                    <p className=''>It looks like you have problems with our system. <br />We are here to help you. so, please get in touch with us.</p>
                                    <div className='p2'>
                                        <p><strong>Head Office No. :</strong></p>
                                        <p> +919876543210</p>
                                    </div>
                                    <div className='p2'>
                                        <p><strong>&nbsp;Fax No. :</strong></p>
                                        <p> +9195324785584</p>
                                    </div>
                                    <div className='p2'>
                                        <p><strong>Office Address:</strong></p>
                                        <p> Gujarat-India</p>
                                    </div>
                                    <div className='p2'>
                                        <p><strong>Email Address:</strong></p>
                                        <p> newsApp123@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
} export default ContactUs
