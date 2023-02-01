import React, { useState } from 'react'
import './categories.css';
import { Link } from 'react-router-dom';
import sports3_ronaldo_jpg from '../images/sports3_static.jpg';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect } from 'react';



function Categories(props) {
  
     
        const [show, setShow] = useState(false);
        const [Data, setData] = useState([]);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        useEffect(()=>{
          var myHeaders = new Headers();
          myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzM5MzAwNDksImlzcyI6Ik5ld3NBUFAiLCJleHAiOjE2NzY1MjIwNDksInN1YiI6Ik5ld3MgQVBQIEF1dGhlbnRpY2F0aW9uIn0.PcSpXqX6tLmFSC6-dfKvkPKwUxzrB_6ZGrgwnLDcmCQ");

          var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };

          fetch("https://news.wrteam.in/Api/get_category?access_key=5670&offset=0&limit=16&language_id=14", requestOptions)
            .then(response => response.json())
            .then(result => {
              setData(result.data);
            })
            .catch(error => console.log('error', error));
          },[])
      
        return (
          <>
          
            <Link variant="primary" className='nav-link active me-4' onClick={handleShow} >
            CATEGORIES
            </Link>
            
            <Offcanvas show={show} onHide={handleClose} {...props}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>CATEGORIES</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {Data && Data.map((element)=>(
               <div id='cat-section-card' key={element.id} className="card" >
                            <img id='cat-section-card-image' src={element.image} className="card-img" alt="..."/>
                            <div id='cat-section-card-body' className="card-img-overlay">
                            <h3 id='cat-card-text'  className="card-text">{element.category_name}</h3>
                            <button id='btn-cat-more' className='btn' type="button" ><IoArrowForwardCircleSharp size={40}/></button>
                        </div>
                    </div>
                    ))}
              </Offcanvas.Body>
            </Offcanvas>
            
          </>
        );
      }
      

export default Categories
