import React from 'react'
import '../CSS/videonewsview.css';
import { useState } from 'react';
import { Link} from 'react-router-dom';
import { useEffect } from 'react';
import { ApiWrt, BearerToken } from '../Tokens';
import no_image from "../images/no_image.jpeg";
import { BsFillPlayFill } from "react-icons/bs";
import VideoPlayerModal from "./VideoPlayerModal";
import { FiCalendar } from "react-icons/fi";



function VideoNewsview() {

    const [Data, setData] = useState([]);
    
    const BToken = BearerToken();
    const [Video_url, setVideo_url] = useState();
    const [modalShow, setModalShow] = React.useState(false);
    const ApiUrl = ApiWrt();

    useEffect(() => {
        var myHeaders = new Headers();

    myHeaders.append(
      "Authorization",
      "Bearer " + BToken
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

      fetch(`${ApiUrl}/get_videos`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => console.log("error", error));
  });

    function handleLiveNewsVideoUrl(url) {
        setModalShow(true)
        setVideo_url(url)
    }
  return (
    <div id='vnv-main'>
                <div id='vnv-content' className="">
                    <div className="row">
                        <Link id='' to="/go"  ></Link>

                        {Data && Data.map((element) => (
                            <div className="col-md-4 " key={element.id}>
                                {/* <Link id='Link-all' to={"/NewsView?Nid=" + element.id + "&Cid=" + element.category_id}> */}
                                <div id='vnv-card' className="card">
                                    <img id='vnv-card-image' src={element.image ? element.image : no_image} className="card-img" alt="..." />
                                    <Link className='card-image-overlay' id='vnv-btnVideo' onClick={() => handleLiveNewsVideoUrl(element.content_value)}>
                                        <BsFillPlayFill id="vnv-btnVideo-logo" fill="red" size={60} />
                                    </Link>

                                    <div id='vnv-card-body' className="card-body">
                                        {/* <button id='vnv-btnCatagory' className='btn btn-sm' type="button" >{element.category_name}</button> */}
                                        <h5 id='vnv-card-title' className="card-title">{element.title.slice(0, 53)}...</h5>
                                        <p id="vnv-card-date"><FiCalendar size={18} id="vnv-logoCalendar" />{element.date.slice(0, 10)}</p>
                                        {/* <Link id='btnvnvRead' className='btn overlay' type="button" to="/NewsView" ><IoArrowForwardCircleSharp size={50}/></Link> */}
                                    </div>

                                </div>
                                <VideoPlayerModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                    // backdrop="static"   
                                    keyboard={false}
                                    url={Video_url}
                                // title={Data[0].title}
                                />

                                {/* </Link> */}
                            </div>

                        ))}

                    </div>
                </div>

            </div>
  )
}

export default VideoNewsview
