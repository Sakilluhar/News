import './modal.css';
import photo from '../1.jpg'
import React, { useState, useEffect } from 'react';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/fa/eye';
import { eyeSlash } from 'react-icons-kit/fa/eyeSlash';
import { FaFacebookF, FaGoogle, FaMobileAlt, } from 'react-icons/fa';

export const Modal = () => {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(eyeSlash);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name)
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };



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
        }
        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length < 6) {
            errors.password = "Password must be more then 6 charchaters";
        } else if (values.password.length > 12) {
            errors.password = "Password cannot exceed then 12 charchaters";
        }
        return errors;
    };


    const handletoggle = () => {
        if (type === "password") {
            setIcon(eye);
            setType("text");
        }
        else {
            setIcon(eyeSlash);
            setType("password");
        }
    };




    return (
        <>
            <div className="fonton">
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="modal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered justify-content-center">
                        <div className="modal-content ModalWrapper">
                            <div>
                                <img className="ModalImg" src={photo} alt='' />
                            </div>
                            <div className="ModalContent">
                                <div>
                                    <div className="ModelHeader">
                                        <h1> <strong>Login</strong> </h1>
                                    </div>
                                    <div className="my-5 mx-4">
                                        <h5> <strong>Welcome back!</strong></h5>
                                        <div id="Welcom" style={{ fontSize: "14px" }}> Enter your email address and password to access your account. </div>
                                    </div>
                                    <form className="my-2 mx-4" onSubmit={handleSubmit}>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" name='email'
                                                id="floatingInput" placeholder="name@example.com" aria-describedby="emailHelp" value={formValues.email} onChange={handleChange} />
                                            <p className='error-msg'> {formErrors.email}</p>
                                            <label for="floatingInput">Email address</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type={type} className="form-control" id="floatingPassword" placeholder="Password" name='password' value={formValues.password}
                                                onChange={handleChange}
                                            />
                                            <label for="floatingPassword">Password</label>
                                            <span onClick={handletoggle} className="password-icon"><Icon icon={icon} size={19} /></span>
                                            <p className='error-msg'> {formErrors.password}
                                                <a href="/" id="forgot" style={{ float: "right" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop2" > Forgot Password? </a></p>

                                        </div>
                                        <div className='py-3'>
                                            <button type="submit" className="btn   btn-lg  w-100" id='loginbutton' >Login</button>
                                        </div>

                                    </form>
                                    <div className="bordert mx-5 my-3 py-2"></div>
                                </div>
                                <div className="conatiner mx-4 d-flex justify-content-between">
                                    <button style={{ border: "none", width: "100px", height: "30px", fontSize: "9px", color: "#ffffff", background: "#3B5998" }} type="button" className="mx-1"><FaFacebookF /> Login with Facebook</button>
                                    <button style={{ border: "none", width: "100px", height: "30px", fontSize: "9px", color: "#ffffff", background: "#EA4335" }} type="button" className="mx-1"><FaGoogle /> Sign in with Google</button>
                                    <button style={{ border: "none", width: "100px", height: "30px", fontSize: "9px", color: "#ffffff", background: "#1B2D51" }} type="button" className="mx-1" data-bs-toggle="modal" data-bs-target="#exampleModalToggle3"><FaMobileAlt /> Sign in with Phone</button>

                                </div>
                                <div className="footer  ">
                                    <h7 className="">Don't have an account?<a href="/" data-bs-toggle="modal" data-bs-target="#exampleModalToggle5">Register </a></h7>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}