import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GrLanguage } from "react-icons/gr";
import { BiMenu } from "react-icons/bi";
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

  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 200) {
        navbarRef.current.style.border = "1px solid #d3d3d3";
        navbarRef.current.style.background = "rgba(211, 211, 211, 0.1)";
      } else {
        navbarRef.current.style.border = "none";
        navbarRef.current.style.background = "none";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="nav-bar">
      <button className="lang-btn">
        <Link to={newPath}>
          <GrLanguage />
        </Link>
      </button>
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="collapse-btn"
        >
          <BiMenu />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="links" ref={navbarRef}>
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
                About Me
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
