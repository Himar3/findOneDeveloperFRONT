import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import './Profile.css'

function Profile( dev ) {
  return (
    <Card className="profileBox" sx={{ maxWidth: 1400, height: 750 }}>   
      <CardContent id="profile-content">
        <div className="profile-title">
        <Typography variant="h3" >PROFILE</Typography>
        </div>
        <Typography className='profile-subtitles' variant="body2" color="text.secondary">Name</Typography>
          <Chip className="profile-data" label={dev.name} />
        <Typography className='profile-subtitles' variant="body2" color="text.secondary">Email</Typography>
          <Chip className="profile-data" label={dev.email} />
        <Typography className='profile-subtitles' variant="body2" color="text.secondary">About</Typography>
        <div className="profile-data">
          <Typography className='profile-subtitles' variant="body2" color="text.secondary">{dev.about}</Typography>
        </div>
        <Typography className='profile-subtitles' variant="body2" color="text.secondary">Knowledge</Typography>
        <div className="profile-data">
            {/* { dev.tech.map((tech) => {
                <Stack direction="row" spacing={1}>
                  <Chip label={tech} />
                </Stack>
              })}  */}
        </div>    
        <img url={dev.image} alt="developer pic"></img>
        <Button className='profile-btn' variant="contained">Edit profile</Button>
        <Button className='profile-btn' variant="contained">See my Projects</Button>
      </CardContent>
    </Card>
  );
}


export default Profile
