import React, { useState } from 'react'
import ReactPlayer from 'react-player'



function VideoPlayerSection() {


    const [Data, setData] = useState ([]);

  const fetchData = () => {
    return fetch("https://news.wrteam.in/Api/get_videos?access_key=5670&language_id=14")
          .then((response) => response.json())
          .then((data) => setData(data));
    }
    
   

  return (
    <div id='vps-main'>
        <div id='vps-videoPlayer'>
        <ReactPlayer width='100%' height='50rem' controls url='https://youtu.be/21X5lGlDOfg' />
        </div>
        
        <div id='vps-multi-video'>

                    <button id='multi-video-btn' className='btn btn-outline-dark'>
                        <img  id='vns-btn-image' src={'https://news.wrteam.in/public/images/liveStreaming/1668316630.0009.jpg'} className="card-img-top" alt="..."/>
                        <h5 id='vns-btn-text' className="">Karthikeya 2 Flute BGM | Nikhil, Anupama | Chandoo Mondeti | Anupam Kher</h5>
                    
                    </button>
                
                    <button id='multi-video-btn' className='btn btn-outline-dark'>
                        <img  id='vns-btn-image' src={'https://news.wrteam.in/public/images/liveStreaming/1668316630.0009.jpg'} className="card-img-top" alt="..."/>
                        <h5 id='vns-btn-text' className="">Karthikeya 2 Flute BGM | Nikhil, Anupama | Chandoo Mondeti | Anupam Kher</h5>
                    
                    </button>


                    <button id='multi-video-btn' className='btn btn-outline-dark'>
                        <img  id='vns-btn-image' src={'https://news.wrteam.in/public/images/liveStreaming/1668316630.0009.jpg'} className="" alt="..."/>
                        <h5 id='vns-btn-text' className="">Karthikeya 2 Flute BGM | Nikhil, Anupama | Chandoo Mondeti | Anupam Kher</h5>
                    
                    </button>

      </div>
        

         
    </div>
  )
}

export default VideoPlayerSection
