import React from 'react'
import './LiveNews.css';
import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuery } from '../Hooks';
import { ApiWrt, BearerToken } from '../Tokens';

import no_image from "../images/no_image.jpeg";
import { BsFillPlayFill } from "react-icons/bs";
import VideoPlayerModal from "./VideoPlayerModal";
import BreadcrumbNav from './BreadcrumbNav'







function LiveNews(props) {


    const [Data, setData] = useState([]);
    const { category_id } = useParams();
    const query = useQuery();
    const catid = query.get('id');
    const user_id = query.get('uid');
    const BToken = BearerToken();
    const [Video_url, setVideo_url] = useState();
    const [modalShow, setModalShow] = React.useState(false);
    const ApiUrl = ApiWrt();
  
    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + BToken);

        var formdata = new FormData();
        formdata.append("access_key", "5670");
        formdata.append("language_id", "14");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch(`${ApiUrl}/get_live_streaming`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result.data)
            })
            .catch(error => console.log('error', error));
    }, [])
    function handleLiveNewsVideoUrl(url) {
        setModalShow(true)
        setVideo_url(url)
    }
    return (
        <> 
        <BreadcrumbNav SecondElement="Live News"/>

            <div id='LN-main'>
           
                <div id='LN-content' className="">
                    <h1 className="text-center"></h1>
                    <div className="row">
                        <Link id='' to="/go"  ></Link>

                        {Data && Data.map((element) => (
                            <div className="col-md-4 " key={element.id}>
                                <div id='LN-card' className="card">
                                    <img id='LN-card-image' src={element.image ? element.image : no_image} className="card-img" alt="..." />
                                    <Link className='card-image-overlay' id='LN-btnVideo' onClick={() => handleLiveNewsVideoUrl(element.url)}>
                                        <BsFillPlayFill id="LN-btnVideo-logo" fill="red" size={60} />
                                    </Link>

                                    <div id='LN-card-body' className="card-body">
                                        <h5 id='LN-card-title' className="card-title">{element.title.slice(0, 150)}...</h5>
                                    </div>

                                </div>
                                <VideoPlayerModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)} 
                                    keyboard={false}
                                    url={Video_url}
                             
                                />
                            </div>

                        ))}

                    </div>
                </div>

            </div>

        </>
    );
}


export default LiveNews
