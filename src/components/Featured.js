import React from 'react'
import HeroImage from "../images/hair2.jpeg"
import Skin from "../images/skin.jpeg"
import Dental from "../images/well.jpeg"
import Personal from "../images/hair4.png"
function Featured() {
  return (
    <div>
        <div class="container pb-3">
        <div class="row">
        <div class="col-12 mb-6">

          <h3 class="mb-0">Featured Categories</h3>

        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6 mb-3 mb-lg-0 pb-4">
          <div>
            <div class="py-10 px-8 rounded-3"
               style={{
                backgroundRepeat:"no-repeat",
                backgroundImage: `url(${HeroImage}) `,
                borderRadius: "0.5rem",
              }}
            //  style="background:url(assets/images/banner/grocery-banner.png)no-repeat; background-size: cover; background-position: center;"
             >
              <div>
                <h3 class="fw-bold mb-1">Hair Care 
                </h3>
                <p class="mb-4">Get Upto <span class="fw-bold">30%</span> Off</p>
                <a href="#!" class="btn btn-dark">Shop Now</a>
              </div>
            </div>

          </div>

        </div>
        <div class="col-12 col-lg-6 pb-4 ">

          <div>
            <div class="py-10 px-8 rounded-3" 
               style={{
                backgroundRepeat:"no-repeat",
                backgroundImage: `url(${Skin}) `,
                borderRadius: "0.5rem",
              }}
            // style="background:url(assets/images/banner/grocery-banner-2.jpg)no-repeat; background-size: cover; background-position: center;"
            >
              <div>
                <h3 class="fw-bold mb-1">Skin Care
                  
                </h3>
                <p class="mb-4">Get Upto <span class="fw-bold">25%</span> Off</p>
                <a href="#!" class="btn btn-dark">Shop Now</a>
              </div>
            </div>

          </div>
        </div>
        <div class="col-12 col-lg-6 mb-3 mb-lg-0">
          <div>
            <div class="py-10 px-8 rounded-3" 
            style={{
                backgroundRepeat:"no-repeat",
                backgroundImage: `url(${Dental}) `,
                borderRadius: "0.5rem",
              }}
            // style="background:url(assets/images/banner/grocery-banner.png)no-repeat; background-size: cover; background-position: center;"
            >
              <div>
                <h3 class="fw-bold mb-1">Dental Care
                </h3>
                <p class="mb-4">Get Upto <span class="fw-bold">30%</span> Off</p>
                <a href="#!" class="btn btn-dark">Shop Now</a>
              </div>
            </div>

          </div>

        </div>
        <div class="col-12 col-lg-6 ">

          <div>
            <div class="py-10 px-8 rounded-3"
              style={{
                backgroundRepeat:"no-repeat",
                backgroundImage: `url(${Personal}) `,
                borderRadius: "0.5rem",
              }}
            //  style="background:url(assets/images/banner/grocery-banner-2.jpg)no-repeat; background-size: cover; background-position: center;"
             >
              <div>
                <h3 class="fw-bold mb-1">Personal Well being
                </h3>
                <p class="mb-4">Get Upto <span class="fw-bold">25%</span> Off</p>
                <a href="#!" class="btn btn-dark">Shop Now</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Featured