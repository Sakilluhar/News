import './modal.css';
import photo from '../images/tech.jpg'
import React, { useState, useEffect } from 'react';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/fa/eye';
import { eyeSlash } from 'react-icons-kit/fa/eyeSlash';
import { FaFacebookF, FaGoogle, FaMobileAlt, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { signInWithPopup, FacebookAuthProvider, GoogleAuthProvider  } from 'firebase/auth';
import { authentication } from '../Firebase';


function LoginModal() {

    //------------------------------------------------------------ LOGIN MODAL --------------------------------------------------------------------------//
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState("", setTimeout(() => {
        if (formErrors !== "")
        setFormErrors("")
    }, 5000));
    const [isSubmit, setIsSubmit] = useState(false);
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(eyeSlash);

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
        navigate('/')
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
    const signInWithFacebook=()=>{
        const provider = new FacebookAuthProvider();
        signInWithPopup(authentication,provider)
        .then((re)=>{
            console.log(re);
        })
        .catch((err)=>{
            console.log(err.message);
        })
    
    }
    const signInWithGoogle=()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication,provider)
        .then((re)=>{
            console.log(re);
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }
    
    

    return (
        <>
            {/* ----------------------------------------------------------------- LOGIN MODAL -------------------------------------------------------------------------------- */}
            <div>
                <div className="fonton">
                    <div className="container justify-content-center" id='mainmodal'>
                        <div className="modal-dialog modal-dialog-centered justify-content-center">
                            <div className="modal-content ModalWrapper">
                                <div style={{width:'50%'}}>
                                    <img className="ModalImg" src={photo} alt='' />
                                </div>
                                <div className="ModalContent"  style={{width:'50%'}}>
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
                                                <label htmlFor="floatingInput">Email address</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input type={type} className="form-control" id="floatingPassword" placeholder="Password" name='password' value={formValues.password}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="floatingPassword">Password</label>
                                                <span onClick={handletoggle} className="password-icon"><Icon icon={icon} size={19} /></span>
                                                <p className='error-msg'> {formErrors.password}
                                                    <Link to="/forgot_password" id="forgot" style={{ float: "right" }}> Forgot Password? </Link></p>

                                            </div>
                                            <div className='py-3'>
                                                <button type="submit" className="btn   btn-lg  w-100" id='loginbutton' >Login</button>
                                            </div>

                                        </form>
                                        <div className="bordert mx-5 my-3 py-2"></div>
                                    </div>
                                    <div className="conatiner mx-4 d-flex justify-content-between">
                                        <button style={{ border: "none", width: "30%", height: "35px", fontSize: "12px", color: "#ffffff", background: "#3B5998" }} type="button" className=" btn mx-1" onClick={signInWithFacebook}><FaFacebookF /> Login with Facebook</button>
                                        <button style={{ border: "none", width: "30%", height: "35px", fontSize: "12px", color: "#ffffff", background: "#EA4335" }} type="button" className=" btn mx-1" onClick={signInWithGoogle}><FaGoogle /> Sign in with Google</button>
                                        <Link  to="/phone_login" style={{ border: "none", width: "30%", height: "35px", fontSize: "12px", color: "#ffffff", background: "#1B2D51" }} type="button" className=" btn mx-1"><FaMobileAlt /> Sign in with Phone</Link>

                                    </div>
                                    <div className="footer  ">
                                        <h6 className="">Don't have an account?<Link to="/register">Register </Link></h6>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default LoginModal
