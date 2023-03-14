import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GrLanguage } from "react-icons/gr";
import { useLocation } from "react-router-dom";

function NavigationEN() {

  const currentPath = useLocation().pathname;
  var newPath = "";
  if (currentPath === "/en") {
    newPath = "/";
  } else if (currentPath === "/about") {
    newPath = "/hakkimda";
  } else if (currentPath === "/contact") {
    newPath = "/iletisim";
  }
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="nav-bar">
      <Container>
      <button className="lang-btn">
          <Link to={newPath}>
            <GrLanguage />
          </Link>
        </button>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="collapse-btn"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="links">
            <Nav.Link className="link">
              <NavLink
                to="/en"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Homepage
              </NavLink>
            </Nav.Link>
            <Nav.Link className="link">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </Nav.Link>
            <Nav.Link className="link">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationEN;
