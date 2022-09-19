import React from "react";
import {Link} from "react-router-dom"
import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";

function ProductPage() {
  return (
    <div>
        <Navbar/>
        <SubNavbar/>
      <div class="mt-4">
        <div class="container">
          <div class="row ">
            <div class="col-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item">
                    <Link to="/" href="#!">Home</Link>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="#!">Product</a>
                  </li>
                  {/* <li class="breadcrumb-item active" aria-current="page">
                    Snacks &amp; Munchies
                  </li> */}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <section class=" mt-8 mb-lg-14 mb-8">
        <div class="container">
          <div class="row gx-10">
            <div class="col-lg-3 col-md-4 mb-6 mb-md-0">
              <div class="py-4">
                <h5 class="mb-3">Categories</h5>
                <ul class="nav nav-category" id="categoryCollapseMenu">
                  <li
                    class="nav-item border-bottom w-100 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#categoryFlushOne"
                    aria-expanded="false"
                    aria-controls="categoryFlushOne"
                  >
                    <a href="#" class="nav-link">
                     Skin Care
                      <i class="feather-icon icon-chevron-right"></i>
                    </a>
                   
                  </li>
                  <li
                    class="nav-item border-bottom w-100 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    <a href="#" class="nav-link">
                      Hair Care
                      <i class="feather-icon icon-chevron-right"></i>
                    </a>

                  </li>
                  <li
                    class="nav-item border-bottom w-100 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    {" "}
                    <a href="#" class="nav-link">
                      Dental Care
                      <i class="feather-icon icon-chevron-right"></i>
                    </a>
                  </li>
                  <li
                    class="nav-item border-bottom w-100 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    {" "}
                    <a href="#" class="nav-link">
                      Personal Wellness
                      <i class="feather-icon icon-chevron-right"></i>
                    </a>
                  </li>

                
                 
               
                </ul>
              </div>

             
              <div class="py-4">
                <h5 class="mb-3">Price</h5>
                <div>
                  <div
                    id="priceRange"
                    class="mb-3 noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"
                  >
                    <div class="noUi-base">
                      <div class="noUi-connects">
                        <div
                          class="noUi-connect"
                        //   style="transform: translate(14.6259%, 0px) scale(0.510204, 1);"
                        ></div>
                      </div>
                      <div
                        class="noUi-origin"
                        // style="transform: translate(-85.3741%, 0px); z-index: 5;"
                      >
                        <div
                          class="noUi-handle noUi-handle-lower"
                          data-handle="0"
                          tabindex="0"
                          role="slider"
                          aria-orientation="horizontal"
                          aria-valuemin="6.0"
                          aria-valuemax="199.0"
                          aria-valuenow="49.0"
                          aria-valuetext="₹49"
                        >
                          <div class="noUi-touch-area"></div>
                        </div>
                      </div>
                      <div
                        class="noUi-origin"
                        // style="transform: translate(-34.3537%, 0px); z-index: 4;"
                      >
                        <div
                          class="noUi-handle noUi-handle-upper"
                          data-handle="1"
                          tabindex="0"
                          role="slider"
                          aria-orientation="horizontal"
                          aria-valuemin="49.0"
                          aria-valuemax="300.0"
                          aria-valuenow="199.0"
                          aria-valuetext="₹199"
                        >
                          <div class="noUi-touch-area"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <small class="text-muted">Price:</small>{" "}
                  <span id="priceRange-value" class="small">
                  ₹49 - ₹199
                  </span>
                </div>
              </div>

              <div class="py-4">
                <h5 class="mb-3">Rating</h5>
                <div>
                  <div class="form-check mb-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="ratingFive"
                    />
                    <label class="form-check-label" for="ratingFive">
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning "></i>
                      <i class="bi bi-star-fill text-warning "></i>
                      <i class="bi bi-star-fill text-warning "></i>
                      <i class="bi bi-star-fill text-warning "></i>
                    </label>
                  </div>

                  <div class="form-check mb-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="ratingFour"
                      checked=""
                    />
                    <label class="form-check-label" for="ratingFour">
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning "></i>
                      <i class="bi bi-star-fill text-warning "></i>
                      <i class="bi bi-star-fill text-warning "></i>
                      <i class="bi bi-star text-warning"></i>
                    </label>
                  </div>

                  <div class="form-check mb-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="ratingThree"
                    />
                    <label class="form-check-label" for="ratingThree">
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning "></i>
                      <i class="bi bi-star-fill text-warning "></i>
                      <i class="bi bi-star text-warning"></i>
                      <i class="bi bi-star text-warning"></i>
                    </label>
                  </div>

                  <div class="form-check mb-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="ratingTwo"
                    />
                    <label class="form-check-label" for="ratingTwo">
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star text-warning"></i>
                      <i class="bi bi-star text-warning"></i>
                      <i class="bi bi-star text-warning"></i>
                    </label>
                  </div>

                  <div class="form-check mb-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="ratingOne"
                    />
                    <label class="form-check-label" for="ratingOne">
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star text-warning"></i>
                      <i class="bi bi-star text-warning"></i>
                      <i class="bi bi-star text-warning"></i>
                      <i class="bi bi-star text-warning"></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-9 col-md-8">
              {/* <div class="card mb-4 bg-light border-0">
                <div class=" card-body p-9">
                  <h1 class="mb-0">Snacks &amp; Munchies</h1>
                </div>
              </div> */}
              <div class="d-md-flex justify-content-between align-items-center">
                <div>
                  <p class="mb-3 mb-md-0">
                    {" "}
                    <span class="text-dark">24 </span> Products found{" "}
                  </p>
                </div>

                <div class="d-flex justify-content-between align-items-center">
                  <a href="shop-list.html" class="text-muted me-3">
                    <i class="bi bi-list-ul"></i>
                  </a>
                  <a href="shop-grid.html" class=" me-3 active">
                    <i class="bi bi-grid"></i>
                  </a>
                  <a href="shop-grid-3-column.html" class="me-3 text-muted">
                    <i class="bi bi-grid-3x3-gap"></i>
                  </a>
                  <div class="me-2">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected="">Show: 50</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                    </select>
                  </div>
                  <div>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected="">Sort by: Featured</option>
                      <option value="Low to High">Price: Low to High</option>
                      <option value="High to Low"> Price: High to Low</option>
                      <option value="Release Date"> Release Date</option>
                      <option value="Avg. Rating"> Avg. Rating</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                <div class="col">
                  <div class="card card-product">
                    <div class="card-body">
                      <div class="text-center position-relative ">
                        <div class=" position-absolute top-0 start-0">
                          <span class="badge bg-danger">Sale</span>
                        </div>
                        <a href="#!">
                          <img
                            src="http://www.jainsonindia.com/img/products/prod-single-4.png"
                            alt="Grocery Ecommerce Template"
                            class="mb-3 img-fluid"
                          />
                        </a>

                        <div class="card-product-action">
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i
                              class="bi bi-eye"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              aria-label="Quick View"
                            ></i>
                          </a>
                          <a
                            href="shop-wishlist.html"
                            class="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            aria-label="Wishlist"
                          >
                            <i class="bi bi-heart"></i>
                          </a>
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            aria-label="Compare"
                          >
                            <i class="bi bi-arrow-left-right"></i>
                          </a>
                        </div>
                      </div>

                      <div class="text-small mb-1">
                        <a href="#!" class="text-decoration-none text-muted">
                          <small>Skin Care</small>
                        </a>
                      </div>
                      <h2 class="fs-6">
                        <a href="#!" class="text-inherit text-decoration-none">
                        </a>
                      </h2>
                      <div>
                        <small class="text-warning">
                          {" "}
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-half"></i>
                        </small>{" "}
                        <span class="text-muted small">4.5(149)</span>
                      </div>

                      <div class="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span class="text-dark">₹18</span>{" "}
                          <span class="text-decoration-line-through text-muted">
                            ₹24
                          </span>
                        </div>

                        <div>
                          <a href="#!" class="btn btn-success btn-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-plus"
                            >
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>{" "}
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card card-product">
                    <div class="card-body">
                      <div class="text-center position-relative">
                        <div class=" position-absolute top-0 start-0">
                          <span class="badge bg-success">14%</span>
                        </div>

                        <a href="#!">
                          <img
                            src="http://www.jainsonindia.com/img/products/prod-single-4.png"
                            alt="Grocery Ecommerce Template"
                            class="mb-3 img-fluid"
                          />
                        </a>

                        <div class="card-product-action">
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i
                              class="bi bi-eye"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              aria-label="Quick View"
                            ></i>
                          </a>
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            aria-label="Wishlist"
                          >
                            <i class="bi bi-heart"></i>
                          </a>
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            aria-label="Compare"
                          >
                            <i class="bi bi-arrow-left-right"></i>
                          </a>
                        </div>
                      </div>

                      <div class="text-small mb-1">
                        <a href="#!" class="text-decoration-none text-muted">
                          <small>Dental Care</small>
                        </a>
                      </div>
                      <h2 class="fs-6">
                        <a href="#!" class="text-inherit text-decoration-none">
                        </a>
                      </h2>
                      <div class="text-warning">
                        <small>
                          {" "}
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-half"></i>
                        </small>{" "}
                        <span class="text-muted small">4.5 (25)</span>
                      </div>

                      <div class="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span class="text-dark">₹24</span>
                        </div>

                        <div>
                          <a href="#!" class="btn btn-success btn-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-plus"
                            >
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>{" "}
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card card-product">
                    <div class="card-body">
                      <div class="text-center position-relative">
                        {" "}
                        <a href="#!">
                          <img
                            src="http://www.jainsonindia.com/img/products/prod-single-4.png"
                            alt="Grocery Ecommerce Template"
                            class="mb-3 img-fluid"
                          />
                        </a>
                        <div class="card-product-action">
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i
                              class="bi bi-eye"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              aria-label="Quick View"
                            ></i>
                          </a>
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            aria-label="Wishlist"
                          >
                            <i class="bi bi-heart"></i>
                          </a>
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            aria-label="Compare"
                          >
                            <i class="bi bi-arrow-left-right"></i>
                          </a>
                        </div>
                      </div>

                      <div class="text-small mb-1">
                        <a href="#!" class="text-decoration-none text-muted">
                          <small>Dental Care</small>
                        </a>
                      </div>
                      <h2 class="fs-6">
                        <a href="#!" class="text-inherit text-decoration-none">
                        </a>
                      </h2>
                      <div class="text-warning">
                        <small>
                          {" "}
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                        </small>{" "}
                        <span class="text-muted small">5 (469)</span>
                      </div>

                      <div class="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span class="text-dark">₹32</span>{" "}
                          <span class="text-decoration-line-through text-muted">
                            ₹35
                          </span>
                        </div>

                        <div>
                          <a href="#!" class="btn btn-success btn-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-plus"
                            >
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>{" "}
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card card-product">
                    <div class="card-body">
                      <div class="text-center position-relative">
                        <div class=" position-absolute top-0">
                          <span class="badge bg-danger">hot</span>
                        </div>

                        <a href="#!">
                          <img
                            src="http://www.jainsonindia.com/img/products/prod-single-4.png"
                            alt="Grocery Ecommerce Template"
                            class="mb-3 img-fluid"
                          />
                        </a>

                        <div class="card-product-action">
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i
                              class="bi bi-eye"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              aria-label="Quick View"
                            ></i>
                          </a>
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            aria-label="Wishlist"
                          >
                            <i class="bi bi-heart"></i>
                          </a>
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            aria-label="Compare"
                          >
                            <i class="bi bi-arrow-left-right"></i>
                          </a>
                        </div>
                      </div>

                      <div class="text-small mb-1">
                        <a href="#!" class="text-decoration-none text-muted">
                          <small>Skin Care</small>
                        </a>
                      </div>
                      <h2 class="fs-6">
                        <a href="#!" class="text-inherit text-decoration-none">
                          
                        </a>
                      </h2>
                      <div class="text-warning">
                        <small>
                          {" "}
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-half"></i>
                          <i class="bi bi-star"></i>
                        </small>{" "}
                        <span class="text-muted small">3.5 (456)</span>
                      </div>

                      <div class="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span class="text-dark">₹3</span>{" "}
                          <span class="text-decoration-line-through text-muted">
                            ₹5
                          </span>
                        </div>

                        <div>
                          <a href="#!" class="btn btn-success btn-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-plus"
                            >
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>{" "}
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card card-product">
                    <div class="card-body">
                      <div class="text-center position-relative">
                        {" "}
                        <a href="#!">
                          <img
                            src="http://www.jainsonindia.com/img/products/prod-single-4.png"
                            alt="Grocery Ecommerce Template"
                            class="mb-3 img-fluid"
                          />
                        </a>
                        <div class="card-product-action">
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i
                              class="bi bi-eye"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              aria-label="Quick View"
                            ></i>
                          </a>
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            aria-label="Wishlist"
                          >
                            <i class="bi bi-heart"></i>
                          </a>
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            aria-label="Compare"
                          >
                            <i class="bi bi-arrow-left-right"></i>
                          </a>
                        </div>
                      </div>

                      <div class="text-small mb-1">
                        <a href="#!" class="text-decoration-none text-muted">
                          <small>Hair Care</small>
                        </a>
                      </div>
                      <h2 class="fs-6">
                        <a href="#!" class="text-inherit text-decoration-none">
                        </a>
                      </h2>
                      <div class="text-warning">
                        <small>
                          {" "}
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-half"></i>
                        </small>{" "}
                        <span class="text-muted small">4.5 (39)</span>
                      </div>
                      <div class="d-flex justify-content-between mt-4">
                        <div>
                          <span class="text-dark">₹13</span>{" "}
                          <span class="text-decoration-line-through text-muted">
                            ₹18
                          </span>
                        </div>

                        <div>
                          <a href="#!" class="btn btn-success btn-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-plus"
                            >
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>{" "}
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card card-product">
                    <div class="card-body">
                      <div class="text-center position-relative ">
                        <div class=" position-absolute top-0">
                          <span class="badge bg-danger">Sale</span>
                        </div>
                        <a href="#!">
                          <img
                            src="http://www.jainsonindia.com/img/products/prod-single-4.png"
                            alt="Grocery Ecommerce Template"
                            class="mb-3 img-fluid"
                          />
                        </a>

                        <div class="card-product-action">
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i
                              class="bi bi-eye"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              aria-label="Quick View"
                            ></i>
                          </a>
                          <a
                            href="shop-wishlist.html"
                            class="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            aria-label="Wishlist"
                          >
                            <i class="bi bi-heart"></i>
                          </a>
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            aria-label="Compare"
                          >
                            <i class="bi bi-arrow-left-right"></i>
                          </a>
                        </div>
                      </div>

                      <div class="text-small mb-1">
                        <a href="#!" class="text-decoration-none text-muted">
                          <small>Dental Care</small>
                        </a>
                      </div>
                      <h2 class="fs-6">
                        <a href="#!" class="text-inherit text-decoration-none">
                        </a>
                      </h2>
                      <div>
                        <small class="text-warning">
                          {" "}
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-half"></i>
                        </small>{" "}
                        <span class="text-muted small">4.5 (189)</span>
                      </div>

                      <div class="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span class="text-dark">₹18</span>{" "}
                          <span class="text-decoration-line-through text-muted">
                            ₹24
                          </span>
                        </div>

                        <div>
                          <a href="#!" class="btn btn-success btn-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-plus"
                            >
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>{" "}
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card card-product">
                    <div class="card-body">
                      <div class="text-center position-relative">
                        {" "}
                        <a href="#!">
                          <img
                            src="http://www.jainsonindia.com/img/products/prod-single-4.png"
                            alt="Grocery Ecommerce Template"
                            class="mb-3 img-fluid"
                          />
                        </a>
                        <div class="card-product-action">
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i
                              class="bi bi-eye"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              aria-label="Quick View"
                            ></i>
                          </a>
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            aria-label="Wishlist"
                          >
                            <i class="bi bi-heart"></i>
                          </a>
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            aria-label="Compare"
                          >
                            <i class="bi bi-arrow-left-right"></i>
                          </a>
                        </div>
                      </div>

                      <div class="text-small mb-1">
                        <a href="#!" class="text-decoration-none text-muted">
                          <small>Dental Care</small>
                        </a>
                      </div>
                      <h2 class="fs-6">
                        <a href="#!" class="text-inherit text-decoration-none">
                        </a>
                      </h2>
                      <div class="text-warning">
                        <small>
                          {" "}
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                        </small>{" "}
                        <span class="text-muted small">5 (345)</span>
                      </div>

                      <div class="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span class="text-dark">₹24</span>
                        </div>

                        <div>
                          <a href="#!" class="btn btn-success btn-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-plus"
                            >
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>{" "}
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card card-product">
                    <div class="card-body">
                      <div class="text-center position-relative">
                        {" "}
                        <a href="#!">
                          <img
                            src="http://www.jainsonindia.com/img/products/prod-single-4.png"
                            alt="Grocery Ecommerce Template"
                            class="mb-3 img-fluid"
                          />
                        </a>
                        <div class="card-product-action">
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i
                              class="bi bi-eye"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              aria-label="Quick View"
                            ></i>
                          </a>
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            aria-label="Wishlist"
                          >
                            <i class="bi bi-heart"></i>
                          </a>
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            aria-label="Compare"
                          >
                            <i class="bi bi-arrow-left-right"></i>
                          </a>
                        </div>
                      </div>
                      <div class="text-small mb-1">
                        <a href="#!" class="text-decoration-none text-muted">
                          <small>Hair Care</small>
                        </a>
                      </div>
                      <h2 class="fs-6">
                        <a href="#!" class="text-inherit text-decoration-none">
                        </a>
                      </h2>
                      <div class="text-warning">
                        <small>
                          {" "}
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-half"></i>
                        </small>{" "}
                        <span class="text-muted small">4 (90)</span>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span class="text-dark">₹32</span>{" "}
                          <span class="text-decoration-line-through text-muted">
                            ₹35
                          </span>
                        </div>
                        <div>
                          <a href="#!" class="btn btn-success btn-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-plus"
                            >
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>{" "}
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card card-product">
                    <div class="card-body">
                      <div class="text-center position-relative">
                        {" "}
                        <a href="#!">
                          <img
                            src="http://www.jainsonindia.com/img/products/prod-single-4.png"
                            alt="Grocery Ecommerce Template"
                            class="mb-3 img-fluid"
                          />
                        </a>
                        <div class="card-product-action">
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i
                              class="bi bi-eye"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              aria-label="Quick View"
                            ></i>
                          </a>
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            aria-label="Wishlist"
                          >
                            <i class="bi bi-heart"></i>
                          </a>
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            aria-label="Compare"
                          >
                            <i class="bi bi-arrow-left-right"></i>
                          </a>
                        </div>
                      </div>
                      <div class="text-small mb-1">
                        <a href="#!" class="text-decoration-none text-muted">
                          <small>Skin Care</small>
                        </a>
                      </div>
                      <h2 class="fs-6">
                        <a href="#!" class="text-inherit text-decoration-none">
                        </a>
                      </h2>
                      <div class="text-warning">
                        <small>
                          {" "}
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-half"></i>
                        </small>{" "}
                        <span class="text-muted small">4.5 (67)</span>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span class="text-dark">₹3</span>{" "}
                          <span class="text-decoration-line-through text-muted">
                            ₹5
                          </span>
                        </div>
                        <div>
                          <a href="#!" class="btn btn-success btn-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-plus"
                            >
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>{" "}
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card card-product">
                    <div class="card-body">
                      <div class="text-center position-relative">
                        {" "}
                        <a href="#!">
                          <img
                            src="http://www.jainsonindia.com/img/products/prod-single-4.png"
                            alt="Grocery Ecommerce Template"
                            class="mb-3 img-fluid"
                          />
                        </a>
                        <div class="card-product-action">
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i
                              class="bi bi-eye"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              aria-label="Quick View"
                            ></i>
                          </a>
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            aria-label="Wishlist"
                          >
                            <i class="bi bi-heart"></i>
                          </a>
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            aria-label="Compare"
                          >
                            <i class="bi bi-arrow-left-right"></i>
                          </a>
                        </div>
                      </div>
                      <div class="text-small mb-1">
                        <a href="#!" class="text-decoration-none text-muted">
                          <small>Dental Care</small>
                        </a>
                      </div>
                      <h2 class="fs-6">
                        <a href="#!" class="text-inherit text-decoration-none">
                        </a>
                      </h2>
                      <div class="text-warning">
                        <small>
                          {" "}
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-half"></i>
                          <i class="bi bi-star"></i>
                        </small>{" "}
                        <span class="text-muted small">3.5 (89)</span>
                      </div>
                      <div class="d-flex justify-content-between mt-4">
                        <div>
                          <span class="text-dark">₹13</span>{" "}
                          <span class="text-decoration-line-through text-muted">
                            ₹18
                          </span>
                        </div>
                        <div>
                          <a href="#!" class="btn btn-success btn-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-plus"
                            >
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>{" "}
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-8">
                <div class="col">
                  <nav>
                    <ul class="pagination">
                      <li class="page-item disabled">
                        <a
                          class="page-link  mx-1 rounded-3 "
                          href="#"
                          aria-label="Previous"
                        >
                          <i class="feather-icon icon-chevron-left"></i>
                        </a>
                      </li>
                      <li class="page-item ">
                        <a class="page-link  mx-1 rounded-3 active" href="#">
                          1
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link mx-1 rounded-3 text-body" href="#">
                          2
                        </a>
                      </li>

                      <li class="page-item">
                        <a class="page-link mx-1 rounded-3 text-body" href="#">
                          ...
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link mx-1 rounded-3 text-body" href="#">
                          12
                        </a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link mx-1 rounded-3 text-body"
                          href="#"
                          aria-label="Next"
                        >
                          <i class="feather-icon icon-chevron-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default ProductPage;
