import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAllDevelopers } from '../../services/dev.services'
import { Typography } from '@mui/material'
import CardDev from '../CardDev/CardDev.jsx'



function SearchDevs( {searchTerm} ) {

  const [ devs, setDevs ] = useState([])
  

  const listDev = async() => {
    const devs = await getAllDevelopers()
    setDevs(devs)
  }

  const renderFilteredDevs = () => {
    const filteredDevs = devs.filter((dev) => dev.tech.includes(searchTerm) || dev.name.includes(searchTerm))
    if (searchTerm !== '') {
        if (filteredDevs.length <1 ) {
            return (<Typography variant='h4'>Sorry there is no match! try to search for something else</Typography>)
        } else {
            return filteredDevs.map((dev, i) => {
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
    } else {
        return (<Typography variant='h4'>Sorry there is no match! try to search for something else</Typography>)
    } 
  }

  useEffect(() => { listDev() }, [])

  return (
    <div className='cardList'>
      {renderFilteredDevs()}
    </div>
  )
}

export default SearchDevs




