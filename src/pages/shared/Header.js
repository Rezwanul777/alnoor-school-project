import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/alnoor.png'

const Header = () => {
   return (
      <>
      <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
         <img height={80} width={100} src={logo} alt=""  />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#notices">Notices</Nav.Link>
          <Nav.Link href="#missions">Admission</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
   );
};

export default Header;