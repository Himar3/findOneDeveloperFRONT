import React from 'react'
import { getProjectsByUser } from '../../services/project.services'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { Button, Typography } from '@mui/material'
import CardProject from '../CardProject/CardProject.jsx'
import '../ProjectList/ProjectList.css'
import './ProjectsByUser.css'

function ProjectsByUser() {
    const [ project, setProject ] = useState([])
    
    
    
    const { id } = useParams()

    const navigate = useNavigate()
    
    const renderProjects = () => {
      if (project.length < 1) {
        return <Typography variant="h5" sx={{marginTop: '30px'}}>Ups! This user has no projects yet</Typography>
      } else {
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
    }
    useEffect(() => {
      const listProject = async() => {
      const project = await getProjectsByUser(id)
        setProject(project)
      }
      listProject()
    }, [id])

    return (
      <div>
        <div id='title-filter' className="profile-title">
          <Typography variant="h3">PROJECTS</Typography>
        </div>
        <div className='cardList'>
            {renderProjects()}
        </div>
          <div className='btn-filter'>
            <Button 
              onClick={()=> navigate(`/developers/${id}`)}
              className='profile-btn' 
              variant="contained" 
              sx={{ alignSelf:'center', marginTop:'40px', borderRadius: '5px'}}>
              Back
            </Button>
          </div>
          <Typography id='subtitle-projects-user' variant='h5'> Projects from other developers that might interest you </Typography> 
      </div>
    )
  }

export default ProjectsByUser
