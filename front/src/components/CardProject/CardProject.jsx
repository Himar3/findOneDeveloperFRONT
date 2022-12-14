import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './CardProject.css'
import { ButtonBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function CardProject({ id, title, image, link, description, team, tech }) {
  const navigate = useNavigate()
  
  return (
    <div className='cardContainer'>
      <ButtonBase onClick={() => navigate(`/projects/${id}`)}>
      <Card className='card-box' sx={{ width: 245, height: 260 }}>
        
        <CardMedia
          className='pic'
          component="img"
          height="160"
          src={require("../../assets/projectExample.png")}
          alt="Image Dev"
        />
        <CardContent>
          <div className='card'>
            <Typography className='title'>
              { title }
            </Typography>
            <div>
              {/* <IconButton  aria-label="accountCircle" sx={{color:teal[100]}}>
                <AccountCircleIcon />
              </IconButton> */}
            </div>
          </div>
          <Typography className='text' variant="body2" align="center" color="text.primary">
            { tech }
          </Typography>
          <Typography className='text' variant="body2" align="center" color="text.primary">
            { description }
          </Typography>
          <Typography className='text' variant="body2" align="center" color="text.primary">
            { link }
          </Typography>
        </CardContent>
      </Card>
      </ButtonBase>
    </div>
  );
}