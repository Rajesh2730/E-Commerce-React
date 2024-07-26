import React from 'react'
import NavBar from '../Nav/NavBar'
import { Button } from 'react-bootstrap'
import axios from 'axios'

const handleLogout = () => {
  axios.post('http://localhost:7230/logout')
   .then((response) => {
      console.log(response);
      localStorage.removeItem('UserName');
      window.location.href = '/';
    })
   .catch((error) => {
      console.log(error);
    });
  
  return (
    <div>
      <NavBar/>
      <Button style={{margin:'2rem'}} onClick={handleLogout} >Logout</Button>
    </div>
  )
  }

export default handleLogout;