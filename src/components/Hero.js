import React from "react";
import {Carousel} from 'react-bootstrap';
import Banner1 from '../images/Banner/skincare2.jpg';
import Banner2 from '../images/Banner/haircare2.jpg';
import Banner3 from '../images/Banner/mixbanner2.jpg';



function Hero() {
  return(
  <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          // style={{height : 600}}
          src={Banner1}
          alt="First slide"
        />
        <Carousel.Caption>
        {/* <div class="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                    <span class="badge text-bg-warning" >
                      Free Shipping - orders over ₹ 500
                    </span>
                    <h2 class="text-primary display-5 fw-bold mt-4"  style={{color:"#2675b3"}}>
                      Free Shipping on <br /> orders over{" "}
                      <span class="text-warning"> ₹ 500</span>
                    </h2>
                    <p class="lead font-weight-bold" style={{color:"#f8c146"}}>
                      Free Shipping to First-Time Customers Only, After
                      promotions and discounts are applied.
                    </p>
                    <a href="#!" class="btn btn-dark mt-3" tabindex="-1">
                      Shop Now{" "}
                      <i class="feather-icon icon-arrow-right ms-1"></i>
                    </a>
          </div> */}
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          // style={{height : 600 }}
          src={Banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
        {/* <div class="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                    <span class="badge text-bg-warning" >
                      Free Shipping - orders over ₹ 500
                    </span>
                    <h2 class="text-primary display-5 fw-bold mt-4"  style={{color:"#2675b3"}}>
                      Free Shipping on <br /> orders over{" "}
                      <span class="text-warning"> ₹ 500</span>
                    </h2>
                    <p class="lead font-weight-bold" style={{color:"#f8c146"}}>
                      Free Shipping to First-Time Customers Only, After
                      promotions and discounts are applied.
                    </p>
                    <a href="#!" class="btn btn-dark mt-3" tabindex="-1">
                      Shop Now{" "}
                      <i class="feather-icon icon-arrow-right ms-1"></i>
                    </a>
          </div> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          // style={{height : 600}}
          src = {Banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
        {/* <div class="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                    <span class="badge text-bg-warning" >
                      Free Shipping - orders over ₹ 500
                    </span>
                    <h2 class="text-primary display-5 fw-bold mt-4"  style={{color:"#2675b3"}}>
                      Free Shipping on <br /> orders over{" "}
                      <span class="text-warning"> ₹ 500</span>
                    </h2>
                    <p class="lead font-weight-bold" style={{color:"#f8c146"}}>
                      Free Shipping to First-Time Customers Only, After
                      promotions and discounts are applied.
                    </p>
                    <a href="#!" class="btn btn-dark mt-3" tabindex="-1">
                      Shop Now{" "}
                      <i class="feather-icon icon-arrow-right ms-1"></i>
                    </a>
          </div> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  </div>);


}


export default Hero;



// import React from "react";
// // import HeroImage from "../images/homwimage.jpeg";
// // import Dental from "../images/dental.jpeg"
// import Dental from "../images/jainson.jpeg"

// function Hero() {
//   return (
//     <div>
//       <section class="mt-8">
//         <div class="container">
//           <div class="hero-slider slick-initialized slick-slider slick-dotted">
//             <div class="slick-list draggable">
//               <div
//                 class="slick-track"
//                 style={{
//                   opacity: 1,
//                   width: 4680,
//                 //   transform: "translate3d(-1872px, 0px, 0px)",
//                 }}
//               >
//                 <div
//                   class="slick-slide slick-cloned"
//                   data-slick-index="-1"
//                   id=""
//                   aria-hidden="true"
//                   tabindex="-1"
//                   style={{
//                     backgroundRepeat:"no-repeat",
//                     backgroundImage: `url(${Dental}) `,
//                     // borderRadius: "0.5rem",
//                     width: 1100,
//                   }}
//                 >
//                   {/* // style="background: url(&quot;assets/images/slider/slider-2.jpg&quot;) center center / cover no-repeat; border-radius: 0.5rem; width: 924px;" */}
//                   {/* data-slick-index="-1" id="" aria-hidden="true" tabindex="-1"> */}
//                   <div class="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
//                     <span class="badge text-bg-warning" >
//                       Free Shipping - orders over ₹ 500
//                     </span>
//                     <h2 class="text-primary display-5 fw-bold mt-4"  style={{color:"#2675b3"}}>
//                       Free Shipping on <br /> orders over{" "}
//                       <span class="text-warning"> ₹ 500</span>
//                     </h2>
//                     <p class="lead font-weight-bold" style={{color:"#f8c146"}}>
//                       Free Shipping to First-Time Customers Only, After
//                       promotions and discounts are applied.
//                     </p>
//                     <a href="#!" class="btn btn-dark mt-3" tabindex="-1">
//                       Shop Now{" "}
//                       <i class="feather-icon icon-arrow-right ms-1"></i>
//                     </a>
//                   </div>
//                 </div>
//                 {/* <div
//                   class="slick-slide"
//                   data-slick-index="0"
//                   aria-hidden="true"
//                   tabindex="-1"
//                   role="tabpanel"
//                   id="slick-slide10"
//                   aria-describedby="slick-slide-control10"
//                   style={{
//                     backgroundImage: `url(${HeroImage}) `,
//                     borderRadius: "0.5rem",
//                     width: 924,
//                     cover: "no-repeat",
//                   }}
//                 > */}
//                   {/* //  style="background: url(&quot;assets/images/slider/slide-1.jpg&quot;) center center / cover no-repeat; border-radius: 0.5rem; width: 924px;" */}

//                   {/* <div class="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
//                     <span class="badge text-bg-warning">
//                       Opening Sale Discount 50%
//                     </span>

//                     <h2 class="text-dark display-5 fw-bold mt-4">
//                       SuperMarket Daily <br /> Fresh Grocery{" "}
//                     </h2>
//                     <p class="lead">
//                       Introduced a new model for online grocery shopping and
//                       convenient home delivery.
//                     </p>
//                     <a href="#!" class="btn btn-dark mt-3" tabindex="-1">
//                       Shop Now{" "}
//                       <i class="feather-icon icon-arrow-right ms-1"></i>
//                     </a>
//                   </div> */}
//                 {/* </div> */}
//                 {/* <div
//                   class="slick-slide slick-current slick-active"
//                   data-slick-index="1"
//                   aria-hidden="false"
//                   tabindex="0"
//                   role="tabpanel"
//                   id="slick-slide11"
//                   aria-describedby="slick-slide-control11"
//                   style={{
//                     backgroundImage: `url(${HeroImage}) `,
//                     borderRadius: "0.5rem",
//                     cover: "no-repeat",
//                   }}
//                 > */}
//                   {/* //  style="background: url(&quot;assets/images/slider/slider-2.jpg&quot;) center center / cover no-repeat; border-radius: 0.5rem; width: 924px;" */}
//                   {/* data-slick-index="1" aria-hidden="false" tabindex="0" role="tabpanel" id="slick-slide11" aria-describedby="slick-slide-control11"> */}
//                   {/* <div class="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
//                     <span class="badge text-bg-warning">
//                       Free Shipping - orders over 500
//                     </span>
//                     <h2 class="text-dark display-5 fw-bold mt-4">
//                       Free Shipping on <br /> orders over{" "}
//                       <span class="text-primary">500</span>
//                     </h2>
//                     <p class="lead">
//                       Free Shipping to First-Time Customers Only, After
//                       promotions and discounts are applied.
//                     </p>
//                     <a href="#!" class="btn btn-dark mt-3" tabindex="0">
//                       Shop Now{" "}
//                       <i class="feather-icon icon-arrow-right ms-1"></i>
//                     </a>
//                   </div> */}
//                 {/* </div> */}
//                 {/* <div
//                   class="slick-slide slick-cloned"
//                   data-slick-index="2"
//                   id=""
//                   aria-hidden="true"
//                   tabindex="-1"
//                   style={{
//                     backgroundImage: `url(${HeroImage}) `,
//                     borderRadius: "0.5rem",
//                   }}
//                 > */}
//                   {/* // style="background: url(&quot;assets/images/slider/slide-1.jpg&quot;) center center / cover no-repeat; border-radius: 0.5rem; width: 924px;"  */}
//                   {/* class="slick-slide slick-cloned" data-slick-index="2" id="" aria-hidden="true" tabindex="-1"> */}
//                   {/* <div class="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
//             <span class="badge text-bg-warning">Opening Sale Discount 50%</span>

//             <h2 class="text-dark display-5 fw-bold mt-4">SuperMarket Daily <br/> Fresh Grocery </h2>
//             <p class="lead">Introduced a new model for online grocery shopping
//               and convenient home delivery.</p>
//             <a href="#!" class="btn btn-dark mt-3" tabindex="-1">Shop Now <i class="feather-icon icon-arrow-right ms-1"></i></a>
//           </div> */}

//                   {/* </div> */}
//                   {/* <div class="slick-slide slick-cloned" data-slick-index="3" id="" aria-hidden="true" tabindex="-1"
//           style={{ 
//             backgroundImage: `url(${HeroImage}) `, borderRadius: '0.5rem' ,cover:"no-repeat"
//           }}> */}
//                   {/* //  style="background: url(&quot;assets/images/slider/slider-2.jpg&quot;) center center / cover no-repeat; border-radius: 0.5rem; width: 924px;" */}
//                   {/* data-slick-index="3" id="" aria-hidden="true" tabindex="-1"> */}
//                   {/* <div class="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
//             <span class="badge text-bg-warning">Free Shipping - orders over $100</span>
//             <h2 class="text-dark display-5 fw-bold mt-4">Free Shipping on <br/> orders over <span class="text-primary">$100</span></h2>
//             <p class="lead">Free Shipping to First-Time Customers Only, After promotions and discounts are applied.
//             </p>
//             <a href="#!" class="btn btn-dark mt-3" tabindex="-1">Shop Now <i class="feather-icon icon-arrow-right ms-1"></i></a>
//           </div> */}
//                 {/* </div> */}
//               </div>
//             </div>

//             {/* <ul class="slick-dots" role="tablist">
//               <li class="" role="presentation">
//                 <button
//                   type="button"
//                   role="tab"
//                   id="slick-slide-control10"
//                   aria-controls="slick-slide10"
//                   aria-label="1 of 2"
//                   tabindex="-1"
//                 >
//                   1
//                 </button>
//               </li>
//               <li role="presentation" class="slick-active">
//                 <button
//                   type="button"
//                   role="tab"
//                   id="slick-slide-control11"
//                   aria-controls="slick-slide11"
//                   aria-label="2 of 2"
//                   tabindex="0"
//                   aria-selected="true"
//                 >
//                   2
//                 </button>
//               </li>
//             </ul> */}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Hero;
