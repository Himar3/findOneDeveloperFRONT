import React from 'react'
import Header from '../components/Header/Header'
import Signup from '../components/Signup/Signup'
import Footer from "../components/Footer/Footer";

function SignupPage() {
  return (
    <div className="content-wrap">
      <Header/>
      <Signup/>
      <Footer/>
    </div>
  )
}

export default SignupPage