import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FolderIcon from '@mui/icons-material/Folder';
import { teal } from '@mui/material/colors';
import { useNavigate } from 'react-router';
import { ButtonBase } from '@mui/material';
import { Link } from '@mui/material';
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
          src={require('../../assets/perfil.jpg')}
          alt="Dev Pic"
        />
        <CardContent>
          <div className='card'>
            <Typography className='title' sx={{ width: 165 }}>
              { dev.name }
            </Typography>
            <div className='group-btn' sx={{ width: 80 }}>
              <Link onClick={() => navigate(`/projects/developer/${dev.id}`)} sx={{color:teal[100], marginTop: '6px'}}>
                <FolderIcon />
              </Link>
              <Link className='btn' aria-label="add to favorites" sx={{color:teal[100]}}>
                <FavoriteIcon sx={{marginTop:'6px', marginLeft:'5px'}}/>
              </Link>
            </div>
          </div>
          <ButtonBase className="btn-base" onClick={() => navigate(`/developers/${dev.id}`)}>
            <Typography className='text' variant="body2" align="center" color="text.primary">
              { dev.tech }
            </Typography>
            <Typography className='about' variant="body2" align="center" color="text.primary" sx={{ width: 220 }}>
              { dev.about }
            </Typography>
          </ButtonBase>
        </CardContent>
      </Card>
    </div>
  );
}
