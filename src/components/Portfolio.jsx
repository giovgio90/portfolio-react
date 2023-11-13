import TravelStay from "../assets/TravelStay.png";
import WeatherApp from "../assets/WeatherApp.png";
import NetFlix from "../assets/NetFlix-Clone.png";
import Medium from "../assets/MediumClone.png";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "./Navigation";

const Portfolio = () => {
  return (
    <>
      <Navigation />
      <Container className="mt-4">
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Card className="card-portfolio mb-4">
              <Card.Img variant="top" src={TravelStay} />
              <Card.Body className="text-white d-flex flex-column">
                <div className="my-auto">
                  <Card.Title>TravelStay</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </div>
                <div className="mt-auto">
                  <Button className="button-card" variant="primary">
                    Watch it on GitHub
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Card className="card-portfolio mb-4">
              <Card.Img variant="top" src={WeatherApp} />
              <Card.Body className="text-white d-flex flex-column">
                <div className="my-auto">
                  <Card.Title>Weather app</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </div>
                <div>
                  <Button className="button-card" variant="primary">
                    Watch it on GitHub
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Card className="card-portfolio mb-4">
              <Card.Img variant="top" src={NetFlix} />
              <Card.Body className="text-white d-flex flex-column">
                <div className="my-auto">
                  <Card.Title>NetFlix Clone</Card.Title>
                  <Card.Text className="mb-0">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </div>
                <div className="mt-auto">
                  <Button className="button-card" variant="primary">
                    Watch it on GitHub
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Card className="card-portfolio mb-4">
              <Card.Img variant="top" src={Medium} />
              <Card.Body className="text-white d-flex flex-column">
                <div className="my-auto">
                  <Card.Title>Medium Clone</Card.Title>
                  <Card.Text className="mb-0">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </div>
                <div className="mt-auto">
                  <Button className="button-card" variant="primary">
                    Watch it on GitHub
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
