import './ForgotPassword.css';
import photo from '../images/tech.jpg'
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail, createUserWithEmailAndPassword } from "firebase/auth";



function Forgot_Password2(props) {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        const auth = getAuth();
        await sendPasswordResetEmail(auth, formValues.email)
            .then((userCredential) => {
                // Signed in s
                // alert("Email sent Succesfully")
                // ...
                props.onHide();
                props.setLoginModalShow(true);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
console.log(error)                
                // ..
            });

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
        }

        return errors;
    };
    return (
        <div>
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <div className='d-flex ModalWrapper'>
                    <div style={{ width: '100%', height: "auto", objectFit: "cover" }}>
                        <img className="ModalImg" src={photo} alt="" />
                    </div>

                    <div style={{ width: '100%' }}>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Forgot Password
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="">
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

                        </Modal.Body>
                    </div>
                </div >



            </Modal >
        </div >
    )
}

export default Forgot_Password2
