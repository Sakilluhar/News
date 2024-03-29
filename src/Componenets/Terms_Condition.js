import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ApiWrt, BearerToken } from '../Tokens';
import  '../CSS/Terms&Privacy.css'
import { MdOutlineMenuBook } from 'react-icons/md';



function Terms_Condition(props) {

    const handleClose = () => props.setShow(false);
    const BToken = BearerToken();
    const ApiUrl = ApiWrt();
    const [Data, setData] = useState([]);


    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + BToken);
        myHeaders.append("Cookie", "ci_session=12af9107c7cb1f15a290434b44c1be817b862317; csrf_cookie_name=2edd6e5df33b18ac19c9b5bed190f876");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };


  fetch(`${ApiUrl}/get_pages? access_key=5670&language_id=14`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result.data)
            })
            .catch(error => console.log('error', error));
    })
    return (
        <div>
            {Data.length === 0
                ? ""
                :
                <Modal 
                show={props.show} 
                onHide={handleClose} 
                centered
                id="modaltp">
                    <Modal.Header id='tns-modal-header' >
                        <MdOutlineMenuBook style={{ paddingRight: "10px"}} size={50}/>
                        {/* <img style={{ paddingRight: "10px", height: "2.5rem"}} src={Data[1].page_icon} alt="" /> */}
                        <Modal.Title>{Data[1].title}</Modal.Title>

                    </Modal.Header>
                    <Modal.Body  id="tns-modal-body" dangerouslySetInnerHTML={{ __html: Data[1].page_content }}></Modal.Body>
                </Modal>
            }
        </div>
    )
}

export default Terms_Condition
