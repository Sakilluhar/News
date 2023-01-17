import React from 'react'
import './Nav.css';
import { BiBell,BiSearch,BiUserCircle } from 'react-icons/bi';

function Navbar() {
    return (
        <div>
             
            <nav id='NewsNav' className="navbar navbar-expand-lg bg-link">
                <div className="container-fluid">
                    <a className="navbar-brand" id='NewsLogo' href="#"><h2>News</h2></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <a className="nav-link active me-4" aria-current="page" href="#">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active me-4" aria-current="page" href="#">ABOUT US</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active me-4" aria-current="page" href="#">CATEGORIES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active me-4" aria-current="page" href="#">BREAKING NEWS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active me-4" aria-current="page" href="#">CONTACT US</a>
                                </li>
                                <li>
                                    <button id='btnSignIn' className='btn me-3' type="button" ><BiUserCircle size={23} id='btnLogo'/>Sign In</button>
                                </li>
                                <li>
                                    <button id='btnNotification' type="button" className="btn me-3"><BiBell size={23}/></button>
                                </li>
                                <li>
                                <button id='btnSerch' type="button" className="btn"><BiSearch size={23}/></button>
                                </li>
                            </ul>
                            {/* <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                 </div>
            </nav>
        </div>
    )
}

export default Navbar
