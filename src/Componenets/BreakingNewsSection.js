import React, { useState } from 'react';
import './Home.css';
import breakingNews2_jpg from '../images/earthImage.png';
import { IoIosArrowDropleftCircle,IoIosArrowDroprightCircle } from 'react-icons/io';
import { useEffect } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";


function BreakingNewsSection() {

  const [Data, setData] = useState([]);

useEffect(()=>{
  var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzM5MzAwNDksImlzcyI6Ik5ld3NBUFAiLCJleHAiOjE2NzY1MjIwNDksInN1YiI6Ik5ld3MgQVBQIEF1dGhlbnRpY2F0aW9uIn0.PcSpXqX6tLmFSC6-dfKvkPKwUxzrB_6ZGrgwnLDcmCQ");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://news.wrteam.in/Api/get_breaking_news?access_key=5670&language_id=14", requestOptions)
  .then(response => response.json())
  .then(result => {
    setData(result.data);
  })
  
  .catch(error => console.log('error', error));
},[])

  return (
    <>  
    <div id='bns-main'>  
    <div id='bns-allCards' className=''>

    <div id='bns-main-card' className="card" >
            <img id='bns-main-image' src={breakingNews2_jpg} className="card-img" alt="..."/>
            <div id='bns-main-text' className="card-img-overlay">
              <h1 id='' className="card-text"><b>Breacking <br/> News</b></h1>
            <button id='btnbnsCatagory' className='btn' type="button" >VEIW ALL</button>
            </div>
    </div>

    <div id='bns-rest-cards'>

    {/* <Swiper id='bns-swiper'
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"

      >{Data && Data.map((element)=>(
        <SwiperSlide><div id='bns-card' className="card">
        <img  id='bns-image' src={element.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <button id='btnbnsCatagory' className='btn btn-sm' type="button" >Technology</button>
          <h5 id='bns-card-text' className="card-text">What we know about apple watch series 8</h5>
          </div>
        </div>
        </SwiperSlide>
        ))}
      </Swiper> */}

      
    {Data && Data.map((element)=>(
    <div id='bns-card' className="card" key={element.id}>
        <img  id='bns-image' src={element.image} className="card-img-top" alt="..."/>
        <div id='bns-card-body' className="card-body">
        <button id='btnbnsCatagory' className='btn btn-sm' type="button" >Technology</button>
        <h5 id='bns-card-text' className="">{element.title.slice(0, 30)}...</h5>
        </div>
    </div>
    ))}
    </div>

    </div>


    <div id='bns-np-btns'>
    <button id='btnbnsNP' className='btn btn-sm' type="button" ><IoIosArrowDropleftCircle  size={40}/></button>
    <button id='btnbnsNP' className='btn btn-sm' type="button" ><IoIosArrowDroprightCircle size={40}/></button>
    </div>
    </div>
    
    </>

  )
}

export default BreakingNewsSection
