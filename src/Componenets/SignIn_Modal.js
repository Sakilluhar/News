import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import photo from '../images/Login.jpg'
import Logo from '../images/Logo.png'
import './modal.css';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/fa/eye';
import { eyeSlash } from 'react-icons-kit/fa/eyeSlash';
import { FaFacebookF, FaGoogle, FaMobileAlt, } from 'react-icons/fa';
import { signInWithPopup, FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import { authentication } from '../Firebase';
import Forgot_Password2 from './Forgot_Password2';
import Ragister_Modal2 from './Ragister_Modal2';
import Phone_Login2 from './Phone_Login2';
import { BearerToken } from '../Tokens';

function SignIn_Modal(props) {


    const BToken = BearerToken();
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
        // console.log(name)
        setFormValues({ ...formValues, [name]: value });
        // console.log(formValues);
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
                props.onHide()
                props.setIsLogout(true)


                var myHeaders = new Headers();
                myHeaders.append("Authorization", "Bearer "+BToken);
                myHeaders.append("Cookie", "ci_session=12af9107c7cb1f15a290434b44c1be817b862317; csrf_cookie_name=2edd6e5df33b18ac19c9b5bed190f876");

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                fetch("http://news.thewrteam.in/Api/generate_token", requestOptions)
                // fetch("http://news.wrteam.in/Api/generate_token", requestOptions)
                    .then(response => response.text())
                    .then(result => {

                        localStorage.setItem('token', result)
                        // console.log(re.user.uid);
                        var formdata2 = new FormData();
                        formdata2.append("access_key", "5670");
                        formdata2.append("firebase_id", re.user.uid);
                        formdata2.append("email", formValues.email);
                        formdata2.append("type", "Facebook");
                        // console.log(re);


                        var requestOptions2 = {
                            method: 'POST',
                            headers: myHeaders,
                            body: formdata2,
                            redirect: 'follow'
                        };

                        fetch("http://news.thewrteam.in/Api/user_signup", requestOptions2)
                        // fetch("https://news.wrteam.in/Api/user_signup", requestOptions2)
                            .then(response => response.json())
                            .then(result => {
                                localStorage.setItem('user', JSON.stringify(result))
                                props.setisloginloading(false)
                            })
                            .catch(error => console.log('error', error));
                    })
                    .catch(error => console.log('error', error));
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
                props.onHide()
                props.setIsLogout(true)
                var myHeaders = new Headers();
                myHeaders.append("Authorization", "Bearer "+BToken);
                myHeaders.append("Cookie", "ci_session=12af9107c7cb1f15a290434b44c1be817b862317; csrf_cookie_name=2edd6e5df33b18ac19c9b5bed190f876");

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                fetch("http://news.thewrteam.in/Api/generate_token", requestOptions)
                // fetch("http://news.wrteam.in/Api/generate_token", requestOptions)
                    .then(response => response.text())
                    .then(result => {

                        localStorage.setItem('token', result)
                        // console.log(re.user.uid);
                        var formdata2 = new FormData();
                        formdata2.append("access_key", "5670");
                        formdata2.append("firebase_id", re.user.uid);
                        formdata2.append("email", formValues.email);
                        formdata2.append("type", "Google");
                        // console.log(re);


                        var requestOptions2 = {
                            method: 'POST',
                            headers: myHeaders,
                            body: formdata2,
                            redirect: 'follow'
                        };

                        fetch("http://news.thewrteam.in/Api/user_signup", requestOptions2)
                        // fetch("https://news.wrteam.in/Api/user_signup", requestOptions2)
                            .then(response => response.json())
                            .then(result => {
                                localStorage.setItem('user', JSON.stringify(result))
                                props.setisloginloading(false)
                            })
                            .catch(error => console.log('error', error));
                    })
                    .catch(error => console.log('error', error));
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    const [phonenum, setPhonenum] = useState(null);
    const auth = getAuth();
    const Signin = async () => {
        await signInWithEmailAndPassword(auth, formValues.email, formValues.password)
            .then(async (userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user);

                if (user.emailVerified) {
                    // alert("Verified")
                    props.setIsLogout(true)
                } else {
                    alert("Not Verified")
                    sendEmailVerification(auth.currentUser)
                }
                // props.setIsLogout(true)
                props.onHide()





                var myHeaders = new Headers();
                myHeaders.append("Authorization", "Bearer "+BToken);
                myHeaders.append("Cookie", "ci_session=12af9107c7cb1f15a290434b44c1be817b862317; csrf_cookie_name=2edd6e5df33b18ac19c9b5bed190f876");

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                await fetch("http://news.thewrteam.in/Api/generate_token", requestOptions)
                // await fetch("http://news.wrteam.in/Api/generate_token", requestOptions)
                    .then(response => response.text())
                    .then(async result => {

                        localStorage.setItem('token', result)

                        var formdata2 = new FormData();
                        formdata2.append("access_key", "5670");
                        formdata2.append("firebase_id", user.uid);
                        formdata2.append("email", formValues.email);
                        formdata2.append("type", "email");


                        var requestOptions2 = {
                            method: 'POST',
                            headers: myHeaders,
                            body: formdata2,
                            redirect: 'follow'
                        };

                        await fetch("http://news.thewrteam.in/Api/user_signup", requestOptions2)
                        // await fetch("https://news.wrteam.in/Api/user_signup", requestOptions2)
                            .then(response => response.json())
                            .then(result => {
                                localStorage.setItem('user', JSON.stringify(result))
                                props.setisloginloading(false)
                            })
                            .catch(error => console.log('error', error));

                    })
                    .catch(error => console.log('error', error));
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
                centered
                dialogClassName="border-radius-2"

            >
                <div className='ModalWrapper' id='ModalWrapper'>
                    <div style={{ width: '100%', height: "100%", objectFit: "cover", borderRadius: "20px" }} id="login_img1" > 
                        <img className="ModalImg" src={photo} alt="" />
                        <div className="logo-img-overlay">
                            <img src={Logo} alt="" id='logo1' />

                        </div>
                        <div className='logo-text'>
                            <h4> This beautiful theam yours!</h4>
                            <p> " Best investment i made for a long time. Can recommend for other users."</p>
                        </div>
                    </div>
                    <div id="modal-content">
                        <Modal.Header closeButton >
                            <Modal.Title id="contained-modal-title-vcenter">
                                Login
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="">
                                <div>
                                    <div className="welcom-back">
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
                                                <p onClick={() => {
                                                    props.onHide()
                                                    setModalShow(false)
                                                    setPhoneModalShow(false)  
                                                    setForgotModalShow(true)
                                                }} id="forgot"> Forgot Password? </p></p>

                                        </div>
                                        <div className='py-3' id='login'>
                                            <button type="submit" className="btn   btn-lg  w-100" id='loginbutton' onClick={Signin} >Login</button>
                                        </div>

                                    </form>
                                    <div className="bordert mx-3 my-3 py-2"></div>

                                </div>
                                <div className="conatiner mx-4 d-flex justify-content-between" id='social_buttons'>
                                    <button id='login-social1' type="button" className=" btn" onClick={signInWithFacebook}><FaFacebookF /> Sign in with Facebook</button>
                                    <button id='login-social2' type="button" className=" btn" onClick={signInWithGoogle}><FaGoogle /> Sign in with Google</button>
                                    <Button id='login-social3' type="button" className=" btn" onClick={() => {
                                        props.onHide()
                                        setModalShow(false)
                                        setPhoneModalShow(true)
                                        setForgotModalShow(false)
                                    }}><FaMobileAlt /> Sign in with Phone </Button>

                                </div>
                            </div>



                        </Modal.Body>


                        <div className="footer">
                            <h6 className="">Don't have an account?<a style={{ cursor: "pointer" }} onClick={() => {
                                // console.log("click")
                                props.onHide()
                                setPhoneModalShow(false)
                                setForgotModalShow(false)
                                setModalShow(true)
                            }}> Register </a></h6>
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
        <Ragister_Modal2 setIsLogout={props.setIsLogout} setLoginModalShow={props.setLoginModalShow} show={modalShow} onHide={() => setModalShow(false)} />
        <Phone_Login2 setisloginloading={props.setisloginloading} setIsLogout={props.setIsLogout} setLoginModalShow={props.setLoginModalShow} setPhonenum={setPhonenum} show={PhoneModalShow} onHide={() => setPhoneModalShow(false)} />
    </>
    )
}

export default SignIn_Modal

