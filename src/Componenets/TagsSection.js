import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { BearerToken } from '../Tokens';


function TagsSection() {

    const [Data, setData] =useState([]);
    const BToken = BearerToken();

    useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+BToken);

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
                <nav id='tags-nav' className="navbar">  
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
