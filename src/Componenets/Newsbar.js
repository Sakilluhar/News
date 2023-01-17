import React, { useState } from 'react'
import { BiBell,BiSearch } from 'react-icons/bi';
import './Nav.css';
import {GiHamburgerMenu} from 'react-icons/gi';

const Newsbar = () => {
  const [ShowManu,setShowManu]= useState();
  return (
    <div>
      <nav className="Newsbar">
        {/* News logo */}
        <div className="News-logo">
            <h2><span>N</span>ews</h2>
        </div>
        {/* manu buttons */}
        <div className={ShowManu ? "Manu-links mobile-manu" : "Manu-links"}>
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
                   <button><BiBell className="notification"/></button>
                </li>
                <li>  
                    <button><BiSearch className="serch"/></button>
                </li>
            </ul>
        </div>
        <div className="hamburger-manu">
                <a href="" onClick={()=> setShowManu(!setShowManu)}>
                <GiHamburgerMenu/>
                </a>
            </div>
      </nav>
      <div className="mobile-manu">
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
