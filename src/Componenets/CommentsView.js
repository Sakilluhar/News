import { useState,useEffect } from 'react';
import { AiOutlineLike,AiTwotoneLike,AiOutlineDislike,AiTwotoneDislike } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BearerToken } from '../Tokens';
import no_image from '../images/no_image.jpeg';

function CommentsView(props) {

  const BToken = BearerToken();
  const [Data,setData ] = useState([]);

    useEffect(()=>{
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer "+BToken);

var formdata = new FormData();
formdata.append("access_key", "5670");
formdata.append("news_id", props.Nid);
formdata.append("user_id", "1");
formdata.append("offset", "0");
formdata.append("limit", "10");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://news.wrteam.in/Api/get_comment_by_news", requestOptions)
  .then(response => response.json())
  .then(result => {
    setData(result.data);
  })
  .catch(error => console.log('error', error));
},[])


  return (
        <div id=''>
            {Data && Data.map((element) => (
            <div id='cv-comment'>    
            <img id='cs-profile' src={element.profile ? element.profile : no_image } alt="" />
            <div id='cs-card' className="card" >
              <h4>{element.name}</h4>
              <Link id='cdbtnReport'>Report</Link>
              <p id='cs-card-text' className="card-text">{element.message}</p>
              <div id='cs-like-dis'>
              <button id='csbtnLike' className='btn'><AiOutlineLike size={18}/></button>
              <button id='csbtnLike' className='btn'><AiOutlineDislike size={18}/></button>
              </div>
              <button id='cdbtnReplay' className='btn'>REPLAY</button>
            </div>
            </div>
            ))}
        </div>
  )
}

export default CommentsView
