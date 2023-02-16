import React from 'react'
import './categoryview.css';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuery } from '../Hooks';
import { BearerToken } from '../Tokens';




function CategoryView() {

  const [Data, setData] = useState([]);
  const {category_id} = useParams();
  const query = useQuery();
  const catid = query.get('id');
  const user_id = query.get('uid');
  const BToken = BearerToken();

  const loca = useLocation();
  console.log(loca);
  // test();
  function test() {

    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+BToken);

    var formdata = new FormData();
    formdata.append("access_key", "5670");
    formdata.append("category_id", catid);
    formdata.append("offset", "0");
    formdata.append("limit", "10");
    formdata.append("user_id", user_id);
    formdata.append("language_id", "14");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://news.wrteam.in/Api/get_news_by_category", requestOptions)
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
    <div id='cv-main'>
        <p>my corrent location is {loca.pathname}</p>
        {loca.pathname === `/CategoryView` ? 
        <button
        onClick={ () => alert('you are awesome')} >
          
          click me
        </button> 
        : null  
        }

        

        <div className="container">
        <h1 className="text-center"></h1>   
        <div className="row">
                 <Link id='' to="/go"  ></Link>

          {Data && Data.map((element)=>(
        <div className="col-md-3 my-3" key={element.id}>
          {console.log(element)}
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
