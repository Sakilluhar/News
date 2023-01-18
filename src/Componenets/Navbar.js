import React, { useState } from 'react'
import './Nav.css';
import { BiBell,BiSearch,BiUserCircle } from 'react-icons/bi';
import { Modal } from './Modal';
import { PhoneLoginModal } from './PhoneLogin';
import { ForgotModal } from './ForgotPassword';
import { OtpModal } from './OtpModal';
import { RagisterModal } from './Register';
import { Link } from 'react-router-dom'

function Navbar() {
    const [Search, setSearch ] = useState(false);

    const handleSearchModel = ()=> {
        setSearch(!Search)
    };
    return (
        <div>
             
            <nav id='NewsNav' className="navbar navbar-expand-lg bg-link">
                <div className="container-fluid">
                    <Link className="navbar-brand" id='NewsLogo' to="/"><h2>News</h2></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <Link className="nav-link active me-4" aria-current="page" to="/">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active me-4" aria-current="page" to="/about_us">ABOUT US</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active me-4" aria-current="page" to="/">CATEGORIES</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active me-4" aria-current="page" to="/">BREAKING NEWS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active me-4" aria-current="page" to="/">CONTACT US</Link>
                                </li>
                                <li>
                                    <button id='btnSignIn' className='btn me-3' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" ><BiUserCircle size={23} id='btnLogo'/>Sign In</button>
                                </li>
                                <li>
                                    <Link id='btnNotification' type="button" className="btn me-3" to="/notification" ><BiBell size={23}/></Link>
                                </li>
                                <li>
                                <button id='btnSerch' type="button" onClick={handleSearchModel} className="btn"><BiSearch size={23}/></button>
                                </li>
                            </ul>      
                        </div>

                        {Search ? 
                                (<form id='serchModal' className="d-flex" role="search">
                                    <input id='inputSerchForm' className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button id='btnSerchForm' className="btn" type="submit">Search</button>
                                </form>)
                                :null
                                }

                    </div>
                 </div> 
                 <Modal/>
                 <PhoneLoginModal/>
                 <ForgotModal/>
                 <OtpModal/>
                 <RagisterModal/>
            </nav>
           
        </div>
    )
}

export default Navbar
