import * as React from 'react';
import { Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import { defaultPic } from '../EditAccount/EditAccount';
import './Profile.css'


function Profile( dev ) {
  const navigate = useNavigate()
  return (
    <Card className="profileBox" sx={{ maxWidth: 1500, minHeight: 500 }}>   
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
            <Button  onClick={() => navigate(`/profile`)} className='profile-btn' variant="contained" sx={{borderRadius: '5px'}}>Edit profile</Button>
            <Button onClick={() => navigate(`/projects/developer/${dev.id}`)} className='profile-btn' variant="contained" sx={{borderRadius: '5px'}}>Projects</Button>
            <Button onClick={() => navigate(`/projects/create`)} className='profile-btn' variant="contained" sx={{borderRadius: '5px'}}>New project</Button>
          </div>
            <div id='img-box'>
            <CardMedia
              className='project-img'
              component="img"
              src={defaultPic(dev)}
              alt="Image Dev"
            />
          </div>
        </div>
        <div className='mid-bottom'>  
          <div>
            <Typography className='profile-subtitles' variant="h6" color="text.secondary">About</Typography>
            <div className="profile-data-description mid-top-margin">
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
