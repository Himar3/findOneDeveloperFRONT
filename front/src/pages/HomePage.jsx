import React from "react";
import Home from "../components/Home/Home";
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <div className="content-wrap-home">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default HomePage


