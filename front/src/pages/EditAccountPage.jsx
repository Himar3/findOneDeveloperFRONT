import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import EditAccount from '../components/EditAccount/EditAccount'


function EditAccountPage() {
  return (
    <div className="content-wrap">
      <Header/>
      <EditAccount/>
      <Footer/>
    </div>
  )
}

export default EditAccountPage