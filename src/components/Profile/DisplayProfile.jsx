import React from 'react'
import { UserProvider } from './UseContext'
import ProfilePage from './ProfilePage'

const DisplayProfile = () => {
  return (
        <UserProvider>
            <ProfilePage/>
        </UserProvider>
  )
}

export default DisplayProfile;