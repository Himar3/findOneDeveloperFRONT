import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { teal } from '@mui/material/colors';
import { useNavigate } from 'react-router';
import './CardDev.css'

export default function CardDev( dev ) {
  const navigate= useNavigate()
  return (
    <div className='cardContainer'>
      <Card className='card-box' sx={{ maxWidth: 245 }}>
        <CardMedia
          className='pic'
          component="img"
          height="160"
          src={require('../../assets/GitHub-Mark.png')}
          alt="Dev Pic"
        />
        <CardContent>
          <div className='card'>
            <Typography className='title' sx={{ width: 165 }}>
              { dev.name }
            </Typography>
            <div className='group-btn' sx={{ width: 80 }}>
              <IconButton onClick={() => navigate(`/developers/${dev.id}`)} aria-label="accountCircle" sx={{color:teal[100]}}>
                <AccountCircleIcon />
              </IconButton>
              <IconButton className='btn' aria-label="add to favorites" sx={{color:teal[100]}}>
                <FavoriteIcon />
              </IconButton>
            </div>
          </div>
          <Typography className='text' variant="body2" align="center" color="text.primary">
            { dev.tech }
          </Typography>
          <Typography className='about' variant="body2" align="center" color="text.primary" sx={{ width: 220 }}>
            { dev.about }
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
