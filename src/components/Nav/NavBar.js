import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Brand href="#" className='bd-name'>Trending Mart</Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-5 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/E-Commerce-React" className='text-light  fs-6 me-3'>Home</Nav.Link>
            <Nav.Link href="#action2" className='text-light  fs-6 me-3'>Trending</Nav.Link>
            <Nav.Link href="#" className='text-light  fs-6 me-3'>
              Outfits
            </Nav.Link>
            <NavDropdown title="Accounts" className='text-light fs-6 me-5' id="navbarScrollingDropdown">
              <NavDropdown.Item><Link to='/E-Commerce-React/signup' className='link'>Sign-up</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Sign-In
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Profile
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex me-5">
            <Form.Control
              type="search"
              placeholder="Search"
              className="search"
              aria-label="Search"
            />
            <Button variant="outline-success" className='btn-success text-light'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;