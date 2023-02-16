import React, { useEffect, useState } from 'react'
import './Nav.css';
import { BiBell, BiSearch, BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import SignIn_Modal from './SignIn_Modal';
// import Categories from './Categories';
import { getAuth, signOut, sendPasswordResetEmail } from 'firebase/auth';
import News_main_Logo from '../images/News_main_Logo.png';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function Navbar(props) {

    const auth = getAuth();

    useEffect(() => {
        if (localStorage.getItem('token') !== null || localStorage.getItem('user') !== null) {
            setIsLogout(true)
            setisloginloading(false)
        } else {
            setIsLogout(false)
            setisloginloading(true)

        }

    }, [])


    const logout = () => {
        // setislogoutalert(true)
        // signOut(auth).then(() => {
        //     // Sign-out successful.
        //     // alert("Sign-out successful.")
        //     setIsLogout(false)

        //   }).catch((error) => {
        //     alert(error)
        //     // An error happened.
        //   });

        confirmAlert({
            title: 'Logout',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        signOut(auth).then(() => {
                            // Sign-out successful.
                            // alert("Sign-out successful.")
                            setIsLogout(false)
                            localStorage.removeItem('token')
                            localStorage.removeItem('user')

                        }).catch((error) => {
                            alert(error)
                            // An error happened.
                        });
                    }
                },
                {
                    label: 'No',
                    onClick: () => {
                    }
                }
            ]
        });

    }


    const [Search, setSearch] = useState(false);
    const handleSearchModel = () => {
        setSearch(!Search)
    };
    const [modalShow, setModalShow] = React.useState(false);
    const [islogout, setIsLogout] = useState(false)
    const [isloginloading, setisloginloading] = useState(true)


    // const [islogoutalert,setislogoutalert] = useState(false)

    const changePassword = () => {
        sendPasswordResetEmail(auth, JSON.parse(localStorage.getItem('user')).data.email)
            .then((userCredential) => {
                // Signed in s
                alert("Email sent Succesfully")
                // ...

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
                // ..
            });
    }
    return (
        <div>

            <nav id='NewsNav' className="navbar navbar-expand-lg bg-link">
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" id='NewsLogo' to="/"><h2>News</h2></Link> */}
                    {/* <Link className="navbar-brand"  to="/"><img id='NewsLogo' src={News_main_Logo} alt="" /></Link> */}
                    <img id='NewsLogo' src={News_main_Logo} alt="" />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <b><Link id='nav-links' className="nav-link active me-4" aria-current="page" to="/">HOME</Link></b>
                                </li>
                                <li className="nav-item">
                                    <b><Link id='nav-links' className="nav-link active me-4" aria-current="page" to="/about_us">ABOUT US</Link></b>
                                </li>
                                <li className="nav-item">
                                    <b><Link id='nav-links' className="nav-link active me-4" aria-current="page" to="/hello/sakil/luhar">LIVE NEWS</Link></b>
                                </li>
                                {/* <li className="nav-item">
                                    
                                    {['end'].map((placement, idx) => (
                                        <Categories key={idx} placement={placement} name={placement} />
                                    ))}

                                </li> */}
                                <li className="nav-item">
                                    <b><Link id='nav-links' className="nav-link active me-4" aria-current="page" to="/">BREAKING NEWS</Link></b>
                                </li>
                                <li className="nav-item">
                                    <b><Link id='nav-links' className="nav-link active me-4" aria-current="page" to="/Contact_us">CONTACT US</Link></b>
                                </li>
                                <li>
                                    {/* <Link id='btnSignIn'  className='btn me-3' type="button" to="/Login"><BiUserCircle size={23} id='btnLogo'/>Sign In</Link> */}
                                    {!islogout ?
                                        <Button variant="danger" onClick={() => setModalShow(true)} id='btnSignIn' className='me-3' type="button" ><BiUserCircle size={23} id='btnLogo' />Sign In</Button>
                                        :
                                        // <Button variant="danger" onClick={logout} id='btnSignIn' className='me-3' type="button" ><BiUserCircle size={23} id='btnLogo' />Log out</Button>
                                        <Dropdown>
                                            <Dropdown.Toggle id="btnSignIn" className='me-3'>
                                                <BiUserCircle size={23} id='btnLogo' />
                                                {!isloginloading ?
                                                    JSON.parse(localStorage.getItem('user')).data.name
                                                    : ''
                                                }
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu style={{ backgroundColor: "#1A2E51" }}>
                                                <Dropdown.Item id='btnLogout' onClick={changePassword}>
                                                    Change Password
                                                </Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item onClick={logout} id='btnLogout' className='me-3'>Log Out</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    }
                                </li>
                                <li>
                                    <Link to="/notification" id='btnNotification' type="button" className="btn me-3"><BiBell size={23} /></Link>
                                </li>
                                <li>
                                    <button id='btnSerch' type="button" onClick={handleSearchModel} className="btn"><BiSearch size={23} /></button>
                                </li>
                            </ul>
                        </div>

                        {Search ?
                            (<form id='serchModal' className="d-flex" role="search">
                                <input id='inputSerchForm' className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button id='btnSerchForm' className="btn" type="submit">Search</button>
                            </form>)
                            : null
                        }

                    </div>
                </div>

            </nav>
            <SignIn_Modal setIsLogout={setIsLogout} setisloginloading={setisloginloading} show={modalShow} setLoginModalShow={setModalShow} onHide={() => setModalShow(false)} />
        </div>
    )
}

export default Navbar
