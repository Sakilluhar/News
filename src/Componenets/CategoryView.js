import React from 'react'
import './categoryview.css';
import { FiCalendar } from "react-icons/fi";
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuery } from '../Hooks';
import { ApiWrt, BearerToken } from '../Tokens';

import BreadcrumbSection from './BreadcrumbSection';





function CategoryView() {

  const [Data, setData] = useState([]);
  const {category_id} = useParams();
  const query = useQuery();
  const catid = query.get('id');
  const user_id = query.get('uid');
  const BToken = BearerToken();
  const ApiUrl = ApiWrt();
 
  const loca = useLocation();
  // window.onnload = test(); 
  // test();
  function test() {

    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+BToken);

    var formdata = new FormData();
    formdata.append("access_key", "5670");
    formdata.append("category_id", catid);
    formdata.append("offset", "0");
    formdata.append("limit", "12");
    formdata.append("user_id", user_id);
    formdata.append("language_id", "14");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

     fetch(`${ApiUrl}/get_news_by_category`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setData(result.data)
      })
      .catch(error => console.log('error', error));
    }


  useEffect(()=>{
    test()
    
  },[catid,user_id])

  return (
    <div id='cv-main'>
        {/* <p>my corrent location is {loca.pathname}</p>
        {loca.pathname === `/CategoryView` ? 
        <button
        onClick={ () => alert('you are awesome')} >
          
          click me
        </button> 
        : null  
        } */}
        {/* <BreadcrumbSection/> */}
        <div id='cv-content' className="">
        <h1 className="text-center"></h1>   
        <div className="row">
                 <Link id='' to="/go"  ></Link>

          {Data && Data.map((element)=>(
        <div className="col-md-4 " key={element.id}>
          <Link id='Link-all' to={"/NewsView?Nid=" + element.id + "&Cid=" + element.category_id}>
          <div id='cv-card' className="card">
                <img  id='cv-card-image' src={element.image} className="card-img" alt="..."/>
                
                <div id='cv-card-body' className="card-body">
                <button id='cv-btnCatagory' className='btn btn-sm' type="button" >{element.category_name}</button>
                <p id='cv-card-title' className="card-title">{element.title.slice(0,150)}...</p>
                <p id="cv-card-date"><FiCalendar size={18} id="cv-logoCalendar" />{element.date.slice(0, 10)}</p>
                 {/* <Link id='btncvRead' className='btn overlay' type="button" to="/NewsView" ><IoArrowForwardCircleSharp size={50}/></Link> */}
                 </div>
                   
          </div>

          </Link>
          </div>

          ))}

        </div>
        </div> 
 
    </div>
  )
}

export default CategoryView
