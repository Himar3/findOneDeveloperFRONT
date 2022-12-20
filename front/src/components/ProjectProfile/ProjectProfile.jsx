import React from 'react'
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'
import './ProjectProfile.css'
import { useNavigate } from 'react-router-dom'; 

function ProjectProfile(project) {
  const navigate = useNavigate()
  return (
    <Card className="profileBox" sx={{ maxWidth: 1500, minHeight: 500 }}>   
      <CardContent id="profile-content">
        <div className='mid-top'>
          <div className='profile-name-email'>
          <div className="profile-title">
          <Typography variant="h3" >PROJECT</Typography>
          </div>
            <Typography className='profile-subtitles' variant="h6" color="text.secondary">Title</Typography>
            <div className="profile-data">
              <Typography className='profile-subtitles' variant="body1" color="text.secondary">{project.title}</Typography>
            </div><br></br>
            <Typography className='profile-subtitles' variant="h6" color="text.secondary">Type</Typography>
            <div className="profile-data">
              <Typography className='profile-subtitles' variant="body1" color="text.secondary">{project.type}</Typography>
            </div>
          </div>
          <div className='btn-profile-container'>
          <Typography className='profile-subtitles' variant="h6" color="text.secondary">Team</Typography>
            <div className="profile-data">
              {project.team}
            </div>   
             <Button href={project.link} className='profile-btn' variant="contained" sx={{borderRadius: '5px'}}>Link</Button>
          </div>
            <div id='img-box'>
            <CardMedia
              className='project-img'
              component="img"
              src={project.image}
              alt="Image Dev"
            />
          </div>
        </div>
        <div className='mid-bottom'>  
          <div>
            <Typography className='profile-subtitles' variant="h6" color="text.secondary">Description</Typography>
            <div className="profile-data-description mid-top-margin">
              <Typography className='profile-subtitles' variant="body1" color="text.secondary">{project.description}</Typography>
            </div>
          </div> 
          <div>
            <Typography className='profile-subtitles' variant="h6" color="text.secondary">Technologies</Typography>
            <div className="profile-data-description">
              {project.tech}
            </div>    
          </div>     
        <Button 
              onClick={()=> navigate('/projects')}
              className='profile-btn' 
              variant="contained" 
              sx={{ alignSelf:'center', marginTop:'40px', borderRadius: '5px'}}>
                Back
            </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectProfile