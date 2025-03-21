import React from 'react'
import { Navbar, Nav, Container, Row  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { BrowserRouter as Router } from 'react-router-dom'

function Header() {
  return (
    
    <header>
  
          <Navbar bg= "dark" variant= "dark" expand="lg" collapseOnSelect>
          <Container>
          <LinkContainer to="/">
  <Navbar.Brand>
    <img src="/Logo.jpg" alt="Flowpa Logo" className="d-inline-block align-top" height="40" />
  </Navbar.Brand>
</LinkContainer>
<LinkContainer to="/">
  <Navbar.Brand>Garden In Room</Navbar.Brand>
</LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse e id="basic-navbar-nav">
              <Nav className="me-auto">

                <LinkContainer to='/cart'>

                <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                </LinkContainer>

                <LinkContainer to='/login'>

                <Nav.Link><i className='fas fa-user'></i>Login</Nav.Link>
              </LinkContainer>
              </Nav>
        </Navbar.Collapse>
          </Container>
        </Navbar>

      
    </header> 


  )}
export default Header
