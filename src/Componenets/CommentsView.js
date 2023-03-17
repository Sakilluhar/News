import { useState, useEffect , useRef} from "react";
import {
  AiOutlineLike,
  AiTwotoneLike,
  AiOutlineDislike,
  AiTwotoneDislike,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { ApiWrt, BearerToken , Noimage } from '../Tokens';

import no_image from "../images/no_image.jpeg";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { useQuery } from "../Hooks";


function CommentsView(props) {
  const BToken = BearerToken();
  const [LoadComments,setLoadComments] = useState(false);
  const [Data, setData] = useState([]);
  const [Comment,setComment] = useState("");
  const query = useQuery();
  const Nid = query.get("Nid");
  const catid = query.get("Cid");
  const user_id = query.get("Uid");
  const ApiUrl = ApiWrt();
 const replyRef = useRef()
  

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + BToken);

    var formdata = new FormData();
    formdata.append("access_key", "5670");
    formdata.append("news_id", props.Nid);
    formdata.append("user_id", "1");
    formdata.append("offset", "0");
    formdata.append("limit", "10");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

     fetch(`${ApiUrl}/get_comment_by_news`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if(result.data=== undefined){
          setData([])
        }else{
          setData(result.data);
        }
        console.log(result.data)
      })
      .catch((error) => console.log("error", error));
  }, [props.Nid,props.LoadComments,LoadComments]);
 

  return (
    <div id="">
    { Data .length === 0 ? null :
    <h2>Comment</h2>}
      
      {Data &&
        Data.map((element) => (
          <div key={element.id}>
            <div id="cv-comment">
              <img
                id="cs-profile"
                src={element.profile ? element.profile : no_image}
                alt=""
                onerror={no_image}
              />
              <div id="cs-card" className="card">
                <b>
                  <h5>{element.name}</h5>
                </b>
                {/* <Link id="cdbtnReport">Report</Link> */}
                <p id="cs-card-text" className="card-text">
                  {element.message}
                </p>
                {['bottom-end'].map((placement) => (
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover id={`popover-positioned-${placement}`}>
                        <Popover.Header as="h3">Add reply here</Popover.Header>
                        <Popover.Body id="cv-replay-propover">
                        <form id="cv-replay-form" method="post" onSubmit={(e)=>{
                              e.preventDefault();
                              var myHeaders = new Headers();
                              myHeaders.append("Authorization", "Bearer "+BToken);

                              var formdata = new FormData();
                              formdata.append("access_key", "5670");
                              formdata.append("user_id", JSON.parse(localStorage.getItem('user')).data.id);
                              formdata.append("parent_id", element.id);
                              formdata.append("news_id", Nid);
                              formdata.append("message", Comment);
                              formdata.append("offset ", "0");

                              var requestOptions = {
                                method: 'POST',
                                headers: myHeaders,
                                body: formdata,
                                redirect: 'follow'
                              };

                              fetch(`${ApiUrl}/set_comment`, requestOptions)
                                .then(response => response.json())
                                .then(result => {
                                  setLoadComments(true);

                                  document.getElementById(`cdbtnRepla${element.id}`).click()
                                  setTimeout(() => {
                                    setLoadComments(false);
                                  },1000)
                                })
                                .catch(error => console.log('error', error));
                            }}>
                        <textarea name="" id="cs-reply-input" cols="30" rows="5" onChange={(e)=>{
                          setComment(e.target.value)
                        }} placeholder='Share Your reply...'></textarea>
                        <button id="cdbtnsubReplay" type="submit" className="btn">
                          SUBMIT REPLY
                        </button> 
                        </form>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button id={`${element.id}`} className="cdbtnReplay" variant="secondary" ref={replyRef}>Reply</Button>
                  </OverlayTrigger>
                ))}
              </div>
            </div>
            {element.replay.map((ele) => (
                <div id="cv-Rcomment" key={ele.id}>
                  <img
                    id="cs-profile"
                    src={ele.profile ? ele.profile : no_image}
                    alt=""
                  />
                  <div id="cs-Rcard" className="card">
                    <b>
                      <h5>{ele.name}</h5>
                    </b>
                    {/* <Link id="cdbtnReport">Report</Link> */}
                    <p id="cs-card-text" className="card-text">
                      {ele.message}
                    </p>
                    {/* <div id="cs-like-dis">
                      <button id="csbtnLike" className="btn">
                        <AiOutlineLike size={18} />
                      </button>
                      <button id="csbtnLike" className="btn">
                        <AiOutlineDislike size={18} />
                      </button>
                    </div> */}
                    {/* <button id="cdbtnReplay" className="btn">
                      REPLAY
                    </button> */}
                    {['bottom-end'].map((placement) => (
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover id={`popover-positioned-${placement}`}>
                        <Popover.Header as="h3">Add replay here</Popover.Header>
                        <Popover.Body id="cv-replay-propover">
                        <form method="post" onSubmit={(e)=>{
                              e.preventDefault(); 
                              var myHeaders = new Headers();
                              myHeaders.append("Authorization", "Bearer "+BToken);

                              var formdata = new FormData();
                              formdata.append("access_key", "5670");
                              formdata.append("user_id", JSON.parse(localStorage.getItem('user')).data.id);
                              formdata.append("parent_id", ele.parent_id);
                              formdata.append("news_id", Nid);
                              formdata.append("message", Comment);
                              formdata.append("offset ", "0");

                              var requestOptions = {
                                method: 'POST',
                                headers: myHeaders,
                                body: formdata,
                                redirect: 'follow'
                              };

                              fetch(`${ApiUrl}/set_comment`, requestOptions)
                                .then(response => response.json())
                                .then(result => {
                                  setLoadComments(true);
                                  setTimeout(() => {
                                    setLoadComments(false);
                                  },1000)
                                })
                                .catch(error => console.log('error', error));
                            }}>
                        <textarea name="" id="cs-input" cols="30" rows="5" onChange={(e)=>{
                          setComment(e.target.value)
                        }} placeholder='Share Your reply...'></textarea>
                        <button id="cdbtnsubReplay" type="submit" className="btn">
                          SUBMIT REPLY
                        </button> 
                        </form>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button id="cdbtnReplay" className="cdbtnReplay" variant="secondary">Reply</Button>
                  </OverlayTrigger>
                ))}
                  </div>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
}

export default CommentsView;
