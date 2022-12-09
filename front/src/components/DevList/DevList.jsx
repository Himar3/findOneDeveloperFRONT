import React from 'react'
import CardDev from '../CardDev/CardDev.jsx'
import axios from 'axios'

const getAllDevelopers = async() => {
  const response = await axios.get('http://localhost:2222/api/developers')
  return response.data
}


function DevList() {
    const devList = async() => {
        const devs = await getAllDevelopers()
        return devs && devs.map((dev, i) => {
            return (
                <CardDev key={i}
                name={dev.name}
                image={dev.image}
                tech={dev.tech}
                />
            )
        })
    }
  return (
    <div className='cardList'>
        {devList()}
    </div>
  )
}

export default DevList