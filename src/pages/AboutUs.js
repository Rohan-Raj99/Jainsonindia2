import React from "react";
import AboutUs1 from "../images/ayu1.mp4";
import Icon from "../images/iconus.jpeg";
import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <>
      <Navbar />
      <SubNavbar />

      <div className="mt-lg-14 mt-8">
        <div className="row">
          <div className="offset-lg-1 col-lg-10 col-12">
            <div className="row align-items-center mb-14">
              <div class="col-md-6">
                <div class="ms-xxl-14 me-xxl-15 mb-8 mb-md-0 text-center text-md-start">
                  <h1 class="mb-6">The Future of Grocery Delivery:</h1>
                  <p class="mb-0 lead">
                    By powering the future of grocery with our retail partners,
                    we give everyone access to the food they love and more time
                    to enjoy it together.
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class=" me-6">
                  <video
                    class="img-fluid rounded-3"
                    loop="true"
                    autoplay="autoplay"
                    muted
                  >
                    <source src={AboutUs1} type="video/mp4"  />
                    Your browser does not support the video tag.
                  </video>
                  {/* <video src={AboutUs1} alt="" class="img-fluid rounded-3"/> */}
                </div>
              </div>
            </div>

            <div class="row mb-12">
              <div class="col-12">
                <div class="mb-8">
                  <h2 className="text-center">Ready to get started?</h2>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-light mb-6 border-0">
                  <div class="card-body p-8">
                    <div class="mb-4 text-center">
                      <img
                        src={Icon}
                        style={{ height: 100, width: 100, borderRadius: 50 }}
                        alt=""
                      />
                    </div>
                    <h4>Grow my business with </h4>
                    <p>
                      Duis placerat, urna ut dictum lobortis, erat libero
                      feugiat nulla, ullamcorper fermentum lectus dolor ut
                      tortor.{" "}
                    </p>
                    <a href="#" class="btn btn-dark mt-2">
                      FreshCart Platform
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-light mb-6 border-0">
                  <div class="card-body p-8">
                    <div class="mb-4 text-center">
                      <img
                        src={Icon}
                        style={{ height: 100, width: 100, borderRadius: 50 }}
                        alt=""
                      />
                    </div>
                    <h4>Advertise my brand on </h4>
                    <p>
                      Duis placerat, urna ut dictum lobortis, erat libero
                      feugiat nulla, ullamcorper fermentum lectus dolor ut
                      tortor.{" "}
                    </p>
                    <a href="#" class="btn btn-dark mt-2">
                      FreshCart ads
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-light mb-6 border-0">
                  <div class="card-body p-8">
                    <div class="mb-4 text-center">
                      <img
                        src={Icon}
                        style={{ height: 100, width: 100, borderRadius: 50 }}
                        alt=""
                      />
                    </div>
                    <h4>Learn more about Freshcart</h4>
                    <p>
                      Vivamus non risus id sapien egestas tempus id sed lla mus
                      justo metus, suscipit non hendrerit.{" "}
                    </p>
                    <a href="#" class="btn btn-dark mt-2">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <p>
                  For assistance using Freshcart services, please visit our{" "}
                  <a href="#">Help Center</a>
                </p>
              </div>
            </div>
            <section
              class="bg-dark"
              // style="background:url(../assets/images/svg-graphics/pattern.svg)no-repeat; background-size: cover; background-position: center;"
            >
              <div class="container">
                <div class="row">
                  <div class="offset-lg-1 col-lg-10">
                    <div class="row align-items-center">
                      <div class="col-md-6">
                        <div class="text-white mt-8 mt-lg-0">
                          <span>$30 discount for your first order</span>
                          <h2 class="h2 text-white  my-4">
                            Get top deals, latest trends, and more.
                          </h2>
                          <p class="text-white-50">
                            Join our email subscription now to get updates on
                            promotions and coupons.
                          </p>
                          <form class="row g-3">
                            <div class="col-6">
                              <label for="emailAddress" class="visually-hidden">
                                Email Address
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                id="emailAddress"
                                placeholder="Email Address"
                              />
                            </div>
                            <div class="col-auto">
                              <button
                                type="submit"
                                class="btn btn-primary mb-3"
                              >
                                Sign Up
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="text-center">
                          <img
                            src="../assets/images/png/girl-email.png"
                            alt=""
                            class="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
