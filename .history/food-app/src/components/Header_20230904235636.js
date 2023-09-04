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
        <Navbar.Brand href="#home">FoodWithUs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link className='hover linkpath' to={'/'}>Home</Link>
          <Link className='hover linkpath' to={'/login'}>login</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
