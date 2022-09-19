import React from "react";
import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Product from "../components/Product"
import Features from "../components/Features";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <Hero />
      <Featured />
      <Product />
      <Features />
      <Footer />
    </>
  );
}

export default Home;
