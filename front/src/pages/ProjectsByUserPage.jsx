import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ProjectsByUser from '../components/ProjectsByUser/ProjectsByUser'
import ProjectList from '../components/ProjectList/ProjectList'
import { Typography } from '@mui/material'

function ProjectsByUserPage() {
  return (
    <div className="content-wrap">
    <Header/>
    <ProjectsByUser/>
    <ProjectList/>
    <Footer/>
  </div>
  )
}

export default ProjectsByUserPage