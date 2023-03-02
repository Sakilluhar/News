import React, { useState, useEffect } from 'react'
// import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import './Notification.css'
import { Link } from 'react-router-dom';
import Spinner from './/Spinner';
import { BearerToken } from '../Tokens';

function NewsNotification() {

    const [Data, setData] = useState([]);

    const BToken = BearerToken();
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
        // var url = new URL("https://news.wrteam.in/Api/delete_comment");
        var url =new URL("http://news.thewrteam.in/Api/delete_comment");
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


    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+BToken);
        myHeaders.append("Cookie", "ci_session=12af9107c7cb1f15a290434b44c1be817b862317; csrf_cookie_name=2edd6e5df33b18ac19c9b5bed190f876");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://news.wrteam.in/Api/get_notification?access_key=5670&offset=0&limit=10", requestOptions)
            // fetch("http://news.thewrteam.in/Api/get_notification?access_key=5670&offset=0&limit=10", requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result.data)


            })
            .catch(error => console.log('error', error));

    }, [])

    return (
        <div id="main-Noticard" className='my-3'>
            <div className="d-flex bd-highlight mb-3">
                <Link to='/Persnol_Notification' id='btnNotification11' className="btn mx-1 bd-highlight" > Personal </Link>
                <Link to='/News_Notification' id='btnNewsnoti1' className="btn mx-1 bd-highlight" > News</Link>
                {/* <button  id='btnNotification1' className="btn  btn mx-1 ms-auto bd-highlight" onClick={handleDeleteAll} > Delete All</button> */}
            </div>
            <div className='my-3'>
                {Data.length === 0
                    ?
                    <div>
                        <Spinner />
                    </div>
                    : (<>
                        {Data && Data.map((d, index) => (
                            <div className="card my-3" key={index}>
                                <div className="card-body bd-highlight" id='card-noti'>
                                    <img id='noti_profile' src={d.image} alt="" />
                                    {/* <button className="btn bd-highlight" style={{ color: "#EE2934", background: "" }} id='it' onClick={handletoggle}>
                                        {like ? <AiFillLike size={35} /> : <AiOutlineLike size={35} />}
                                    </button> */}
                                    <div className='Noti-text'>
                                        {/* <p className='bd-highlight'>{d.title}</p> */}
                                        <p>{d.title.slice(0, 100)}...</p>
                                        <p className='bd-highlight' > {d.message.slice(0, 100)}...</p>
                                        <p className='bd-highlight'> {d.date_sent}</p>
                                    </div>

                                    <div className='iconTrash ms-auto bd-highlight'>
                                        <button className="btn  btn m-2 " id='btntrash' onClick={() => handleDeleteComment(d.id)}>
                                            <p className='hide-mobile'>Delete</p>
                                            <p className='hide-laptop'><FiTrash2/></p>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </>)}
            </div>
        </div>
    )
}
export default NewsNotification







