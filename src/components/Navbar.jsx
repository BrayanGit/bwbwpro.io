import { useState, useContext } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

function NavModel() {
  const [expanded, setExpanded] = useState(false);
  const { carrito } = useContext(GlobalContext);

  return (
    <Navbar 
      className="bg-dark" 
      expanded={expanded} 
      variant="dark" 
      expand="lg" 
      fixed="top"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="Logo"
            style={{ height: "40px", borderRadius: "50px" }}
          />

          <div className="ms-2 d-flex flex-column lh-1">
            <span style={{ fontSize: "1rem", fontWeight: "bold", color: "#fff" }}>BW&BW</span>
            <span style={{ fontSize: "0.8rem", color: "#bbb" }}>BodyProtection</span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto flex-row">
            <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link style={{ paddingLeft: "5px" }} as={Link} to="/servicios">Servicios</Nav.Link>
            <Nav.Link style={{ paddingLeft: "5px" }} as={Link} to="/producto">Productos</Nav.Link>
            <Nav.Link style={{ paddingLeft: "5px" }} as={Link} to="/carro">
              <i style={{ marginRight: "5px" }} className="fa-solid fa-cart-shopping"></i> 
              <span className="badge bg-primary">{carrito.length}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavModel;

