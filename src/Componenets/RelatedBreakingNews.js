import { useState,useEffect } from 'react';
import './relatedbreakingnews.css'
import { ApiWrt, BearerToken } from '../Tokens';

import { useQuery } from '../Hooks';
import { Link } from 'react-router-dom';

import React from 'react'

function RelatedBreakingNews() {
  const ApiUrl = ApiWrt();
  const [Data, setData] = useState([]);
  const BToken = BearerToken();
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + BToken);

    var formdata = new FormData();
    formdata.append("access_key", "5670");
    formdata.append("language_id", "14");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch(`${ApiUrl}/get_breaking_news`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setData(result.data)
      })
      .catch(error => console.log('error', error));
  }, [])


  return (
    <div>
    {Data.length === 0 ? "loading"
              :

    <div id='rbn-main'>
              <nav id='rbn-cat-nav' className="navbar">  
                     <h4 id='nav-logo' ><b>Related News</b></h4> 
              </nav>
              {Data && Data.map((element)=>(
                <Link id='Link-all' to={"/Breaking_NewsView?BNid=" + element.id}> 
              <div id='rbn-card' className="card"  >
                
                  <img  id='rbn-image' src={element.image} className="card-img-top" alt="..."/>
                  <div id='rbn-card-body' className="rbn-card-body">
                  <Link id='btnrbnCatagory' className='btn btn-sm' type="button" to='/BreakingNews'>Breaking News</Link>
                  <h6 id='rbn-card-text' className="card-text">{element.title.slice(0,40)}...</h6>
                  </div>
              
              </div>   
              </Link>           
              ))}

          </div>
          }
  </div>
  )
}

export default RelatedBreakingNews
