import React, { useEffect, useState } from 'react'
import ProjectProfile from '../components/ProjectProfile/ProjectProfile'
import Header from '../components/Header/Header'
import { useParams } from 'react-router'
import { getOneProject } from '../services/project.services'
import { Chip, Stack } from '@mui/material'

function ProjectProfilePage() {
  const [project, setProject] = useState({})

  const renderProject = async () => {
    const oneProject = await getOneProject(id)
    setProject(oneProject)
  }

  const { id } = useParams()

  useEffect(() => { renderProject() }, [])

  return (
    <div>
        <Header/>
        <ProjectProfile 
        id={project.id}
        title={ project.title}
        type={project.type}
        description={project.description}
        link={project.link}
        team={project.team?.map((member, i) => {
          return (
          <Stack key={i} direction="row" spacing={1}><Chip label={member}/></Stack>
          )})}
        tech={project.tech?.map((tech, i) => {
          return (
          <Stack key={i} direction="row" spacing={1}><Chip label={'# ' + tech}/></Stack>
          )})}
        />
    </div>
  )
}

export default ProjectProfilePage