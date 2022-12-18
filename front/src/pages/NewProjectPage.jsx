import React from 'react'
import Header from '../components/Header/Header'
import NewProject from '../components/NewProject/NewProject';
import Footer from "../components/Footer/Footer";

function NewProjectPage() {
  return (
    <div className='content-wrap'>
      <Header/>
      <NewProject/>
      <Footer/>
    </div>
  )
}

export default NewProjectPage