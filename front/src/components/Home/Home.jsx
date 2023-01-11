import React from 'react'
import './Home.css'


function Home() {
  
  return (
    <div className='home'>
      <div className='background-home'>
        <div className='home-container'>
          <div className='box-top-mid'>
            <div className='box-mid'>
              <div className='home-mid-box'></div>
              <div className='home-mid-up'></div>
              <div className='home-mid-center'></div>
            </div>
            <div className='home-top-right'></div>
          </div>
          <div className='box-bottom'>
            <div className='home-bottom-left'></div>
            <div className='home-bottom-right'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home