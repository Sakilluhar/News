import React from 'react'
import './categoryview.css';
import entertainment1_jpg from '../images/entertainment1.jpg'
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function CategoryView() {

  const [Data, setData] = useState([]);

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzM5MzAwNDksImlzcyI6Ik5ld3NBUFAiLCJleHAiOjE2NzY1MjIwNDksInN1YiI6Ik5ld3MgQVBQIEF1dGhlbnRpY2F0aW9uIn0.PcSpXqX6tLmFSC6-dfKvkPKwUxzrB_6ZGrgwnLDcmCQ");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://news.wrteam.in/Api/get_news_by_category?access_key=5670&category_id=6&offset=0&limit=10&user_id=1&language_id=14", requestOptions)
    .then(response => response.json())
    .then(result => {
      setData(result.data)
    })
    .catch(error => console.log('error', error));

  return (
    <div id='cv-main'>

        <div className="container">
        <h1 className="text-center"></h1>   
        <div className="row">
                 <Link id='' to="/go"  ></Link>

          {Data && Data.map((element)=>(
        <div className="col-md-3 my-3" key={element.id}>
          
          <div id='cv-card' className="card">
                <img  id='cv-card-image' src={element.image} className="card-img" alt="..."/>
                {/* <div id='' className="card-img-overlay">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >Technology</button>
                </div> */}
                <div id='cv-card-body' className="card-body">
                <h5 id='cv-card-title' className="card-title">{element.title.slice(0,54)}...</h5>
                 <Link id='btncvRead' className='btn overlay' type="button" to="/NewsView" ><IoArrowForwardCircleSharp size={50}/></Link>
                 </div>
                   
          </div>

          
          </div>

          ))}

        </div>
        </div> 
 
    </div>
  )
}

export default CategoryView
