import { Col, Spinner } from "react-bootstrap";

const LoadingTwo = () => {
  return (
    <Col xs={12} md={6} lg={6}>
      <div
        className="rounded-2  mt-4 d-flex align-items-center justify-content-center"
        style={{ border: "2px solid #D4FF00", minHeight: "363px", backgroundColor: "#041026" }}
        variant="top"
      >
        <Spinner animation="grow" variant="light" className="my-auto" />
      </div>
    </Col>
  );
};

export default LoadingTwo;
