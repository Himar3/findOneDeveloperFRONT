import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { teal } from '@mui/material/colors';
import './CardProject.css'

export default function CardProject() {
  
  return (
    <Card className='card-box' sx={{ maxWidth: 245 }}>
      <CardMedia
        component="img"
        height="160"
        src={require("../../assets/projectExample.png")}
        alt="Image Dev"
      />
      <CardContent>
        <div className='card'>
          <Typography className='title'>
            Project Title
          </Typography>
          <div>
            <IconButton  aria-label="accountCircle" sx={{color:teal[100]}}>
              <AccountCircleIcon />
            </IconButton>
          </div>
        </div>
        <Typography className='subtitle' variant="body2" sx={{color:teal[100]}}>
            Type Project
          </Typography>
        <Typography className='text' variant="body2" align="center" color="text.primary">
          Project description, about this project
        </Typography>
      </CardContent>
    </Card>
  );
}