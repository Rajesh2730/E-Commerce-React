// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav,Form, FormControl, Button } from 'react-bootstrap';
import '../Nav/navbar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" className='navbar' >
        <Navbar.Brand href="/E-Commerce-React" className='text-light me-3'>Trending Mart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/E-Commerce-React" className='text-light me-3'>Home</Nav.Link>
            <Nav.Link className='text-light me-3'><Link to='/signup'className='link' >Signup</Link></Nav.Link>
            <Nav.Link className='text-light me-3'><Link to='/LogIn' className='link' >SignIn</Link></Nav.Link>
            <Nav.Link className='text-light me-3'><Link to='/Mens' className='link' >Men</Link></Nav.Link>
            <Nav.Link className='text-light me-3'><Link to='/women' className='link' >Women</Link></Nav.Link>
            <Nav.Link href="#" className='text-light me-3'>Kids</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-3"
              aria-label="Search"
            />
            <Button variant="outline-success" className='text-light'>Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
