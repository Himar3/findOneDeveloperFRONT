import React from 'react'
import CardProject from '../CardProject/CardProject.jsx'
import { useState, useEffect } from 'react'
import { getAllProjects } from '../../services/project.services'
import './ProjectList.css'


function ProjectList() {
  const [ project, setProject ] = useState([])

  const listProject = async() => {
    const project = await getAllProjects()
    setProject(project)
  }

  const renderProjects = () => {
    return project && project.map((project, i) => {
        return (
            <CardProject key={i}
            id={project.id}
            userId={project.userId}
            title={project.title}
            image={project.image}
            link={project.link}
            description={project.description}
            tech={project.tech.map((e) => `#${e} `)}
            />
        )
    })
  }
  useEffect(() => { listProject() }, [])
  return (
    <div className='cardList'>
        {renderProjects()}
    </div>
  )
}

export default ProjectList