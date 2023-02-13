import React, { useEffect, useState } from "react";
import { IoMdArrowDroprightCircle } from 'react-icons/io';
import ReactPlayer from "react-player";
import Card from 'react-bootstrap/Card';
import { FaCalendarAlt } from "react-icons/fa";

function VideoPlayerSection() {
  const [Data, setData] = useState([]);
  const [Video_url, setVideo_url] = useState();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzM5MzAwNDksImlzcyI6Ik5ld3NBUFAiLCJleHAiOjE2NzY1MjIwNDksInN1YiI6Ik5ld3MgQVBQIEF1dGhlbnRpY2F0aW9uIn0.PcSpXqX6tLmFSC6-dfKvkPKwUxzrB_6ZGrgwnLDcmCQ"
    );

    var formdata = new FormData();
    formdata.append("access_key", "5670");
    formdata.append("language_id", "14");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://news.wrteam.in/Api/get_videos", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
        setVideo_url(result.data[1].content_value);
      })
      .catch((error) => console.log("error", error));


  
  }, []);

  function handleVideoUrl(element, index) {
    console.log(index);
    setVideo_url(element.content_value);
  }

  return (
    <div id="vps-main">
      <div id="vps-head-main" className="">
        <h4 id="vps-main-logo">Video News To Explore</h4>
        <a href="/" id="vps-Viewmore">
          View More
        </a>
      </div>

      
      {Data.length === 0 ? "loading":
      <div id="vps-body">
      <div id="vps-body-left">
        <img id="vps-main-image" src={Data[0].image} alt="" />
        <h1>{Data[0].title}</h1>
      </div>
      <div id="vps-body-right">
      {/* <IoMdArrowDroprightCircle/> */}
      <Card id="vps-image-cards" className="text-black">
      <Card.Img id="vps-secondry-images" src={Data[1].image} alt="Card image" />
      <Card.ImgOverlay>
      
      <h4 id="vps-card-title">{Data[1].title}</h4>
      </Card.ImgOverlay>
    </Card>

    <Card id="vps-image-cards" className="text-black">
      <Card.Img id="vps-secondry-images" src={Data[2].image} alt="Card image" />
      <Card.ImgOverlay>
        <h4 id="vps-card-title">{Data[2].title}</h4>
      </Card.ImgOverlay>
    </Card>

      </div>
       
        {/* <ReactPlayer
          width="40%"
          height="20rem"
          url={Data[0].content_value}
          controls={true}
        />

        <ReactPlayer
          url={Data[1].content_value}
          controls={true}
        />
     
        <ReactPlayer
          url={Data[2].content_value}
          controls={true}
        /> */}
     </div>
    }

    </div>

    //  <div id="vps-main">

    //    <div id="vps-videoPlayer">
    //     <ReactPlayer
    //       width="100%"
    //       height="50rem"
    //       controls
    //       url={Video_url}
    //     />
    //   </div>

    //  <div id="vps-multi-video">
    //     {Data && Data.map((element,index)=>(

    //     <button key={element.id} id="multi-video-btn" className="btn btn-outline-dark" onClick={()=>handleVideoUrl(element,index)}>
    //       <img
    //         id="vns-btn-image"
    //         src={
    //           element.image
    //         }
    //         className="card-img-top"
    //         alt="..."
    //       />
    //       <div>
    //       <h5 id="vns-btn-text" className="">
    //         {element.title}
    //       </h5>
    //       <p id="vns-btn-date"><FaCalendarAlt size={17} id='logoCalendar'/>{element.date}</p>
    //       </div>
    //     </button>
    // ))}

    //   </div>
    // </div>
  );
}

export default VideoPlayerSection;
