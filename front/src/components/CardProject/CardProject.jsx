import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './CardProject.css'
import { ButtonBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from '@mui/material';
import { teal } from '@mui/material/colors';


export default function CardProject({ id, userId, title, image, link, description, team, tech }) {
  const navigate = useNavigate()
  
  return (
    <div className='cardContainer'>
      
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
              <Link onClick={() => navigate(`/developers/${userId}`)} aria-label="accountCircle">
                <AccountCircleIcon sx={{color:teal[100], marginTop: '6px'}}/>
              </Link>
            </div>
          </div>
          <ButtonBase className="btn-base" onClick={() => navigate(`/projects/${id}`)}>
            <Typography className='text' variant="body2" align="center" color="text.primary">
              { tech }
            </Typography>
            <Typography className='text' variant="body2" align="center" color="text.primary">
              { description }
            </Typography>
            <Typography className='text' variant="body2" align="center" color="text.primary">
              { link }
            </Typography>
          </ButtonBase>
        </CardContent>
      </Card>
    </div>
  );
}