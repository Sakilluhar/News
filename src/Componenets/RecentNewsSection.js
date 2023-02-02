import React, { useState } from 'react'
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import travel3_static_jpg from '../images/travel3_static.jpg';
import sports3_ronaldo_jpg from '../images/sports3_static.jpg';
import fashion3_static_jpg from '../images/fashion3_static.jpg';
import technology3_static_jpg from '../images/technology3_static.jpg';
import politics3_static_jpg from '../images/politics3_static.jpg';
import cars3_static_jpg from '../images/cars3_static.jpg';
import { Link } from 'react-router-dom';
import WeatherCard from './WeatherCard';
import { useEffect } from 'react';
import PopularNewsSection from './PopularNewsSection';
import TagsSection from './TagsSection';


function RecentNewsSection() {

    const [Data,setData] = useState([]);

    useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzM5MzAwNDksImlzcyI6Ik5ld3NBUFAiLCJleHAiOjE2NzY1MjIwNDksInN1YiI6Ik5ld3MgQVBQIEF1dGhlbnRpY2F0aW9uIn0.PcSpXqX6tLmFSC6-dfKvkPKwUxzrB_6ZGrgwnLDcmCQ");

        var formdata = new FormData();
        formdata.append("access_key", "5670");
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

        fetch("https://news.wrteam.in/Api/get_news", requestOptions)
        .then(response => response.json())
        .then(result => {
            setData(result.data)
        })
        .catch(error => console.log('error', error));
        },[])

    

  return (
    <div id='rns-main'>

        {/* -------------left main section------------------------------- */}

        {Data.length === 0 ? "loading"
            :

        <div id='rns-left-main' className="">

            <div id='rns-head-main' className=''>
            <h4 id='rns-main-logo'>Recent News</h4>
            <a href='/' id='rns-Viewmore'>View More</a>
            </div>

            <div id='card-pair'>
            <div id='rns-card' className="card">
                <img  id='rns-image' src={Data[0].image} className="card-img-top" alt="..."/>
                <div id='' className="card-img-overlay">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[0].category_name}</button>
                </div>
                <div id='rns-card-body' className="card-body">
                <h4 className="card-title">{Data[0].title.slice(0,70)}...</h4>
                <h7 id='rns-text' className="card-text" dangerouslySetInnerHTML={{__html: Data[0].description.slice(0,1000)}}></h7>
                
                </div>
                
                    <button id='btnrnsRead' className='btn overlay' type="button" ><IoArrowForwardCircleSharp size={50}/></button>
            </div>

            <div id='rns-card' className="card">
                <img  id='rns-image' src={Data[1].image} className="card-img-top" alt="..."/>
                <div id='' className="card-img-overlay">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[1].category_name}</button>
                </div>
                <div className="card-body">
                <h4 className="card-title">{Data[1].title.slice(0,70)}...</h4>
                    <h7 id='rns-text' className="card-text" dangerouslySetInnerHTML={{__html: Data[1].description.slice(0,100)}}></h7>
                
                </div>    
                    <button id='btnrnsRead' className='btn overlay' type="button" ><IoArrowForwardCircleSharp size={50}/></button>
            </div>
            </div>

            <div id='card-pair'>
            <div id='rns-card' className="card">
                <img  id='rns-image' src={Data[2].image} className="card-img-top" alt="..."/>
                <div id='' className="card-img-overlay">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[2].category_name}</button>
                </div>
                <div className="card-body">
                <h4 className="card-title">{Data[2].title.slice(0,70)}...</h4>
                    <h7 id='rns-text' className="card-text" dangerouslySetInnerHTML={{__html: Data[2].description.slice(0,160)}}></h7>
                </div>    
                    <button id='btnrnsRead' className='btn overlay' type="button" ><IoArrowForwardCircleSharp size={50}/></button>
            </div>
            

            <div id='rns-card' className="card">
                <img  id='rns-image' src={Data[3].image} className="card-img-top" alt="..."/>
                <div id='' className="card-img-overlay">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[3].category_name}</button>
                </div>
                <div className="card-body">
                <h4 className="card-title">{Data[3].title.slice(0,70)}...</h4>
                    <h7 id='rns-text' className="card-text" dangerouslySetInnerHTML={{__html: Data[3].description.slice(0,230)}}></h7>
                </div>    
                    <button id='btnrnsRead' className='btn overlay' type="button" ><IoArrowForwardCircleSharp size={50}/></button>
            </div>
            
            </div>

            <div id='card-pair'>
            <div id='rns-card' className="card">
                <img  id='rns-image' src={Data[4].image} className="card-img-top" alt="..."/>
                <div id='' className="card-img-overlay">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[4].category_name}</button>
                </div>
                <div className="card-body">
                <h4 className="card-title">{Data[4].title.slice(0,70)}...</h4>
                    <h7 id='rns-text' className="card-text" dangerouslySetInnerHTML={{__html: Data[4].description.slice(0,160)}}></h7>
                
                </div>    
                    <button id='btnrnsRead' className='btn overlay' type="button" ><IoArrowForwardCircleSharp size={50}/></button>
            </div>

            <div id='rns-card' className="card">
                <img  id='rns-image' src={Data[5].image} className="card-img-top" alt="..."/>
                <div id='' className="card-img-overlay">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[5].category_name}</button>
                </div>
                <div className="card-body">
                <h4 className="card-title">{Data[5].title.slice(0,70)}...</h4>
                    <h7 id='rns-text' className="card-text" dangerouslySetInnerHTML={{__html: Data[5].description.slice(0,160)}}></h7>
                
                </div>    
                    <button id='btnrnsRead' className='btn overlay' type="button" ><IoArrowForwardCircleSharp size={50}/></button>
            </div>
            </div>
            
        </div>

        }
        {/* ----------------------------right main section------------------------------- */}

        <div id='rns-right-main' className=''>
            <div id='rns-Catagory-main'>
                <nav id='rns-cat-nav' className="navbar">  
                       <h4 id='rns-nav-logo' ><b>Catagories</b></h4> 
                </nav>

                <div>
                    <div id='rns-cat-card' className="card" >
                            <img id='rns-cat-image' src={travel3_static_jpg} className="card-img" alt="..."/>
                        <div id='rns-cat-text' className="card-img-overlay">
                            <h3 id='cat-text' className="card-text">Travel</h3>
                            {/* <button id='btnrns-cat-more' className='btn' type="button" ><IoArrowForwardCircleSharp size={40}/></button> */}
                            <Link id='btnrns-cat-more' to='/NewsView' className='btn' type="button" ><IoArrowForwardCircleSharp size={40}/></Link>
                        </div>
                    </div>
                </div>

                <div>
                    <div id='rns-cat-card' className="card" >
                            <img id='rns-cat-image' src={sports3_ronaldo_jpg} className="card-img" alt="..."/>
                        <div id='rns-cat-text' className="card-img-overlay">
                            <h3 id='cat-text' className="card-text">Sports</h3> 
                            {/* <button id='btnrns-cat-more' className='btn' type="button" ><IoArrowForwardCircleSharp size={40}/></button> */}
                            <Link id='btnrns-cat-more' to='/CategoryView' className='btn' type="button" ><IoArrowForwardCircleSharp size={40}/></Link>
                        </div>
                    </div>
                </div>

                <div>
                    <div id='rns-cat-card' className="card" >
                            <img id='rns-cat-image' src={fashion3_static_jpg} className="card-img" alt="..."/>
                        <div id='rns-cat-text' className="card-img-overlay">
                            <h3 id='cat-text' className="card-text">Fashion</h3>
                            <button id='btnrns-cat-more' className='btn' type="button" ><IoArrowForwardCircleSharp size={40}/></button>
                        </div>
                    </div>
                </div>

                <div>
                    <div id='rns-cat-card' className="card" >
                            <img id='rns-cat-image' src={technology3_static_jpg} className="card-img" alt="..."/>
                        <div id='rns-cat-text' className="card-img-overlay">
                            <h3 id='cat-text' className="card-text">Technology</h3>
                            <button id='btnrns-cat-more' className='btn' type="button" ><IoArrowForwardCircleSharp size={40}/></button>
                        </div>
                    </div>
                </div>

                <div>
                    <div id='rns-cat-card' className="card" >
                            <img id='rns-cat-image' src={politics3_static_jpg} className="card-img" alt="..."/>
                        <div id='rns-cat-text' className="card-img-overlay">
                            <h3 id='cat-text' className="card-text">Politics</h3>
                            <button id='btnrns-cat-more' className='btn' type="button" ><IoArrowForwardCircleSharp size={40}/></button>
                        </div>
                    </div>
                </div>

                <div>
                    <div id='rns-cat-card' className="card" >
                            <img id='rns-cat-image' src={cars3_static_jpg} className="card-img" alt="..."/>
                        <div id='rns-cat-text' className="card-img-overlay">
                            <h3 id='cat-text' className="card-text">Cars</h3>
                            <button id='btnrns-cat-more' className='btn' type="button" ><IoArrowForwardCircleSharp size={40}/></button>
                        </div>
                    </div>
                </div>
            </div>


            {/* ------------------------------- Weather forcast -------------------------------- */}

            <WeatherCard/>

           <PopularNewsSection/>

            <TagsSection/>

        </div>
    </div>
  )
}

export default RecentNewsSection
