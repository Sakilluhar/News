import React from 'react'
import tech1_jpg from '../images/tech1.jpg'
import sports1_jpg from '../images/sports1.jpg'
import photography1_jpg from '../images/photography1.jpg'
import entertainment1_jpg from '../images/entertainment1.jpg'
import food1_jpg from '../images/food1.jpg'
import './Home.css'

function TopNewsSection() {

  const tnshandleReadMore = () => {
    console.log('Read More');

  };

  const tnshandleCatagory = () => {
    console.log('Catagory');
  };

  return (
    <div>
      <div id='tns-head-main' className='d-flex justify-content-between'>
        <h4 id='tns-logo' >Top News</h4>
        <a href='/' id='tns-Viewmore'>View More</a>
      </div>
      <div id='tns-main' className=''>
        <div id='tns-left-cards'>
          <div id='top-news-card' className="card" onClick={tnshandleReadMore}>
            <img id='tns-news-image' src={tech1_jpg} className="card-img" alt="..." />
            <div id='tns-text' className="card-img-overlay">
            <button id='btnTnsCatagory' className='btn' type="button">Technology</button>
            <h6 id='tns-Title' className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h6>
            </div>
          </div>

          <div id='top-news-card' className="card" onClick={tnshandleReadMore}>
            <img id='tns-news-image' src={sports1_jpg} className="card-img" alt="..." />
            <div id='tns-text' className="card-img-overlay">
              <button id='btnTnsCatagory' className='btn' type="button" >Sports</button>
              <h6 id='tns-Title' className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h6>
            </div>
          </div>
        </div>

        <div id='top-news-card1' className="card" onClick={tnshandleReadMore}>
          <img id='tns-news-image1' src={photography1_jpg} className="card-img" alt="..." />
          <div id='tns-text' className="card-img-overlay ">
            <button id='btnTnsCatagory' className='btn' type="button" onClick={tnshandleCatagory} >Photography</button>
            <h4 id='tns-Title' className="">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h4>
          </div>
        </div>

        <div id='tns-left-cards'>
          <div id='top-news-card' className="card" onClick={tnshandleReadMore}>
            <img id='tns-news-image' src={entertainment1_jpg} className="card-img" alt="..." />
            <div id='tns-text' className="card-img-overlay">
              <button id='btnTnsCatagory' className='btn' type="button" >Entertainment</button>
              <h6 id='tns-Title' className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h6>
            </div>
          </div>

          <div id='top-news-card' className="card" onClick={tnshandleReadMore}>
            <img id='tns-news-image' src={food1_jpg} className="card-img" alt="..." />
            <div id='tns-text' className="card-img-overlay">
              <button id='btnTnsCatagory' className='btn' type="button" >Food  </button>
              <h6 id='tns-Title' className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h6>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TopNewsSection