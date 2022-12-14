import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import { login } from '../../services/auth.services'
import { useNavigate, Link } from 'react-router-dom'

import './Login.css'

function Login() {
  const navigate = useNavigate()

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
    email: ''
  })
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const postLogin = async () => {
    const user = {
      email: values.email,
      password: values.password
    }
    await login(user)
    if (localStorage.getItem('token')){ 
      navigate('/developers') 
    }
  }


  return (
    // <Card className='background'>
      <Card className='login-container'>
          <ButtonGroup className="login-group"  sx={{ display: 'flex', alignSelf:'space-around'}} disableElevation variant="contained" aria-label="Disabled elevation buttons">
            <Button className='login-signup'>Login</Button>
            <Button component={Link} to="/signup" className='login-signup'>Signup</Button>
          </ButtonGroup>
        <Box className='login-box' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>
          <FormControl className='input-signup-login' sx={{ m: 1, width: '25ch' }} variant="outlined">            
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              type={values.email}
              value={values.email}
              onChange={handleChange('email')}
              endAdornment={
                <InputAdornment position="end">
                  <EmailIcon />
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl className='input-signup-login' sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button className='log-btn' variant="contained" onClick={() => postLogin()}>
            Log in
          </Button>
          <Divider component="div" role="presentation">
          </Divider>
          <Button className='forgot' variant="text">Forgot password?</Button>
        </Box>
      </Card>
    // </Card>
  )
}

export default Login