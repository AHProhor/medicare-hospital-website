import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/usefirebase';

const Header = () => {
        const {user,logOut} = useFirebase();
    return (
        <>
  <Navbar bg="primary" variant="dark" sticky="top" >
    <Container>
    <Navbar.Brand as={Link} to="/home">mediCare</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    	<Nav.Link as={Link} to="/home" className="text-light

">Home</Nav.Link>
        <Nav.Link as={Link} to="/doctors" className="text-light
">Doctors</Nav.Link>
        <Nav.Link as={Link} to="/covid" className="text-light
">Covid Care</Nav.Link>
        <Nav.Link as={Link} to="/traning" className="text-light
">Traning</Nav.Link>
        <Nav.Link as={Link} to="/about" className="text-light
">About</Nav.Link>
<Navbar.Text>
                <span style={{color:"white"}}>Signed in as:{user.displayName}</span>
        </Navbar.Text>
        {
                user.email?
                <button onClick={logOut}>logout</button>
                :
                <Nav.Link as={Link} to="/login" className="text-light
">Login</Nav.Link>}
    </Navbar.Collapse>
    </Container>
  </Navbar>
</>
    );
};

export default Header;