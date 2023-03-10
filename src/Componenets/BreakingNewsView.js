import React from 'react'
import './BreakingNewsView.css';
import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuery } from '../Hooks';
import { BearerToken } from '../Tokens';
import no_image from "../images/no_image.jpeg";

function BreakingNewsView() {


    const [Data, setData] = useState([]);
    const { category_id } = useParams();
    const query = useQuery();
    const catid = query.get('id');
    const user_id = query.get('uid');
    const BToken = BearerToken();

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer"+BToken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://news.thewrteam.in/Api/get_breaking_news?access_key=5670&language_id=14", requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result.data)
            })
            .catch(error => console.log('error', error));
    }, [])
    return (
        <>
            <div id='BNV-main'>
                <div id='BNV-content' className="">
                    <h1 className="text-center"></h1>
                    <div className="row">
                        <Link id='' to="/go"  ></Link>

                        {Data && Data.map((element) => (
                            <div className="col-md-4 " key={element.id}>
                                {/* <Link id='Link-all' to={"/NewsView?Nid=" + element.id + "&Cid=" + element.category_id}> */}
                                <div id='BNV-card' className="card">
                                    <img id='BNV-card-image' src={element.image ? element.image : no_image} className="card-img" alt="..." />

                                    <div id='BNV-card-body' className="card-body">
                                        {/* <button id='BNV-btnCatagory' className='btn btn-sm' type="button" >{element.category_name}</button> */}
                                        <h5 id='BNV-card-title' className="card-title">{element.title.slice(0, 150)}...</h5>
                                        {/* <p id="BNV-card-date"><FiCalendar size={18} id="BNV-logoCalendar" />{element.date.slice(0, 10)}</p> */}
                                        {/* <Link id='btnBNVRead' className='btn overlay' type="button" to="/NewsView" ><IoArrowForwardCircleSharp size={50}/></Link> */}
                                    </div>

                                </div>

                                {/* </Link> */}
                            </div>

                        ))}

                    </div>
                </div>

            </div>

        </>
    )
}

export default BreakingNewsView

