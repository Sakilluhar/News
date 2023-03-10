import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ApiWrt, BearerToken } from '../Tokens';



function TagsSection() {

    const [Data, setData] =useState([]);
    const BToken = BearerToken();
    const ApiUrl = ApiWrt();
  
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

        fetch(`${ApiUrl}/get_tag`, requestOptions)
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
                <Link id='btnTags' key={element.id} to={"/TagNewsview?Tid="+element.id} className='btn btn-outline-dark'>{element.tag_name}</Link>
                ))}
                </div>
                
            </div>
    </div>
  )
}

export default TagsSection
