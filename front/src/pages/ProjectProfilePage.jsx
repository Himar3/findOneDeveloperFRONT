import React, { useEffect, useState } from 'react'
import ProjectProfile from '../components/ProjectProfile/ProjectProfile'
import Header from '../components/Header/Header'
import { useParams } from 'react-router'
import { getOneProject } from '../services/project.services'

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
        <ProjectProfile project={project}/>
    </div>
  )
}

export default ProjectProfilePage