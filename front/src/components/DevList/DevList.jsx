import React from 'react'
import CardDev from '../CardDev/CardDev.jsx'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAllDevelopers } from '../../services/dev.services'
import './DevList.css'


function DevList() {
  const [ devs, setDevs ] = useState([])

  const listDev = async() => {
    const devs = await getAllDevelopers()
    setDevs(devs)
  }

  const renderDevs = () => {
    return devs && devs.map((dev, i) => {
        return (
            <CardDev key={i}
            id={dev.id}
            name={dev.name}
            email={dev.email}
            image={dev.image}
            about={dev.about}
            tech={dev.tech.map((e) => `#${e} `)}
            />
        )
    })
  }
  useEffect(() => { listDev() }, [])
  return (
    <div className='cardList'>
        {renderDevs()}
    </div>
  )
}

export default DevList
