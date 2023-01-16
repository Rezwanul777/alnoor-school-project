import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/alnoor.png'

const Header = () => {
   return (
      <>
  
    <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light" height={80}>
      <Container>
        
               <Navbar.Brand as={Link} to="/">
               <img  src={logo} height={60} width={80} alt="" />
                </Navbar.Brand>
            
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-link">
            <Nav.Link as={Link} to="/#home">Home</Nav.Link>
            <Nav.Link as={Link} to="features">Features</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="faq">FAQ</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
   );
};

export default Header;