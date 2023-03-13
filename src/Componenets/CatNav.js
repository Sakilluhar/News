import React, { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { ApiWrt, BearerToken } from '../Tokens';





function CatNav() {

    const [Data, setData] = useState([]);
    const BToken = BearerToken();
    const ApiUrl = ApiWrt();
  
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
// const url = "/CategoryView?id=7&uid=1"
  return (
    <div>

<Navbar id='cn-main' expand="lg">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          {Data && Data.map((element)=>(
            
            <Link id='catNav-links' key={element.id}  to={"/CategoryView?id="+element.id+"&uid=1"} > <b>{element.category_name}</b> </Link>
            ))}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default CatNav
