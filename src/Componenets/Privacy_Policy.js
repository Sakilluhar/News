import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';


function Privacy_Policy(props) {
  const handleClose = () => props.setPrivacy(false);
  
  
  
  const [Data, setData] = useState([]);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzM4NTMxMjEsImlzcyI6Ik5ld3NBUFAiLCJleHAiOjE2NzY0NDUxMjEsInN1YiI6Ik5ld3MgQVBQIEF1dGhlbnRpY2F0aW9uIn0.aKZFkV4bqFGOKok5CAX897sqBkERhVF6qiPe2CIYPvw");
    myHeaders.append("Cookie", "ci_session=12af9107c7cb1f15a290434b44c1be817b862317; csrf_cookie_name=2edd6e5df33b18ac19c9b5bed190f876");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://news.wrteam.in/Api/get_pages? access_key=5670&language_id=14", requestOptions)
        .then(response => response.json())
        .then(result => {
            setData(result.data)
        })
        .catch(error => console.log('error', error));
}, [])
  return (
    <div>
            {Data.length === 0
                ? "Loading"
                :
                <Modal show={props.Privacy} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <img style={{paddingRight:"10px", height: "2.5rem"}} src={Data[0].page_icon} alt="" />
                        <Modal.Title>{Data[0].title}</Modal.Title>
                        
                    </Modal.Header>
                    <Modal.Body dangerouslySetInnerHTML={{__html:Data[0].page_content }}></Modal.Body>
                </Modal>
            }
        </div>
  )
}

export default Privacy_Policy
