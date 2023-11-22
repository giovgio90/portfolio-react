import Logo from "../assets/Logo.png";
import Italy from "../assets/Italy.png";
import England from "../assets/England.png";
import { useEffect, useState } from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const [activeNavItem, setActiveNavItem] = useState("");
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    console.log(`Changing language to: ${language}`);
    i18n.changeLanguage(language);
  };

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

  const handleClickItaly = () => {
    console.log("Italy clicked");
    changeLanguage("it");
  };

  const handleClickEngland = () => {
    console.log("England clicked");
    changeLanguage("en");
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="nav-logo d-flex align-items-center">
            <img className="logo" src={Logo} alt="Logo" width="70px" />
            Giovanni Giordano <i className="fas fa-code"></i>
          </div>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleClick} />

        <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-center ${click ? "show" : ""}`}>
          <Nav className="ms-auto">
            <Nav.Item className={activeNavItem === "home" ? "nav-link active" : "nav-link"}>
              <Link
                to="/"
                onClick={() => handleNavItemClick("home")}
                className={activeNavItem === "home" ? "navbar-link active" : "navbar-link"}
                style={{ fontFamily: "Kanit, sans-serif", fontSize: "1.1rem" }}
              >
                {t("HOME")}
              </Link>
            </Nav.Item>
            <Nav.Item className={activeNavItem === "about-me" ? "nav-link active" : "nav-link"}>
              <Link
                to="/about-me"
                onClick={() => handleNavItemClick("about-me")}
                className={activeNavItem === "about-me" ? "navbar-link active" : "navbar-link"}
                style={{ fontFamily: "Kanit, sans-serif", fontSize: "1.1rem" }}
              >
                {t("ABOUT ME")}
              </Link>
            </Nav.Item>

            <Nav.Item className={activeNavItem === "portfolio" ? "nav-link active" : "nav-link"}>
              <Link
                to="/portfolio"
                onClick={() => handleNavItemClick("portfolio")}
                className={activeNavItem === "portfolio" ? "navbar-link active" : "navbar-link"}
                style={{ fontFamily: "Kanit, sans-serif", fontSize: "1.1rem" }}
              >
                {t("PORTFOLIO")}
              </Link>
            </Nav.Item>

            <Nav.Item className={activeNavItem === "contact" ? "nav-link active" : "nav-link"}>
              <Link
                to="/contact"
                onClick={() => handleNavItemClick("contact")}
                className={activeNavItem === "contact" ? "navbar-link active" : "navbar-link"}
                style={{ fontFamily: "Kanit, sans-serif", fontSize: "1.1rem" }}
              >
                {t("CONTACT")}
              </Link>
            </Nav.Item>
            <Row>
              <Col xs={6} className="pe-0">
                <Button
                  className="p-0"
                  style={{ background: "none", border: "none" }}
                  onClick={() => changeLanguage("it")}
                >
                  <div
                    className="text-end text-lg-center"
                    style={{ height: "20px", marginTop: "10px" }}
                    onClick={handleClickItaly}
                  >
                    <img src={Italy} alt="Italy" style={{ width: "25px" }} />
                  </div>
                </Button>
              </Col>

              <Col xs={6}>
                <Button
                  className="p-0"
                  style={{ background: "none", border: "none" }}
                  onClick={() => changeLanguage("en")}
                >
                  <div
                    className="text-start text-lg-center"
                    style={{ height: "20px", marginTop: "10px" }}
                    onClick={handleClickEngland}
                  >
                    <img src={England} alt="England" style={{ width: "25px" }} />
                  </div>
                </Button>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
