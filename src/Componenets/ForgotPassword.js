import './ForgotPassword.css';
import photo from '../images/tech.jpg'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';


function ForgotPassword() {

    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState("", setTimeout(() => {
        if (formErrors !== "")
        setFormErrors("")
    }, 5000));
    const [isSubmit, setIsSubmit] = useState(false);
    const [type, setType] = useState("password");


    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name)
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };


    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
       
 
    };
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit);
    }, [formErrors])
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^s\@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "Enter a Valid EMail";
        } else {
        navigate("/");

        }

        return errors;
    };
    return (
        <>
            <div className="container justify-content-center" id='mainmodal'>
                <div className="modal-dialog modal-dialog-centered justify-content-center">
                    <div className="modal-content ModalWrapper1">
                        <div style={{ width: "50%" }}>
                            <img className="ModalImg1" src={photo} alt='' />
                        </div>
                        <div div className="ModalContent"  style={{width:'50%'}}>

                            <div className="ModelHeader">
                                <h2> <strong>Forgot Password</strong> </h2>
                                {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                            </div>
                            <div className='AC'>
                                <div className="h my-5 mx-3">
                                    <h5> <strong>Enter the email address associated with your account </strong></h5>
                                    <div id="Welcom" style={{ fontSize: "14px" }}> Enter your email address and password to access your account. </div>
                                </div>
                                <form className="my-2 mx-4" onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <input type="text" className="form-control email-input" name='email'
                                            id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" value={formValues.email} onChange={handleChange} />
                                        <p className='error-msg'> {formErrors.email}</p>
                                    </div>

                                    <div className='py-3'>
                                        <button type="submit" className="btn   btn-lg  w-100" id='submitbutton'>Submit</button>
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







export default ForgotPassword
