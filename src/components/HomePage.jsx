import { Card, Col, Container, Row } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container>
      <Row className="m-0">
        <Col className="text-start">
          <h1 className="display-1 fw-bold text-white mb-0">Welcome</h1>
          <h1 className="display-1 fw-bold text-white mb-0">to my</h1>
          <h1 className="display-1 fw-bold mb-0" style={{ color: "#D4FF00" }}>
            Profile
          </h1>
        </Col>
        <Col>
          <Card></Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
