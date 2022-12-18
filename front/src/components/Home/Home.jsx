import React from 'react'
import Login from "../Login/Login";
import { Button } from '@mui/material'
import './Home.css'


function Home() {
  return (
    <div>
      <div className='home-container'>
        <div className='box-top'>
        <div className='home-top-left'><Login/></div>
        <div className='home-top-right'></div>
        </div>
        <div className='box-mid'>
        <div className='home-mid-box'></div><br></br>
        <div className='home-mid-up'></div><br></br>
        <div className='home-mid-center'></div><br></br>
        <div className='home-mid-down'></div>
        </div>
        <div className='box-bottom'>
        <div className='home-bottom-left'></div><br></br>
        <div className='home-bottom-right'></div>
        </div>
      </div>
    </div>
  )
}

export default Home