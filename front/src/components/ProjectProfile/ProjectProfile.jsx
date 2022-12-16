import React from 'react'
import { Card, CardContent, CardMedia, Typography, Chip, Button } from '@mui/material'
import { teal } from '@mui/material/colors';  
import './ProjectProfile.css'
import { Link } from 'react-router-dom';

function ProjectProfile(project) {
  return (
    <Card className="profileBox" sx={{ maxWidth: 1400, minHeight: 500 }}>   
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
             <Button href={'https://www.google.com'} className='profile-btn' variant="contained" sx={{borderRadius: '5px'}}>Link</Button>
          </div>
            <div id='img-box'>
            <CardMedia
              className='project-img'
              component="img"
              src={require("../../assets/GitHub-Mark.png")}
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
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectProfile