import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-link">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">News</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">ABOUT US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">CATEGORIES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">BREAKING NEWS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">CONTACT US</a>
        </li>
      </ul>
      <button style={{color: "#ffffff", background: "#EE2934"}} type="button" className="btn me-2">Sighn In</button>
      <button style={{color: "#EE2934", background: "#edf2f8"}} type="button" className="btn fa-solid fa-light fa-bell me-2"></button>
      <button style={{color: "#EE2934", background: "#edf2f8"}} type="button" className="btn fa-solid fa-magnifying-glass me-2"></button>
        
        {/* <button type="button" className="btn fa-light fa-bell me-2" style={{background: "#EE2934"}}></button> */}
     
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
