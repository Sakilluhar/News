import React, { useState, useEffect } from 'react'
// import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import './Notification.css'
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import { ApiWrt, BearerToken } from '../Tokens';

import no_image from "../images/no_image.jpeg";





function Notification() {
   
    const BToken = BearerToken();
    const ApiUrl = ApiWrt();
 

    const handleDeleteComment = (id) => {
        console.log(id);

        var uid = JSON.parse(localStorage.getItem('user')).data.id
        console.log(uid)



        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+BToken);
        myHeaders.append("Cookie", "ci_session=12af9107c7cb1f15a290434b44c1be817b862317; csrf_cookie_name=2edd6e5df33b18ac19c9b5bed190f876");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };


        var params = { 'access_key': 5670, 'user_id': uid, 'comment_id': id };
        var url =new URL(`${ApiUrl}/delete_comment`);
        for (let k in params) {
            url.searchParams.append(k, params[k])
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {

                alert(result.message)




            })
            .catch(error => console.log('error', error));
    }
    
    const [Data, setData] = useState([]);


    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization",  "Bearer "+ BToken);
        myHeaders.append("Cookie", "ci_session=12af9107c7cb1f15a290434b44c1be817b862317; csrf_cookie_name=2edd6e5df33b18ac19c9b5bed190f876");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

 
        fetch(`${ApiUrl}/get_comment_by_news?access_key=5670&news_id=1&user_id="+JSON.parse(localStorage.getItem('user')).data.id+"&offset=0&limit=10`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result.data)
            })
            .catch(error => console.log('error', error));
    }, [])

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+BToken);
        myHeaders.append("Cookie", "ci_session=12af9107c7cb1f15a290434b44c1be817b862317; csrf_cookie_name=2edd6e5df33b18ac19c9b5bed190f876");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${ApiUrl}/get_comment_by_news?access_key=5670&news_id=1&user_id="+JSON.parse(localStorage.getItem('user')).data.id+"&offset=0&limit=10`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }, [])


    return (
        <div id="main-Noticard" className='my-3'>
            <div className="d-flex bd-highlight mb-3">
                <Link to='/Persnol_Notification' id='btnNotification1' className="btn mx-1 bd-highlight" > Personal </Link>
                <Link to='/News_Notification' id='btnNewsnoti' className="btn mx-1 bd-highlight" > News</Link>
                {/* <button id='btnNotification1' className="btn  btn mx-1 ms-auto bd-highlight" onClick={handleDeleteAll} > Delete All</button> */}
            </div>
            <div className='my-3'>
                {Data.length === 0
                    ? <div>
                        <Spinner/>
                    </div>
                    : (<>
                        {Data.map((d, index) => (
                            <div>
                                {/* {visible && ( */}
                                <div className="card my-3" key={index}>

                                    <div className="card-body bd-highlight" id='card-noti'>
                                        <img id='noti_profile' src={d.profile ? d.profile : no_image} alt="" />
                                        <div className='Noti-text'>

                                            <p className='bd-highlight ' > Replay in your comment {d.message}</p>
                                            <p>by {d.name}</p>
                                            <p className='bd-highlight'> {d.date} ago</p>
                                        </div>

                                        <div className='iconTrash ms-auto bd-highlight'>
                                            <button className="btn  btn m-2 " id='btntrash' onClick={handleDeleteComment} >
                                            <p className='hide-mobile'>Delete</p>
                                            <p className='hide-laptop'><FiTrash2/></p>
                                            </button>
                                        </div>

                                    </div>

                                </div>
                                {/* )} */}
                            </div>
                        ))}
                    </>)}
                {/* <div className="card my-3">
                    <div className="card-body d-flex bd-highlight" id='card-noti'>
                        
                        <button className="btn bd-highlight" style={{ color: "#EE2934", background: "" }} id='it' onClick={handletoggle}>
                            {like ? <AiFillLike size={35} /> : <AiOutlineLike size={35} />}
                        </button>
                        <div>
                            <p className='bd-highlight'>yash</p>
                        </div>
                        <div className='iconTrash ms-auto bd-highlight'>
                            <button className="btn  btn m-2 " style={{ color: "#EE2934", background: "" }} id='btntrash' onClick={handleDeleteComment}><FiTrash2 size={25} /></button>
                        </div>
                    </div>
                </div> */}



            </div>
        </div>
    )
} export default Notification
