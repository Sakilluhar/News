import './Register.css';
import photo from '../images/tech.jpg'
import React, { useState, useEffect } from 'react';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/fa/eye';
import { eyeSlash } from 'react-icons-kit/fa/eyeSlash';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';


function Ragister_Modal2(props) {
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
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
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
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <div className='d-flex ModalWrapper'>
                    <div style={{ width: '80%' }}>
                        <img className="ModalImg" src={photo} alt="" />
                    </div>

                    <div style={{ width: '100%' }}>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                            Create an Account
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="">
                                <div className="my-5 mx-4">
                                    <h5> <strong>Welcome</strong></h5>
                                    <div id="Welcom" style={{ fontSize: "14px" }}> Enter the details above and Register for Daily News</div>
                                </div>
                                <form className="my-2 mx-4" onSubmit={handleSubmit}>
                                    <div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" name='username'
                                                id="floatingInput" placeholder="User Name" aria-describedby="Username" value={formValues.username} onChange={handleChange} />
                                            <p className='error-msg'> {formErrors.username}</p>
                                            <label for="floatingInput">User Name</label>
                                        </div>
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
                                            <p className='error-msg'> {formErrors.password}</p>

                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type={type} className="form-control" id="floatingPassword" placeholder="Password" name='confirmpassword' value={formValues.confirmPassword}
                                                onChange={handleConfirmpassword}
                                            />
                                            <label for="floatingConfirmPassword"> Confirm Password</label>
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
