import React from 'react'
import Logo from '../images/ayurveda.jpeg'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div>
        
        <nav class="navbar navbar-light pt-lg-3 pb-lg-2 pt-3 px-0 pb-0">
    <div class="container">
      <div class="row w-100 align-items-center g-3">
        <div class="col-xxl-2 col-lg-3">
          <a class="navbar-brand d-none d-lg-block" href="./index.html">
            <img src="http://www.jainsonindia.com/img/logo.png" alt="eCommerce HTML Template" style={{height:40}}/>
           <span className='font-weight-bold ml-3 pt-3' style={{color:"#2675b3"}}></span>
          </a>
          <div class="d-flex justify-content-between w-100 d-lg-none">
            <a class="navbar-brand" href="#">
              <img src="http://www.jainsonindia.com/img/logo.png" alt="eCommerce HTML Template" style={{height:40}}/>
              <span lassName='font-weight-bold ml-3 pt-3' style={{color:"#2675b3"}}>Jainson.</span>
            </a>

            <div class="d-flex align-items-center lh-1">

              <div class="list-inline me-2">
                <div class="list-inline-item">

                  <a href="#!" class="text-muted" data-bs-toggle="modal" data-bs-target="#userModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </a>
                </div>
                <div class="list-inline-item">

                  <a class="text-muted" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" href="#offcanvasExample" role="button" aria-controls="offcanvasRight">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                  </a>
                </div>

              </div>
              <button class="navbar-toggler collapsed" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                <span class="icon-bar top-bar mt-0"></span>
                <span class="icon-bar middle-bar"></span>
                <span class="icon-bar bottom-bar"></span>
              </button>

            </div>
          </div>

        </div>
        <div class="col-xxl-6 col-lg-5 d-none d-lg-block">

          <form action="#" class="search-header">


            <div class="input-group">
              <input type="text" class="form-control border-end-0" placeholder="Search for products.." aria-label="Search for products.." aria-describedby="basic-addon2"/>
              <span class="input-group-text bg-transparent" id="basic-addon2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg></span>
            </div>
          </form>
        </div>
        {/* <div class="col-md-2 col-xxl-3 d-none d-lg-block">
          <button type="button" class="btn  btn-outline-gray-400 text-muted" data-bs-toggle="modal" data-bs-target="#locationModal">
            <i class="feather-icon icon-map-pin me-2"></i>Location
          </button>


        </div> */}
        <div class="col-md-3 col-xxl-1 text-end d-none d-lg-block text-right ml-5">

          <div class="list-inline">
            <div class="list-inline-item">

              <a href="./pages/shop-wishlist.html" class="text-muted position-relative">

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                  </path>
                </svg>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  5
                  <span class="visually-hidden">unread messages</span>
                </span>
              </a></div>
            <div class="list-inline-item">

              <a href="#!" class="text-muted" data-bs-toggle="modal" data-bs-target="#userModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </a></div>
            <div class="list-inline-item">

              <a class="text-muted position-relative " data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" href="#offcanvasExample" role="button" aria-controls="offcanvasRight">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  1
                  <span class="visually-hidden">unread messages</span>
                </span>
              </a>

            </div>





          </div>
        </div>
      </div>
      </div>
  </nav>
    </div>
  )
}

export default Navbar