import React from 'react'
import {Link} from "react-router-dom"

function SubNavbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light navbar-default pt-0 pb-0">
    <div className="container px-0 px-md-3">

      {/* <div className="dropdown me-3 d-none d-lg-block">
        <button className="btn btn-primary px-6 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="me-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-grid">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg></span> All Departments
        </button>
      
      </div> */}



      <div className="offcanvas offcanvas-start p-4 p-lg-0" id="navbar-default">

        <div className="d-flex justify-content-between align-items-center mb-2 d-block d-lg-none">
          <div><img src="./assets/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template"/></div>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        {/* <div className="d-block d-lg-none mb-2 pt-2">
          <a className="btn btn-primary w-100 d-flex justify-content-center align-items-center" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            <span className="me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-grid">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg></span> All Departments
          </a>
          <div className="collapse mt-2" id="collapseExample">
            <div className="card card-body">
             
            </div>
          </div>
        </div> */}

        <div className="d-lg-none d-block mb-3">
          <button type="button" className="btn  btn-outline-gray-400 text-muted w-100 " data-bs-toggle="modal" data-bs-target="#locationModal">
            <i className="feather-icon icon-map-pin me-2"></i>Pick Location
          </button>
        </div>
        <div className="d-none d-lg-block">
          <ul className="navbar-nav ">
            <li className="nav-item dropdown mr-2">
              <a className="nav-link " href="#" role="button" aria-expanded="false" style={{color:"#888f95"}}>
                Home
              </a>
              
            </li>
            <li className="nav-item dropdown mr-2">
              <Link  to="/about-us" className="nav-link "  role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"#888f95"}}>
                About us
              </Link>
              
            </li>
            <li className="nav-item dropdown mr-2">
              <Link to="/product-page" className="nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"#888f95"}}>
                Products
              </Link>
              
            </li>

            <li className="nav-item dropdown dropdown-fullwidth mr-2">
              <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"#888f95"}}>
                Opportunities
              </a>
              
            </li>
            <li className="nav-item dropdown mr-2">
              <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"#888f95"}}>
                Contact us
              </a>
              
            </li>
            {/* <li className="nav-item dropdown mr-2">
              <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"#888f95"}}>
                Account
              </a>
              
            </li> */}
            
          </ul>
        </div>
        <div className="d-block d-lg-none">
          <ul className="navbar-nav ">
            <li className="nav-item dropdown">
              <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Home
              </a>
            
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Shop
              </a>
             
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Stores
              </a>
            
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mega Menu
              </a>
           
            
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
              </a>
         
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Account
              </a>
         
            </li>
           
          </ul>
        </div>


      </div>
    </div>

  </nav>
    </div>
  )
}

export default SubNavbar