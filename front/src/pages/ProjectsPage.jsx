import React from 'react'
import Header from '../components/Header/Header'
import ProjectList from '../components/ProjectList/ProjectList'
import Footer from "../components/Footer/Footer";

function ProjectsPage() {
  return (
    <div className='content-wrap'>
      <Header/>
      <ProjectList/>
      <Footer/>
    </div>
  )
}

export default ProjectsPage