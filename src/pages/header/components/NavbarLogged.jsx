import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Header.css"
import { useState } from 'react';
import React from 'react'


const NavbarLogged = () => {
  return (
    <Navbar bg="light" variant="light" className='navbarNew'>
      <Container>
      <img src='/views/img/5087847.png' alt='carrito' crossOrigin="Anonymous"></img>
          <Navbar.Brand href="#">MarketPlace</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="/">Productos</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="#"><img src='/views/img/585e4beacb11b227491c3399.png' alt='logoUsuario' crossOrigin='Anonymous'></img>Perfil de Usuario</Nav.Link>
          </Nav>
          </Container>
      </Navbar>
  )
}

export default NavbarLogged