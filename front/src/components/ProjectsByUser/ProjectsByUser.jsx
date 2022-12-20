import React from 'react'
import { getProjectsByUser } from '../../services/project.services'
import CardProject from '../CardProject/CardProject.jsx'
import { useState } from 'react'
import { useEffect } from 'react'
import '../ProjectList/ProjectList.css'
import './ProjectsByUser.css'
import { useParams } from 'react-router'
import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router'

function ProjectsByUser() {
    const [ project, setProject ] = useState([])
    
    const listProject = async() => {
        const project = await getProjectsByUser(id)
        setProject(project)
    }
    
    const { id } = useParams()

    const navigate = useNavigate()
    
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
      <div>
        <div id='title-filter' className="profile-title">
          <Typography variant="h3" >PROJECTS</Typography>
          </div>
        <div className='cardList'>
            {renderProjects()}
        </div>
          <div className='btn-filter'>
            {/* <Button 
              onClick={()=> navigate('/developers')}
              className='profile-btn' 
              variant="contained" 
              sx={{ alignSelf:'center', marginTop:'40px', borderRadius: '5px'}}>
              Back
            </Button> */}
          </div>
          <Typography id='subtitle-projects-user' variant='h5'> Projects from other developers that might interest you </Typography> 
      </div>
    )
  }

export default ProjectsByUser