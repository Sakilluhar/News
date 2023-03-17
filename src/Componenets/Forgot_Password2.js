import '../CSS/ForgotPassword.css';
import photo from '../images/Login.jpg'
import Logo from '../images/Logo.png'
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { getAuth, sendPasswordResetEmail} from "firebase/auth";



function Forgot_Password2(props) {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState("", setTimeout(() => {
        if (formErrors !== "")
            setFormErrors("")
    }, 5000));
    const [isSubmit, setIsSubmit] = useState(false);
   


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

                alert("Email sent Succesfully")
                // ...
                props.onHide();
                props.setLoginModalShow(true);
            })
            .catch((error) => {
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
                dialogClassName="border-radius-2"

            >
                <div className='ModalWrapper' id='ModalWrapper11'>
                    <div style={{ width: '100%', height: "100%", objectFit: "cover", borderRadius: "20px" }} id="login_img2">
                        <img className="ModalImg" id='ModalImg2' src={photo} alt="" />
                        <div className="logo-img-overlay">
                            <img src={Logo} alt="" id='logo2' />
                        </div>
                        <div className='logo-text2'>
                            <h4> This beautiful theme yours!</h4>
                            <p> " Best investment i made for a long time. Can recommend for other users."</p>
                        </div>
                    </div>

                    <div id="modal-content2" >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Forgot Password
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ marginTop: "12%" }}>
                            <div className="">
                                <div className='AC'>
                                    <div className="welcom-back2">
                                        <h5> <strong>Enter the email address associated with your account </strong></h5>
                                        <div id="Welcom" style={{ fontSize: "14px" }}>Enter your email for create new password. </div>
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
