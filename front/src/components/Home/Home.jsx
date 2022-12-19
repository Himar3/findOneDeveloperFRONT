import React from 'react'
import Login from "../Login/Login";
import { Button } from '@mui/material'
import './Home.css'


function Home() {
  return (
    <div>
      <div className='background-home'>
        <div className='home-container'>
          <div className='box-top'>
          <div className='home-top-left'><Login/></div>
          <div className='home-top-right'></div>
          </div>
          <div className='box-mid'>
          <div className='home-mid-box'></div>
          <div className='home-mid-up'></div>
          <div className='home-mid-center'></div>
          {/* <div className='home-mid-down'></div> */}
          </div>
          <div className='box-bottom'>
          <div className='home-bottom-left'></div>
          <div className='home-bottom-right'></div>
        </div>
        </div>
      </div>
        <div className='profile-home'></div>
    </div>
  )
}

export default Home