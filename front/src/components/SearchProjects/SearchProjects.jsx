import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAllProjects } from '../../services/project.services'
import { Typography } from '@mui/material'
import CardProject from '../CardProject/CardProject.jsx'



function SearchProjects( {searchTerm} ) {
  const [ projects, setProjects ] = useState([])

  const listProject = async() => {
    const projects = await getAllProjects()
    setProjects(projects)
  }

  const renderFilteredProjects = () => {
    const filteredProjects = projects.filter((project) => project.tech.includes(searchTerm) || project.title.includes(searchTerm) /*|| project.type.includes(searchTerm)*/)
      if (searchTerm !== '') {
         if (filteredProjects.length <1 ) {
          return (<Typography variant='h4'>Sorry there is no match! try to search for something else</Typography>)
         } else {
            return filteredProjects.map((project, i) => {
               return (
                   <CardProject 
                   key={i}
                   id={project.id}
                   title={project.title}
                   type={project.type}
                   image={project.image}
                   description={project.description}
                   link={project.link}
                   tech={project.tech.map((e) => `#${e} `)}
                   />
               )
           })        
         }
      } else {
         return (<Typography variant='h4'>Sorry there is no match! try to search for something else</Typography>)
      } 
  }

  useEffect(() => { listProject() }, [])

  return (
    <div className='cardList'>
        {renderFilteredProjects()}
    </div>
  )
}

export default SearchProjects

