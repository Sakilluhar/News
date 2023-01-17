import React, {useState} from 'react'
import { AiOutlineLike, AiFillLike} from 'react-icons/ai';
import  { FiTrash2 } from 'react-icons/fi';

import './Notification.css'
export default function Notification() {
   const handleDeleteAll=()=>{

   }


   const handleDeleteComment=()=>{
    
   }
//    const [icon, setIcon] = useState(AiOutlineLike);
   const [like, setLike] = useState(false);
   const handletoggle = () => {
    setLike(!like)
};

   
    return (
        <div className="container mx-5">
            <div className="d-flex bd-highlight mb-3">
                <button style={{ width: "10%", color: "#ffffff", background: "#EE2934" }} id='btnNotification' className="btn mx-1 bd-highlight" > Personal </button>
                <button style={{ width: "10%", color: "#000000", background: "#EDF2F8" }} id='btnNotification' className="btn mx-1 bd-highlight" > News</button>
                <button style={{ width: "10%", color: "#EE2934", background: "" }} id='btnNotification' className="btn  btn mx-1 ms-auto bd-highlight" onClick={handleDeleteAll} > Delete All</button>
            </div>
            <div className='my-3'>
                <div className="card my-3">
                    <div className="card-body d-flex bd-highlight" id='card-noti'>
                        <button className="btn bd-highlight" style={{ color: "#EE2934", background: "" }} id='it' onClick={handletoggle}>
                            {like ? <AiFillLike size={35}/>:<AiOutlineLike size={35}/>}
                        </button>
                        <div>
                        <p className='bd-highlight'>yash</p>
                        </div> 
                        <div className='iconTrash ms-auto bd-highlight'>
                            <button className="btn  btn m-2 " style={{ color: "#EE2934", background: "" }}id='btntrash' onClick={handleDeleteComment}><FiTrash2  size={25} /></button>
                        </div>
                    </div>
                </div>
                
                
               
            </div>
        </div>
    )
}
