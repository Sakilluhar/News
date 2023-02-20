import { useState,useEffect } from 'react';
import './relatednewssection.css'
import { BearerToken } from '../Tokens';
import { useQuery } from '../Hooks';

function RelatedNewsSection(props) {

    const [Data, setData] = useState([]);
    const query = useQuery();
    const catid = props.Cid
    const user_id = props.Uid
    const BToken = BearerToken();

    useEffect(()=>{
        var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+BToken);

    var formdata = new FormData();
    formdata.append("access_key", "5670");
    formdata.append("category_id", catid);
    formdata.append("offset", "0");
    formdata.append("limit", "10");
    formdata.append("user_id", user_id);
    formdata.append("language_id", "14");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://news.wrteam.in/Api/get_news_by_category", requestOptions)
      .then(response => response.json())
      .then(result => {
        setData(result.data)
      })
      .catch(error => console.log('error', error));

    },[])


  return (
    <div>
      {Data.length === 0 ? "loading"
                :

      <div id='RNews-main'>
                <nav id='PNews-cat-nav' className="navbar">  
                       <h4 id='nav-logo' ><b>Related News</b></h4> 
                </nav>

                <div id='RNews-card' className="card">
                    <img  id='RNews-image' src={Data[0].image} className="card-img-top" alt="..."/>
                    <div className="RNews-card-body">
                    <button id='btnRNewsCatagory' className='btn btn-sm' type="button" >{Data[0].category_name}</button>
                    <h6 id='RNews-card-text' className="card-text">{Data[0].title.slice(0,40)}...</h6>
                    </div>
                </div>
                

                <div id='RNews-card' className="card">
                    <img  id='RNews-image' src={Data[1].image} className="card-img-top" alt="..."/>
                    <div className="RNews-card-body">
                    <button id='btnRNewsCatagory' className='btn btn-sm' type="button" >{Data[1].category_name}</button>
                    <h6 id='RNews-card-text' className="card-text">{Data[1].title.slice(0,40)}...</h6>
                    </div>
                </div>

                <div id='RNews-card' className="card">
                    <img  id='RNews-image' src={Data[2].image} className="card-img-top" alt="..."/>
                    <div className="RNews-card-body">
                    <button id='btnRNewsCatagory' className='btn btn-sm' type="button" >{Data[2].category_name}</button>
                    <h6 id='RNews-card-text' className="card-text">{Data[2].title.slice(0,40)}...</h6>
                    </div>
                </div>

                <div id='RNews-card' className="card">
                    <img  id='RNews-image' src={Data[3].image} className="card-img-top" alt="..."/>
                    <div className="RNews-card-body">
                    <button id='btnRNewsCatagory' className='btn btn-sm' type="button" >{Data[3].category_name}</button>
                    <h6 id='RNews-card-text' className="card-text">{Data[3].title.slice(0,40)}...</h6>
                    </div>
                </div>

                <div id='RNews-card' className="card">
                    <img  id='RNews-image' src={Data[4].image} className="card-img-top" alt="..."/>
                    <div className="RNews-card-body">
                    <button id='btnRNewsCatagory' className='btn btn-sm' type="button" >{Data[4].category_name}</button>
                    <h6 id='RNews-card-text' className="card-text">{Data[4].title.slice(0,40)}...</h6>
                    </div>
                </div>

                <div id='RNews-card' className="card">
                    <img  id='RNews-image' src={Data[5].image} className="card-img-top" alt="..."/>
                    <div className="RNews-card-body">
                    <button id='btnRNewsCatagory' className='btn btn-sm' type="button" >{Data[5].category_name}</button>
                    <h6 id='RNews-card-text' className="card-text">{Data[5].title.slice(0,40)}...</h6>
                    </div>
                </div>

                <div id='RNews-card' className="card">
                    <img  id='RNews-image' src={Data[6].image} className="card-img-top" alt="..."/>
                    <div className="RNews-card-body">
                    <button id='btnRNewsCatagory' className='btn btn-sm' type="button" >{Data[6].category_name}</button>
                    <h6 id='RNews-card-text' className="card-text">{Data[6].title.slice(0,40)}...</h6>
                    </div>
                </div>

            </div>
            }
    </div>
  )
}

export default RelatedNewsSection
