import Logo from "../assets/Logo.png";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [activeNavItem, setActiveNavItem] = useState("");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveNavItem("home");
        break;
      case "/about-me":
        setActiveNavItem("about-me");
        break;
      case "/portfolio":
        setActiveNavItem("portfolio");
        break;
      case "/contact":
        setActiveNavItem("contact");
        break;
      default:
        setActiveNavItem("");
    }
  }, [location.pathname]);

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  useEffect(() => {
    let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (click && window.innerWidth <= 992) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.backgroundColor = "#040e20";
    } else {
      document.body.style.overflow = "visible";
      document.body.style.paddingRight = "0px";
      document.body.style.backgroundColor = "initial";
    }
  }, [click]);

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <div className="nav-logo d-flex align-items-center">
          <img src={Logo} alt="Logo" width="70px" />
          Giovanni Giordano <i className="fas fa-code"></i>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleClick} />

        <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-center ${click ? "show" : ""}`}>
          <Nav className="ms-auto">
            <Nav.Item className={activeNavItem === "home" ? "nav-link active" : "nav-link"}>
              <Link
                to="/"
                onClick={() => handleNavItemClick("home")}
                className={activeNavItem === "home" ? "navbar-link active" : "navbar-link"}
              >
                Home
              </Link>
            </Nav.Item>
            <Nav.Item className={activeNavItem === "about-me" ? "nav-link active" : "nav-link"}>
              <Link
                to="/about-me"
                onClick={() => handleNavItemClick("about-me")}
                className={activeNavItem === "about-me" ? "navbar-link active" : "navbar-link"}
              >
                About me
              </Link>
            </Nav.Item>

            <Nav.Item className={activeNavItem === "portfolio" ? "nav-link active" : "nav-link"}>
              <Link
                to="/portfolio"
                onClick={() => handleNavItemClick("portfolio")}
                className={activeNavItem === "portfolio" ? "navbar-link active" : "navbar-link"}
              >
                Portfolio
              </Link>
            </Nav.Item>

            <Nav.Item className={activeNavItem === "contact" ? "nav-link active" : "nav-link"}>
              <Link
                to="/contact"
                onClick={() => handleNavItemClick("contact")}
                className={activeNavItem === "contact" ? "navbar-link active" : "navbar-link"}
              >
                Contact
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
