import React, { useState } from 'react'
import '../CSS/categories.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import sports3_ronaldo_jpg from '../images/sports3_static.jpg';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import { useEffect } from 'react';
import { BearerToken } from "../Tokens";


function NavbarHamMenu(props) {
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
    return (
      <>
      
        <Link variant="primary" className='nav-link active me-4' onClick={handleShow} >
        CATEGORIES
        </Link>
        
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>MENU</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            
          </Offcanvas.Body>
        </Offcanvas>
        
      </>
    );
  }
export default NavbarHamMenu

