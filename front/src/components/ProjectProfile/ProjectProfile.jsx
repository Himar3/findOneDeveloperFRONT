import React from 'react'
import  { Link } from 'react-router-dom'
import { Card, CardMedia, Typography, Chip, Button } from '@mui/material'
import { teal } from '@mui/material/colors';  
import './ProjectProfile.css'

function ProjectProfile(project) {
  return (
    <Card className='project-box' sx={{ maxWidth: 1400, height: 750, color:teal[400]}}>
      <div id='header-box'>
        <div id='title-team'>
          <div id='title-box'>
            <div className="profile-title">
            <Typography variant="h3" >PROJECT</Typography>
            </div>
              <Typography className='tx-title' variant="body2" align="center" color="text.primary">
                Title
              </Typography>
              <Chip label={project.title} />
              <Typography className='tx-title' variant="body2" align="center" color="text.primary">
                Type
              </Typography>
              <Chip label={project.type} />
          </div>
          <div id='team-box'>
              <Typography className='tx-title' variant="body2" align="center" color="text.primary">
                Team
              </Typography>
              <div className='bg-text'>
                <Chip label="Himar" />
                <Chip label="Carlos" />
                <Chip label="Andrew" />
              </div>
          </div>
        </div>
          <div id='img-box'>
            <CardMedia
              className='project-img'
              component="img"
              src={require("../../assets/projectExample.png")}
              alt="Image Dev"
            />
          </div>
      </div>    
        <div id='container-box'>
          <div id='description-box'>
            <Typography className='tx-title' variant="body2" align="center" color="text.primary">
              Description
            </Typography>
            <div className='bg-text'>
              <Typography className='tx-description' variant="body2" align="center">
              {project.description}
              </Typography>
            </div>
          </div> 
          <div id='tech-box'>
            <Typography className='tx-title' variant="body2" align="center" color="text.primary">
              Tech
            </Typography>
            <div className='bg-text'>
              {project.tech}
            </div>
          </div>
        </div>
        <div className=''>
          <a href={project.link}></a>
        </div>
    </Card>
  )
}

export default ProjectProfile