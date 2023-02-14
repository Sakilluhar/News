import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from "react-player";
import { AiOutlineClose } from "react-icons/ai";


function VideoPlayerModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
        >
      {/* <Modal.Header id='vps-modal-header' closeButton>
        <Modal.Title className='vps-modal-title' id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body id='vps-modal-body'>
      <Button id='vps-modal-btnclose' onClick={props.onHide}><AiOutlineClose id='btnClose-logo' size={40}/></Button>
        <ReactPlayer
          width="100%"
          height="40rem"
          url={props.url}
          controls={true}
        />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  )
}

export default VideoPlayerModal
