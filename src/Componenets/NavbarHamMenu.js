import React, { useState } from 'react'
import './categories.css';
import { Link } from 'react-router-dom';
import sports3_ronaldo_jpg from '../images/sports3_static.jpg';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect } from 'react';
import { BearerToken } from "../Tokens";


function NavbarHamMenu() {
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const BToken = BearerToken();

  
    return (
      <>
      
        <Link variant="primary" className='nav-link active me-4' onClick={handleShow} >
        CATEGORIES
        </Link>
        
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            {/* <Offcanvas.Title>CATEGORIES</Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
            
          </Offcanvas.Body>
        </Offcanvas>
        
      </>
    );
  }
export default NavbarHamMenu

