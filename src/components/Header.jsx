import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css"

function Header() {
  return (
    <Navbar bg="light" variant="light" className='navbarNew'>
      <Container>
      <img src='../img/5087847.png' alt='carrito'></img>
          <Navbar.Brand href="#">MarketPlace</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Productos</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="#">Iniciar Sesion</Nav.Link>
          <Nav.Link href="#">Registrarse</Nav.Link>
          </Nav>
      </Container>
      </Navbar>
  );
}

export default Header;