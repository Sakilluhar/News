import {GiHamburgerMenu} from 'react-icons/gi';
import React, { useEffect, useState } from 'react'
import './Nav.css';

import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
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

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Newsbar = () => {

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


    const [Search, setSearch] = useState();
    // const handleSearchModel = () => {
    //     setSearch(!Search)
    // };
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

  const [ShowManu,setShowManu]= useState();
  return (
    <div>
      <nav className="Newsbar">
        {/* News logo */}
        <div className="News-logo">
        <img id='NewsLogo' src={News_main_Logo} alt="" />
        </div>
        {/* manu buttons */}
        <div className="Manu-links">
            {/* <ul>
                <li>
                    <a href="">HOME</a>
                </li>
                <li>
                    <a href="">ABOUT US</a>
                </li>
                <li>
                    <a href="">CATEGORIES</a>
                </li>
                <li>
                    <a href="">BREAKING NEWS</a>
                </li>  
                <li>
                    <a href="">CONTACT US</a>
                </li>   
                <li>
                    <button>Sign In</button>
                </li>  
                <li> 
                   <button><BiBell className="notification"/></button>
                </li>
                <li>  
                    <button><BiSearch className="serch"/></button>
                </li>
            </ul> */}
            <ul className="">

<li className="nav-item">
    <b><Link id='nav-links' className="" aria-current="page" to="/">HOME</Link></b>
</li>
<li className="nav-item">
    <b><Link id='nav-links' className="" aria-current="page" to="/about_us">ABOUT US</Link></b>
</li>
<li className="nav-item">
    <b><Link id='nav-links' className="" aria-current="page" to="/hello/sakil/luhar">LIVE NEWS</Link></b>
</li>

<li className="nav-item">
    <b><Link id='nav-links' className="" aria-current="page" to="/">BREAKING NEWS</Link></b>
</li>
<li className="nav-item">
    <b><Link id='nav-links' className="" aria-current="page" to="/Contact_us">CONTACT US</Link></b>
</li>
<li id='Nav-btns'>
    
    {!islogout ?
        <Button variant="danger" onClick={() => setModalShow(true)} id='btnSignIn' className='' type="button" ><BiUserCircle size={23} id='btnLogo' />Sign In</Button>
        :
        
        <Dropdown>
            <Dropdown.Toggle id="btnSignIn" className=''>
                <BiUserCircle size={23} id='btnLogo' />
                {!isloginloading ?
                    JSON.parse(localStorage.getItem('user')).data.name
                    : ''
                }
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ backgroundColor: "#1A2E51" }}>
            <Dropdown.Item id='btnLogout' >
            <Link id='btnBookmark' to="/Bookmark" >
                    Bookmark
                </Link>
                </Dropdown.Item>
                <Dropdown.Item id='btnLogout' onClick={changePassword}>
                    Change Password
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={logout} id='btnLogout' className=''>Log Out</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    }

    <Link to="/notification" id='btnNotification' type="button" className="btn"><BiBell size={23} /></Link>

    {/* <button id='btnSerch' type="button" onClick={handleSearchModel} className="btn"><BiSearch size={23} /></button> */}
    {['bottom-end'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              {/* <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header> */}
              <Popover.Body id='nb-popover-body' >
              <form id='serchModal' className="d-flex" role="search">
                                <input id='inputSerchForm' className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setSearch(e.target.value)}}/>
                                <button id='btnSerchForm' className="btn" type="submit" onClick={(e)=>{
                                    e.preventDefault();
                                    
                                }}>Search</button>
                            </form>
              </Popover.Body>
            </Popover>
          }
        >
          <Button id='btnSerch' className="btn" variant="secondary"><BiSearch size={23} /></Button>
        </OverlayTrigger>
      ))}
</li>
</ul>

                        

<SignIn_Modal setIsLogout={setIsLogout} setisloginloading={setisloginloading} show={modalShow} setLoginModalShow={setModalShow} onHide={() => setModalShow(false)} />

        </div>
        <div className="hamburger-manu">
                <button onClick={()=> setShowManu(!ShowManu)}>
                <GiHamburgerMenu/>
                </button>
            </div>
      </nav>
      <div className={ShowManu ? "mobile-manu2" :"mobile-manu"} >
            <ul>
                <li>
                    <a href="">HOME</a>
                </li>
                <li>
                    <a href="">ABOUT US</a>
                </li>
                <li>
                    <a href="">CATEGORIES</a>
                </li>
                <li>
                    <a href="">BREAKING NEWS</a>
                </li>  
                <li>
                    <a href="">CONTACT US</a>
                </li>   
                <li>
                    <button>Sign In</button>
                </li>  
                <li>
                    
                </li>
                <li> 
                   <button><BiBell className="notification"/></button>
                </li>
                <li>  
                    <button><BiSearch className="serch"/></button>
                </li>
            </ul>
            </div>
    </div>
  )
}

export default Newsbar
