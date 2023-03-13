import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiWrt, BearerToken } from '../Tokens';




function HealthNewsSection() {
    const ApiUrl = ApiWrt();
  
    const [Data, setData] = useState([]);
    const BToken = BearerToken();
    useEffect(() => {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + BToken);

        var formdata = new FormData();
        formdata.append("access_key", "5670");
        formdata.append("category_id", "5");
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
                setData(result.data);
            })
            .catch(error => console.log('error', error));


    }, [])



    return (<>
        {Data.length === 0 ? "loading"
            :
            <div>
                <div id='hns-head'>
                    <div id='hns-head-main' className=''>
                        <p id='hns-main-logo'>Health News</p>
                        <Link href='/' id='hns-Viewmore' to={"/CategoryView?id=5&uid=1"}>View More</Link>
                    </div>
                </div>


                <div id='hns-main'>
                    <div id='hns-main-card' className="card" >
                <Link id='Link-all' to={"/NewsView?Nid=" + Data[0].id + "&Cid=" + Data[0].category_id}>                    
                        <img id='hns-main-image' src={Data[0].image} className="card-img" alt={Data[0].image_data.other_image} />
                        <div id='hns-main-body' className="card-img-overlay">
                            <Link id='btnhnsCatagory' className='btn' type="button" to={`/CategoryView?id=${Data[0].category_id}`}>{Data[0].category_name}</Link>
                            <p id='hns-main-text' className="card-text">{Data[0].title}</p>
                        </div>
                        </Link>
                    </div>
                    

                    <div id='hns-center-col'>
                        <Link id='Link-all' to={"/NewsView?Nid=" + Data[1].id + "&Cid=" + Data[1].category_id}>
                        <div id='hns-card' className="card" >
                            <img id='hns-card-image' src={Data[1].image} className="card-img-top" alt={Data[1].image_data.other_image} />
                            <div className="hns-card-body">
                                <Link id='btnhnsCatagorysub' className='btn btn-sm' type="button" to={`/CategoryView?id=${Data[1].category_id}`}>{Data[1].category_name}</Link>
                                <p id='hns-card-text' className="card-text">{Data[1].title.slice(0, 60)}...</p>
                            </div>
                        </div>
                        </Link>

                <Link id='Link-all' to={"/NewsView?Nid=" + Data[2].id + "&Cid=" + Data[2].category_id}>

                        <div id='hns-card' className="card">
                            <img id='hns-card-image' src={Data[2].image} className="card-img-top" alt={Data[2].image_data.other_image} />
                            <div className="hns-card-body">
                                <Link id='btnhnsCatagorysub' className='btn btn-sm' type="button" to={`/CategoryView?id=${Data[2].category_id}`}>{Data[2].category_name}</Link>
                                <p id='hns-card-text' className="card-text">{Data[2].title.slice(0, 60)}...</p>
                            </div>
                        </div>
                        </Link>
                        <Link id='Link-all' to={"/NewsView?Nid=" + Data[3].id + "&Cid=" + Data[3].category_id}>

                        <div id='hns-card' className="card">
                            <img id='hns-card-image' src={Data[3].image} className="card-img-top" alt={Data[3].image_data.other_image} />
                            <div className="hns-card-body">
                                <Link id='btnhnsCatagorysub' className='btn btn-sm' type="button" to={`/CategoryView?id=${Data[3].category_id}`}>{Data[3].category_name}</Link>
                                <p id='hns-card-text' className="card-text">{Data[3].title.slice(0, 60)}...</p>
                            </div>
                        </div>
                        </Link>
                <Link id='Link-all' to={"/NewsView?Nid=" + Data[4].id + "&Cid=" + Data[4].category_id}>

                       <div id='hns-card' className="card">
                            <img id='hns-card-image' src={Data[4].image} className="card-img-top" alt={Data[4].image_data.other_image} />
                            <div className="hns-card-body">
                                <Link id='btnhnsCatagorysub' className='btn btn-sm' type="button" to={`/CategoryView?id=${Data[4].category_id}`}>{Data[4].category_name}</Link>
                                <p id='hns-card-text' className="card-text">{Data[4].title.slice(0, 60)}...</p>
                            </div>
                        </div>
                        </Link>

                    </div>
                    <div id='hns-right-col'>
                    <Link id='Link-all' to={"/NewsView?Nid=" + Data[5].id + "&Cid=" + Data[5].category_id}>

                        <div id='hns-card' className="card">
                            <img id='hns-card-image' src={Data[5].image} className="card-img-top" alt={Data[5].image_data.other_image} />
                            <div className="hns-card-body">
                                <Link id='btnhnsCatagorysub' className='btn btn-sm' type="button" to={`/CategoryView?id=${Data[5].category_id}`}>{Data[5].category_name}</Link>
                                <p id='hns-card-text' className="card-text">{Data[5].title.slice(0, 60)}...</p>
                            </div>
                        </div></Link>
                        <Link id='Link-all' to={"/NewsView?Nid=" + Data[6].id + "&Cid=" + Data[6].category_id}>

                        <div id='hns-card' className="card">
                            <img id='hns-card-image' src={Data[6].image} className="card-img-top" alt={Data[6].image_data.other_image} />
                            <div className="hns-card-body">
                                <Link id='btnhnsCatagorysub' className='btn btn-sm' type="button" to={`/CategoryView?id=${Data[6].category_id}`}>{Data[6].category_name}</Link>
                                <p id='hns-card-text' className="card-text">{Data[6].title.slice(0, 60)}...</p>
                            </div>
                        </div></Link>
                        <Link id='Link-all' to={"/NewsView?Nid=" + Data[7].id + "&Cid=" + Data[7].category_id}>

                        <div id='hns-card' className="card" >
                            <img id='hns-card-image' src={Data[7].image} className="card-img-top" alt={Data[7].image_data.other_image} />
                            <div className="hns-card-body">
                                <Link id='btnhnsCatagorysub' className='btn btn-sm' type="button" to={`/CategoryView?id=${Data[7].category_id}`}>{Data[7].category_name}</Link>
                                <p id='hns-card-text' className="card-text">{Data[7].title.slice(0, 60)}...</p>
                            </div>
                        </div></Link>
                        <Link id='Link-all' to={"/NewsView?Nid=" + Data[8].id + "&Cid=" + Data[8].category_id}>
                        <div id='hns-card' className="card">
                            <img id='hns-card-image' src={Data[8].image} className="card-img-top" alt={Data[8].image_data.other_image} />
                            <div className="hns-card-body">
                                <Link id='btnhnsCatagorysub' className='btn btn-sm' type="button" to={`/CategoryView?id=${Data[8].category_id}`}>{Data[8].category_name}</Link>
                                <p id='hns-card-text' className="card-text">{Data[8].title.slice(0, 60)}...</p>
                            </div>
                        </div>
                        </Link>

                    </div>

                </div>

                <div id='hns-main-mobile'>

                </div>
            </div>
        }
    </>

    )
}

export default HealthNewsSection
