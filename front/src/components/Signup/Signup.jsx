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
import ButtonGroup from '@mui/material/ButtonGroup';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { signup } from '../../services/auth.services'
import { Link, useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card';
import './Signup.css'

function Signup() {
  const navigate = useNavigate()

  const [values, setValues] = React.useState({
    password: '',
    repeatPassword:'',
    showPassword: false,
    email: '',
    name: ''
  })

  const [label, setLabel] = React.useState('Repeat password')
  let valid = true

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

  const handleErrorStyle = () => {
    if (values.repeatPassword !== values.password) {
      setLabel(`Password it's not the same`) 
      valid = false
     } else { 
      setLabel('Repeat password')
      valid = true
     }
     return valid
  }

  const postSignup = async () => {
    const user = {
      name: values.name,
      email: values.email,
      password: values.password
    }
    await signup(user)
    if (localStorage.getItem('token')){ 
      navigate('/developers') 
    }
  }

  const validate = () => {
    //validate email
    if (valid) {
      handleErrorStyle()
      if (valid) {
        postSignup()
      } else {
        return (console.log(`Password it's not the same`))
      }
    } else {
      return (console.log('Email format not valid'))
    }
  }

  return (
    <Card className='background'>
      <Card className='login-container'>
          <ButtonGroup className="login-group"  sx={{ display: 'flex', alignSelf:'space-around'}} disableElevation variant="contained" aria-label="Disabled elevation buttons">
            <Button component={Link} to="/login" className='login-signup'>Login</Button>
            <Button className='login-signup'>Signup</Button>
          </ButtonGroup>
        <Box className='login-box' sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center'}}>
          <FormControl className='input-signup-login' sx={{ m: 1, width: '25ch' }} variant="outlined">            
          <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
            <OutlinedInput
              id="outlined-adornment-name"
              type={values.name}
              value={values.name}
              onChange={handleChange('name')}
              endAdornment={
                <InputAdornment position="end">
                  <AccountCircleIcon />
                </InputAdornment>
              }
              label="Name"
            />
          </FormControl>
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
              label="Email"
            />
          </FormControl>
          <FormControl className='input-signup-login' sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              // id="outlined-adornment-password"
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
          <FormControl className='input-signup-login' sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-repeatPassword">{label}</InputLabel>
            <OutlinedInput
              // id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.repeatPassword}
              onChange={handleChange('repeatPassword')}
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
              label={label}
            />
          </FormControl>
          <Button className='sign-btn' variant="contained" color="success" onClick={() => validate()}>
            Sign up
          </Button>
        </Box>
      </Card>
    </Card>
  )
}

export default Signup