import './Register.css';
import photo from '../images/Login.jpg'
import Logo from '../images/Logo.png'
import React, { useState, useEffect } from 'react';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/fa/eye';
import { eyeSlash } from 'react-icons-kit/fa/eyeSlash';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged } from "firebase/auth";

function Ragister_Modal2(props) {
    const actionCodeSettings = {
        url: 'https://fir-auth-82fbe.firebaseapp.com',
    }
    const initialValues = { username: "", email: "", password: "", confirmpassword: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState("", setTimeout(() => {
        if (formErrors !== "")
            setFormErrors("")
    }, 5000));
    const [isSubmit, setIsSubmit] = useState(false);
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(eyeSlash);
    const [icon2, setIcon2] = useState(eyeSlash);
    const [file, setFile] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };
    const handleConfirmpassword = (e) => {
        const { name, value } = e.target;

        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };


    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        const auth = getAuth();



        await createUserWithEmailAndPassword(auth, formValues.email, formValues.password, formValues.confirmpassword)
            .then((userCredential) => {
                // send verification mail.

                const user = userCredential.user;
                console.log(user)
                sendEmailVerification(auth.currentUser)
                    .then(() => {

                            alert("Email sent");
                            // ..
                            
                            const name = formValues.username;
                            const Email = formValues.email;


                            var myHeaders = new Headers();
                            myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzM4NTMxMjEsImlzcyI6Ik5ld3NBUFAiLCJleHAiOjE2NzY0NDUxMjEsInN1YiI6Ik5ld3MgQVBQIEF1dGhlbnRpY2F0aW9uIn0.aKZFkV4bqFGOKok5CAX897sqBkERhVF6qiPe2CIYPvw");
                            myHeaders.append("Cookie", "ci_session=12af9107c7cb1f15a290434b44c1be817b862317; csrf_cookie_name=2edd6e5df33b18ac19c9b5bed190f876");

                            var formdata = new FormData();
                            formdata.append("access_key", "5670");
                            formdata.append("firebase_id", user.uid);
                            formdata.append("name", name);
                            formdata.append("email", Email);
                            formdata.append("profile", file);
                            formdata.append("type", "email");
                            formdata.append("status", "1");

                            var requestOptions = {
                                method: 'POST',
                                headers: myHeaders,
                                body: formdata,
                                redirect: 'follow'
                            };

                            fetch("http://news.thewrteam.in/Api/user_signup", requestOptions)
                                // fetch("https://news.wrteam.in/Api/user_signup", requestOptions)
                                .then(response => response.text())
                                .then(result => {
                                    console.log(result)
                                    props.setIsLogout(true)
                                    props.onHide()
                                    props.setLoginModalShow(true)
                                })
                                .catch(error => console.log('error', error));

                        




                    })
                    .catch((error) => {
                        console.log(error)
                        // ..
                        alert("Error");
                    });
            })
            .catch((error)=>console.log(error))

        setIsSubmit(true);
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
    const handleCtoggle = () => {
        if (type === "password") {
            setIcon2(eye);
            setType("text");
        }
        else {
            setIcon2(eyeSlash);
            setType("password");
        }
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit);
    }, [formErrors])
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^s\@]+\.[^\s@]{2,}$/i;
        const password_pattern = /^(?=.*\d)(?=.*\[a-z])(?=.*\[A-Z])[a-zA-Z0-9]{8,}$/
        if (!values.username) {
            errors.username = " User Name is reqired! ";
        }

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
        if (!values.confirmpassword) {
            errors.confirmPassword = " ConfirmPassword is required!";
        }
        else if (values.confirmpassword === "" || values.confirmpassword !== values.password) {
            errors.confirmPassword = "Password is not Matched!";
        } else {
            navigate("/");

        }

        return errors;
    };

    function handleChange1(e) {
        // console.log(URL.createObjectURL(e.target.files[0]));
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <div>
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                dialogClassName="border-radius-2"
            >
                  <div className='ModalWrapper' id='ModalWrapper' style={{ backgroundColor: "#EE2934", borderRadius: "20px" }}>
                    <div style={{ width: '100%', height: "100%", objectFit: "cover", borderRadius: "20px" }}>
                        <img className="ModalImg3" src={photo} alt="" />
                        <div className="logo-img-overlay">
                            <img src={Logo} alt="" id='logo3' />
                        </div>
                        <div className='logo-text3'>
                            <h4> This beautiful theam yours!</h4>
                            <p> " Best investment i made for a long time. Can recommend for other users."</p>
                        </div>
                    </div>

                    <div style={{ width: '100%', backgroundColor: "#ffffff", borderRadius: "0 20px 20px 0" }}>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Create an Account
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="">
                                <div className="my-5 mx-4" >
                                    <div>
                                        <h5> <strong>Welcome</strong></h5>
                                        <div id="Welcom" style={{ fontSize: "14px" }}> Enter the details above and Register for Daily News</div>
                                    </div>
                                    <div id='textwithimage'>
                                        <div className="my-3">
                                            <h5>Add Profile:</h5>
                                            <input className='input mx-1' type="file" name="image" onChange={handleChange1} required />

                                        </div>
                                        <div>
                                            <img src={file} className="imageInput rounded float-end" alt="..."></img>
                                        </div>
                                    </div>
                                </div>

                                <form className="my-2 mx-4" onSubmit={handleSubmit}>
                                    <div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" name='username'
                                                id="floatingInput" placeholder="User Name" aria-describedby="Username" value={formValues.username} onChange={handleChange} />
                                            <p className='error-msg'> {formErrors.username}</p>
                                            <label htmlFor="floatingInput" name="name" >User Name</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" name='email'
                                                id="floatingInput" placeholder="name@example.com" aria-describedby="emailHelp" value={formValues.email} onChange={handleChange} />
                                            <p className='error-msg'> {formErrors.email}</p>
                                            <label htmlFor="floatingInput" name="Email">Email address</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type={type} className="form-control" id="floatingPassword" placeholder="Password" name='password' value={formValues.password}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="floatingPassword">Password</label>
                                            <span onClick={handletoggle} className="password-icon"><Icon icon={icon} size={19} /></span>
                                            <p className='error-msg'> {formErrors.password}</p>

                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type={type} className="form-control" id="floatingPassword" placeholder="Password" name='confirmpassword' value={formValues.confirmPassword}
                                                onChange={handleConfirmpassword}
                                            />
                                            <label htmlFor="floatingConfirmPassword"> Confirm Password</label>
                                            <span onClick={handleCtoggle} className="Cpassword-icon"><Icon icon={icon2} size={19} /></span>
                                            <p className='error-msg'> {formErrors.confirmPassword}
                                            </p>

                                        </div>
                                        <div className='py-3'>
                                            <button type="submit" className="btn   btn-lg  w-100" id='loginbutton' >Sign Up</button>
                                        </div>
                                    </div>
                                </form>


                            </div>

                        </Modal.Body>
                    </div>
                </div >



            </Modal >
        </div >
    )
}

export default Ragister_Modal2
