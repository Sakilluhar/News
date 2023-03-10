import React, { useState } from 'react';
import './Home.css';
import breakingNews2_jpg from '../images/earthImage.png';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { BearerToken } from '../Tokens';
import { Link } from 'react-router-dom';



function BreakingNewsSection() {

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

    // fetch("https://news.wrteam.in/Api/get_breaking_news", requestOptions)
    fetch("http://news.thewrteam.in/Api/get_breaking_news", requestOptions)
      .then(response => response.json())
      .then(result => {
        setData(result.data)
      })
      .catch(error => console.log('error', error));
  }, [])

  return (
    <>
      <div id='bns-main'>
        <div id='bns-allCards' className=''>

          <div id='bns-main-card' className="card" >
            <img id='bns-main-image' src={breakingNews2_jpg} className="card-img" alt="..." />
            <div id='bns-main-text' className="card-img-overlay">
              <p id='bns-logo-col' className="card-text"><b>Breacking <br /> News</b></p>
              <p id='bns-logo-row' className="card-text"><b>Breacking News</b></p>
              <Link id='btnbnsViewAll' className='btn' type="button" to='/BreakingNews'>VIEW ALL</Link>
            </div>
          </div>

          <div id='bns-rest-cards'>

            {Data && Data.map((element) => (
              <div id='bns-card' className="card" key={element.id}>
                <img id='bns-image' src={element.image} className="card-img-top" alt="..." />
                <div id='bns-card-body' className="card-body">
                  <Link id='btnbnsCatagory' className='btn btn-sm' type="button" to='/BreakingNews'>Breaking News</Link>
                  <h5 id='bns-card-text' className="">{element.title.slice(0, 50)}...</h5>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>


      <div id='bns-main-mobile'>
        <div id='bns-allCards' className=''>

          <div id='bns-main-card' className="card" >
            <img id='bns-main-image' src={breakingNews2_jpg} className="card-img" alt="..." />
            <div id='bns-main-text' className="card-img-overlay">
              <p id='' className="card-text"><b>Breacking <br /> News</b></p>
              <button id='btnbnsCatagory' className='btn' type="button" >VEIW ALL</button>
            </div>
          </div>

          <div id='bns-rest-cards'>

            {Data && Data.map((element) => (
              <div id='bns-card' className="card" key={element.id}>
                <img id='bns-image' src={element.image} className="card-img-top" alt="..." />
                <div id='bns-card-body' className="card-body">
                  <button id='btnbnsCatagory' className='btn btn-sm' type="button" >Breaking News</button>
                  <h5 id='bns-card-text' className="">{element.title.slice(0, 60)}...</h5>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </>

  )
}

export default BreakingNewsSection
