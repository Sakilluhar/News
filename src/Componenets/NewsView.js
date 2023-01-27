import React from 'react'
import technology3_static from '../images/technology3_static.jpg';
import './newsview.css';
import travel3_static_jpg from '../images/travel3_static.jpg';
import sports3_ronaldo_jpg from '../images/sports3_static.jpg';
import fashion3_static_jpg from '../images/fashion3_static.jpg';
import technology3_static_jpg from '../images/technology3_static.jpg';
import politics3_static_jpg from '../images/politics3_static.jpg';
import cars3_static_jpg from '../images/cars3_static.jpg';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import { AiOutlineLike,AiTwotoneLike,AiOutlineDislike,AiTwotoneDislike } from 'react-icons/ai';
import { MdOutlineComment } from 'react-icons/md';

import { BsSun } from 'react-icons/bs';
import breakingNews2_jpg from '../images/earthImage.png';


function NewsView() {
  return (
    <div id='nv-main'>
        <div id='nv-page'>
            <div id='nv-body'>
        <h1 id='nv-title'>Congress's AK Antony's Son Quits Party, Cites Post On BBC Series On PM Modi</h1>
      <img id='nv-image' src={technology3_static} alt="..." />

        <nav id='nv-functions' class="">
            
            <a id='nv-function' class="" href="#"><AiOutlineLike size={25}/></a>
            <a id='nv-function' class="" href="#"><AiOutlineDislike size={25}/></a>
            <a id='nv-function' class="" href="#"><MdOutlineComment size={25}/></a>
            
        </nav>
        <p id='nv-description'>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md</p>
        
        </div>

        <div id='nv-right-section'>

        <div id='rns-weather-card' className="card" >
                    <img id='rns-weather-image' src={breakingNews2_jpg} className="card-img" alt="..."/>
                <div id='weather-main-text' className="card-img-overlay">
                    <h4 id='weather-logo' className="card-text">Weather Forecast</h4>
                    <div id='wcard-body'>
                        <div id='wcard-left-body'>
                            <h1 id='temp-wcard'><b>32'c</b></h1>
                            <h4 id='location-wcard'>Bhuj, Gujrat, India</h4>
                            <h6 id='day-Wtype-wcard'>Wednesday, sunny</h6>
                        </div>
                        <h1><BsSun size={70}/></h1>
                    </div>

                    

                    <div id='wcard-footer' className="card-footer">
                        <div id='wcard-footer-pairs'><h5>thursday</h5>
                        <div>
                        <h5>27'C <BsSun/></h5>
                        </div></div>
                        <div><h5>friday</h5>
                        <div>
                        <h5>27'C<BsSun/></h5>
                        </div></div>
                        <div><h5>saturday</h5>
                        <div></div>
                        <h5>27'C <BsSun/></h5>
                        </div>
                        <div><h5>sunday</h5>
                        <div></div>
                        <h5>27'C <BsSun/></h5>
                        </div>
                        <div><h5>monday</h5>
                        <div></div>
                        <h5>27'C <BsSun/></h5>
                        </div>
                        <div><h5>tuseday</h5>
                        <div>
                        <h5>27'C <BsSun/></h5>
                        </div></div>
                        
                    </div>
                    
                </div>
            </div>

        <div id='rns-Catagory-main'>
                <nav id='rns-cat-nav' className="navbar">  
                       <h4 id='rns-nav-logo' ><b>Catagories</b></h4> 
                </nav>

                <div>
                    <div id='rns-cat-card' className="card" >
                            <img id='rns-cat-image' src={travel3_static_jpg} className="card-img" alt="..."/>
                        <div id='rns-cat-text' className="card-img-overlay">
                            <h3 id='cat-text' className="card-text">Travel</h3>
                            <button id='btnrns-cat-more' className='btn' type="button" ><IoArrowForwardCircleSharp size={40}/></button>
                        </div>
                    </div>
                </div>

                <div>
                    <div id='rns-cat-card' className="card" >
                            <img id='rns-cat-image' src={sports3_ronaldo_jpg} className="card-img" alt="..."/>
                        <div id='rns-cat-text' className="card-img-overlay">
                            <h3 id='cat-text' className="card-text">Sports</h3>
                            <button id='btnrns-cat-more' className='btn' type="button" ><IoArrowForwardCircleSharp size={40}/></button>
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
        </div>

        </div>
    </div>
  )
}

export default NewsView