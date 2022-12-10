import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FolderIcon from '@mui/icons-material/Folder';
import { teal } from '@mui/material/colors';
import './CardDev.css'

function CardDev( dev ) {
  return (
    <div className='cardContainer'>
      <Card className='card-box' sx={{ width: 245 }}>
        <CardMedia
          component="img"
          height="160"
          src={dev.image}
          alt="Dev Pic"
        />
        <CardContent>
          <div className='card'>
            <Typography className='title'>
              { dev.name }
            </Typography>
            <div>
              <IconButton  aria-label="folder" sx={{color:teal[100]}}>
                <FolderIcon />
              </IconButton>
              <IconButton className='btn' aria-label="add to favorites" sx={{color:teal[100]}}>
                <FavoriteIcon />
              </IconButton>
            </div>
          </div>
          <Typography className='text' variant="body2" align="center" color="text.primary">
            { dev.tech }
          </Typography>
        </CardContent>
      </Card>

    </div>
  );
}

export default CardDev