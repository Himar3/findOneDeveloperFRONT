import React, { useEffect, useState } from "react"
import Header from "../components/Header/Header"
import Profile from "../components/Profile/Profile"
import { getDeveloperById } from "../services/dev.services"
import { useParams } from "react-router"
import { Chip, Stack } from '@mui/material'


function AccountPage() {
    const [dev, setDev] = useState({})

    const renderDev = async() => {
        const developer = await getDeveloperById(id)
        setDev(developer)
      }

    const { id } = useParams()

    useEffect(() => { renderDev() }, [])
    return (
        <div>
            <Header />
            <Profile 
            id={dev.id}
            name={dev.name}
            email={dev.email}
            about={dev.about}
            image={dev.image}
            tech={dev.tech?.map((tech, i) => {
              return (
              <Stack key={i} direction="row" spacing={1}><Chip label={'# ' + tech}/></Stack>
            )})}
            />
        </div>
    )
}

export default AccountPage