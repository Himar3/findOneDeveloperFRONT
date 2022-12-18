import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import EditAccount from '../components/EditAccount/EditAccount'
import getAllTechs from '../services/tech.services';
import { useState } from 'react';
import { useEffect } from 'react';


function EditAccountPage() {
  const [ techs, setTechs] = useState({})

  const getTechs = async() => {
    const teches = await getAllTechs() 
    setTechs(teches)
  }
  
  useEffect(() => { getTechs() }, [])
  return (
    <div className="content-wrap">
      <Header/>
      {/* pasar array por prop correctamente */}
      <EditAccount/>
      <Footer/>
    </div>
  )
}

export default EditAccountPage