import { useState, useEffect } from "react";
import {
  AiOutlineLike,
  AiTwotoneLike,
  AiOutlineDislike,
  AiTwotoneDislike,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { BearerToken } from "../Tokens";
import no_image from "../images/no_image.jpeg";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { useQuery } from "../Hooks";


function CommentsView(props) {
  const BToken = BearerToken();
  const [Data, setData] = useState([]);
  const [Comment,setComment] = useState("");
  const query = useQuery();
  const Nid = query.get("Nid");
  const catid = query.get("Cid");
  const user_id = query.get("Uid");

  

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

    // fetch("https://news.wrteam.in/Api/get_comment_by_news", requestOptions)
    fetch("http://news.thewrteam.in/Api/get_comment_by_news", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => console.log("error", error));
  }, [props.Nid]);
 

  return (
    <div id="">
      {Data &&
        Data.map((element) => (
          <div key={element.id}>
            <div id="cv-comment">
              <img
                id="cs-profile"
                src={element.profile ? element.profile : no_image}
                alt=""
              />
              <div id="cs-card" className="card">
                <b>
                  <h5>{element.name}</h5>
                </b>
                <Link id="cdbtnReport">Report</Link>
                <p id="cs-card-text" className="card-text">
                  {element.message}
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

                              fetch("https://news.wrteam.in/Api/set_comment", requestOptions)
                                .then(response => response.json())
                                .then(result => console.log(result))
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
                    <Button id="cdbtnReplay" variant="secondary">Reply</Button>
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
                    <Link id="cdbtnReport">Report</Link>
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

                              fetch("https://news.wrteam.in/Api/set_comment", requestOptions)
                                .then(response => response.json())
                                .then(result => console.log(result))
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
                    <Button id="cdbtnReplay" variant="secondary">Reply</Button>
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
