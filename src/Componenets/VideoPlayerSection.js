import React, { useEffect, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import ReactPlayer from "react-player";
import Card from "react-bootstrap/Card";
import { FiCalendar } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import VideoPlayerModal from "./VideoPlayerModal";
import { BearerToken } from '../Tokens';


function VideoPlayerSection() {
  const [Data, setData] = useState([]);
  const [Video_url, setVideo_url] = useState();
  const [modalShow, setModalShow] = React.useState(false);
  const BToken = BearerToken();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer "+BToken
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
      })
      .catch((error) => console.log("error", error));
  }, []);

  function handleVideoUrl(url) {
    setModalShow(true)
    setVideo_url(url)
  }

  return (
    <div id="vps-main">
      <div id="vps-head-main" className="">
        <h4 id="vps-main-logo">Video News To Explore</h4>
        <a href="/" id="vps-Viewmore">
          View More
        </a>
      </div>

      {Data.length === 0 ? (
        "loading"
      ) : (
        <div id="vps-body">
          <div id="vps-body-left">
            <Card id="vps-main-card" className="text-black">
              <Card.Img
                id="vps-main-image"
                src={Data[0].image}
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Link id="vps-btnVideo" onClick={()=>handleVideoUrl(Data[0].content_value)}>
                  <BsFillPlayFill id="vps-btnVideo-logo" fill="red" size={60}/>
                </Link>
              </Card.ImgOverlay>
            </Card>
            <h1 id="vps-main-title">{Data[0].title}</h1>

            <h6 id="vps-main-date">
              <FiCalendar size={18} id="logoCalendar" />
              {Data[0].date.slice(0, 10)}
            </h6>
            
          </div>

          <div id="vps-body-right">
            <Card id="vps-image-cards" className="text-black">
              <Card.Img
                id="vps-secondry-images"
                src={Data[1].image}
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Link id="vps-btnVideo" onClick={()=>handleVideoUrl(Data[1].content_value)}>
                  <BsFillPlayFill id="vps-btnVideo-logo" fill="red" size={60}/>
                </Link>
                <h4 id="vps-card-title">
                  <b>{Data[1].title}</b>
                </h4>
              </Card.ImgOverlay>
            </Card>

            {/* <Card id="vps-image-cards" className="text-black">
              <Card.Img
                id="vps-secondry-images"
                src={Data[2].image}
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Link id="vps-btnVideo" onClick={()=>handleVideoUrl(Data[2].content_value)}>
                  <BsFillPlayFill id="vps-btnVideo-logo" fill="red" size={60}/>
                </Link>
                <h4 id="vps-card-title">
                  <b>{Data[2].title}</b>
                </h4>
              </Card.ImgOverlay>
            </Card> */}
          </div>

          <VideoPlayerModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  backdrop="static"
                  keyboard={false}
                  url={Video_url}
                  // title={Data[0].title}
                />

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
      )}
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
