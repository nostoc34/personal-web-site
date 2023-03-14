import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GrLanguage } from "react-icons/gr";
import { useLocation } from "react-router-dom";

function NavigationTR() {

  const currentPath = useLocation().pathname;
  var newPath = "";
  if (currentPath === "/") {
    newPath = "/en";
  } else if (currentPath === "/hakkimda") {
    newPath = "/about";
  } else if (currentPath === "/iletisim") {
    newPath = "/contact";
  }

  console.log(newPath);

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

export default NavigationTR;
