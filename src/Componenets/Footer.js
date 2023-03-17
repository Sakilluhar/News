import React, { useState, useEffect } from 'react';
import '../CSS/Footer.css';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import Terms_Condition from './Terms_Condition';
import Privacy_Policy from './Privacy_Policy';
import { Link } from 'react-router-dom';
import { ApiWrt, BearerToken } from '../Tokens';



function Footer() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);


    const [Privacy, setPrivacy] = useState(false);
    const handlePrivacy = () => setPrivacy(true);
    const [Data, setData] = useState([]);
    const BToken = BearerToken();
    const ApiUrl = ApiWrt();

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

    const scrollToTop =()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    


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
    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + BToken);

        var formdata = new FormData();
        formdata.append("access_key", "5670");
        formdata.append("offset", "0");
        formdata.append("limit", "16");
        formdata.append("language_id", "14");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch(`${ApiUrl}/get_category`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result.data)
            })
            .catch(error => console.log('error', error));
    }, [])


    return (
        <>
            <div className='full_footer'>

                <section id="footer">
                    <div className="card" id="cB">
                        <div className="card-body d-flex justify-content-between" id='card-footer'>
                            <div className='newsLetter'>
                                <strong><h3> Subcribe our Newsletter</h3></strong>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur <br />adipisicing elit. Quaerat porro incidunt officiis <br /> mollitia fugit suscipit architecto ex quibusdam rerum totam.
                                </p>
                            </div>
                            <div className='d-flex flex-column'>

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
                                    <p className='lorem'>An Enews website is an online platform that provides news and information about various topics, including current events, entertainment, politics, sports, technology, and more. <br /></p>
                                    <p className='lorem'> Enews websites often use multimedia elements such as photos, videos, and infographics to enhance the reader's experience and provide more context and understanding of the news.</p>
                                </div>

                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-3" >
                                <p id='footer-nav'> News Categories</p>
                                {Data.length > 0 ?
                                    <ul className='newscate'>
                                        <li><Link to={"/CategoryView?id=" + Data[0].id} onClick={scrollToTop}>{Data[0].category_name} </Link></li>
                                        <li><Link to={"/CategoryView?id=" + Data[1].id} onClick={scrollToTop}>{Data[1].category_name} </Link></li>
                                        <li><Link to={"/CategoryView?id=" + Data[2].id} onClick={scrollToTop}>{Data[2].category_name} </Link></li>
                                        <li><Link to={"/CategoryView?id=" + Data[3].id} onClick={scrollToTop}>{Data[3].category_name} </Link></li>
                                        <li><Link to={"/CategoryView?id=" + Data[4].id} onClick={scrollToTop}>{Data[4].category_name} </Link></li>
                                        <li><Link to={"/CategoryView?id=" + Data[5].id} onClick={scrollToTop}>{Data[5].category_name} </Link></li>
                                        <li><Link to={"/CategoryView?id=" + Data[6].id} onClick={scrollToTop}>{Data[6].category_name} </Link></li>
                                        <li><Link to={"/CategoryView?id=" + Data[7].id} onClick={scrollToTop}>{Data[7].category_name} </Link></li>
                                        <li><Link to={"/CategoryView?id=" + Data[8].id} onClick={scrollToTop}>{Data[8].category_name} </Link></li>
                                        <li><Link to={"/CategoryView?id=" + Data[9].id} onClick={scrollToTop}>{Data[9].category_name} </Link></li>
                                    </ul> : null
                                }


                            </div>

                            <div className="col-xs-3 col-sm-3 col-md-">
                                <p id='footer-nav'>useful links</p>
                                <ul className="useL">
                                    <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
                                    <li><Link to="/about_us" onClick={scrollToTop}>About</Link></li>
                                    <li><Link to="/LiveNews" onClick={scrollToTop}>Live News</Link></li>
                                    <li><Link to="/BreakingNews" onClick={scrollToTop}>Breaking News</Link></li>
                                    <li><Link to="/Contact_us" onClick={scrollToTop}>Contact Us</Link></li>
                                </ul>
                            </div>

                            <div className="col-xs-3 col-sm-3 col-md-3">
                                <div className='d-flex gap-3'>
                                    <div>
                                        <p id='footer-nav'>Follow us </p>
                                        <div className='hide-mobile'>
                                            <a target='_blank' id='social_platforms' className='btn btn-outline-white text-start' href='https://www.facebook.com/wrteam.in?mibextid=ZbWKwL'><FaFacebookSquare /> Facebook</a>
                                            <a target='_blank' id='social_platforms' className='btn btn-outline-white text-start' href='https://instagram.com/wrteam.in?igshid=YmMyMTA2M2Y='><FaInstagram /> Instagram</a>
                                            <a target='_blank' id='social_platforms' className='btn btn-outline-white text-start' href='https://www.linkedin.com/company/wrteam/'><FaLinkedin /> Linked in</a>
                                            <a target='_blank' id='social_platforms' className='btn btn-outline-white text-start' href='https://twitter.com/wrteam2?s=21&t=kgc60HHQmTKkjdKsj74Ieg'><FaTwitterSquare /> Twitter</a>
                                        </div>
                                        <div id='contact-us' className='hide-laptop2'>
                                            <a target='_blank' id='social_platforms' className='btn btn-outline-white text-start' href='https://www.facebook.com/wrteam.in?mibextid=ZbWKwL'><FaFacebookSquare /> </a>
                                            <a target='_blank' id='social_platforms' className='btn btn-outline-white text-start' href='https://instagram.com/wrteam.in?igshid=YmMyMTA2M2Y='><FaInstagram /> </a>
                                            <a target='_blank' id='social_platforms' className='btn btn-outline-white text-start' href='https://www.linkedin.com/company/wrteam/'><FaLinkedin /></a>
                                            <a target='_blank' id='social_platforms' className='btn btn-outline-white text-start' href='https://twitter.com/wrteam2?s=21&t=kgc60HHQmTKkjdKsj74Ieg'><FaTwitterSquare /> </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className=" d-flex copyright" id='copyright1'>

                        <p id='footer-Copyright' className="h6 me-auto p-2" >Copyright © 2022.All right Reserved By WRTeam.</p>
                        <p id='footer-tearms' className="h6 p-2" variant="primary" onClick={handleShow}>
                            Terms & Conditions
                        </p>
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
