import React, { useEffect, useState } from "react"
import Header from "../components/Header/Header"
import { getDeveloperById } from "../services/dev.services"
import { useParams } from "react-router"
import { Chip } from '@mui/material'
import Footer from "../components/Footer/Footer"
import DevProfile from "../components/devProfile/devProfile"


function DevProfilePage() {
    const [dev, setDev] = useState({})
    
    const { id } = useParams()

    useEffect(() => { 
      const renderDev = async() => {
        const developer = await getDeveloperById(id)
        setDev(developer)
      }
      renderDev() 
    }, [id])

    return (
      <div className="content-wrap">
        <Header />
        <DevProfile 
          id={dev.id}
          name={dev.name}
          email={dev.email}
          about={dev.about}
          image={dev.image}
          tech={dev.tech?.map((tech, i) => {
            return (
            <div key={i}><Chip label={'# ' + tech}/></div>
          )})}
        />
        <Footer/>
      </div>
    )
}

export default DevProfilePage