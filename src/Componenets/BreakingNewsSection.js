import React from 'react';
import './Home.css';
import entertainment1_jpg from '../images/entertainment1.jpg';
import breakingNews2_jpg from '../images/earthImage.png';
import { IoIosArrowDropleftCircle,IoIosArrowDroprightCircle } from 'react-icons/io';


function BreakingNewsSection() {
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

    <div id='bns-card' class="card">
        <img  id='bns-image' src={entertainment1_jpg} class="card-img-top" alt="..."/>
        <div class="card-body">
        <button id='btnbnsCatagory' className='btn btn-sm' type="button" >Technology</button>
        <h5 id='bns-card-text' class="card-text">What we know about apple watch series 8</h5>
        </div>
    </div>

    <div id='bns-card' class="card">
        <img id='bns-image' src={entertainment1_jpg} class="card-img-top" alt="..."/>
        <div class="card-body">
        <button id='btnbnsCatagory' className='btn btn-sm' type="button" >News</button>
        <h5 id='bns-card-text' class="card-text">NFTs and cryptos are 100% based on greater fool theory</h5>
        </div>
    </div>

    <div id='bns-card' class="card">
        <img id='bns-image' src={entertainment1_jpg} class="card-img-top" alt="..."/>
        <div class="card-body">
        <button id='btnbnsCatagory' className='btn btn-sm' type="button" >Earth</button>
        <h5 id='bns-card-text' class="card-text">Working hours may change in mumbai due to global warming</h5>
        </div>
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
