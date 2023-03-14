import { NavLink } from "react-router-dom";
import "./navbar.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";

function Navigation() {
  const [currentPage, setCurrentPage] = useState();

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="nav-bar">
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="collapse-btn"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="links">
            <Nav.Link className="link">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Anasayfa
              </NavLink>
            </Nav.Link>
            <Nav.Link className="link">
              <NavLink
                to="/hakkimda"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Hakkımda
              </NavLink>
            </Nav.Link>
            <Nav.Link className="link">
              <NavLink
                to="/iletisim"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                İletişim
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
