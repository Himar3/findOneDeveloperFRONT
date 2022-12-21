import React, { useEffect, useState } from "react"
import Header from "../components/Header/Header"
import Profile from "../components/Profile/Profile"
import { getOwnProfile } from "../services/dev.services"
import { Chip } from '@mui/material'
import Footer from "../components/Footer/Footer"


function AccountPage() {
    const [dev, setDev] = useState({})

    const userProfile = async() => {
      const myProfile = await getOwnProfile()
      setDev(myProfile)
    }

    useEffect(() => { userProfile() }, [])
    return (
      <div className="content-wrap">
        <Header />
        <Profile 
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

export default AccountPage