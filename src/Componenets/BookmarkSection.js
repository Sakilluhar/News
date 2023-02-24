import React, { useEffect,useState } from 'react'
import "./bookmarksection.css";
import { BearerToken } from "../Tokens";
import { useQuery } from "../Hooks";
import { FiCalendar } from "react-icons/fi";
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function BookmarkSection() {

    const query = useQuery();
    const BToken = BearerToken();
    const [Data, setData] = useState([]);


    useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+BToken);

        var formdata = new FormData();
        formdata.append("access_key", "5670");
        formdata.append("user_id", JSON.parse(localStorage.getItem('user')).data.id);
        formdata.append("offset", "0");
        // formdata.append("limit", "10");

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };

        fetch("https://news.wrteam.in/Api/get_bookmark", requestOptions)
        .then(response => response.json())
        .then(result => {
            setData(result.data)
        })
        .catch(error => console.log('error', error));
    },[Data])

  return (
    <div id='cv-main'>
        {/* <p>my corrent location is {loca.pathname}</p>
        {loca.pathname === `/CategoryView` ? 
        <button
        onClick={ () => alert('you are awesome')} >
          
          click me
        </button> 
        : null  
        } */}
        {/* <BreadcrumbSection/> */}
        <div id='cv-content' className="">
        <h1 className="text-center"></h1>   
        <div className="row">
                 <Link id='' to="/go"  ></Link>

          {Data && Data.map((element)=>(
        <div className="col-md-4 " key={element.id}>
          <div id='cv-card' className="card">
                <img  id='cv-card-image' src={element.image} className="card-img" alt="..."/>
                
                <div id='cv-card-body' className="card-body">
                <button id='cv-btnCatagory' className='btn btn-sm' type="button" >{element.category_name}</button>
                <button id='bs-btnBookmark' className='btn' onClick={()=>{

                    var myHeaders = new Headers();
                    myHeaders.append("Authorization", "Bearer "+BToken);
                    
                    var formdata = new FormData();
                    formdata.append("access_key", "5670");
                    formdata.append("user_id", JSON.parse(localStorage.getItem('user')).data.id);
                    formdata.append("news_id", element.news_id);
                    formdata.append("status", "0");
                    
                    var requestOptions = {
                      method: 'POST',
                      headers: myHeaders,
                      body: formdata,
                      redirect: 'follow'
                    };
                    
                    fetch("https://news.wrteam.in/Api/set_bookmark", requestOptions)
                      .then(response => response.text())
                      .then(result => console.log(result))
                      .catch(error => console.log('error', error));

                }}><BsFillBookmarkFill id='bs-bookmark-logo' size={18}/></button>
                <h5 id='cv-card-title' className="card-title">{element.title.slice(0,150)}...</h5>
                <p id="cv-card-date"><FiCalendar size={18} id="cv-logoCalendar" />{element.date.slice(0, 10)}</p>
                 </div>
                   
          </div>

          
          </div>

          ))}

        </div>
        </div> 
 
    </div>
  )
}

export default BookmarkSection