import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import './Profile.css'

function Profile( dev ) {
  return (
    <Card className="profileBox" sx={{ maxWidth: 1400, height: 750 }}>   
      <CardContent id="profile-content">
        <div className='mid-top'>
          <div className='profile-name-email'>
          <div className="profile-title">
          <Typography variant="h3" >PROFILE</Typography>
          </div>
            <Typography className='profile-subtitles' variant="h6" color="text.secondary">Name</Typography>
            <div className="profile-data">
              <Typography className='profile-subtitles' variant="body1" color="text.secondary">{dev.name}</Typography>
            </div><br></br>
            <Typography className='profile-subtitles' variant="h6" color="text.secondary">Email</Typography>
            <div className="profile-data">
              <Typography className='profile-subtitles' variant="body1" color="text.secondary">{dev.email}</Typography>
            </div>
          </div>
          <div className='btn-profile-container'>
            <Button className='profile-btn' variant="contained" sx={{borderRadius: '5px'}}>Edit profile</Button>
            <Button className='profile-btn' variant="contained" sx={{borderRadius: '5px'}}>My Projects</Button>
            <Button className='profile-btn' variant="contained" sx={{borderRadius: '5px'}}>New project</Button>
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
            <Typography className='profile-subtitles' variant="h6" color="text.secondary">About</Typography>
            <div className="profile-data-description">
              <Typography className='profile-subtitles' variant="body1" color="text.secondary">{dev.about}</Typography>
            </div>
          </div> 
          <div>
            <Typography className='profile-subtitles' variant="h6" color="text.secondary">Knowledge</Typography>
            <div className="profile-data-description">
              {dev.tech}
            </div>    
          </div>     
        </div>
      </CardContent>
    </Card>
  );
}


export default Profile
