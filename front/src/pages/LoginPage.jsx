import React from "react";
import Login from "../components/Login/Login";
import Header from '../components/Header/Header'
import Footer from "../components/Footer/Footer";

function LoginPage() {
  return (
    <div className="content-wrap">
      <Header/>
      <Login/>
      <Footer/>
    </div>
  )
}

export default LoginPage