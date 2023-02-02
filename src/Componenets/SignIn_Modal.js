import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import photo from '../images/tech.jpg'
import './modal.css';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/fa/eye';
import { eyeSlash } from 'react-icons-kit/fa/eyeSlash';
import { FaFacebookF, FaGoogle, FaMobileAlt, } from 'react-icons/fa';
import { signInWithPopup, FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, getAuth, sendEmailVerification} from 'firebase/auth';
import { authentication } from '../Firebase';
import Forgot_Password2 from './Forgot_Password2';
import Ragister_Modal2 from './Ragister_Modal2';
import Phone_Login2 from './Phone_Login2';
function SignIn_Modal(props) {

    

    const [modalShow, setModalShow] = React.useState(false);
    const [ForgotModalShow, setForgotModalShow] = React.useState(false);
    const [PhoneModalShow, setPhoneModalShow] = React.useState(false);
    const handleClose = () => props.setPrivacy(false);

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
    // const navigate = useNavigate()



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
    const signInWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(authentication, provider)
            .then((re) => {
                console.log(re);
            })
            .catch((err) => {
                console.log(err.message);
            })

    }
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
            .then((re) => {
                console.log(re);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }
    const [islogout, setIsLogout] = useState(false)
    const [phonenum,setPhonenum] = useState(null);
    const auth = getAuth();
    const Signin = () => {
        signInWithEmailAndPassword(auth, formValues.email, formValues.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          console.log(user.emailVerified);
        if(user.emailVerified) {
            alert("Verified")
            props.setIsLogout(true)
        } else {
            alert("Not Verified")
            sendEmailVerification(auth.currentUser)
        }
        // props.setIsLogout(true)
          props.onHide()
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode)
        });
    }
    

    return (<>
        <div>
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                // style={{width: "60%"}}
                centered
                
            >
                <div className='d-flex ModalWrapper'>
                    <div style={{ width: '100%', height: "auto", objectFit: "cover"}}>
                        <img className="ModalImg" src={photo} alt="" />
                    </div>
                    
                    <div style={{ width: '100%' }}>
                        <Modal.Header closeButton >
                            <Modal.Title id="contained-modal-title-vcenter">
                                Login
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="">
                                <div>
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
                                                <p   onClick={() => {
                                                    props.onHide()
                                                    setModalShow(false)
                                                    setPhoneModalShow(false)
                                                    setForgotModalShow(true)}} id="forgot" style={{ float: "right", cursor: "pointer" }}> Forgot Password? </p></p>

                                        </div>
                                        <div className='py-3'>
                                            <button type="submit" className="btn   btn-lg  w-100" id='loginbutton' onClick={Signin} >Login</button>
                                        </div>

                                    </form>
                                    <div className="bordert mx-5 my-3 py-2"></div>

                                </div>
                                <div className="conatiner mx-4 d-flex justify-content-between">
                                    <button style={{ border: "none", width: "30%", height: "37px", fontSize: "11px", color: "#ffffff", background: "#3B5998" }} type="button" className=" btn mx-1" onClick={signInWithFacebook}><FaFacebookF /> Login with Facebook</button>
                                    <button style={{ border: "none", width: "30%", height: "37px", fontSize: "11px", color: "#ffffff", background: "#EA4335" }} type="button" className=" btn mx-1" onClick={signInWithGoogle}><FaGoogle /> Sign in with Google</button>
                                    <Button style={{ border: "none", width: "30%", height: "37px", fontSize: "11px", color: "#ffffff", background: "#1B2D51" }} type="button" className=" btn mx-1"  onClick={() => {
                                                    props.onHide()
                                                    setModalShow(false)
                                                    setPhoneModalShow(true)
                                                    setForgotModalShow(false)}}><FaMobileAlt /> Sign in with Phone </Button>

                                </div>
                            </div>

                        </Modal.Body>
                        <div className="footer">
                                        <h6 className="">Don't have an account?<a  style={{ cursor: "pointer" }} onClick={() => {
                                                    props.onHide()
                                                    setModalShow(true)}}> Register </a></h6>
                                    </div>

                        {/* <Modal.Footer className="footer">
                            {/* <Button onClick={props.handleClose}>Close</Button> */}
                            {/* <h6 className="">Don't have an account?<Link to="/register">Register </Link></h6>
                        </Modal.Footer> */} 
                    </div>
                </div >



            </Modal >
        </div >
        <Forgot_Password2 setLoginModalShow={props.setLoginModalShow} show={ForgotModalShow} onHide={() => setForgotModalShow(false)} />
        <Ragister_Modal2  setIsLogout={setIsLogout} setLoginModalShow={props.setLoginModalShow} show={modalShow} onHide={() => setModalShow(false)} />
        <Phone_Login2 setLoginModalShow={props.setLoginModalShow} setPhonenum={setPhonenum} show={PhoneModalShow} onHide={() => setPhoneModalShow(false)} />
    </>
    )
}

export default SignIn_Modal

