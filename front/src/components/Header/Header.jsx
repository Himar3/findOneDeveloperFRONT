import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'
import { styled, alpha } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { getOwnProfile } from '../../services/dev.services';
import { useNavigate } from 'react-router-dom';
import { searchContext } from '../../App.js';
import { useContext } from 'react';
import { defaultPic } from '../EditAccount/EditAccount';
import './Header.css'


const Search = styled('div')(({ theme }) => ({

  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));



function Header() {
  
  const { searchTerm, setSearchTerm } = useContext(searchContext)

  const [dev, setDev] = useState({})

  const navigate = useNavigate()

  const userProfile = async() => {
    const myProfile = await getOwnProfile()
    setDev(myProfile)
  }

  const logout = () => {
    localStorage.clear()
  }
  
  const pages = [
    {  
      title: 'Developers',
      path: '/developers'
    },
    {
      title: 'Projects',
      path: '/projects'
    }
  ];
    
    
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
  
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  useEffect(() => { userProfile() }, [])

  const checkLogin = () => {
    if (localStorage.email && localStorage.token) {
      
      return (
      <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={defaultPic(dev)} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                  <MenuItem component={Link} to='/developer/profile' onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">My profile</Typography>
                  </MenuItem>
                  <MenuItem component={Link} to='/' onClick={() => logout()}>
                  <Typography textAlign="center">Log out</Typography>
                </MenuItem>             
              </Menu>
            </Box>
      )
    } else {
      return <Button component={Link} to="/login" variant="text">Login/Signup</Button>
    }
  }
  const handleOnChangeSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <AppBar className='appbar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters className='toolbar'>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, i) => (
                <MenuItem key={i} component={Link} to={page.path} onClick={handleCloseNavMenu}>
                  <Typography  textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Button component={Link} to="/" id="logo"/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box className="btngroupbox" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <ButtonGroup className="btngroup" variant="contained" disableElevation aria-label="contained button group" size="medium">
              <Button component={Link} to="/developers" className='pagesBtn'>Developers</Button>
              <Button  component={Link} to="/projects" className='pagesBtn'>Projects</Button>
            </ButtonGroup>
          </Box>    
          <Search sx={{display: {xs: 'none', sm: 'flex'}}}>
            <SearchIconWrapper >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase className="searchBar"
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={(e) => handleOnChangeSearch(e)}
              onKeyDown={(e) => { if (e.key === 'Enter') navigate('/search')}}
            />
          </Search>
          {checkLogin()}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;