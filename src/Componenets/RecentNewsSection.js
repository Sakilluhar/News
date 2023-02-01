import React, { useState } from 'react'
import entertainment1_jpg from '../images/entertainment1.jpg'
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
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >Technology</button>
                </div>
                <div className="card-body">
                <h4 className="card-title">Traveling makes you more inteligent and more Energetic</h4>
                    <p id='rns-text' className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis urna non neque dignissim sollicitudin. In convallis enim at est tristique, vitae tincidunt metus bibendum. Pellentesque id imperdiet magna...</p>
                
                </div>
                
                    <button id='btnrnsRead' className='btn overlay' type="button" ><IoArrowForwardCircleSharp size={50}/></button>
            </div>

            <div id='rns-card' className="card">
                <img  id='rns-image' src={Data[1].image} className="card-img-top" alt="..."/>
                <div id='' className="card-img-overlay">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >Technology</button>
                </div>
                <div className="card-body">
                <h4 className="card-title">Traveling makes you more inteligent and more Energetic</h4>
                    <p id='rns-text' className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis urna non neque dignissim sollicitudin. In convallis enim at est tristique, vitae tincidunt metus bibendum. Pellentesque id imperdiet magna...</p>
                
                </div>    
                    <button id='btnrnsRead' className='btn overlay' type="button" ><IoArrowForwardCircleSharp size={50}/></button>
            </div>
            </div>

            <div id='card-pair'>
            <div id='rns-card' className="card">
                <img  id='rns-image' src={Data[2].image} className="card-img-top" alt="..."/>
                <div id='' className="card-img-overlay">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >Technology</button>
                </div>
                <div className="card-body">
                <h4 className="card-title">Traveling makes you more inteligent and more Energetic</h4>
                    <p id='rns-text' className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis urna non neque dignissim sollicitudin. In convallis enim at est tristique, vitae tincidunt metus bibendum. Pellentesque id imperdiet magna...</p>
                
                </div>    
                    <button id='btnrnsRead' className='btn overlay' type="button" ><IoArrowForwardCircleSharp size={50}/></button>
            </div>

            <div id='rns-card' className="card">
                <img  id='rns-image' src={Data[3].image} className="card-img-top" alt="..."/>
                <div id='' className="card-img-overlay">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >Technology</button>
                </div>
                <div className="card-body">
                <h4 className="card-title">Traveling makes you more inteligent and more Energetic</h4>
                    <p id='rns-text' className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis urna non neque dignissim sollicitudin. In convallis enim at est tristique, vitae tincidunt metus bibendum. Pellentesque id imperdiet magna...</p>
                
                </div>    
                    <button id='btnrnsRead' className='btn overlay' type="button" ><IoArrowForwardCircleSharp size={50}/></button>
            </div>
            </div>

            <div id='card-pair'>
            <div id='rns-card' className="card">
                <img  id='rns-image' src={Data[4].image} className="card-img-top" alt="..."/>
                <div id='' className="card-img-overlay">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >Technology</button>
                </div>
                <div className="card-body">
                <h4 className="card-title">Traveling makes you more inteligent and more Energetic</h4>
                    <p id='rns-text' className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis urna non neque dignissim sollicitudin. In convallis enim at est tristique, vitae tincidunt metus bibendum. Pellentesque id imperdiet magna...</p>
                
                </div>    
                    <button id='btnrnsRead' className='btn overlay' type="button" ><IoArrowForwardCircleSharp size={50}/></button>
            </div>

            <div id='rns-card' className="card">
                <img  id='rns-image' src={entertainment1_jpg} className="card-img-top" alt="..."/>
                <div id='' className="card-img-overlay">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >Technology</button>
                </div>
                <div className="card-body">
                <h4 className="card-title">Traveling makes you more inteligent and more Energetic</h4>
                    <p id='rns-text' className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis urna non neque dignissim sollicitudin. In convallis enim at est tristique, vitae tincidunt metus bibendum. Pellentesque id imperdiet magna...</p>
                
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

            <div id='rns-PNews-main'>
                <nav id='rns-cat-nav' className="navbar">  
                       <h4 id='rns-nav-logo' ><b>Popular News</b></h4> 
                </nav>

                
                <div id='rns-PNews-card' className="card">
                    <img  id='rns-PNews-image' src={entertainment1_jpg} className="card-img-top" alt="..."/>
                    <div className="PNews-card-body">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >Technology</button>
                    <h4 id='rns-PNews-card-text' className="card-text">What we know about apple watch series 8</h4>
                    </div>
                </div>
                

                <div id='rns-PNews-card' className="card">
                    <img  id='rns-PNews-image' src={entertainment1_jpg} className="card-img-top" alt="..."/>
                    <div className="PNews-card-body">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >Technology</button>
                    <h4 id='rns-PNews-card-text' className="card-text">What we know about apple watch series 8</h4>
                    </div>
                </div>

                <div id='rns-PNews-card' className="card">
                    <img  id='rns-PNews-image' src={entertainment1_jpg} className="card-img-top" alt="..."/>
                    <div className="PNews-card-body">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >Technology</button>
                    <h4 id='rns-PNews-card-text' className="card-text">What we know about apple watch series 8</h4>
                    </div>
                </div>

                <div id='rns-PNews-card' className="card">
                    <img  id='rns-PNews-image' src={entertainment1_jpg} className="card-img-top" alt="..."/>
                    <div className="PNews-card-body">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >Technology</button>
                    <h4 id='rns-PNews-card-text' className="card-text">What we know about apple watch series 8</h4>
                    </div>
                </div>

            </div>

            <div id='rns-tags-main'>
                <nav id='rns-cat-nav' className="navbar">  
                       <h4 id='rns-nav-logo' ><b>Tags</b></h4> 
                </nav>
                <div id='tags-tag'>
                <button id='btnTags' className='btn btn-outline-dark'>Fashion</button>
                <button id='btnTags' className='btn btn-outline-dark'>Corona</button>
                <button id='btnTags' className='btn btn-outline-dark'>Business</button>
                <button id='btnTags' className='btn btn-outline-dark'>Sports</button>
                <button id='btnTags' className='btn btn-outline-dark'>Nature</button>
                <button id='btnTags' className='btn btn-outline-dark'>Story</button>
                <button id='btnTags' className='btn btn-outline-dark'>Horror</button>
                <button id='btnTags' className='btn btn-outline-dark'>Knowledgebase</button>
                </div>
                
            </div>


        </div>
    </div>
  )
}

export default RecentNewsSection
