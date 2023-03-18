import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GrLanguage } from "react-icons/gr";
import { BiMenu } from "react-icons/bi";
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
    <Navbar collapseOnSelect expand="lg" className="nav-bar">
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="collapse-btn"
        >
          {" "}
          <BiMenu />{" "}
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="links" id="links-box" ref={navbarRef}>
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
            <button className="lang-btn">
              <Link to={newPath}>
                <GrLanguage />
              </Link>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationTR;
