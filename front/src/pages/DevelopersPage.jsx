import React from 'react'
import DevList from '../components/DevList/DevList'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function DevelopersPage() {
  return (
    <div className="content-wrap">
      <Header/>
      <DevList/>
      <Footer/>
    </div>
  )
}

export default DevelopersPage