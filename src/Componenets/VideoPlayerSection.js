import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { FaCalendarAlt } from 'react-icons/fa';


function VideoPlayerSection() {
  const [Data, setData] = useState([]);
  const [Video_url, setVideo_url] = useState();
  
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzM5MzAwNDksImlzcyI6Ik5ld3NBUFAiLCJleHAiOjE2NzY1MjIwNDksInN1YiI6Ik5ld3MgQVBQIEF1dGhlbnRpY2F0aW9uIn0.PcSpXqX6tLmFSC6-dfKvkPKwUxzrB_6ZGrgwnLDcmCQ"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://news.wrteam.in/Api/get_videos?access_key=5670&language_id=14",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result.data)
        setVideo_url(result.data[0].content_value)
    })
      .catch((error) => console.log("error", error));

    // var xhr = new XMLHttpRequest();
    // xhr.open('GET', "https://news.wrteam.in/Api/get_videos?access_key=5670&language_id=14", true);
    // xhr.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzM5MzAwNDksImlzcyI6Ik5ld3NBUFAiLCJleHAiOjE2NzY1MjIwNDksInN1YiI6Ik5ld3MgQVBQIEF1dGhlbnRpY2F0aW9uIn0.PcSpXqX6tLmFSC6-dfKvkPKwUxzrB_6ZGrgwnLDcmCQ");
    // xhr.onreadystatechange = function() {
    //     setData(JSON.parse(xhr.responseText));
    // }
    // xhr.send();

    // Data = JSON.parse(Data);
    // console.log(Data);

  }, []);
  
  function handleVideoUrl (element,index){
    console.log(index)
            setVideo_url(element.content_value)
        }

  

  return (
        
        
     <div id="vps-main">
        
       <div id="vps-videoPlayer">
        <ReactPlayer
          width="100%"
          height="50rem"
          controls
          url={Video_url}
        />
      </div>
       
     <div id="vps-multi-video">
        {Data && Data.map((element,index)=>(
        
        
        <button key={element.id} id="multi-video-btn" className="btn btn-outline-dark" onClick={()=>handleVideoUrl(element,index)}>
          <img
            id="vns-btn-image"
            src={
              element.image
            }
            className="card-img-top"
            alt="..."
          />
          <div>
          <h5 id="vns-btn-text" className="">
            {element.title}
          </h5>
          <p id="vns-btn-date"><FaCalendarAlt size={17} id='logoCalendar'/>{element.date}</p>
          </div>
        </button>
    ))}
    

      </div> 
    </div> 
       
   
  );
}

export default VideoPlayerSection;
