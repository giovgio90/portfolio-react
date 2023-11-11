import { Col, Container, Row } from "react-bootstrap";
import Navigation from "./Navigation";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <Container style={{ height: "80vh" }}>
        <Row className="mt-3">
          <Col lg={4} className="text-start">
            <h1 className="display-1 fw-bold text-white mb-0" style={{ fontSize: "7rem" }}>
              Welcome to my <span style={{ color: "#D4FF00" }}>Profile.</span>
            </h1>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
