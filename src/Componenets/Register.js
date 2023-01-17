import './Register.css';
import photo from '../1.jpg'
import React, { useState, useEffect } from 'react';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/fa/eye';
import { eyeSlash } from 'react-icons-kit/fa/eyeSlash';



export const RagisterModal = () => {
    const initialValues = { username:"", email: "", password: "" ,confirmpassword:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
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
        const password_pattern = /^(?=.*\d)(?=.*\[a-z])(?=.*\[A-Z])[a-zA-Z0-9]{8,}$/
        if(!values.username){
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
        if(!values.confirmpassword){
            errors.confirmPassword=" ConfirmPassword is required!";
        }
        else if(values.confirmpassword === ""|| values.confirmpassword !== values.password){
            errors.confirmPassword="Password is not Matched!";
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




    return (
        <>
            <div className="fonton">
                <div className="modal fade" id="staticBackdrop5" data-bs-backdrop="modal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered justify-content-center">
                        <div className="modal-content ModalWrapper">
                            <div style={{ width: "55%" }}>
                                <img className="ModalImg3" src={photo} alt='' />
                            </div>
                            <div className="ModalContent5">
                                <div>
                                    <div className="ModelHeader">
                                        <h1> <strong>Create an Account</strong> </h1>
                                    </div>
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
                               

                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}