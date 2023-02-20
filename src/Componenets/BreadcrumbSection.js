import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbSection() {
  return (
    <div>
        <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Breadcrumb>
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
      Library
    </Breadcrumb.Item>
    <Breadcrumb.Item active>Data</Breadcrumb.Item>
  </Breadcrumb>
    </Nav>
    
  </div>
  )
}


export default BreadcrumbSection
