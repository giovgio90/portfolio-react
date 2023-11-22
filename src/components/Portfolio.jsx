import TravelStay from "../assets/TravelStay.png";
import WeatherApp from "../assets/WeatherApp.png";
import NetFlix from "../assets/NetFlix-Clone.png";
import Medium from "../assets/MediumClone.png";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <Navigation />
      <Container className="mt-4">
        <Row>
          <Col xs={12} md={6} lg={6}>
            {isLoading ? (
              <Loading />
            ) : (
              <Card className="image-portfolio card-portfolio mb-4">
                <Card.Img variant="top" src={TravelStay} />
                <Card.Body className="text-white d-flex flex-column">
                  <div className="my-auto">
                    <Card.Title style={{ fontFamily: "Kanit, sans-serif" }}>TravelStay</Card.Title>
                    <Card.Text style={{ fontFamily: "Raleway, sans-serif" }}>
                      {t(
                        "The TravelStay platform offers simplified reservations for travel and stays, with reviews and tools to facilitate travel planning."
                      )}
                    </Card.Text>
                  </div>
                  <div className="mt-auto">
                    <Link to="https://github.com/giovgio90/travelstay-project-react">
                      <Button className="button-card" variant="primary" style={{ fontFamily: "Kanit, sans-serif" }}>
                        {t("Watch it on GitHub")}
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            )}
          </Col>
          <Col xs={12} md={6} lg={6}>
            {isLoading ? (
              <Loading />
            ) : (
              <Card className="image-portfolio card-portfolio mb-4">
                <Card.Img variant="top" src={WeatherApp} />
                <Card.Body className="text-white d-flex flex-column">
                  <div className="my-auto">
                    <Card.Title style={{ fontFamily: "Kanit, sans-serif" }}>Weather app</Card.Title>
                    <Card.Text style={{ fontFamily: "Raleway, sans-serif" }}>
                      {t(
                        "The Weather app provides accurate and local weather forecasts with a user-friendly interface for quick reference of weather conditions."
                      )}
                    </Card.Text>
                  </div>
                  <div>
                    <Link to="https://github.com/giovgio90/weather-app">
                      <Button className="button-card" variant="primary" style={{ fontFamily: "Kanit, sans-serif" }}>
                        {t("Watch it on GitHub")}
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            )}
          </Col>
          <Col xs={12} md={6} lg={6}>
            {isLoading ? (
              <Loading />
            ) : (
              <Card className="image-portfolio card-portfolio mb-4">
                <Card.Img variant="top" src={NetFlix} />
                <Card.Body className="text-white d-flex flex-column">
                  <div className="my-auto">
                    <Card.Title style={{ fontFamily: "Kanit, sans-serif" }}>NetFlix Clone</Card.Title>
                    <Card.Text className="mb-0" style={{ fontFamily: "Raleway, sans-serif" }}>
                      {t("I created a Netflix clone with a visual interface as similar as possible to the original.")}
                    </Card.Text>
                  </div>
                  <div className="mt-auto">
                    <Link to="https://github.com/giovgio90/S6-L5-Progetto-Settimanale">
                      <Button className="button-card" variant="primary" style={{ fontFamily: "Kanit, sans-serif" }}>
                        {t("Watch it on GitHub")}
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            )}
          </Col>
          <Col xs={12} md={6} lg={6}>
            {isLoading ? (
              <Loading />
            ) : (
              <Card className="image-portfolio card-portfolio mb-4">
                <Card.Img variant="top" src={Medium} />
                <Card.Body className="text-white d-flex flex-column">
                  <div className="my-auto">
                    <Card.Title style={{ fontFamily: "Kanit, sans-serif" }}>Medium Clone</Card.Title>
                    <Card.Text className="mb-0" style={{ fontFamily: "Raleway, sans-serif" }}>
                      {t(
                        "I developed a clone of Medium faithful in interface, integrating similar functionality to the original for the navbar."
                      )}
                    </Card.Text>
                  </div>
                  <div className="mt-auto">
                    <Link to="https://github.com/giovgio90/S5-L5-Progetto-settimanale">
                      <Button className="button-card" variant="primary" style={{ fontFamily: "Kanit, sans-serif" }}>
                        {t("Watch it on GitHub")}
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
