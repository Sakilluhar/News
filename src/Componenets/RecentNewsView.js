import React from 'react'
import './recentnewsview.css';
import { FiCalendar } from "react-icons/fi";
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuery } from '../Hooks';
import { ApiWrt, BearerToken } from '../Tokens';


function RecentNewsView() {


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
        myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzY1MjUzMjksImlzcyI6Ik5ld3NBUFAiLCJleHAiOjE2NzkxMTczMjksInN1YiI6Ik5ld3MgQVBQIEF1dGhlbnRpY2F0aW9uIn0.QQb22oSYt2QKa_vXlywhSOVFONYbzLThps7T_Q_VfFg");

        var formdata = new FormData();
        formdata.append("access_key", "5670");
        formdata.append("offset", "0");
        formdata.append("limit", "12");
        formdata.append("user_id", "1");
        formdata.append("language_id", "14");

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };

    fetch(`${ApiUrl}/get_news`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setData(result.data)
      })
      .catch(error => console.log('error', error));
    }


  useEffect(()=>{
    test()
    
  },[])
  return (
    <div id='rnv-main'>
    
        <div id='rnv-content' className="">
        <h1 className="text-center"></h1>   
        <div className="row">
                 <Link id='' to="/go"  ></Link>

          {Data && Data.map((element)=>(
        <div className="col-md-4 " key={element.id}>
          <Link id='Link-all' to={"/NewsView?Nid=" + element.id + "&Cid=" + element.category_id}>
          <div id='rnv-card' className="card">
                <img  id='rnv-card-image' src={element.image} className="card-img" alt="..."/>
                
                <div id='rnv-card-body' className="card-body">
                <button id='rnv-btnCatagory' className='btn btn-sm' type="button" >{element.category_name}</button>
                <h5 id='rnv-card-title' className="card-title">{element.title.slice(0,150)}...</h5>
                <p id="rnv-card-date"><FiCalendar size={18} id="rnv-logoCalendar" />{element.date.slice(0, 10)}</p>
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

export default RecentNewsView
