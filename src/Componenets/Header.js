import React from 'react'
import { FaCalendarAlt,FaFacebookSquare,FaLinkedin,FaTwitterSquare } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';
import { BsSun } from 'react-icons/bs';


export default function Header() {
  const day={
    0:"Sunday",
    1:"Monday",
    2:"Tuesday",
    3:"Wednesday",
    4:"Thursday",
    5:"Friday",
    6:"Saturnday",
  }
  
  const currDate = new Date()
  const curdate= currDate.toDateString()
  const currDay = currDate.getDay()
  
  // const currloc = geolocation.getCurrentPosition()



  return (
    <>
    <div id='Header' className=' d-flex justify-content-around'>

    <div className='left-head'>
        <button id='btncalendar' className='btn btn-sm '><FaCalendarAlt size={17} id='logoCalendar'/>{curdate}</button>
        <h3><BsSun/></h3>
        <h3 id=''><b>32'c</b></h3>
        <div id='header-city-section'>
        <h5 id=''>Bhuj</h5>
        <h7 id='' >{day[currDay]}, Sunny</h7>
        </div>
        {/* <label>Trending News</label>
        <ul>
        <li> <h6 id='head-trend-news'>Betting against meme stock could get you seriously burned</h6></li>
        </ul> */}
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
