import React from 'react'
import { AiOutlineLike,AiTwotoneLike,AiOutlineDislike,AiTwotoneDislike } from 'react-icons/ai';

function CommentSection() {
  return (
    <div>
        <div id='cs-main'>
        <h2>Leave a comment</h2>
        <input id='cs-input' type="text" placeholder='Share Your Thoughts...'/>
        <button id='cs-btnsub' type='submit' className='btn'>Submit Post</button>
        <h2>Comment</h2>
        <div>    
            <img src="" alt="" />
                <div id='cs-card' className="card" >
                    <h4>Name</h4>
                    <p id='cs-card-text' className="card-text">Travel</p>
                    <button className='btn'><AiOutlineLike/></button>
                    <button className='btn'><AiOutlineDislike/></button>
                            
                </div>
        </div>
        </div>
    </div>
  )
}

export default CommentSection