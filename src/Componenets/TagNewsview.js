import React from 'react'
import '../CSS/tagnewsview.css';
import { FiCalendar } from "react-icons/fi";
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuery } from '../Hooks';
import { ApiWrt, BearerToken } from '../Tokens';


function TagNewsview() {

    const [Data, setData] = useState([]);
    const query = useQuery();
    const Tid = query.get('Tid');
    const BToken = BearerToken();
    const ApiUrl = ApiWrt();
  
    const loca = useLocation();
    // window.onnload = test(); 
    // test();
    
  
    useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+BToken);
        
        var formdata = new FormData();
        formdata.append("access_key", "5670");
        formdata.append("user_id", localStorage.getItem('user') !== null  ? JSON.parse(localStorage.getItem('user')).data.id : "1");
        formdata.append("tag_id", Tid);
        formdata.append("language_id", "14");
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
        
        fetch(`${ApiUrl}/get_news_by_tag`, requestOptions)

          .then(response => response.json())
          .then(result => {
            setData(result.data);
          })
          .catch(error => console.log('error', error));
      },[])
  
    
  return (
    <div>
        
        <div id='ts-main'>
        <div id='ts-content' className="">
        <h1 className="text-center"></h1>   
        <div className="row">
                 <Link id='' to="/go"  ></Link>

          {Data && Data.map((element)=>(
        <div className="col-md-4 " key={element.id}>
          <Link id='Link-all' to={"/NewsView?Nid=" + element.id + "&Cid=" + element.category_id}>
          <div id='ts-card' className="card">
                <img  id='ts-card-image' src={element.image} className="card-img" alt="..."/>
                
                <div id='ts-card-body' className="card-body">
                <button id='ts-btnCatagory' className='btn btn-sm' type="button" >{element.category_name}</button>
                <h5 id='ts-card-title' className="card-title">{element.title.slice(0,150)}...</h5>
                <p id="ts-card-date"><FiCalendar size={18} id="ts-logoCalendar" />{element.date.slice(0, 10)}</p>
                 {/* <Link id='btncvRead' className='btn overlay' type="button" to="/NewsView" ><IoArrowForwardCircleSharp size={50}/></Link> */}
                 </div>
                   
          </div>

          </Link>
          </div>

          ))}

        </div>
        </div> 
 
    </div>
      
    </div>
  )
}

export default TagNewsview
