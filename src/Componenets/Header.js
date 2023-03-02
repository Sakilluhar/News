import React, { useEffect, useState } from 'react'
import { FaCalendarAlt,FaFacebookSquare,FaLinkedin,FaTwitterSquare } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';
import { BsSun } from 'react-icons/bs';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Header() {

  const [Data , setData] = useState([]);
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

  useEffect (()=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzY1MjUzMjksImlzcyI6Ik5ld3NBUFAiLCJleHAiOjE2NzkxMTczMjksInN1YiI6Ik5ld3MgQVBQIEF1dGhlbnRpY2F0aW9uIn0.QQb22oSYt2QKa_vXlywhSOVFONYbzLThps7T_Q_VfFg");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("api.openweathermap.org/data/2.5/forecast?lat=23.242001&lon=69.666931&appid=b81e14e3de099b5eccb4f30c9e38019a&units=metric", requestOptions)
      .then(response => response.json())
      .then(result => {
        // setData(result.list.main)
        // console.log(result)
      })
      .catch(error => console.log('error', error));
  },[])



  return (
    <>
    <div id='Header' className=' d-flex justify-content-around'>

    <div className='left-head'>
        <button id='btncalendar' className='btn btn-sm '><FaCalendarAlt size={17} id='logoCalendar'/>{curdate}</button>
        <h3><BsSun/></h3>
        <h3 id=''><b>32'c</b></h3>
        <div id='header-city-section'>
        <h5 id=''>Bhuj</h5>
        <p id='header-city-section-day' >{day[currDay]}, Sunny</p>
        </div>
        {/* <label>Trending News</label>
        <ul>
        <li> <h6 id='head-trend-news'>Betting against meme stock could get you seriously burned</h6></li>
        </ul> */}
    </div> 
    
    <div className='right-head'>
    <NavDropdown
              id="nav-dropdown-dark-example"
              title="Languages"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Hindi
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Arebic</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
    </NavDropdown>
      
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
