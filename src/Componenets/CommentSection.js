import React, { useEffect,useState } from 'react'
import CommentsView from './CommentsView';
import { BearerToken } from '../Tokens';


function CommentSection(props) {
  const [Comment,setComment] = useState("");
  const Nid = props.Nid
  const [Data,setData] = useState([]);
  const BToken = BearerToken();

  useEffect(()=>{
    
    },[])

  return (
    <div>
        <form id='cs-main' onSubmit={(e)=>{
          e.preventDefault();
          var myHeaders = new Headers();
          myHeaders.append("Authorization", "Bearer "+BToken);
          
          var formdata = new FormData();
          formdata.append("access_key", "5670");
          formdata.append("user_id", JSON.parse(localStorage.getItem('user')).data.id);
          formdata.append("parent_id", "0");
          formdata.append("news_id", Nid);
          formdata.append("message", Comment);
          
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
          };
          
          fetch("https://news.wrteam.in/Api/set_comment", requestOptions)
            .then(response => response.json())
            .then(result => {
              setData(result.data);
            })
            .catch(error => console.log('error', error));
                console.log(Comment)
              }}>
        <h2>Leave a comment</h2>
        <textarea name="" id="cs-input" cols="30" rows="10" onChange={(e)=>{
          setComment(e.target.value)
        }} placeholder='Share Your Thoughts...'></textarea>
        <button id='cs-btnsub' type='submit' className='btn'>Submit Post</button>
        
        </form>
        <h2>Comment</h2>
        <CommentsView Nid={Nid}/>
    </div>
  )
}

export default CommentSection