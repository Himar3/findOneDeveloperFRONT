import React from 'react'
import { Card, CardContent, CardMedia, Typography, Chip, Button } from '@mui/material'
import { teal } from '@mui/material/colors';  
import './ProjectProfile.css'
import { Link } from 'react-router-dom';

function ProjectProfile(project) {
  return (
    <Card className="profileBox" sx={{ maxWidth: 1400, height: 750 }}>   
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
           {/* </a> */}

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
            <div className="profile-data-description">
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
    // <Card className='project-box' sx={{ maxWidth: 1400, height: 750, color:teal[400]}}>
    //   <div id='header-box'>        
    //       <div id='title-box'>
    //         <div className="profile-title">
    //         <Typography variant="h3" >PROJECT</Typography>
    //         </div>
    //           <Typography className='tx-title' variant="body2" align="center" color="text.primary">
    //             Title
    //           </Typography>
    //           <Chip label={project.title} />
    //           <Typography className='tx-title' variant="body2" align="center" color="text.primary">
    //             Type
    //           </Typography>
    //           <Chip label={project.type} />
    //       </div>
    //       <div id='team-box'>
    //           <Typography className='tx-title' variant="body2" align="center" color="text.primary">
    //             Team
    //           </Typography>
    //           <div className='bg-text'>
    //             <Chip label="Himar" />
    //             <Chip label="Carlos" />
    //             <Chip label="Andrew" />
    //           </div>
    //       </div>
        
    //       <div id='img-box'>
    //         <CardMedia
    //           className='project-img'
    //           component="img"
    //           src={require("../../assets/projectExample.png")}
    //           alt="Image Dev"
    //         />
    //       </div>
    //   </div>    
    //     <div id='container-box'>
    //       <div id='description-box'>
    //         <Typography className='tx-title' variant="body2" align="center" color="text.primary">
    //           Description
    //         </Typography>
    //         <div className='bg-text'>
    //           <Typography className='tx-description' variant="body2" align="center">
    //           {project.description}
    //           </Typography>
    //         </div>
    //       </div> 
    //       <div id='tech-box'>
    //         <Typography className='tx-title' variant="body2" align="center" color="text.primary">
    //           Tech
    //         </Typography>
    //         <div className='bg-text'>
    //           {project.tech}
    //         </div>
    //       </div>
    //     </div>
    //       <a href={project.link}>
    //         <button className='link-btn'>Link</button>
    //       </a>
    // </Card>
  )
}

export default ProjectProfile