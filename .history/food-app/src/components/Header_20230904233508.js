import React from 'react'

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div>
         <Navbar expand="lg" data-bs-theme="dark" bg='dark'>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Link className='nav-link' to={'/'}>Home</Link>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
