import React from "react";
import ProductImage from "../images/product.jpeg";

function Product() {
  return (
    <div>
      <section class="my-lg-14 my-8">
        <div class="container">
          <div class="row">
            <div class="col-12 mb-6">
              <h3 class="mb-0">Popular Products</h3>
            </div>
          </div>

          <div class="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
            <div class="col">
              <div class="card card-product">
                <div class="card-body">
                  <div class="text-center position-relative ">
                    <div class=" position-absolute top-0 start-0">
                      <span class="badge bg-danger">Sale</span>
                    </div>
                    <a href="#!">
                      <img
                      loading="lazy"
                        src="http://www.jainsonindia.com/img/products/prod-single-2.png"
                        alt="Grocery Ecommerce Template"
                        class="mb-3 img-fluid"
                      />
                    </a>

                    <div class="card-product-action">
                      <a
                        href="#!"
                        class="btn-action"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg>
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
                     Skin Cream
                    </a>
                  </h2>
                  <div>
                    <small class="text-warning">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <i class="bi bi-star-half"></i>
                    </small>{" "}
                    <span class="text-muted small">4(149)</span>
                  </div>
                  <div class="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <span class="text-dark">₹18</span>{" "}
                      <span class="text-decoration-line-through text-muted">
                        ₹24
                      </span>
                    </div>
                    <div>
                      <a href="#!" class="btn btn-secondary btn-sm">
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
                      loading="lazy"
                        src="http://www.jainsonindia.com/img/products/prod-single-3.png"
                        alt="Grocery Ecommerce Template"
                        class="mb-3 img-fluid"
                      />
                    </a>
                    <div class="card-product-action">
                      <a
                        href="#!"
                        class="btn-action"
                       data-toggle="modal"
                        data-target="#exampleModal"
                      >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg>
                      </a>
                      <a
                        href="../shop-wishlist.html"
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
                      Hair Shampoo {" "}
                    </a>
                  </h2>
                  <div class="text-warning">
                    <small>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </small>{" "}
                    <span class="text-muted small">4 (25)</span>
                  </div>
                  <div class="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <span class="text-dark">₹24</span>
                    </div>
                    <div>
                      <a href="#!" class="btn btn-secondary btn-sm">
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
                      loading="lazy"
                        src="http://www.jainsonindia.com/img/products/prod-single-1.png"
                        alt="Grocery Ecommerce Template"
                        class="mb-3 img-fluid"
                      />
                    </a>
                    <div class="card-product-action">
                      <a
                        href="#!"
                        class="btn-action"
                       data-toggle="modal"
                        data-target="#exampleModal"
                      >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg>
                      </a>
                      <a
                        href="../shop-wishlist.html"
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
                      Hair Cream{" "}
                    </a>
                  </h2>
                  <div class="text-warning">
                    <small>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </small>{" "}
                    <span class="text-muted small">4 (469)</span>
                  </div>
                  <div class="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <span class="text-dark">₹32</span>{" "}
                      <span class="text-decoration-line-through text-muted">
                        ₹35
                      </span>
                    </div>
                    <div>
                      <a href="#!" class="btn btn-secondary btn-sm">
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
                      loading="lazy"
                        src="http://www.jainsonindia.com/img/products/prod-single-4.png"
                        alt="Grocery Ecommerce Template"
                        class="mb-3 img-fluid"
                      />
                    </a>
                    <div class="card-product-action">
                      <a
                        href="#!"
                        class="btn-action"
                       data-toggle="modal"
                        data-target="#exampleModal"
                      >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg>
                      </a>
                      <a
                        href="../shop-wishlist.html"
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
                    <div class=" position-absolute top-0 start-0">
                      <span class="badge bg-danger">Hot</span>
                    </div>
                  </div>
                  <div class="text-small mb-1">
                    <a href="#!" class="text-decoration-none text-muted">
                      <small>Skin Care</small>
                    </a>
                  </div>
                  <h2 class="fs-6">
                    <a href="#!" class="text-inherit text-decoration-none">
                      Skin serum
                    </a>
                  </h2>
                  <div class="text-warning">
                    <small>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
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
                      <a href="#!" class="btn btn-secondary btn-sm">
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
                      loading="lazy"
                        src="http://www.jainsonindia.com/img/products/prod-single-7.png"
                        alt="Grocery Ecommerce Template"
                        class="mb-3 img-fluid"
                      />
                    </a>
                    <div class="card-product-action">
                      <a
                        href="#!"
                        class="btn-action"
                       data-toggle="modal"
                        data-target="#exampleModal"
                      >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg>
                      </a>
                      <a
                        href="../shop-wishlist.html"
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
                      <small>Personal Well Being</small>
                    </a>
                  </div>
                  <h2 class="fs-6">
                    <a href="#!" class="text-inherit text-decoration-none">
                      Ashwagandha{" "}
                    </a>
                  </h2>
                  <div class="text-warning">
                    <small>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
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
                      <a href="#!" class="btn btn-secondary btn-sm">
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
                    <div class=" position-absolute top-0 start-0">
                      <span class="badge bg-danger">Sale</span>
                    </div>
                    <a href="#!">
                      <img
                      loading="lazy"
                        src="http://www.jainsonindia.com/img/products/prod-single-9.png"
                        alt="Grocery Ecommerce Template"
                        class="mb-3 img-fluid"
                      />
                    </a>
                    <div class="card-product-action">
                      <a
                        href="#!"
                        class="btn-action"
                       data-toggle="modal"
                        data-target="#exampleModal"
                      >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg>
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
                      Neem Tootpaste
                    </a>
                  </h2>
                  <div>
                    <small class="text-warning">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
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
                      <a href="#!" class="btn btn-secondary btn-sm">
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
                      loading="lazy"
                        src="http://www.jainsonindia.com/img/products/prod-single-10.png"
                        alt="Grocery Ecommerce Template"
                        class="mb-3 img-fluid"
                      />
                    </a>
                    <div class="card-product-action">
                      <a
                        href="#!"
                        class="btn-action"
                       data-toggle="modal"
                        data-target="#exampleModal"
                      >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg>
                      </a>
                      <a
                        href="../shop-wishlist.html"
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
                      Mouth wash
                    </a>
                  </h2>
                  <div class="text-warning">
                    <small>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </small>{" "}
                    <span class="text-muted small">5 (345)</span>
                  </div>
                  <div class="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <span class="text-dark">₹24</span>
                    </div>
                    <div>
                      <a href="#!" class="btn btn-secondary btn-sm">
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
                      loading="lazy"
                        src="http://www.jainsonindia.com/img/products/prod-single-14.png"
                        alt="Grocery Ecommerce Template"
                        class="mb-3 img-fluid"
                      />
                    </a>
                    <div class="card-product-action">
                      <a
                        href="#!"
                        class="btn-action"
                       data-toggle="modal"
                        data-target="#exampleModal"
                      >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg>
                      </a>
                      <a
                        href="../shop-wishlist.html"
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
                      <small>Personal Well Being</small>
                    </a>
                  </div>
                  <h2 class="fs-6">
                    <a href="#!" class="text-inherit text-decoration-none">
                      Ashwagandha
                    </a>
                  </h2>
                  <div class="text-warning">
                    <small>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
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
                      <a href="#!" class="btn btn-secondary btn-sm">
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
                      loading="lazy"
                        src="http://www.jainsonindia.com/img/products/prod-single-11.png"
                        alt="Grocery Ecommerce Template"
                        class="mb-3 img-fluid"
                      />
                    </a>
                    <div class="card-product-action">
                      <a
                        href="#!"
                        class="btn-action"
                       data-toggle="modal"
                        data-target="#exampleModal"
                      >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg>
                      </a>
                      <a
                        href="../shop-wishlist.html"
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
                     Cream
                    </a>
                  </h2>
                  <div class="text-warning">
                    <small>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
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
                      <a href="#!" class="btn btn-secondary btn-sm">
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
                      loading="lazy"
                        src="http://www.jainsonindia.com/img/products/prod-single-8.png"
                        alt="Grocery Ecommerce Template"
                        class="mb-3 img-fluid"
                      />
                    </a>
                    <div class="card-product-action">
                      <a
                        href="#!"
                        class="btn-action"
                       data-toggle="modal"
                        data-target="#exampleModal"
                      >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg>
                      </a>
                      <a
                        href="../shop-wishlist.html"
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
                      Floss
                    </a>
                  </h2>
                  <div class="text-warning">
                    <small>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
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
                      <a href="#!" class="btn btn-secondary btn-sm">
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
        </div>
        {/* modal */}
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">

        <div class="modal-body p-8">
          <div class="d-flex justify-content-end">

            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="row">
            <div class="col-md-6">
                 <div class="tns-outer" id="productModal-ow">
                    <div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true"> </div><div id="productModal-mw" class="tns-ovh"><div class="tns-inner" id="productModal-iw"><div class="product productModal  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="productModal"
                //   style={{transitionDuration: "0s", transform: "translate3d(-33.3333%, 0px, 0px)"}}
                  >
                    <div class="tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
                  <div class="zoom" onmousemove="zoom(event)" 
                     style={{
                        backgroundRepeat:"no-repeat",
                        backgroundImage: `url(${ProductImage}) `,
                        borderRadius: "0.5rem",
                      }}
                  >
                    <img src={ProductImage} loading="lazy" alt=""/>
                  </div>
                  </div>

                  {/* <div class="zoom tns-item" onmousemove="zoom(event)"
                   style={{
                    backgroundRepeat:"no-repeat",
                    backgroundImage: `url(₹{ProductImage}) `,
                    borderRadius: "0.5rem",
                    width: 1100,
                  }}
                   >
                    <img src={ProductImage} alt=""/>
                  </div> */}


                {/* <div class="tns-item tns-slide-active" id="productModal-item1">
                  <div class="zoom" onmousemove="zoom(event)"
                    style={{
                        backgroundRepeat:"no-repeat",
                        backgroundImage: `url(₹{ProductImage}) `,
                        borderRadius: "0.5rem",
                        width: 1100,
                      }}
                   >
                    <img src={ProductImage} alt=""/>
                  </div>

                </div> */}
                {/* <div class="tns-item" id="productModal-item2" aria-hidden="true" tabindex="-1">
                  <div class="zoom" onmousemove="zoom(event)" 
                   style={{
                    backgroundRepeat:"no-repeat",
                    backgroundImage: `url(₹{ProductImage}) `,
                    borderRadius: "0.5rem",
                    width: 1100,
                  }}
                  >
                    <img src={ProductImage}alt=""/>
                  </div>

                </div> */}
                {/* <div class="tns-item" id="productModal-item3" aria-hidden="true" tabindex="-1">
                  <div class="zoom" onmousemove="zoom(event)"
                    style={{
                        backgroundRepeat:"no-repeat",
                        backgroundImage: `url(₹{ProductImage}) `,
                        borderRadius: "0.5rem",
                        width: 1100,
                      }}
                   >
                    <img src={ProductImage} alt=""/>
                  </div>
                  </div> */}
{/* 
                <div class="zoom tns-item tns-slide-cloned" onmousemove="zoom(event)"
                 style={{
                    backgroundRepeat:"no-repeat",
                    backgroundImage: `url(₹{ProductImage}) `,
                    borderRadius: "0.5rem",
                    width: 1100,
                  }}
                 aria-hidden="true" tabindex="-1">
                    <img src={ProductImage} alt=""/>
                  </div> */}
                  </div></div></div></div>
                <div class="product-tools">
                  <div class="thumbnails row g-3" id="productModalThumbnails" aria-label="Carousel Pagination">
                    <div class="col-3" data-nav="0" tabindex="-1" aria-label="Carousel Page 1" aria-controls="productModal">
                      <div class="thumbnails-img">
                        <img src={ProductImage} loading="lazy" alt=""/>
                      </div>
                    </div>
                    <div class="col-3 tns-nav-active" data-nav="1" aria-label="Carousel Page 2 (Current Slide)" aria-controls="productModal">
                      <div class="thumbnails-img">
                        <img src={ProductImage}  loading="lazy" alt=""/>
                      </div>
                    </div>
                    <div class="col-3" data-nav="2" tabindex="-1" aria-label="Carousel Page 3" aria-controls="productModal">
                      <div class="thumbnails-img">
                        <img src={ProductImage} loading="lazy"  alt=""/>
                      </div>
                    </div>
                    <div class="col-3" data-nav="3" tabindex="-1" aria-label="Carousel Page 4" aria-controls="productModal">
                      <div class="thumbnails-img">
                        <img src={ProductImage} loading="lazy" alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="col-md-6">
              <div class="ps-md-8">
                <a href="#!" class="mb-4 d-block">Skin Care</a>
                <h2 class="mb-1 h1"> Skin Moisturiser </h2>
                <div class="mb-4">   <small class="text-warning"> <i class="bi bi-star-fill"></i>
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                  </small><a href="#" class="ms-2">(30 reviews)</a></div>
                <div class="fs-4"><span class="fw-bold text-dark">₹32</span> <span class="text-decoration-line-through text-muted">₹35</span><span><small class="fs-6 ms-2 text-danger">26% Off</small></span>
                </div>
                <hr class="my-6"/>
                <div><button type="button" class="btn btn-outline-secondary">250ml</button>
                    <button type="button" class="btn btn-outline-secondary">500ml</button>
                    <button type="button" class="btn btn-outline-secondary">1000ml</button></div>
                <div class="mt-5 d-flex justify-content-start">
                    <div class="col-2">
                      <div class="input-group  flex-nowrap justify-content-center ">
                        <input type="button" value="-" class="button-minus form-control  text-center flex-xl-none w-xl-30 w-xxl-10 px-0  " data-field="quantity"/>
                        <input type="number" step="1" max="10" value="1" name="quantity" class="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "/>
                        <input type="button" value="+" class="button-plus form-control  text-center flex-xl-none w-xl-30  w-xxl-10 px-0  " data-field="quantity"/>
                      </div>
                    </div>
                    <div class="ms-2 col-4 d-grid">
                        <button type="button" class="btn btn-secondary"><i class="feather-icon icon-shopping-bag me-2"></i>Add to cart</button>
                        </div>
                        {/* <div class="ms-2 col-4">
                         <a class="btn btn-light" href="#" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare"><i class="bi bi-arrow-left-right"></i></a>
                          <a class="btn btn-light" href="./pages/shop-wishlist.html" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist"><i class="feather-icon icon-heart"></i></a>
                    </div> */}
                </div>
                <hr class="my-6"/>
                <div>
                  <table class="table table-borderless">

                    <tbody>
                      <tr>
                        <td>Product Code:</td>
                        <td>FBB00255</td>

                      </tr>
                      <tr>
                        <td>Availability:</td>
                        <td>In Stock</td>

                      </tr>
                      <tr>
                        <td>Type:</td>
                        <td>Skin Care</td>

                      </tr>
                      <tr>
                        <td>Shipping:</td>
                        <td><small>01 day shipping.<span class="text-muted">( Free pickup today)</span></small></td>

                      </tr>


                    </tbody>
                  </table>

                </div>
              </div>

            </div>
        </div>
        </div>

      </div>
    </div>
  </div>
      </section>
    </div>
  );
}

export default Product;
