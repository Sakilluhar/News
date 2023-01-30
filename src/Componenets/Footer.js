import React, { useState, useEffect } from 'react';
import './Footer.css';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import Terms_Condition from './Terms_Condition';
import Privacy_Policy from './Privacy_Policy';


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
            <div className='full_fotter'>

                <section id="footer">
                    <div className="card" id="cB">
                        <div className="card-body d-flex justify-content-between" id='card-noti'>
                            <div className='newsLetter'>
                                <strong><h3> Subcribe our news Letter</h3></strong>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur <br />adipisicing elit. Quaerat porro incidunt officiis <br /> mollitia fugit suscipit architecto ex quibusdam rerum totam.
                                </p>
                            </div>
                            <div className='d-flex flex-column justify-content-center'>

                                <div className='row g-3'>

                                    <input type="text" className="col-auto form-control" name='email' id="e-f" placeholder="Enter Email" aria-describedby="emailHelp" value={formValues.email} onChange={handleChange} />
                                    <button className='col-auto btn ' style={{ color: "#ffffff", background: "#EE2934" }} id='ES' onClick={handleSubcribe}>SUBCRIBE</button>



                                </div>
                                <p className='error-msg'> {formErrors.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-5">

                    </div>
                    < div className="news_footer ">

                        <div className="row">

                            <div className="col-xs-3 col-sm-3 col-md-3" >
                                <div>
                                    <h3 style={{ color: "#fff" }}>News</h3>
                                </div>
                                <div className='my-5'>
                                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a minus nesciunt veniam ipsam molestiae asperiores soluta et. Et est, dolor, dicta libero vero quis sit<br /></p>
                                    <p className='lorem'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab saepe aliquam rem velit vitae provident possimus quaerat facere reiciendis veritatis.</p>
                                </div>

                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-3" >
                                <h5> News Cbategories</h5>
                                <ul className='newscate'>
                                    <li><a href="/">Politics</a></li>
                                    <li><a href="/">Technology</a></li>
                                    <li><a href="/">Business</a></li>
                                    <li><a href="/">Health</a></li>
                                    <li><a href="/">Entertainment</a></li>


                                    <li><a href="/">Education</a></li>
                                    <li><a href="/">Obituaries</a></li>
                                    <li><a href="/">Corrections</a></li>
                                    <li><a href="/">Foods</a></li>
                                    <li><a href="/">Soprts</a></li>


                                </ul>


                            </div>

                            <div className="col-xs-3 col-sm-3 col-md-">
                                <h5>useful links</h5>
                                <ul className="useL">
                                    <li><a href={'/'}>Home</a></li>
                                    <li><a href={'/about'}>About</a></li>
                                    <li><a href={'/live_news'}>Live News</a></li>
                                    <li><a href={'/breaking_news'}>Breaking News</a></li>
                                    <li><a href={'/contact_us'}>Contact Us</a></li>
                                </ul>
                            </div>



                            <div className="col-xs-3 col-sm-3 col-md-3">
                                <div className='d-flex flex-column gap-3'>
                                    <div>
                                        <h5>Follow us </h5>
                                        <div className='d-flex flex-column gap-4 row'>
                                            <button style={{ color: "#ffffff", background: "#1B2D51" }} className='btn btn-outline-white text-start'><FaFacebookSquare /> Facebook</button>
                                            <button style={{ color: "#ffffff", background: "#1B2D51" }} className='btn btn-outline-white text-start'><FaInstagram /> Instagram</button>
                                            <button style={{ color: "#ffffff", background: "#1B2D51" }} className='btn btn-outline-white text-start'><FaLinkedin /> Link in</button>
                                            <button style={{ color: "#ffffff", background: "#1B2D51" }} className='btn btn-outline-white text-start'><FaTwitterSquare /> Twitter</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className=" d-flex copyright" id='copyright1'>

                        <p className="h6 me-auto p-2" >Copyright © 2022.All right Reversed By WRTeam.</p>
                        <p className="h6" variant="primary" onClick={handleShow}>
                            Terms & Conditions
                        </p>
                        {/* <Button className=" btn h6 p-2"> Terms & Conditions</Button>  */}
                        <p className="h6 p-2"> | </p>
                        <p className="h6 p-2" variant="primary" onClick={handlePrivacy}> Privacy Policy </p>
                    </div>
                </section>
            </div>
            <Terms_Condition show={show} setShow={setShow} />
            <Privacy_Policy Privacy={Privacy} setPrivacy={setPrivacy} />
        </>
    );
}

export default Footer
