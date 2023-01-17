import React from 'react'
import { FaCalendarAlt,FaFacebookSquare,FaLinkedin,FaTwitterSquare } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';

export default function Header() {
  const currDate = new Date().toDateString()
  return (
    <>
    <div id='Header' className=' d-flex justify-content-around'>
    <div className='left-head'>
        <button id='btncalendar' className='btn btn-sm '><FaCalendarAlt size={17} id='logoCalendar'/><strong>{currDate}</strong></button>
        <label>Trending News</label>
        <ul>
        <li> <h6 id='head-trend-news'>Betting against meme stock could get you seriously burned</h6></li>
        </ul>
    </div> 
    <div className='right-head'>
      <div className="dropdown">
        <button className="btn btn-outline-Link dropdown-toggle" type="button" id='drop-head-lang' data-bs-toggle="dropdown" aria-expanded="false">language</button>
        <ul className="dropdown-menu" >
          <li><a className="dropdown-item" href="#">English</a></li>
          <li><a className="dropdown-item" href="#">Hindi</a></li>
          <li><a className="dropdown-item" href="#">Arabic</a></li>
        </ul>
      </div>
      <a id='line-head' > </a>
      <button type='button' id='btnHead-Socials' className='btn '><FaFacebookSquare size={25}/></button>
      <button type='button' id='btnHead-Socials' className='btn '><TiSocialInstagram size={25}/></button>
      <button type='button' id='btnHead-Socials' className='btn '><FaLinkedin size={25}/></button>
      <button type='button' id='btnHead-Socials' className='btn '><FaTwitterSquare size={25}/></button>
    </div>
    </div>
    </>
  )
}
