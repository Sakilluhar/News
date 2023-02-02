import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function TagsSection() {

    const [Data, setData] =useState([]);

    useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzM5MzAwNDksImlzcyI6Ik5ld3NBUFAiLCJleHAiOjE2NzY1MjIwNDksInN1YiI6Ik5ld3MgQVBQIEF1dGhlbnRpY2F0aW9uIn0.PcSpXqX6tLmFSC6-dfKvkPKwUxzrB_6ZGrgwnLDcmCQ");

        var formdata = new FormData();
        formdata.append("access_key", "5670");
        formdata.append("language_id", "14");

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };

        fetch("https://news.wrteam.in/Api/get_tag", requestOptions)
        .then(response => response.json())
        .then(result => {
            setData(result.data)
        })
        .catch(error => console.log('error', error));
    },[])

  return (
    <div>
      <div id='rns-tags-main'>
                <nav id='rns-cat-nav' className="navbar">  
                       <h4 id='rns-nav-logo' ><b>Tags</b></h4> 
                </nav>
                <div id='tags-tag'>

                {Data && Data.map((element)=>(
                <button id='btnTags' className='btn btn-outline-dark'>{element.tag_name}</button>
                ))}
                </div>
                
            </div>
    </div>
  )
}

export default TagsSection
