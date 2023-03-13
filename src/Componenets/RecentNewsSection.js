import React, { useState } from 'react'
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import { ApiWrt, BearerToken } from '../Tokens';




function RecentNewsSection() {
    const ApiUrl = ApiWrt();
  
    const [Data, setData] = useState([]);
    const BToken = BearerToken();
    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + BToken);

        var formdata = new FormData();
        formdata.append("access_key", "5670");
        formdata.append("offset", "0");
        formdata.append("limit", "50");
        formdata.append("user_id", "1");
        formdata.append("language_id", "14");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };


        fetch(`${ApiUrl}/get_news`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result.data)
            })
            .catch(error => console.log('error', error));
    }, [])



    return (<>
        
            <div>
                <div id='rns-main'>


            {Data.length === 0 ? "loading"
                    :
                    <div id='rns-cards-main' className="">

                        <div id='rns-head-main' className=''>
                            <h4 id='rns-main-logo'>Recent News</h4>
                            <Link href='/' id='rns-Viewmore' to="/RecentNewsView">View More</Link>
                        </div>

                        <div id='rns-card-row'>
                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[0].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay card-inverse">
                                    <Link id='btnrnsCatagory' className='btn btn-sm' type="button" to={`/CategoryView?id=${Data[0].category_id}`}>{Data[0].category_name}</Link>
                                </div>
                                <div id='rns-card-body' className="card-block">
                                    <p className="card-title">{Data[0].title.slice(0, 80)}...</p>
                                </div>
                                <div id='rns-card-footer'>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[0].id + "&Cid=" + Data[0].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>
                            </div>
                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[1].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <Link id='btnrnsCatagory' className='btn btn-sm' type="button" to={`/CategoryView?id=${Data[1].category_id}`}>{Data[1].category_name}</Link>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <p className="card-title">{Data[1].title.slice(0, 70)}...</p>
                                </div>
                                <div id='rns-card-footer'>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[1].id + "&Cid=" + Data[1].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>
                                </div>
                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[2].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <Link id='btnrnsCatagory' className='btn btn-sm' type="button" to={`/CategoryView?id=${Data[2].category_id}`}>{Data[2].category_name}</Link>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <p className="card-title">{Data[2].title.slice(0, 70)}...</p>
                                </div>
                                <div id='rns-card-footer'>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[2].id + "&Cid=" + Data[2].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>
                                </div>
                            </div>
                        </div>

                        <div id='rns-card-row'>
                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[3].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <Link id='btnrnsCatagory' className='btn btn-sm' type="button" to={`/CategoryView?id=${Data[3].category_id}`}>{Data[3].category_name}</Link>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <p className="card-title">{Data[3].title.slice(0, 70)}...</p>
                                </div>
                                <div id='rns-card-footer'>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[3].id + "&Cid=" + Data[3].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>
                                </div>
                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[4].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <Link id='btnrnsCatagory' className='btn btn-sm' type="button" to={`/CategoryView?id=${Data[4].category_id}`}>{Data[4].category_name}</Link>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <p className="card-title">{Data[4].title.slice(0, 70)}...</p>
                                </div>
                                <div id='rns-card-footer'>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[4].id + "&Cid=" + Data[4].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>
                                </div>
                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[5].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <Link id='btnrnsCatagory' className='btn btn-sm' type="button" to={`/CategoryView?id=${Data[5].category_id}`}>{Data[5].category_name}</Link>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <p className="card-title">{Data[5].title.slice(0, 70)}...</p>
                                </div>
                                <div id='rns-card-footer'>
                                    <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[5].id + "&Cid=" + Data[5].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>
                                </div>
                            </div>
                        </div>

                        <div id='rns-card-row'>
                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[6].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <Link id='btnrnsCatagory' className='btn btn-sm' type="button" to={`/CategoryView?id=${Data[6].category_id}`}>{Data[6].category_name}</Link>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <p className="card-title">{Data[6].title.slice(0, 85)}...</p>
                                </div>
                                <div id='rns-card-footer'>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[6].id + "&Cid=" + Data[6].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>
                                </div>
                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[7].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <Link id='btnrnsCatagory' className='btn btn-sm' type="button" to={`/CategoryView?id=${Data[7].category_id}`}>{Data[7].category_name}</Link>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <p className="card-title">{Data[7].title.slice(0, 70)}...</p>
                                </div>
                                <div id='rns-card-footer'>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[7].id + "&Cid=" + Data[7].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>
                                </div>
                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[8].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <Link id='btnrnsCatagory' className='btn btn-sm' type="button" to={`/CategoryView?id=${Data[8].category_id}`}>{Data[8].category_name}</Link>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <p className="card-title">{Data[8].title.slice(0, 70)}...</p>
                                </div>
                                <div id='rns-card-footer'>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[8].id + "&Cid=" + Data[8].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    }




                    <div id='rns-main-mobile' className="">

                        <div id='rns-head-main' className=''>
                            <h5 id='rns-main-logo'>Recent News</h5>
                            <a href='/' id='rns-Viewmore'>View More</a>
                        </div>

                        <div id='rns-card-row'>
                        {!Data ? "LOADING.." : Data.map((element) => (
                            <Link id='Link-all' to={"/NewsView?Nid=" + element.id + "&Cid=" + element.category_id}>
                            <div id='rns-card' className="card">
                                <img id='rns-image' src={element.image} className="card-img-top" alt="..." />
                                {/* <div id='rns-img-overlay' className="card-img-overlay card-inverse">
                                </div> */}
                                <div id='rns-card-body' className="card-block">
                                    <Link id='btnrnsCatagory' className='btn btn-sm' type="button" to={`/CategoryView?id=${element.category_id}`}>{element.category_name}</Link>
                                    <p className="card-title">{element.title.slice(0, 80)}...</p>
                                </div>
                                {/* <div id='rns-card-footer'>                                
                                </div> */}
                            </div>
                            </Link>
                            ))}

                            {/* <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[1].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[1].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <p className="card-title">{Data[1].title.slice(0, 70)}...</p>
                                </div>
                                <div id='rns-card-footer'>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[8].id + "&Cid=" + Data[8].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>
                                </div>

                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[2].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[2].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <p className="card-title">{Data[2].title.slice(0, 70)}...</p>
                                </div>
                                <div id='rns-card-footer'>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[8].id + "&Cid=" + Data[8].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>
                                </div>

                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[3].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[3].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <p className="card-title">{Data[3].title.slice(0, 70)}...</p>
                                </div>
                                <div id='rns-card-footer'>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[8].id + "&Cid=" + Data[8].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>
                                </div>

                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[4].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[4].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <p className="card-title">{Data[4].title.slice(0, 70)}...</p>
                                </div>
                                <div id='rns-card-footer'>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[8].id + "&Cid=" + Data[8].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>
                                </div>

                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[5].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[5].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <p className="card-title">{Data[5].title.slice(0, 70)}...</p>
                                </div>
                                <div id='rns-card-footer'>
                                    <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[5].id + "&Cid=" + Data[5].category_id + "Uid=1"} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>
                                </div>
                            </div>


                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[6].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[6].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <p className="card-title">{Data[6].title.slice(0, 85)}...</p>
                                </div>
                                <div id='rns-card-footer'>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[8].id + "&Cid=" + Data[8].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>
                                </div>

                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[7].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[7].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <p className="card-title">{Data[7].title.slice(0, 70)}...</p>
                                </div>
                                <div id='rns-card-footer'>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[8].id + "&Cid=" + Data[8].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>
                                </div>

                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[8].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[8].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <p className="card-title">{Data[8].title.slice(0, 60)}...</p>
                                </div>
                                <div id='rns-card-footer'>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[8].id + "&Cid=" + Data[8].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>
                                </div>
                            </div> */}
                        </div>

                    </div>
                </div>

            </div>
    </>
    )
}

export default RecentNewsSection
