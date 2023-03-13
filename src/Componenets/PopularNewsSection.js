import React, { useState } from 'react'
import { useEffect } from 'react'

import './Home.css'

function PopularNewsSection() {

    const [Data , setData] = useState([]);

    useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzM5MzAwNDksImlzcyI6Ik5ld3NBUFAiLCJleHAiOjE2NzY1MjIwNDksInN1YiI6Ik5ld3MgQVBQIEF1dGhlbnRpY2F0aW9uIn0.PcSpXqX6tLmFSC6-dfKvkPKwUxzrB_6ZGrgwnLDcmCQ");

        var formdata = new FormData();
        formdata.append("access_key", "5670");
        formdata.append("language_id", "14");

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };

        fetch("https://news.wrteam.in/Api/get_breaking_news", requestOptions)
        .then(response => response.json())
        .then(result => {
            setData(result.data)
        })
        .catch(error => console.log('error', error));
    },[])

  return (
    <div>

        {Data.length === 0 ? "loading"
                :

      <div id='rns-PNews-main'>
                <nav id='rns-cat-nav' className="navbar">  
                       <h4 id='rns-nav-logo' ><b>Popular News</b></h4> 
                </nav>

                <div id='rns-PNews-card' className="card">
                    <img  id='rns-PNews-image' src={Data[0].image} className="card-img-top" alt="..."/>
                    <div className="PNews-card-body">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >Breaking News</button>
                    <h4 id='rns-PNews-card-text' className="card-text">{Data[0].title.slice(0,50)}...</h4>
                    </div>
                </div>
                

                <div id='rns-PNews-card' className="card">
                    <img  id='rns-PNews-image' src={Data[1].image} className="card-img-top" alt="..."/>
                    <div className="PNews-card-body">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >Breaking News</button>
                    <h4 id='rns-PNews-card-text' className="card-text">{Data[1].title.slice(0,50)}...</h4>
                    </div>
                </div>

                <div id='rns-PNews-card' className="card">
                    <img  id='rns-PNews-image' src={Data[2].image} className="card-img-top" alt="..."/>
                    <div className="PNews-card-body">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >Breaking News</button>
                    <h4 id='rns-PNews-card-text' className="card-text">{Data[2].title.slice(0,50)}...</h4>
                    </div>
                </div>

                <div id='rns-PNews-card' className="card">
                    <img  id='rns-PNews-image' src={Data[3].image} className="card-img-top" alt="..."/>
                    <div className="PNews-card-body">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >Breaking News</button>
                    <h4 id='rns-PNews-card-text' className="card-text">{Data[3].title.slice(0,50)}...</h4>
                    </div>
                </div>

            </div>
            }
    </div>
  )
}

export default PopularNewsSection
