import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import  './BreadcrumbNav.css'



function BreadcrumbNav(props) {
  return (
    <Breadcrumb id='bcb-main'>
      <Breadcrumb.Item id='bcb-item'><Link style={{textDecoration: "none"}} id="bcb-link-text" to="/" >Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item active>
       {props.SecondElement}
      </Breadcrumb.Item>
      {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
    </Breadcrumb>
  )
}

export default BreadcrumbNav
