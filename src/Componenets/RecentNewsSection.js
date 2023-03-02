import React, { useState } from 'react'
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import { BearerToken } from '../Tokens';



function RecentNewsSection() {

    const [Data, setData] = useState([]);
    const BToken = BearerToken();
    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + BToken);

        var formdata = new FormData();
        formdata.append("access_key", "5670");
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

        // fetch("https://news.wrteam.in/Api/get_news", requestOptions)
        fetch("http://news.thewrteam.in/Api/get_news", requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result.data)
            })
            .catch(error => console.log('error', error));
    }, [])



    return (<>
        {Data.length === 0 ? "loading"
            :
            <div>
                <div id='rns-main'>



                    <div id='rns-cards-main' className="">

                        <div id='rns-head-main' className=''>
                            <h4 id='rns-main-logo'>Recent News</h4>
                            <a href='/' id='rns-Viewmore'>View More</a>
                        </div>

                        <div id='rns-card-row'>
                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[0].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay card-inverse">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[0].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-block">
                                    <h4 className="card-title">{Data[0].title.slice(0, 80)}...</h4>
                                </div>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[0].id + "&Cid=" + Data[0].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>
                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[1].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[1].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <h4 className="card-title">{Data[1].title.slice(0, 70)}...</h4>
                                </div>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[1].id + "&Cid=" + Data[1].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>

                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[2].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[2].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <h4 className="card-title">{Data[2].title.slice(0, 70)}...</h4>
                                </div>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[2].id + "&Cid=" + Data[2].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>

                            </div>
                        </div>

                        <div id='rns-card-row'>
                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[3].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[3].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <h4 className="card-title">{Data[3].title.slice(0, 70)}...</h4>
                                </div>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[3].id + "&Cid=" + Data[3].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>

                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[4].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[4].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <h4 className="card-title">{Data[4].title.slice(0, 70)}...</h4>
                                </div>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[4].id + "&Cid=" + Data[4].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>

                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[5].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[5].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <h4 className="card-title">{Data[5].title.slice(0, 70)}...</h4>
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
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[6].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <h4 className="card-title">{Data[6].title.slice(0, 85)}...</h4>
                                </div>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[6].id + "&Cid=" + Data[6].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>

                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[7].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[7].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <h4 className="card-title">{Data[7].title.slice(0, 70)}...</h4>
                                </div>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[7].id + "&Cid=" + Data[7].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>

                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[8].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[8].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <h4 className="card-title">{Data[8].title.slice(0, 70)}...</h4>
                                </div>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[8].id + "&Cid=" + Data[8].category_id} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>

                            </div>
                        </div>

                    </div>




                    <div id='rns-main-mobile' className="">

                        <div id='rns-head-main' className=''>
                            <h5 id='rns-main-logo'>Recent <br/>News</h5>
                            <a href='/' id='rns-Viewmore'>View  <br/> More</a>
                        </div>

                        <div id='rns-card-row'>
                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[0].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay card-inverse">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[0].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-block">
                                    <h4 className="card-title">{Data[0].title.slice(0, 80)}...</h4>
                                </div>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[0].id + "&Cid=" + Data[0].category_id + "Uid=1"} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>
                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[1].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[1].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <h4 className="card-title">{Data[1].title.slice(0, 70)}...</h4>
                                </div>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[1].id + "&Cid=" + Data[1].category_id + "Uid=1"} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>

                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[2].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[2].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <h4 className="card-title">{Data[2].title.slice(0, 70)}...</h4>
                                </div>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[2].id + "&Cid=" + Data[2].category_id + "Uid=1"} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>

                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[3].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[3].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <h4 className="card-title">{Data[3].title.slice(0, 70)}...</h4>
                                </div>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[3].id + "&Cid=" + Data[3].category_id + "Uid=1"} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>

                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[4].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[4].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <h4 className="card-title">{Data[4].title.slice(0, 70)}...</h4>
                                </div>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[4].id + "&Cid=" + Data[4].category_id + "Uid=1"} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>

                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[5].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[5].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <h4 className="card-title">{Data[5].title.slice(0, 70)}...</h4>
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
                                    <h4 className="card-title">{Data[6].title.slice(0, 85)}...</h4>
                                </div>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[6].id + "&Cid=" + Data[6].category_id + "Uid=1"} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>

                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[7].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[7].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <h4 className="card-title">{Data[7].title.slice(0, 70)}...</h4>
                                </div>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[7].id + "&Cid=" + Data[7].category_id + "Uid=1"} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>

                            </div>

                            <div id='rns-card' className="card">
                                <img id='rns-image' src={Data[8].image} className="card-img-top" alt="..." />
                                <div id='rns-img-overlay' className="card-img-overlay">
                                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >{Data[8].category_name}</button>
                                </div>
                                <div id='rns-card-body' className="card-body">
                                    <h4 className="card-title">{Data[8].title.slice(0, 60)}...</h4>
                                </div>
                                <Link id='btnrnsRead' className='btn overlay' to={"/NewsView?Nid=" + Data[8].id + "&Cid=" + Data[8].category_id + "Uid=1"} type="button" >Read More<IoMdArrowForward id='rns-arrow' size={25} /></Link>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        }
    </>
    )
}

export default RecentNewsSection
