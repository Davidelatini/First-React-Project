// src/components/MyNav.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


function MyNav() {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#home">FILM horror</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#browse">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNav;
