import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { EditAccount } from '../components/EditAccount/EditAccount'
import { useEffect, useState } from 'react'
import { getOwnProfile } from '../services/dev.services'


function EditAccountPage() {
  const [dev, setDev] = useState({})

    const userProfile = async() => {
      const myProfile = await getOwnProfile()
      setDev(myProfile)
    }

    useEffect(() => { userProfile() }, [])
  return (
    <div className="content-wrap">
      <Header/>
      <EditAccount dev={dev}/>
      <Footer/>
    </div>
  )
}

export default EditAccountPage