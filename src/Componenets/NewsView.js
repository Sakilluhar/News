import { useState, useEffect } from "react";
import "./newsview.css";
import Form from "react-bootstrap/Form";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import {AiOutlineLike,AiTwotoneLike,AiOutlineDislike,AiTwotoneDislike,} from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { MdOutlineComment } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { BearerToken } from "../Tokens";
import { useQuery } from "../Hooks";
import RelatedNewsSection from "./RelatedNewsSection";
import CarouselSection from "./CarouselSection";
import { Link } from "react-router-dom";
import TagsSection from "./TagsSection";
import CommentSection from "./CommentSection";
import { Button } from "bootstrap";
import {
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookShareButton,
  
} from "react-share";
// import { useLocation } from 'react-router-dom';

function NewsView() {
  const [Data, setData] = useState([]);
  const [Like ,setLike] = useState(false);
  const [Bookmark ,setBookmark] = useState(false);
  const [FontSize, setFontSize] = useState(0);
  const [FontSizeCss, setFontSizeCss] = useState("14px");
  const query = useQuery();
  const Nid = query.get("Nid");
  const catid = query.get("Cid");
  const user_id = query.get("Uid");
  const BToken = BearerToken();
  const shareUrl = window.location.href


  useEffect(() => {
    if (FontSize === 0) {
      setFontSizeCss("nv-description-14");
    } else if (FontSize === 1) {
      setFontSizeCss("nv-description-16");
    } else if (FontSize === 2) {
      setFontSizeCss("nv-description-18");
    } else if (FontSize === 3) {
      setFontSizeCss("nv-description-20");
    } else if (FontSize === 4) {
      setFontSizeCss("nv-description-22");
    } else if (FontSize === 5) {
      setFontSizeCss("nv-description-24");
    }
  }, [FontSize]);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + BToken);

    var formdata = new FormData();
    formdata.append("access_key", "5670");
    formdata.append("news_id", Nid);
    formdata.append("user_id", "1");
    formdata.append("language_id", "14");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://news.wrteam.in/Api/get_news_by_id", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => console.log("error", error));
  }, [Nid]);

  return (
    <div id="nv-main">
      <div id="nv-page">
        {Data.length === 0 ? (
          "loading"
        ) : (
          <div id="nv-body">
            <button id="btnnvCatagory" className="btn btn-sm" type="button">
              {Data[0].category_name}
            </button>
            <h1 id="nv-title">{Data[0].title}</h1>

            <div id="nv-Header" className=" d-flex justify-content-around">
              <div id="nv-left-head">
                <h6 id="head-lables">
                  <FiCalendar size={18} id="head-logos" />{" "}
                  {Data[0].date.slice(0, 10)}
                </h6>
                <h6 id="head-lables">
                  <AiOutlineEye size={18} id="head-logos" />
                </h6>
                <h6 id="head-lables">
                  <AiOutlineLike size={18} id="head-logos" />{" "}
                  {Data[0].total_like} Likes
                </h6>
              </div>

              <div id="nv-right-head">
                <h6>SHARE:</h6>
                <FacebookShareButton url={shareUrl} title={Data[0].title+' - Enews'} hashtag={'Enews'}>
                  <FacebookIcon size={40} round/>
                </FacebookShareButton>
                <WhatsappShareButton url={shareUrl} title={Data[0].title+' - Enews'} hashtag={'Enews'}>
                  <WhatsappIcon size={40} round/>
                </WhatsappShareButton>
                <TwitterShareButton url={shareUrl} title={Data[0].title+' - Enews'} hashtag={'Enews'}>
                  <TwitterIcon size={40} round/>
                </TwitterShareButton>
                <Link></Link>
              </div>
            </div>

            {/* <CarouselSection images={Data[0].image}/> */}
            <img id="nv-image" src={Data[0].image} alt="..." />

            <nav id="nv-functions" className="">
              <div id="nv-functions-left">
                <Form.Label id="nv-font-lable">Font Size</Form.Label>
                <Form.Range
                  id="nv-FontRange"
                  min={0}
                  max={5}
                  step={1}
                  value={FontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                />
                <div>
                  <Form.Label id="nv-FontRange-labels">14px</Form.Label>
                  <Form.Label id="nv-FontRange-labels">16px</Form.Label>
                  <Form.Label id="nv-FontRange-labels">18px</Form.Label>
                  <Form.Label id="nv-FontRange-labels">20px</Form.Label>
                  <Form.Label id="nv-FontRange-labels">22px</Form.Label>
                  <Form.Label id="nv-FontRange-labels">24px</Form.Label>
                </div>
                <h1>{FontSize}</h1>
              </div>
              <div id="nv-functions-right">
                <div id="nv-function-pair">
                  <button id="nv-function" className="btn" onClick={()=>{

                    var myHeaders = new Headers();
                    myHeaders.append("Authorization", "Bearer "+BToken);

                    var formdata = new FormData();
                    formdata.append("access_key", "5670");
                    formdata.append("user_id", JSON.parse(localStorage.getItem('user')).data.id);
                    formdata.append("news_id", Data[0].id);
                    formdata.append("status", !Bookmark?1:0);

                    var requestOptions = {
                      method: 'POST',
                      headers: myHeaders,
                      body: formdata,
                      redirect: 'follow'
                    };

                    fetch("https://news.wrteam.in/Api/set_bookmark", requestOptions)
                      .then(response => response.text())
                      .then(result => setBookmark(!Bookmark))
                      .catch(error => console.log('error', error));
                  }}>
                    {Bookmark ? <BsFillBookmarkFill size={23}/> : <BsBookmark size={23} />}
                  </button>
                  <p id="nv-function-text">Save</p>
                </div>
                <div id="nv-function-pair">
                  <button id="nv-function" className="btn" onClick={()=>{
                    
                    var myHeaders = new Headers();
                    myHeaders.append("Authorization", "Bearer "+BToken);
                    
                    var formdata = new FormData();
                    formdata.append("access_key", "5670");
                    formdata.append("user_id", JSON.parse(localStorage.getItem('user')).data.id);
                    formdata.append("news_id", Nid);
                    formdata.append("status", !Like?1:0);
                    
                    var requestOptions = {
                      method: 'POST',
                      headers: myHeaders,
                      body: formdata,
                      redirect: 'follow'
                    };
                    
                    fetch("https://news.wrteam.in/Api/set_like_dislike", requestOptions)
                      .then(response => response.json())
                      .then(result => setLike(!Like))
                      .catch(error => console.log('error', error));
                  }}>
                    {Like ? <AiTwotoneLike size={23}/>:<AiOutlineLike size={23} />}
                    
                  </button>
                  <p id="nv-function-text">Like</p>
                </div>
              </div>
            </nav>

            {FontSize === 0 ? (
              <p
                id="nv-description"
                style={{ fontSize: "14px" }}
                dangerouslySetInnerHTML={{ __html: Data[0].description }}></p>
            ) : FontSize === 1 ? (
              <p
                id="nv-description"
                style={{ fontSize: "16px" }}
                dangerouslySetInnerHTML={{ __html: Data[0].description }}></p>
            ) : FontSize === 2 ? (
              <p
                id="nv-description"
                style={{ fontSize: "18px" }}
                dangerouslySetInnerHTML={{ __html: Data[0].description }}></p>
            ) : FontSize === 3 ? (
              <p
                id="nv-description"
                style={{ fontSize: "20px" }}
                dangerouslySetInnerHTML={{ __html: Data[0].description }}></p>
            ) : FontSize === 4 ? (
              <p
                id="nv-description"
                style={{ fontSize: "22px" }}
                dangerouslySetInnerHTML={{ __html: Data[0].description }}></p>
            ) : (
              <p
                id="nv-description"
                style={{ fontSize: "24px" }}
                dangerouslySetInnerHTML={{ __html: Data[0].description }}></p>
            )}
            {/* // <p id='nv-description' dangerouslySetInnerHTML={{__html: Data[0].description}}></p> */}
            <CommentSection Nid={Nid} />
          </div>
        )}

        <div id="nv-right-section">
          <RelatedNewsSection Cid={catid} Uid={user_id} />
          <TagsSection />

          {/* <div id='rns-Catagory-main'>
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
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default NewsView;
