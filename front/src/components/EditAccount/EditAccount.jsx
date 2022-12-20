import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { editOwnProfile } from '../../services/dev.services';
import { useNavigate } from 'react-router';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import { addTechesToUser } from '../../services/dev.services';
import './EditAccount.css'
import * as defaultPic from '../../assets/defaultProfile.jpg'
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { MenuItem } from '@mui/material';
<<<<<<< HEAD
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
=======
import { useTheme } from '@mui/material/styles';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import getAllTechs from '../../services/tech.services';
>>>>>>> 265492ad05e46e37721ccd66b454cec79934b6b3



function EditAccount( dev ) {
  const [ techs, setTechs] = useState([])

  const getTechs = async() => {
    const teches = await getAllTechs()
    setTechs(teches)
  }
  
  const renderTechs = () => {
    return techs?.map((tech) => {
        return (
          <MenuItem
            key={tech.name}
            value={tech.name}
            style={getStyles(tech.name, techName, theme)}
          >
            {tech.name}
          </MenuItem>
        )
    })
  }
        
  const ITEM_HEIGHT = 70;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStyles(name, TechName, theme) {
    return {
      fontWeight:
        TechName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const theme = useTheme();
  const [techName, setTechName] = React.useState([]);

  const handleChangeSelect = (event) => {
    const {
      target: { value },
    } = event;
    setTechName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
    
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const [values, setValues] = React.useState({
    name: dev.name,
    email: dev.email,
    image: dev.image,
    about: dev.about,
    tech: dev.tech
  })

  const [label, setLabel] = React.useState('')
  let valid = true

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const userEdit = async () => {
    const user = {
      name: values.name,
      email: values.email,
      image: values.image,
      about: values.about
    }
    
    const response = await editOwnProfile(user)// post user data 
    navigate(`/developers/${response.id}`)
  }  

  const techEdit = async () => {
    const knowledge = {
      techs: techName
    }
    const response = await addTechesToUser(knowledge)
  }

  const postUpdate = () => {
    techEdit()
    userEdit()
  }

  useEffect(() => { getTechs() }, []) 
  return (
    <Card className="profileBox" sx={{ maxWidth: 1500, minHeight: 500 }}>   
      <CardContent id="profile-content">
            <div className="profile-title">
              <Typography variant="h3" >EDIT PROFILE</Typography>
            </div>
            <Typography className='profile-subtitles' variant="h6" color="text.secondary">Picture</Typography>
              <div className="profile-data-description">
              <TextField sx={{width: '100%'}}
                id="outlined-multiline-flexible"
                label="Copy your picture link here:    ---'https://www.mypic/pic.com'---"
                multiline
                maxRows={1}
                value={values.image}
                onChange={handleChange('image')}
              />
              </div>
        <div className='mid-top'>
          <div className='profile-name-email align-center'>
            <Typography className='profile-subtitles' variant="h6" color="text.secondary">Name</Typography>
            <div className="profile-data width85">
              <FormControl className='input-signup-login' sx={{ m: 1, width: '25ch' }} variant="outlined">            
                <InputLabel >New name?</InputLabel>
                <OutlinedInput 
                  value={values.name}
                  onChange={handleChange('name')}
                  label="New name?"
                />
              </FormControl>
            </div><br></br>
            <Typography className='profile-subtitles' variant="h6" color="text.secondary">Email</Typography>
            <div className="profile-data width85" >
              <FormControl className='input-signup-login' sx={{ m: 1, width: '25ch' }} variant="outlined">            
                <InputLabel >New email?</InputLabel>
                <OutlinedInput 
                  type={values.email}
                  value={values.email}
                  onChange={handleChange('email')}
                  label="New email?"
                />
              </FormControl>
            </div>
          </div>
          <div>
            <Typography className='profile-subtitles' variant="h6" color="text.secondary">Knowledge</Typography>
<<<<<<< HEAD
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <ArrowDropDownCircleIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{}}
            >
              {techs?.map((tech, i) => (
                <MenuItem key={i} onClick={pushTech()}>
                  <Typography  textAlign="center">{tech.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
            <div className="profile-data-description size-empty-tech">
             
            </div>    
=======
          <div className='profile-data-description'>
            <FormControl sx={{ m: 1, width: 250 }}>
            <InputLabel id="demo-multiple-chip-label">Technologies</InputLabel>
              <Select
                  sx={{ height: "225px"}}
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={techName}
                  onChange={handleChangeSelect}
                  input={<OutlinedInput id="select-multiple-chip" label="technologies" />}
                  renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                  )}
                MenuProps={MenuProps}
              >
                {renderTechs(techs)}
              </Select>
            </FormControl>
          </div>
>>>>>>> 265492ad05e46e37721ccd66b454cec79934b6b3
          </div>     
            <div id='img-box'>
              <CardMedia
              sx={{margin:'25px 0 0 0', selfAlign:'start', maxWidth:'400px', maxHeight:'300px'}}
                className='project-img'
                component="img"
                src={require("../../assets/profile-default.png")}
                alt="Image Dev"
              />
            </div>
        </div>
        <div className='mid-bottom'>  
          <div>
            <Typography className='profile-subtitles' variant="h6" color="text.secondary">About</Typography>
            <div className="profile-data-description">
              <TextField sx={{width: '100%'}}
                id="outlined-multiline-flexible"
                label="New about?"
                multiline
                maxRows={4}
                value={values.about}
                onChange={handleChange('about')}
              />
            </div>
          </div>
          <div className='group-edit-btn'>
            <Button 
              onClick={()=> postUpdate()}
              className='profile-btn' 
              variant="contained" 
              sx={{ alignSelf:'center', marginTop:'40px', borderRadius: '5px'}}>
                Save changes
            </Button>
            <Button 
              onClick={()=> navigate('/developer/profile')}
              className='profile-btn' 
              variant="contained" 
              sx={{ alignSelf:'center', marginTop:'40px', borderRadius: '5px'}}>
                Cancel
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


export default EditAccount
