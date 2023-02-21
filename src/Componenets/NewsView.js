import { useState,useEffect } from 'react';
import './newsview.css';
import travel3_static_jpg from '../images/travel3_static.jpg';
import sports3_ronaldo_jpg from '../images/sports3_static.jpg';
import fashion3_static_jpg from '../images/fashion3_static.jpg';
import technology3_static_jpg from '../images/technology3_static.jpg';
import politics3_static_jpg from '../images/politics3_static.jpg';
import cars3_static_jpg from '../images/cars3_static.jpg';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import { AiOutlineLike,AiTwotoneLike,AiOutlineDislike,AiTwotoneDislike } from 'react-icons/ai';
import { BsBookmark,BsFillBookmarkFill } from 'react-icons/bs';
import { MdOutlineComment } from 'react-icons/md';
import { FiCalendar } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { BearerToken } from '../Tokens';
import { useQuery } from '../Hooks';
import RelatedNewsSection from './RelatedNewsSection';
import CarouselSection from './CarouselSection';
import { Link } from 'react-router-dom';
import TagsSection from './TagsSection';
import CommentSection from './CommentSection';




function NewsView() {

  const [Data, setData] = useState([]);
  const query = useQuery();
  const Nid = query.get('Nid');
  const catid = query.get('Cid');
  const user_id = query.get('Uid');
  const BToken = BearerToken();

  console.log(Nid);
    useEffect(()=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+BToken);

    var formdata = new FormData();
    formdata.append("access_key", "5670");
    formdata.append("news_id", Nid);
    formdata.append("user_id", "1");
    formdata.append("language_id", "14");

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
    };

    fetch("https://news.wrteam.in/Api/get_news_by_id", requestOptions)
    .then(response => response.json())
    .then(result => {
        setData(result.data);
    })
    .catch(error => console.log('error', error));

    },[Nid])

    console.log(Data);

  return (
    
    <div id='nv-main'>
        <div id='nv-page'>

        {Data.length === 0 ? "loading"
            :
            <div id='nv-body'>
        <button id='btnnvCatagory' className='btn btn-sm' type="button" >{Data[0].category_name}</button>
        <h1 id='nv-title'>{Data[0].title}</h1>

        <div id='nv-Header' className=' d-flex justify-content-around'>
            <div id='nv-left-head'>
                <h6 id='head-lables'><FiCalendar size={18} id='head-logos'/> {Data[0].date.slice(0,10)}</h6>
                <h6 id='head-lables'><AiOutlineEye size={18} id='head-logos'/></h6>
                <h6 id='head-lables'><AiOutlineLike size={18} id='head-logos'/> {Data[0].total_like} Likes</h6>
            </div> 
            
            <div id='nv-right-head'>
            <h6>SHARE:</h6>
            <Link></Link>
            </div>

        </div>
    

        {/* <CarouselSection images={Data[0].image}/> */}
      <img id='nv-image' src={Data[0].image} alt="..." />

        <nav id='nv-functions' className="d-flex justify-content-around">
            <div id='nv-functions-left'></div>
            <div id='nv-functions-right'>
                <div>
                <Link id='nv-function' className="" to="#"><AiOutlineLike size={30}/></Link>
                <h6>Like</h6>
                </div>
                <div>
                <Link id='nv-function' className="" to="#"><BsBookmark size={30}/></Link>
                <h6>Save</h6>
                </div>
            </div>
            
        </nav>
        <p id='nv-description' dangerouslySetInnerHTML={{__html: Data[0].description}}></p>
        <CommentSection Nid={Nid}/>
        </div>
        }

        <div id='nv-right-section'>

        <RelatedNewsSection Cid={catid} Uid={user_id}/>
        <TagsSection    />

        {/* <div id='rns-Catagory-main'>
                <nav id='rns-cat-nav' className="navbar">  
                       <h4 id='rns-nav-logo' ><b>Catagories</b></h4> 
                </nav>

                <div>
                    <div id='rns-cat-card' className="card" >
                            <img id='rns-cat-image' src={travel3_static_jpg} className="card-img" alt="..."/>
                        <div id='rns-cat-text' className="card-img-overlay">
                            <h3 id='cat-text' className="card-text">Travel</h3>
                            <button id='btnrns-cat-more' className='btn' type="button" ><IoArrowForwardCircleSharp size={40}/></button>
                        </div>
                    </div>
                </div>

                <div>
                    <div id='rns-cat-card' className="card" >
                            <img id='rns-cat-image' src={sports3_ronaldo_jpg} className="card-img" alt="..."/>
                        <div id='rns-cat-text' className="card-img-overlay">
                            <h3 id='cat-text' className="card-text">Sports</h3>
                            <button id='btnrns-cat-more' className='btn' type="button" ><IoArrowForwardCircleSharp size={40}/></button>
                        </div>
                    </div>
                </div>

                <div>
                    <div id='rns-cat-card' className="card" >
                            <img id='rns-cat-image' src={fashion3_static_jpg} className="card-img" alt="..."/>
                        <div id='rns-cat-text' className="card-img-overlay">
                            <h3 id='cat-text' className="card-text">Fashion</h3>
                            <button id='btnrns-cat-more' className='btn' type="button" ><IoArrowForwardCircleSharp size={40}/></button>
                        </div>
                    </div>
                </div>

                <div>
                    <div id='rns-cat-card' className="card" >
                            <img id='rns-cat-image' src={technology3_static_jpg} className="card-img" alt="..."/>
                        <div id='rns-cat-text' className="card-img-overlay">
                            <h3 id='cat-text' className="card-text">Technology</h3>
                            <button id='btnrns-cat-more' className='btn' type="button" ><IoArrowForwardCircleSharp size={40}/></button>
                        </div>
                    </div>
                </div>

                <div>
                    <div id='rns-cat-card' className="card" >
                            <img id='rns-cat-image' src={politics3_static_jpg} className="card-img" alt="..."/>
                        <div id='rns-cat-text' className="card-img-overlay">
                            <h3 id='cat-text' className="card-text">Politics</h3>
                            <button id='btnrns-cat-more' className='btn' type="button" ><IoArrowForwardCircleSharp size={40}/></button>
                        </div>
                    </div>
                </div>

                <div>
                    <div id='rns-cat-card' className="card" >
                            <img id='rns-cat-image' src={cars3_static_jpg} className="card-img" alt="..."/>
                        <div id='rns-cat-text' className="card-img-overlay">
                            <h3 id='cat-text' className="card-text">Cars</h3>
                            <button id='btnrns-cat-more' className='btn' type="button" ><IoArrowForwardCircleSharp size={40}/></button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>

        </div>
    </div>
  )
}

export default NewsView