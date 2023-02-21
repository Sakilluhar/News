import React from 'react'
import CommentsView from './CommentsView';

function CommentSection(props) {
  const Nid = props.Nid
  return (
    <div>
        <div id='cs-main'>
        <h2>Leave a comment</h2>
        <textarea name="" id="cs-input" cols="30" rows="10" placeholder='Share Your Thoughts...'></textarea>
        <button id='cs-btnsub' type='submit' className='btn'>Submit Post</button>
        <h2>Comment</h2>
        <CommentsView Nid={Nid}/>
        </div>
    </div>
  )
}

export default CommentSection