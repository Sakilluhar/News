import React from 'react'
import ReactPlayer from 'react-player'

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// import { FreeMode, Pagination } from "swiper";

function VideoPlayerSection() {
  return (
    <div id='vps-main'>
        <div id='vps-videoPlayer'>
        <ReactPlayer width='100%' height='50rem' controls url='https://youtu.be/21X5lGlDOfg' />
        </div>
        {/* <nav id='rns-cat-nav' class="navbar">  
                       <h4 id='rns-nav-logo' ><b>videos</b></h4> 
                </nav> */}
        <div id='vps-multi-video'>

                    <button id='multi-video-btn' className='btn btn-outline-dark'>
                        <img  id='vns-btn-image' src={'https://news.wrteam.in/public/images/liveStreaming/1668316630.0009.jpg'} class="card-img-top" alt="..."/>
                        <h5 id='vns-btn-text' class="">Karthikeya 2 Flute BGM | Nikhil, Anupama | Chandoo Mondeti | Anupam Kher</h5>
                    
                    </button>
                
                    <button id='multi-video-btn' className='btn btn-outline-dark'>
                        <img  id='vns-btn-image' src={'https://news.wrteam.in/public/images/liveStreaming/1668316630.0009.jpg'} class="card-img-top" alt="..."/>
                        <h5 id='vns-btn-text' class="">Karthikeya 2 Flute BGM | Nikhil, Anupama | Chandoo Mondeti | Anupam Kher</h5>
                    
                    </button>


                    <button id='multi-video-btn' className='btn btn-outline-dark'>
                        <img  id='vns-btn-image' src={'https://news.wrteam.in/public/images/liveStreaming/1668316630.0009.jpg'} class="" alt="..."/>
                        <h5 id='vns-btn-text' class="">Karthikeya 2 Flute BGM | Nikhil, Anupama | Chandoo Mondeti | Anupam Kher</h5>
                    
                    </button>

        {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
                <SwiperSlide><div id='vns-card' class="card">
                    <img  id='vns-card-image' src={'https://news.wrteam.in/public/images/liveStreaming/1668316630.0009.jpg'} class="card-img-top" alt="..."/>
                    <div class="vns-card-body">
                        <h5 id='vns-card-text' class="card-text">Karthikeya 2 Flute BGM | Nikhil, Anupama | Chandoo Mondeti | Anupam Kher</h5>
                    </div>
                </div>
                </SwiperSlide>

                <SwiperSlide><div id='vns-card' class="card">
                    <img  id='vns-card-image' src={'https://news.wrteam.in/public/images/liveStreaming/1668316630.0009.jpg'} class="card-img-top" alt="..."/>
                    <div class="vns-card-body">
                        <h5 id='vns-card-text' class="card-text">Karthikeya 2 Flute BGM | Nikhil, Anupama | Chandoo Mondeti | Anupam Kher</h5>
                    </div>
                </div>
                </SwiperSlide>

                <SwiperSlide><div id='vns-card' class="card">
                    <img  id='vns-card-image' src={'https://news.wrteam.in/public/images/liveStreaming/1668316630.0009.jpg'} class="card-img-top" alt="..."/>
                    <div class="vns-card-body">
                        <h5 id='vns-card-text' class="card-text">Karthikeya 2 Flute BGM | Nikhil, Anupama | Chandoo Mondeti | Anupam Kher</h5>
                    </div>
                </div>
                </SwiperSlide>
        
      </Swiper> */}
      </div>
        

         
    </div>
  )
}

export default VideoPlayerSection
