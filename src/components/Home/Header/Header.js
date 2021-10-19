import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>
  <Navbar bg="primary" variant="dark" sticky="top" >
    <Container>
    <Navbar.Brand href="#home">mediCare</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    	<Nav.Link href="#home" className="text-light

">Home</Nav.Link>
        <Nav.Link href="#doctors" className="text-light

">Doctors</Nav.Link>
        <Nav.Link href="#about" className="text-light

">About</Nav.Link>
        <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
</>
    );
};

export default Header;