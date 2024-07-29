import React from 'react'
import NavBar from '../Nav/NavBar'
import axios from 'axios';
import { Button } from 'react-bootstrap';


const handleLogout = () => {
  axios.post('http://localhost:7230/logout')
   .then((response) => {
      console.log(response);
      localStorage.removeItem('UserName');
      window.location.href = '/E-Commerce-React';
    })
   .catch((error) => {
      console.log(error);
    });
  }
const ProfilePage = () => {
  return (
    <div>
      <NavBar/>
      <Button onClick={handleLogout} style={{margin:'2rem'}}>Logout</Button>
    </div>
  )
}

export default ProfilePage