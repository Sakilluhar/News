import React, { useState, useEffect } from 'react'
import photo from '../images/Login.jpg'
// import Logo from '../images/Logo.png'
import { FiMail, FiPhone } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import './Contact_Us.css'
function ContactUs() {

    const initialValues = { username: "", email: "", subject: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState("", setTimeout(() => {
        if (formErrors !== "")
            setFormErrors("")
    }, 5000));
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        // navigate('/')
    };
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit);
    }, [formErrors])
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^s\@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = " User Name is reqired! ";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "Enter a Valid EMail";
        }
        if (!values.subject) {
            errors.subject = " Subject is reqired! ";
        }
        if (!values.message) {
            errors.message = " Enter a feedback! ";
        }
        return errors;
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name)
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };
    return (
        <div id='main_contact_us'>
            <div id='contact_us'>
                <div className="card my-3 main-card">
                    <div className="card-body d-flex bd-highlight" id='card-noti'>
                        <button className="btn bd-highlight" style={{ color: "#ffffff", backgroundColor: "#EE2934", width: "20%" }} size={50} id='it'><FiPhone size={35} /></button>
                        <div>
                            <p className='text-mute'> Phone </p>
                            <p> +9195324785584 </p>
                        </div>
                    </div>
                </div>
                <div className="card my-3 main-card">
                    <div className="card-body d-flex bd-highlight" id='card-noti'>
                        <button className="btn bd-highlight" style={{ color: "#ffffff", backgroundColor: "#EE2934", width: "20%" }} id='it'><FiMail size={35} /></button>
                        <div>
                            <p className='text-mute'> Mail </p>
                            <p> newsApp123@gmail.com </p>
                        </div>
                    </div>
                </div>
                <div className="card my-3 main-card">
                    <div className="card-body d-flex bd-highlight" id='card-noti'>
                        <button className="btn bd-highlight" style={{ color: "#ffffff", backgroundColor: "#EE2934", width: "20%" }} size={50} id='it'><GoLocation size={35} /></button>
                        <div>
                            <p className='text-mute'> Office Address </p>
                            <p> Gujarat-India </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text1'>
                <h5 style={{ color: "#EE2934" }}> Lets' talk </h5>
                <h2> Get in touch with us! </h2>
            </div>
            <div className='form-value'>
            <form className="mx-3" onSubmit={handleSubmit}>
                    <div>
                        <div style={{ display: "grid", gridTemplateColumns: "200fr 200fr", gap: "2%", height: "5rem" }}>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control w-100" name='username'
                                    id="floatingInput" placeholder="User Name" aria-describedby="Username" value={formValues.username} onChange={handleChange} />
                                <p className='error-msg'> {formErrors.username}</p>
                                <label htmlFor="floatingInput" name="name" >Enter Name</label>
                            </div>
                            <div className="form-floating mb-3" >
                                <input type="text" className="form-control w-100" name='email'
                                    id="floatingInput" placeholder="name@example.com" aria-describedby="emailHelp" value={formValues.email} onChange={handleChange} />
                                <p className='error-msg'> {formErrors.email}</p>
                                <label htmlFor="floatingInput" name="Email">Email address</label>
                            </div>
                        </div>
                        <div className="form-floating mb-3" style={{ height: "4rem" }}>
                            <input type="text" className="form-control"
                                id="floatingInput" placeholder="name@example.com" aria-describedby="emailHelp"    />
                            <p className='error-msg'> {formErrors.subject}</p>
                            <label htmlFor="floatingInput" name="subject">Enter Subject</label>
                        </div>
                        <div className="form-floating mb-3">
                            {/* <textarea type="text" className="form-control" rows="50"
                                id="floatingInput" placeholder="name@example.com" aria-describedby="emailHelp" /> */}
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{ height: "14rem" }}
                            placeholder="name@example.com" aria-describedby="emailHelp" ></textarea>
                            <p className='error-msg'> {formErrors.message}</p>
                            <label htmlFor="floatingInput" name="message">Enter Message</label>
                        </div>

                        <div className='py-3'>
                            <button type="submit" className="btn   btn-lg  w-30" id='Send_Message' >SEND MESSAGE</button>
                        </div>
                    </div>
                </form>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2952862908382!2d69.64345920000001!3d23.232339399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511e5b00000001%3A0x99eb1d2a09bf7685!2sWRTeam!5e0!3m2!1sen!2sin!4v1675745236296!5m2!1sen!2sin" 
                style={{ width: "750px", height: "450px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>




















        // <div>
        //     <div className="fonton">
        //         <div>
        //             <div className="modal-dialog modal-dialog-centered justify-content-center">
        //                 <div className="modal-content flex-row ModalWrapper12">
        //                     <div style={{ width: '50%' , backgroundColor: "#EE2934"}}>
        //                         <img  id='ModalImg6' src={photo} alt='' />
        //                         <div className="logo-img-overlay">
        //                             <img src={Logo} alt="" id='logo6' />

        //                         </div>
        //                         <div className='logo-text'>
        //                             <h4> This beautiful theam yours!</h4>
        //                             <p> " Best investment i made for a long time. Can recommend for other users."</p>
        //                         </div>
        //                     </div>
        //                     <div className="ModalContent" style={{ width: '50%', padding: '8%', fontSize: '150%', backgroundColor: "#1B2D51", color: "#fff" }}>

        //                         <div className='container p1'>
        //                             <h2 className=" my-4" style={{ color: "#fff" }}><strong> Contact Us </strong></h2>
        //                             <p className=''><strong>How can we help you?</strong></p>
        //                             <p className=''>It looks like you have problems with our system. <br />We are here to help you. so, please get in touch with us.</p>
        //                             <div className='p2'>
        //                                 <p><strong>Head Office No. :</strong></p>
        //                                 <p> +919876543210</p>
        //                             </div>
        //                             <div className='p2'>
        //                                 <p><strong>&nbsp;Fax No. :</strong></p>
        //                                 <p> +9195324785584</p>
        //                             </div>
        //                             <div className='p2'>
        //                                 <p><strong>Office Address:</strong></p>
        //                                 <p> Gujarat-India</p>
        //                             </div>
        //                             <div className='p2'>
        //                                 <p><strong>Email Address:</strong></p>
        //                                 {/* <a onClick={()=>{
        //                                     window.location.href='http://www.gmail.com'
        //                                 }}> newsApp123@gmail.com</a> */}
        //                                  <a> newsApp123@gmail.com</a>

        //                             </div>
        //                         </div>
        //                     </div>

        //                 </div>
        //             </div>
        //         </div>


        //     </div>
        // </div>
    )
} export default ContactUs
