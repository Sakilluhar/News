import { useState, useEffect } from "react";
import "./newsview.css";
import Form from "react-bootstrap/Form";
import { AiOutlineLike, AiTwotoneLike, AiOutlineDislike, AiTwotoneDislike, } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";
import { ApiWrt, BearerToken } from '../Tokens';
import React from "react";
import { useQuery } from "../Hooks";
import RelatedNewsSection from "./RelatedNewsSection";
import { Link } from "react-router-dom";
import TagsSection from "./TagsSection";
import CommentSection from "./CommentSection";
import BreadcrumbNav from './BreadcrumbNav'


import {
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookShareButton,

} from "react-share";
import SignIn_Modal from "./SignIn_Modal";
// import { useLocation } from 'react-router-dom';

function NewsView() {
  const [Data, setData] = useState([]);
  const [CheckLike, setCheckLike] = useState(false);
  const [Like, setLike] = useState(CheckLike);
  const [Bookmark, setBookmark] = useState(false);
  const [FontSize, setFontSize] = useState(14);
  const [FontSizeCss, setFontSizeCss] = useState("14px");
  const query = useQuery();
  const Nid = query.get("Nid");
  const catid = query.get("Cid");
  const BToken = BearerToken();
  const shareUrl = window.location.href
  const ApiUrl = ApiWrt();
  const [modalShow, setModalShow] = React.useState(false);
  const [islogout, setIsLogout] = useState(false)
  const [isloginloading, setisloginloading] = useState(true)


  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + BToken);

    var formdata = new FormData();
    formdata.append("access_key", "5670");
    formdata.append("news_id", Nid);
    formdata.append("user_id", localStorage.getItem('user') !== null  ? JSON.parse(localStorage.getItem('user')).data.id : "1");
    formdata.append("language_id", "14");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(`${ApiUrl}/get_news_by_id`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
        console.log(result.data[0].bookmark)
        if (result.data[0].bookmark === "0") {
          setBookmark(false)
        }
        else {
          setBookmark(true)
        }

        if (result.data[0].like === "0") {
          setLike(false)
        }
        else {
          setLike(true)
        }

      })
      .catch((error) => console.log("error", error));
  }, [Nid]);

  return (
    <>
    {Data.length === 0 ? (
            "loading"
          ) : (
    <>
    <BreadcrumbNav SecondElement="News Details" ThirdElement={Data[0].title}/>

      <div id="nv-main">
        <div id="nv-page">
          
            <div id="nv-body">
              <button id="btnnvCatagory" className="btn btn-sm" type="button">
                {Data[0].category_name}
              </button>
              <h1 id="nv-title">{Data[0].title}</h1>

              <div id="nv-Header" className="">
                <div id="nv-left-head">
                  <p id="head-lables">
                    <FiCalendar size={18} id="head-logos" />{" "}
                    {Data[0].date.slice(0, 10)}
                  </p>
                  {/* <h6 id="head-lables">
                  <AiOutlineEye size={18} id="head-logos" />
                </h6> */}
                  <p id="head-lables">
                    <AiOutlineLike size={18} id="head-logos" />{" "}
                    {Data[0].total_like} Likes
                  </p>
                </div>

                <div id="nv-right-head">
                  <h6 id="nv-Share-Label">SHARE:</h6>
                  <FacebookShareButton url={shareUrl} title={Data[0].title + ' - Enews'} hashtag={'Enews'}>
                    <FacebookIcon size={40} round />
                  </FacebookShareButton>
                  <WhatsappShareButton url={shareUrl} title={Data[0].title + ' - Enews'} hashtag={'Enews'}>
                    <WhatsappIcon size={40} round />
                  </WhatsappShareButton>
                  <TwitterShareButton url={shareUrl} title={Data[0].title + ' - Enews'} hashtag={'Enews'}>
                    <TwitterIcon size={40} round />
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
                    min={14}
                    max={24}
                    step={2}
                    value={FontSize}
                    onChange={(e) => setFontSize(e.target.value)}
                  />
                  <div className="d-flex justify-content-between">
                    <Form.Label id="nv-FontRange-labels">14px</Form.Label>
                    <Form.Label id="nv-FontRange-labels">16px</Form.Label>
                    <Form.Label id="nv-FontRange-labels">18px</Form.Label>
                    <Form.Label id="nv-FontRange-labels">20px</Form.Label>
                    <Form.Label id="nv-FontRange-labels">22px</Form.Label>
                    <Form.Label id="nv-FontRange-labels">24px</Form.Label>
                  </div>
                  {/* <h1>{FontSize}</h1> */}
                </div>
                <div id="nv-functions-right">
                  <div id="nv-function-pair">
                    <button id="nv-function" className="btn" onClick={() => {

                      if (localStorage.getItem('user') !== null) {
                        var myHeaders = new Headers();
                      myHeaders.append("Authorization", "Bearer " + BToken);

                      var formdata = new FormData();
                      formdata.append("access_key", "5670");
                      formdata.append("user_id", JSON.parse(localStorage.getItem('user')).data.id);
                      formdata.append("news_id", Data[0].id);
                      formdata.append("status", !Bookmark ? 1 : 0);

                      var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: formdata,
                        redirect: 'follow'
                      };

                      fetch(`${ApiUrl}/set_bookmark`, requestOptions)
                        .then(response => response.text())
                        .then(result => setBookmark(!Bookmark))
                        .catch(error => console.log('error', error));
                      }else{
                        setModalShow(true)
                      }

                      
                    }}>
                      {Bookmark ? <BsFillBookmarkFill size={23} /> : <BsBookmark size={23} />}
                    </button>
                    <p id="nv-function-text">Save</p>
                  </div>
                  <div id="nv-function-pair">
                    <button id="nv-function" className="btn" onClick={() => {

                    if (localStorage.getItem('user') !== null) {
                      var myHeaders = new Headers();
                      myHeaders.append("Authorization", "Bearer " + BToken);

                      var formdata = new FormData();
                      formdata.append("access_key", "5670");
                      formdata.append("user_id", JSON.parse(localStorage.getItem('user')).data.id);
                      formdata.append("news_id", Nid);
                      formdata.append("status", !Like ? 1 : 0);

                      var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: formdata,
                        redirect: 'follow'
                      };

                      fetch(`${ApiUrl}/set_like_dislike`, requestOptions)
                        .then(response => response.json())
                        .then(result => setLike(!Like))
                        .catch(error => console.log('error', error));
                      }else{
                        setModalShow(true)
                      }
                    }}>
                      {Like ? <AiTwotoneLike size={23} /> : <AiOutlineLike size={23} />}

                    </button>
                    <p id="nv-function-text">Like</p>
                  </div>
                </div>
              </nav>
              <p id="nv-description" style={{ fontSize: `${FontSize}px` }} dangerouslySetInnerHTML={{ __html: Data[0].description }}></p>

              {/* // <p id='nv-description' dangerouslySetInnerHTML={{__html: Data[0].description}}></p> */}
              <CommentSection Nid={Nid} />
            </div>
          

          <div id="nv-right-section">
            <RelatedNewsSection Cid={catid} />
            <TagsSection />
          </div>
        </div>

<SignIn_Modal setIsLogout={setIsLogout} setisloginloading={setisloginloading} show={modalShow} setLoginModalShow={setModalShow} onHide={() => setModalShow(false)} />

      </div>
      </>
      )}
    </>
  );
}

export default NewsView;
