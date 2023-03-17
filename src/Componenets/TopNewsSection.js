import React, { useState } from 'react'
import '../CSS/Home.css'
import { useEffect } from 'react'
import { ApiWrt, BearerToken } from '../Tokens';
import { Link } from 'react-router-dom';

function TopNewsSection() {

  const [Data, setData] = useState([]);
  const BToken = BearerToken();
  const ApiUrl = ApiWrt();
  


  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + BToken);

    var formdata = new FormData();
    formdata.append("access_key", "5670");
    formdata.append("category_id", "8");
    formdata.append("subcategory_id", "1");
    formdata.append("offset", "0");
    formdata.append("limit", "10");
    formdata.append("user_id", "1");
    formdata.append("language_id", "14");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch(`${ApiUrl}/get_news_by_category`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setData(result.data)
      })
      .catch(error => console.log('error', error));
  })

  const tnshandleReadMore = () => {
    // console.log('Read More');

  };

  const tnshandleCatagory = () => {
    // console.log('Catagory');
  };

  return (
    <div>
      {Data && Data.length === 0 ? null : (
        <>

          <div id='tns-head-main' className=''>
            <h4 id='tns-logo' >Top News</h4>
            <Link href='/' id='tns-Viewmore' to={"/CategoryView?id=8&uid=1"}>View More</Link>
          </div>
          <div id='tns-main' className=''>
            <div id='tns-left-cards'>
            <Link id='Link-all' to={"/NewsView?Nid=" + Data[1].id + "&Cid=" + Data[1].category_id}>                    

              <div id='top-news-card' className="card" onClick={tnshandleReadMore}>
                <img id='tns-news-image' src={Data[1].image} className="card-img" alt="..." />
                <div id='tns-text' className="card-img-overlay">
                  <button id='btnTnsCatagory' className='btn' type="button">{Data[1].category_name}</button>
                  <h5 id='tns-Title' className="card-text">{Data[1].title}</h5>
                </div>
              </div></Link>

            <Link id='Link-all' to={"/NewsView?Nid=" + Data[2].id + "&Cid=" + Data[2].category_id}>                    

              <div id='top-news-card' className="card" onClick={tnshandleReadMore}>
                <img id='tns-news-image' src={Data[2].image} className="card-img" alt="..." />
                <div id='tns-text' className="card-img-overlay">
                  <button id='btnTnsCatagory' className='btn' type="button" >{Data[2].category_name}</button>
                  <h5 id='tns-Title' className="card-text">{Data[2].title}</h5>
                </div>
              </div></Link>
            </div>

            <Link id='Link-all' to={"/NewsView?Nid=" + Data[0].id + "&Cid=" + Data[0].category_id}>                    

            <div id='top-news-card1' className="card" onClick={tnshandleReadMore}>
              <img id='tns-news-image1' src={Data[0].image} className="card-img" alt="..." />
              <div id='tns-text' className="card-img-overlay ">
                <button id='btnTnsCatagory' className='btn' type="button" onClick={tnshandleCatagory} >{Data[0].category_name}</button>
                <h4 id='tns-Title' className="">{Data[0].title}</h4>
              </div>
            </div>
            </Link>

            <div id='tns-right-cards'>
            <Link id='Link-all' to={"/NewsView?Nid=" + Data[3].id + "&Cid=" + Data[3].category_id}>                   
              <div id='top-news-card' className="card" onClick={tnshandleReadMore}>
                <img id='tns-news-image' src={Data[3].image} className="card-img" alt="..." />
                <div id='tns-text' className="card-img-overlay">
                  <button id='btnTnsCatagory' className='btn' type="button" >{Data[3].category_name}</button>
                  <h5 id='tns-Title' className="card-text">{Data[3].title}</h5>
                </div>
              </div></Link> 

            <Link id='Link-all' to={"/NewsView?Nid=" + Data[4].id + "&Cid=" + Data[4].category_id}>                  

              <div id='top-news-card' className="card" onClick={tnshandleReadMore}>
                <img id='tns-news-image' src={Data[4].image} className="card-img" alt="..." />
                <div id='tns-text' className="card-img-overlay">
                  <button id='btnTnsCatagory' className='btn' type="button" >{Data[4].category_name}</button>
                  <h5 id='tns-Title' className="card-text">{Data[4].title}</h5>
                </div>
              </div></Link>  
            </div>

          </div>



          <div id=''>
            <div id='tns-main-mobile' className=''>
            
            <Link id='top-news-card1' className='link-removel' to={"/NewsView?Nid=" + Data[0].id + "&Cid=" + Data[0].category_id}>                  

              <div id='top-news-card1' className="card" onClick={tnshandleReadMore}>
                <img id='tns-news-image1' src={Data[0].image} className="card-img" alt="..." />
                <div id='tns-text-card1' className="card-body ">
                  <button id='btnTnsCatagory-card1' className='btn' type="button" onClick={tnshandleCatagory} >{Data[0].category_name}</button>
                  <p id='tns-Title-card1' className="">{Data[0].title}</p>
                </div>
              </div></Link>

              <div id='tns-left-cards'>
            <Link id='top-news-card' to={"/NewsView?Nid=" + Data[1].id + "&Cid=" + Data[1].category_id}>                  

                <div id='top-news-card' className="card" onClick={tnshandleReadMore}>
                  <img id='tns-news-image' src={Data[1].image} className="card-img" alt="..." />
                  <div id='tns-text' className="card-img-overlay">
                    <button id='btnTnsCatagory' className='btn' type="button">{Data[1].category_name}</button>
                    <p id='tns-Title' className="card-text">{Data[1].title.slice(0,59)}</p>
                  </div>
                </div></Link>

                <Link id='top-news-card' to={"/NewsView?Nid=" + Data[2].id + "&Cid=" + Data[2].category_id}>                  

                <div id='top-news-card' className="card" onClick={tnshandleReadMore}>
                  <img id='tns-news-image' src={Data[2].image} className="card-img" alt="..." />
                  <div id='tns-text' className="card-img-overlay">
                    <button id='btnTnsCatagory' className='btn' type="button" >{Data[2].category_name}</button>
                    <p id='tns-Title' className="card-text">{Data[2].title.slice(0,59)}</p>
                  </div>
                </div></Link>
              </div>



              <div id='tns-right-cards'>
            <Link id='top-news-card' to={"/NewsView?Nid=" + Data[3].id + "&Cid=" + Data[3].category_id}>                  

                <div id='top-news-card' className="card" onClick={tnshandleReadMore}>
                  <img id='tns-news-image' src={Data[3].image} className="card-img" alt="..." />
                  <div id='tns-text' className="card-img-overlay">
                    <button id='btnTnsCatagory' className='btn' type="button" >{Data[3].category_name}</button>
                    <p id='tns-Title' className="card-text">{Data[3].title.slice(0,60)}</p>
                  </div>
                </div></Link>

                <Link id='top-news-card' to={"/NewsView?Nid=" + Data[4].id + "&Cid=" + Data[4].category_id}>                 

                <div id='top-news-card' className="card" onClick={tnshandleReadMore}>
                  <img id='tns-news-image' src={Data[4].image} className="card-img" alt="..." />
                  <div id='tns-text' className="card-img-overlay">
                    <button id='btnTnsCatagory' className='btn' type="button" >{Data[4].category_name}</button>
                    <p id='tns-Title' className="card-text">{Data[4].title.slice(0,58)}</p>
                  </div>
                </div></Link> 
              </div>

            </div>
          </div>
        </>
      )}

    </div>
  )
}

export default TopNewsSection