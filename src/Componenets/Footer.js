import React, { useState, useEffect } from 'react';
import './Footer.css';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import Terms_Condition from './Terms_Condition';
import Privacy_Policy from './Privacy_Policy';
import { Link } from 'react-router-dom';



function Footer() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);


    const [Privacy, setPrivacy] = useState(false);
    const handlePrivacy = () => setPrivacy(true);

    const initialValues = { email: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState("", setTimeout(() => {
        if (formErrors !== "")
            setFormErrors("")
    }, 5000))
    const [isSubcribe, setIsSubcribe] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name)
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };



    const handleSubcribe = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubcribe(true);
    };
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubcribe);
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
        <>
            <div className='full_footer'>

                <section id="footer">
                    <div className="card" id="cB">
                        <div className="card-body d-flex justify-content-between" id='card-footer'>
                            <div className='newsLetter'>
                                <strong><h3> Subcribe our news Letter</h3></strong>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur <br />adipisicing elit. Quaerat porro incidunt officiis <br /> mollitia fugit suscipit architecto ex quibusdam rerum totam.
                                </p>
                            </div>
                            <div className='d-flex flex-column justify-content-center'>

                                <div className='' id='news_letter'>

                                    <input type="text" className="col-auto form-control" name='email' id="e-f" placeholder="Enter Email" aria-describedby="emailHelp" value={formValues.email} onChange={handleChange} />
                                    <button className='col-auto btn' id='ES' onClick={handleSubcribe}>SUBCRIBE</button>
                                </div>
                                <p className='error-msg-sub'> {formErrors.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-5">

                    </div>
                    < div className="news_footer ">

                        <div className="row">

                            <div className="col-xs-3 col-sm-3 col-md-3" >
                                <div className='News'>
                                    <h3 >E-News</h3>
                                </div>
                                <div className='my-5 Lorem-text'>
                                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a minus nesciunt veniam ipsam molestiae asperiores soluta et. Et est, dolor, dicta libero vero quis sit<br /></p>
                                    <p className='lorem'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab saepe aliquam rem velit vitae provident possimus quaerat facere reiciendis veritatis.</p>
                                </div>

                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-3" >
                                <p id='footer-nav'> News Categories</p>
                                <ul className='newscate'>
                                    <li><Link to="/">Politics</Link></li>
                                    <li><Link to="/">Technology</Link></li>
                                    <li><Link to="/">Business</Link></li>
                                    <li><Link to="/">Health</Link></li>
                                    <li><Link to="/">Entertainment</Link></li>


                                    <li><Link to="/">Education</Link></li>
                                    <li><Link to="/">Obituaries</Link></li>
                                    <li><Link to="/">Corrections</Link></li>
                                    <li><Link to="/">Foods</Link></li>
                                    <li><Link to="/">Soprts</Link></li>


                                </ul>


                            </div>

                            <div className="col-xs-3 col-sm-3 col-md-">
                                <p id='footer-nav'>useful links</p>
                                <ul className="useL">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about_us">About</Link></li>
                                    <li><Link to="/LiveNews">Live News</Link></li>
                                    <li><Link to="/BreakingNews">Breaking News</Link></li>
                                    <li><Link to="/Contact_us">Contact Us</Link></li>
                                </ul>
                            </div>



                            <div className="col-xs-3 col-sm-3 col-md-3">
                                <div className='d-flex gap-3'>
                                    <div>
                                        <p id='footer-nav'>Follow us </p>
                                        <div  className='hide-mobile'>
                                            <button id='social_platforms' className='btn btn-outline-white text-start'><FaFacebookSquare /> Facebook</button>
                                            <button id='social_platforms' className='btn btn-outline-white text-start'><FaInstagram /> Instagram</button>
                                            <button id='social_platforms' className='btn btn-outline-white text-start'><FaLinkedin /> Link in</button>
                                            <button id='social_platforms' className='btn btn-outline-white text-start'><FaTwitterSquare /> Twitter</button>
                                        </div>
                                        <div id='contact-us' className='hide-laptop2'>
                                            <button id='social_platforms' className='btn btn-outline-white text-start'><FaFacebookSquare /> </button>
                                            <button id='social_platforms' className='btn btn-outline-white text-start'><FaInstagram /> </button>
                                            <button id='social_platforms' className='btn btn-outline-white text-start'><FaLinkedin /></button>
                                            <button id='social_platforms' className='btn btn-outline-white text-start'><FaTwitterSquare /> </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className=" d-flex copyright" id='copyright1'>

                        <p id='footer-Copyright' className="h6 me-auto p-2" >Copyright © 2022.All right Reversed By WRTeam.</p>
                        <p id='footer-tearms' className="h6 p-2" variant="primary" onClick={handleShow}>
                            Terms & Conditions
                        </p>
                        {/* <Button className=" btn h6 p-2"> Terms & Conditions</Button>  */}
                        <p className="h6 p-2"> | </p>
                        <p id='footer-pri-pol' className="h6 p-2" variant="primary" onClick={handlePrivacy}> Privacy Policy </p>
                    </div>
                </section>
            </div>
            <Terms_Condition show={show} setShow={setShow} />
            <Privacy_Policy Privacy={Privacy} setPrivacy={setPrivacy} />
        </>
    );
}

export default Footer
