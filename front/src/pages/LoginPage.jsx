import React from "react";
import Login from "../components/Login/Login";
import Header from '../components/Header/Header'
import Footer from "../components/Footer/Footer";
import Signup from "../components/Signup/Signup";

function LoginPage() {
  return (
    <div className="content-wrap">
      <Header/>
      <div className='background'>
        <Login/>
        <Signup />
      </div>
      <Footer/>
    </div>
  )
}

export default LoginPage