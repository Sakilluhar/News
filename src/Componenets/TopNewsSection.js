import React, { useState } from 'react'
import './Home.css'
import { useEffect } from 'react'

function TopNewsSection() {

  const [Data, setData] = useState([]);

  useEffect(()=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzM5MzAwNDksImlzcyI6Ik5ld3NBUFAiLCJleHAiOjE2NzY1MjIwNDksInN1YiI6Ik5ld3MgQVBQIEF1dGhlbnRpY2F0aW9uIn0.PcSpXqX6tLmFSC6-dfKvkPKwUxzrB_6ZGrgwnLDcmCQ");
    
    var formdata = new FormData();
    formdata.append("access_key", "5670");
    formdata.append("category_id", "8");
    formdata.append("subcategory_id", "1");
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
      setData(result.data)
    })
      .catch(error => console.log('error', error));
  },[])

  const tnshandleReadMore = () => {
    console.log('Read More');

  };

  const tnshandleCatagory = () => {
    console.log('Catagory');
  };

  return (
    <div>
      {Data && Data.length===0 ? null :(
        <>
        <div id='tns-head-main' className='d-flex justify-content-between'>
        <h4 id='tns-logo' >Top News</h4>
        <a href='/' id='tns-Viewmore'>View More</a>
      </div>
      <div id='tns-main' className=''>
        <div id='tns-left-cards'>
          <div id='top-news-card' className="card" onClick={tnshandleReadMore}>
            <img id='tns-news-image' src={Data[1].image} className="card-img" alt="..." />
            <div id='tns-text' className="card-img-overlay">
            <button id='btnTnsCatagory' className='btn' type="button">{Data[1].category_name}</button>
            <h6 id='tns-Title' className="card-text">{Data[1].title}</h6>
            </div>
          </div>

          <div id='top-news-card' className="card" onClick={tnshandleReadMore}>
            <img id='tns-news-image' src={Data[2].image} className="card-img" alt="..." />
            <div id='tns-text' className="card-img-overlay">
              <button id='btnTnsCatagory' className='btn' type="button" >{Data[2].category_name}</button>
              <h6 id='tns-Title' className="card-text">{Data[2].title}</h6>
            </div>
          </div>
        </div>

        <div id='top-news-card1' className="card" onClick={tnshandleReadMore}>
          <img id='tns-news-image1' src={Data[0].image} className="card-img" alt="..." />
          <div id='tns-text' className="card-img-overlay ">
            <button id='btnTnsCatagory' className='btn' type="button" onClick={tnshandleCatagory} >{Data[0].category_name}</button>
            <h4 id='tns-Title' className="">{Data[0].title}</h4>
          </div>
        </div>

        <div id='tns-left-cards'>
          <div id='top-news-card' className="card" onClick={tnshandleReadMore}>
            <img id='tns-news-image' src={Data[3].image} className="card-img" alt="..." />
            <div id='tns-text' className="card-img-overlay">
              <button id='btnTnsCatagory' className='btn' type="button" >{Data[3].category_name}</button>
              <h6 id='tns-Title' className="card-text">{Data[3].title}</h6>
            </div>
          </div>

          <div id='top-news-card' className="card" onClick={tnshandleReadMore}>
            <img id='tns-news-image' src={Data[4].image} className="card-img" alt="..." />
            <div id='tns-text' className="card-img-overlay">
              <button id='btnTnsCatagory' className='btn' type="button" >{Data[4].category_name}</button>
              <h6 id='tns-Title' className="card-text">{Data[4].title}</h6>
            </div>
          </div>
        </div>

      </div>
        </>
      )}
      
    </div>
  )
}

export default TopNewsSection