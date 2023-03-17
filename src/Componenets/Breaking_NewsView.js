import { useState, useEffect } from "react";
import "./breaking_newsview.css";
import Form from "react-bootstrap/Form";
import {AiOutlineLike,AiTwotoneLike,AiOutlineDislike,AiTwotoneDislike,} from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";
import { ApiWrt, BearerToken } from '../Tokens';

import { useQuery } from "../Hooks";
import RelatedNewsSection from "./RelatedNewsSection";
import { Link } from "react-router-dom";
import TagsSection from "./TagsSection";
import CommentSection from "./CommentSection";
import {
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookShareButton,
  
} from "react-share";
import RelatedBreakingNews from "./RelatedBreakingNews";
import BreadcrumbNav from "./BreadcrumbNav";

function Breaking_NewsView() {

    const [Data, setData] = useState([]);
  const [CheckLike ,setCheckLike] = useState(false);
  const [Like ,setLike] = useState(CheckLike);
  const [Bookmark ,setBookmark] = useState(false);
  const [FontSize, setFontSize] = useState(14);
  const [FontSizeCss, setFontSizeCss] = useState("14px");
  const query = useQuery();
  const BNid = query.get("BNid");
  const BToken = BearerToken();
  const shareUrl = window.location.href
  const ApiUrl = ApiWrt();
  


  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+BToken);

    var formdata = new FormData();
    formdata.append("access_key", "5670");
    formdata.append("breaking_news_id", BNid);
    formdata.append("user_id", localStorage.getItem('user') !== null  ? JSON.parse(localStorage.getItem('user')).data.id : "1" );
    formdata.append("language_id", "14");

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
    };

    fetch(`${ApiUrl}/get_breaking_news_by_id`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);

      })
      .catch((error) => console.log("error", error)); 
  }, [BNid]);
  return (
    
    <>
    {Data.length === 0 ? (
          "loading"
        ) : (
          <>
        <BreadcrumbNav SecondElement="News Details" ThirdElement={Data[0].title}/>
    <div id="B_NV-main">
      <div id="B_NV-page">
        
          <div id="B_NV-body">

            <Link id="btnB_NVCatagory" className="btn btn-sm" type="button" to='/BreakingNews'>
              Breaking News
            </Link>
            <h1 id="B_NV-title">{Data[0].title}</h1>

            <div id="B_NV-Header" className="">
              <div id="B_NV-left-head">
              </div>

              <div id="B_NV-right-head">
                <h6 id="B_NV-Share-Label">SHARE:</h6>
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

            <img id="B_NV-image" src={Data[0].image} alt="..." />

            <nav id="B_NV-functions" className="">
              <div id="B_NV-functions-left">
                <Form.Label id="B_NV-font-lable">Font Size</Form.Label>
                <Form.Range
                  id="B_NV-FontRange"
                  min={14}
                  max={24}
                  step={2}
                  value={FontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                />
                <div className="d-flex justify-content-between">
                  <Form.Label id="B_NV-FontRange-labels">14px</Form.Label>
                  <Form.Label id="B_NV-FontRange-labels">16px</Form.Label>
                  <Form.Label id="B_NV-FontRange-labels">18px</Form.Label>
                  <Form.Label id="B_NV-FontRange-labels">20px</Form.Label>
                  <Form.Label id="B_NV-FontRange-labels">22px</Form.Label>
                  <Form.Label id="B_NV-FontRange-labels">24px</Form.Label>
                </div>

              </div>
              <div id="B_NV-functions-right">
               
              </div>
            </nav>
              <p id="B_NV-description" style={{ fontSize: `${FontSize}px` }} dangerouslySetInnerHTML={{ __html: Data[0].description }}></p>

          </div>
        

        <div id="B_NV-right-section">
          <RelatedBreakingNews />
          <TagsSection />
        </div>
      </div>
    </div>
    </>
    )}
    </>
  )
}

export default Breaking_NewsView
