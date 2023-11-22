import { Card, Placeholder, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <Card className="card-loading mb-4">
      <div className="placeholder-background rounded-top-2">
        <Spinner animation="grow" />
      </div>
      <Card.Body className="body-card rounded-bottom-2">
        <Placeholder as={Card.Title} animation="glow" className="text-white">
          <Placeholder xs={4} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow" className="text-white">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
          <Placeholder xs={8} />
        </Placeholder>
        <Placeholder.Button className="loading-button" variant="primary" xs={6} />
      </Card.Body>
    </Card>
  );
};

export default Loading;
