import React, { useEffect,useState } from 'react'
import "./bookmarksection.css";
import { ApiWrt, BearerToken } from '../Tokens';
import bookmarkIMG from '../images/bookmark (4).png';
import { useQuery } from "../Hooks";
import { FiCalendar } from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import BreadcrumbNav from './BreadcrumbNav'


function BookmarkSection() {

    const query = useQuery();
    const BToken = BearerToken();
    const [Bookmark, setBookmark] = useState(false);
    const [Data, setData] = useState([]);
    const ApiUrl = ApiWrt();
 

    useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+BToken);

        var formdata = new FormData();
        formdata.append("access_key", "5670");
        formdata.append("user_id", JSON.parse(localStorage.getItem('user')).data.id);
        formdata.append("offset", "0");
        // formdata.append("limit", "10");
        formdata.append("language_id", "14");

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };

         fetch(`${ApiUrl}/get_bookmark`, requestOptions)
        .then(response => response.json())
        .then(result => {
            setData(result.data)
            if(result.data){
              setBookmark(true)
            }
            else{
              setBookmark(false);
            }
        })
        .catch(error => console.log('error', error));
    },[Data])

  return ( 
  <>
    <BreadcrumbNav SecondElement="Bookmark" ThirdElement="0"/>

  {!Bookmark ? 
      <div id='bs-no-main'>
      <img id='bs-no-image' src={bookmarkIMG} alt="" />
      <p id='bs-no-title'><b>Add Bookmarks</b></p>
      <p id='bs-no-text'>Don't forget to Bookmark the News you like the most so that you can find those easily over here.</p>
      </div>
      :
    <div id='bs-main'>
     
        <div id='bs-content' className="">
        <h1 className="text-center"></h1>   
        <div className="row">
                 <Link id='' to="/go"  ></Link>

          {Data && Data.map((element)=>(
        <div className="col-md-4 " key={element.id}>
          
          <div id='bs-card' className="card">
          
                <img  id='bs-card-image' src={element.image} className="card-img" alt="..."/>
                
                <div id='bs-card-body' className="card-body">
                <button id='bs-btnCatagory' className='btn btn-sm' type="button" >{element.category_name}</button>
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
                    
                    fetch(`${ApiUrl}/set_bookmark`, requestOptions)

                      .then(response => response.text())
                      .then(result => console.log(result))
                      .catch(error => console.log('error', error));

                }}><BsFillBookmarkFill id='bs-bookmark-logo' size={18}/></button>
                <h5 id='bs-card-title' className="card-title">{element.title.slice(0,150)}...</h5>
                <p id="bs-card-date"><FiCalendar size={18} id="bs-logoCalendar" />{element.date.slice(0, 10)}</p>
                <Link id='Link-all ' className='btn bs-ReadMore' to={"/NewsView?Nid=" + element.news_id + "&Cid=" + element.category_id} >READ MORE</Link>
                 </div>
                   
          </div>

          
          </div>

          ))}

        </div>
        </div> 
 
    </div>}
    </>
  )
}

export default BookmarkSection
