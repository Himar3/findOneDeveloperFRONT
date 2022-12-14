import React, { useEffect, useState } from 'react'
import ProjectProfile from '../components/ProjectProfile/ProjectProfile'
import Header from '../components/Header/Header'
import { useParams } from 'react-router'
import { getOneProject } from '../services/project.services'
import { Chip } from '@mui/material'
import Footer from "../components/Footer/Footer";

function ProjectProfilePage() {
  const [project, setProject] = useState({})

  
  const { id } = useParams()

  useEffect(() => { 
    const renderProject = async () => {
      const oneProject = await getOneProject(id)
      setProject(oneProject)
    }
    renderProject() 
  }, [id])

  return (
    <div className="content-wrap">
        <Header/>
        <ProjectProfile 
        id={project.id}
        title={ project.title}
        type={project.type}
        image={project.image}
        description={project.description}
        link={project.link}
        team={project.team?.map((member, i) => {
          return (
          <div key={i}><Chip label={member}/></div>
          )})}
        tech={project.tech?.map((tech, i) => {
          return (
          <div key={i}><Chip label={'# ' + tech}/></div>
          )})}
        />
        <Footer/>
    </div>
  )
}

export default ProjectProfilePage