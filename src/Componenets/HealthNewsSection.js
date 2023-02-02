import React, { useEffect } from 'react'
import { useState } from 'react';


function HealthNewsSection() {

    const [Data, setData] = useState([]);

    useEffect(()=>{

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzM5MzAwNDksImlzcyI6Ik5ld3NBUFAiLCJleHAiOjE2NzY1MjIwNDksInN1YiI6Ik5ld3MgQVBQIEF1dGhlbnRpY2F0aW9uIn0.PcSpXqX6tLmFSC6-dfKvkPKwUxzrB_6ZGrgwnLDcmCQ");

        var formdata = new FormData();
        formdata.append("access_key", "5670");
        formdata.append("category_id", "5");
        formdata.append("offset", "0");
        formdata.append("limit", "10");
        formdata.append("user_id", "1");
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
            setData(result.data);
        })
        .catch(error => console.log('error', error));
  
        
    },[])



  return (
    <div>
        <div id='hns-head'>
            <div id='hns-head-main' className=''>
            <h4 id='hns-main-logo'>Health News</h4>
            <a href='/' id='hns-Viewmore'>View More</a>
            </div>
            </div>
    
    {Data.length === 0 ? "loading"
            :
    <div id='hns-main'>
        
        <div id='hns-main-card' className="card" >
            <img id='hns-main-image' src={Data[0].image} className="card-img" alt={Data[0].image_data.other_image}/>
            <div id='hns-main-body' className="card-img-overlay">
            <button id='btnbnsCatagory' className='btn' type="button" >{Data[0].category_name}</button>
              <h5 id='hns-main-text' className="card-text">{Data[0].title}</h5>
            </div>
        </div>
        

    
        
            <div id='hns-center-col'>
            <div id='hns-card' className="card">
                        <img  id='hns-card-image' src={Data[1].image} className="card-img-top" alt={Data[1].image_data.other_image}/>
                        <div className="hns-card-body">
                            <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[1].category_name}</button>
                            <h5 id='hns-card-text' className="card-text">{Data[1].title.slice(0,60)}...</h5>
                        </div>
                    </div>

                    <div id='hns-card' className="card">
                        <img  id='hns-card-image' src={Data[3].image} className="card-img-top" alt={Data[3].image_data.other_image}/>
                        <div className="hns-card-body">
                            <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[3].category_name}</button>
                            <h5 id='hns-card-text' className="card-text">{Data[3].title.slice(0,60)}...</h5>
                        </div>
                    </div>

                    <div id='hns-card' className="card">
                        <img  id='hns-card-image' src={Data[5].image} className="card-img-top" alt={Data[5].image_data.other_image}/>
                        <div className="hns-card-body">
                            <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[5].category_name}</button>
                            <h5 id='hns-card-text' className="card-text">{Data[5].title.slice(0,60)}...</h5>
                        </div>
                    </div>

                    <div id='hns-card' className="card">
                        <img  id='hns-card-image' src={Data[7].image} className="card-img-top" alt={Data[7].image_data.other_image}/>
                        <div className="hns-card-body">
                            <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[7].category_name}</button>
                            <h5 id='hns-card-text' className="card-text">{Data[7].title.slice(0,60)}...</h5>
                        </div>
                    </div>
            </div>
            <div id='hns-right-col'>
            <div id='hns-card' className="card">
                        <img  id='hns-card-image' src={Data[2].image} className="card-img-top" alt={Data[2].image_data.other_image}/>
                        <div className="hns-card-body">
                            <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[2].category_name}</button>
                            <h5 id='hns-card-text' className="card-text">{Data[2].title.slice(0,60)}...</h5>
                        </div>
                    </div>

                    <div id='hns-card' className="card">
                        <img  id='hns-card-image' src={Data[4].image} className="card-img-top" alt={Data[4].image_data.other_image}/>
                        <div className="hns-card-body">
                            <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[4].category_name}</button>
                            <h5 id='hns-card-text' className="card-text">{Data[4].title.slice(0,60)}...</h5>
                        </div>
                    </div>

                    <div id='hns-card' className="card">
                        <img  id='hns-card-image' src={Data[6].image} className="card-img-top" alt={Data[6].image_data.other_image}/>
                        <div className="hns-card-body">
                            <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[6].category_name}</button>
                            <h5 id='hns-card-text' className="card-text">{Data[6].title.slice(0,60)}...</h5>
                        </div>
                    </div>

                    <div id='hns-card' className="card">
                        <img  id='hns-card-image' src={Data[8].image} className="card-img-top" alt={Data[8].image_data.other_image}/>
                        <div className="hns-card-body">
                            <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[8].category_name}</button>
                            <h5 id='hns-card-text' className="card-text">{Data[8].title.slice(0,60)}...</h5>
                        </div>
                    </div>
            </div>

    </div>}
    </div>
  )
}

export default HealthNewsSection
