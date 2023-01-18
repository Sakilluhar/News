import React, { useState } from 'react'
import './Nav.css';
import { BiBell,BiSearch,BiUserCircle } from 'react-icons/bi';
import { Modal } from './Modal';
import { PhoneLoginModal } from './PhoneLogin';
import { ForgotModal } from './ForgotPassword';
import { OtpModal } from './OtpModal';
import { RagisterModal } from './Register';

function Navbar() {
    const [Search, setSearch ] = useState(false);

    const handleSearchModel = ()=> {
        setSearch(!Search)
    };
    return (
        <div>
             
            <nav id='NewsNav' className="navbar navbar-expand-lg bg-link">
                <div className="container-fluid">
                    <a className="navbar-brand" id='NewsLogo' href="/"><h2>News</h2></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <a className="nav-link active me-4" aria-current="page" href="/">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active me-4" aria-current="page" href="/">ABOUT US</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active me-4" aria-current="page" href="/">CATEGORIES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active me-4" aria-current="page" href="/">BREAKING NEWS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active me-4" aria-current="page" href="/">CONTACT US</a>
                                </li>
                                <li>
                                    <button id='btnSignIn' className='btn me-3' type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" ><BiUserCircle size={23} id='btnLogo'/>Sign In</button>
                                </li>
                                <li>
                                    <button id='btnNotification' type="button" className="btn me-3"><BiBell size={23}/></button>
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
                 {/* <Modal/> */}
                 {/* <PhoneLoginModal/>
                 <ForgotModal/>
                 <OtpModal/>
                 <RagisterModal/> */}
            </nav>
           
        </div>
    )
}

export default Navbar
