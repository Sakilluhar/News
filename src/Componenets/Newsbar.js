
import {GiHamburgerMenu} from 'react-icons/gi';
import React, { useEffect, useState, useRef } from 'react'
import './Nav.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { BiBell, BiSearch, BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import SignIn_Modal from './SignIn_Modal';
// import Categories from './Categories';
import { getAuth, signOut, sendPasswordResetEmail } from 'firebase/auth';
import News_main_Logo from '../images/News_main_Logo.png';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { ApiWrt, BearerToken } from '../Tokens';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CatNav from './CatNav';
import { Spinner } from 'react-bootstrap';

const Newsbar = (props) => {

    const auth = getAuth();
    const [Data, setData] = useState([]);
    const BToken = BearerToken();
    const [open, setOpen] = useState(false);
    const [Search, setSearch] = useState();
    const [modalShow, setModalShow] = React.useState(false);
    const [islogout, setIsLogout] = useState(false)
    const [isloginloading, setisloginloading] = useState(true)
    const [ShowManu,setShowManu]= useState();
    const ApiUrl = ApiWrt();
  
    const closeRef = useRef()
    useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+BToken);

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
        },[])

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

    function OffCanvasExample({ name, ...props }) {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => {
            console.log('click')
            setShow(true)
        };
      
        return (
          <>
                  <button className='btn' onClick={handleShow} >
                  <GiHamburgerMenu/>
                      </button>
                      
                      <Offcanvas id="Nav-Offcanvas" show={show} onHide={handleClose} {...props}>
                      <Offcanvas.Header closeButton ref={closeRef}>
                          <Offcanvas.Title><li id='Nav-btns'>
                            
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
                                    <Dropdown.Item id='btnLogout' onClick={handleClose}>
                                    <Link id='btnBookmark' to="/Bookmark" >S
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
                            {islogout ?
                            <Link to="/notification" id='btnNotification' type="button" className="btn"><BiBell size={23} /></Link>
                                :null
                            }
                            {/* <button id='btnSerch' type="button" onClick={handleSearchModel} className="btn"><BiSearch size={23} /></button> */}
                            {/* {['bottom-end'].map((placement) => (
                                <OverlayTrigger
                                trigger="click"
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Popover id={`popover-positioned-${placement}`}>
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
                            ))} */}
                        </li></Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                      <ul className="">

                        <li className="nav-item">
                            <b><Link id='nav-links' className="" aria-current="page" to="/" onClick={handleClose}>HOME</Link></b>
                        </li>
                        <li className="nav-item">
                            <b><Link id='nav-links' className="" aria-current="page" to="/about_us" onClick={handleClose}>ABOUT US</Link></b>
                        </li>
                        <li className="nav-item">
                            <b><Link id='nav-links' className="" aria-current="page" to="/LiveNews" onClick={handleClose}>LIVE NEWS</Link></b>
                        </li>

                        <li className="nav-item">
                            <b><Link id='nav-links' className="" aria-current="page" to="/BreakingNews  " onClick={handleClose}>BREAKING NEWS</Link></b>
                        </li>
                        <li className="nav-item">
                            <b><Link id='nav-links' className="" aria-current="page" to="/Contact_us" onClick={handleClose}>CONTACT US</Link></b>
                        </li>
                        <li className="nav-item">
                        <b><Link id='nav-links' className="" aria-current="page" to="/Contact_us" onClick={handleClose}>CATAGORIES</Link></b>
                            <ul >
                                {!Data ? "Loading..."
                                :Data.map((element)=>(
                                <li className="nav-item">
                                    <Link id='catNav-links' key={element.id}  to={"/CategoryView?id="+element.id+"&uid=1"} onClick={handleClose}> <b>{element.category_name}</b> </Link>
                                </li>
                                ))}
                            </ul>
                        </li>
                        
                        </ul>
                      </Offcanvas.Body>
                      </Offcanvas>
                      </>
        );
      }

  return (
    <div>
      <nav className="Newsbar">

        <div id='News-logo' className="News-logo">
        <img id='NewsLogo' src={News_main_Logo} alt="" />
        </div>

        <div className="Manu-links">
            <ul className="">

            <li id='NavHover' className="nav-item">
                
                <b><Link id='nav-links' className="link-color" aria-current="page" to="/">HOME</Link></b>
            </li>
            <li id='NavHover' className="nav-item">
                <b><Link id='nav-links' className="link-color" aria-current="page" to="/about_us">ABOUT US</Link></b>
            </li>
            <li id='NavHover' className="nav-item">
                <b><Link id='nav-links' className="link-color" aria-current="page" to="LiveNews">LIVE NEWS</Link></b>
            </li>

            <li id='NavHover' className="nav-item">
                <b><Link id='nav-links' className="link-color" aria-current="page" to="/BreakingNews">BREAKING NEWS</Link></b>
            </li>
            <li id='NavHover' className="nav-item">
                <b><Link id='nav-links' className="link-color" aria-current="page" to="/Contact_us">CONTACT US</Link></b>
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

                            {islogout ?
                            <Link to="/notification" id='btnNotification' type="button" className="btn"><BiBell size={23} /></Link>
                                :null
                            }

                {/* <button id='btnSerch' type="button" onClick={handleSearchModel} className="btn"><BiSearch size={23} /></button> */}
                {/* {['bottom-end'].map((placement) => (
                    <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                        <Popover id={`popover-positioned-${placement}`}>
                        <Popover.Body id='nb-popover-body' >
                        <form id='serchModal' className="d-flex" role="search">
                                            <input id='inputSerchForm' className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setSearch(e.target.value)}}/>
                                            <Link id='btnSerchForm' className="btn" type="submit" to={`/SearchNewsView?Search=${Search}`}>Search</Link>
                                        </form>
                        </Popover.Body>
                        </Popover>
                    }
                    >
                    <Button id='btnSerch' className="btn" variant="secondary"><BiSearch size={23} /></Button>
                    </OverlayTrigger>
                ))} */}
            </li>
            </ul>

                        

<SignIn_Modal setIsLogout={setIsLogout} setisloginloading={setisloginloading} show={modalShow} setLoginModalShow={setModalShow} onHide={() => setModalShow(false)} />

        </div>
        <div className="hamburger-manu">

                {['end'].map((placement, idx) => (
                    <OffCanvasExample key={idx} placement={placement} name={placement} />
                ))}
            </div>
      </nav>
      <div className={ShowManu ? "mobile-manu2" :"mobile-manu"} >
 

                
            </div>
    </div>
  )
}

export default Newsbar