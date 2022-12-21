import React from 'react';
import Header from '../components/Header/Header';
import SearchDevs from '../components/SearchDevs/SearchDevs';
import SearchProjects from '../components/SearchProjects/SearchProjects';
import Footer from "../components/Footer/Footer";
import { searchContext } from '../App';
import { useContext } from 'react';
import { Typography } from '@mui/material';


function SearchPage() {
  const { searchTerm, setSearchTerm } = useContext(searchContext)
  return (
    <div className="content-wrap">
        <Header/>
        <div className='searchContainer'>
          <div className='search-column'>
            <div className='profile-title-search'>
              <Typography textAlign="center" variant='h5' sx={{ justifySelf:'center' }}>Developers</Typography>
            </div>
            <SearchDevs searchTerm={searchTerm}/>
          </div>
          <div className='search-column'>
            <div className='profile-title-search'>
              <Typography textAlign="center" variant='h5' sx={{ justifySelf:'center' }}>Projects</Typography>
            </div>
            <SearchProjects searchTerm={searchTerm}/>
          </div>
        </div>  
      <Footer/>
    </div>
  )
}

export default SearchPage