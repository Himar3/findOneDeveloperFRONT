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
import './EditAccount.css'

function EditAccount( dev ) {
const navigate = useNavigate()

  const [values, setValues] = React.useState({
    name: '',
    email: '',
    about: '',
    image: ''
  })

  const [label, setLabel] = React.useState('')
  let valid = true

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const accountEdit = async () => {
    const user = {
      name: values.name,
      email: values.email,
      about: values.about,
      image: values.image,
    }
    const knowledge = {
      tech: values.tech
    }
    await editOwnProfile(user)
    if (localStorage.getItem('token')){ 
      navigate('/profile') 
    }
  }

  return (
    <Card className="profileBox" sx={{ maxWidth: 1500, minHeight: 500 }}>   
      <CardContent id="profile-content">
        <div className='mid-top mid-top-margin'>
          <div className='profile-name-email'>
            <div className="profile-title">
              <Typography variant="h3" >EDIT PROFILE</Typography>
            </div>
            <Typography className='profile-subtitles' variant="h6" color="text.secondary">Name</Typography>
            <div className="profile-data width85">
              <FormControl className='input-signup-login' sx={{ m: 1, width: '25ch' }} variant="outlined">            
                <InputLabel >New name?</InputLabel>
                <OutlinedInput 
                  type={values.name}
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
            <div className='knowledge-picture'>
              <Typography className='profile-subtitles' variant="h6" color="text.secondary">Knowledge</Typography>
              <div className="profile-data-description">
                {dev.tech}
              </div>    
            </div>     
              <div id='img-box'>
                <Typography className='profile-subtitles' variant="h6" color="text.secondary">Picture</Typography>
                <div className="profile-data-description">
                <TextField sx={{width: '500px'}}
                  id="outlined-multiline-flexible"
                  label="Copy your picture link here"
                  multiline
                  maxRows={15}
                  value={values.image}
                  onChange={handleChange('image')}
                />
                </div>
            </div>
            </div>
        </div>
        <div className='mid-bottom'>  
          <div>
            <Typography className='profile-subtitles  margin-top-about' variant="h6" color="text.secondary">About</Typography>
            <div className="profile-data-description">
              <TextField sx={{width: '100%'}}
                id="outlined-multiline-flexible"
                label="New about"
                multiline
                maxRows={4}
                value={values.about}
                onChange={handleChange('about')}
              />
            </div>
          </div>
          <div className='save-cancel-container'>
            <Button 
              className='profile-btn' 
              variant="contained" 
              sx={{ alignSelf:'center', marginTop:'20px', borderRadius: '5px'}}>
                Save changes
            </Button>
            <Button 
              className='profile-btn' 
              variant="contained" 
              sx={{ alignSelf:'center', marginTop:'30px', marginBottom:'30px',borderRadius: '5px'}}>
                Cancel
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


export default EditAccount
