import React, { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function CatNav() {

    const [Data, setData] = useState([]);


    useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzM5MzAwNDksImlzcyI6Ik5ld3NBUFAiLCJleHAiOjE2NzY1MjIwNDksInN1YiI6Ik5ld3MgQVBQIEF1dGhlbnRpY2F0aW9uIn0.PcSpXqX6tLmFSC6-dfKvkPKwUxzrB_6ZGrgwnLDcmCQ");

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

        fetch("https://news.wrteam.in/Api/get_category", requestOptions)
          .then(response => response.json())
          .then(result => {
            setData(result.data)
          })
          .catch(error => console.log('error', error));
        },[])

  return (
    <div>

<Navbar id='cn-main' bg="light" expand="lg">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          {Data && Data.map((element)=>(
            <Nav.Link id='catNav-links'  href="#home"><b>{element.category_name}</b></Nav.Link>
            // <Link id='catNav-links' to="/">{element.category_name}</Link>
            ))}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default CatNav
