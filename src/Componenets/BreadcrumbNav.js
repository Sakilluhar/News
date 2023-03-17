import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import './BreadcrumbNav.css'
import { FaHome } from 'react-icons/fa';




function BreadcrumbNav(props) {
  return (
    <Breadcrumb id='bcb-main'>
      <Breadcrumb.Item id='bcb-item'>
        <Link style={{ textDecoration: "none" }} id="bcb-link-text" to="/" >
        <FaHome size={25} id="bcb-home-logo" /> Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item active id='bcb-active-item'>
        {props.SecondElement}
      </Breadcrumb.Item >
      <Breadcrumb.Item active id='bcb-third-item'>
        {props.ThirdElement}
      </Breadcrumb.Item>
      {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
    </Breadcrumb>
  )
}

export default BreadcrumbNav
