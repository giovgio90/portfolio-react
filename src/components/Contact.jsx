import GitHub from "../assets/github.png";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Row className=" my-5">
          <Col xs={12} lg={5} className="text-white text-start">
            <h4 className="mb-0" style={{ fontFamily: "Kanit, sans-serif", fontSize: "1.3rem" }}>
              CONTACT ME
            </h4>
            <p style={{ fontFamily: "Raleway, sans-serif" }}>
              If you are interested in collaboration, have questions, or would like to discuss job opportunities, please
              feel free to contact me!
            </p>
            <h5 className="mt-5">
              <svg
                className="mb-1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="36"
                height="36"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0288D1"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                ></path>
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                ></path>
              </svg>
              <Link
                style={{ fontSize: "1.3rem", color: "white" }}
                to="https://www.linkedin.com/in/giovannigiordanowebdeveloper/"
              >
                <strong style={{ fontFamily: "Raleway, sans-serif" }}>LinkedIn</strong> <br />{" "}
              </Link>
            </h5>
            <div>
              <h5 className="mt-3">
                <img src={GitHub} alt="Logo GitHub" width="28" className="mb-1 ms-1  me-1" />
                <Link style={{ fontSize: "1.3rem", color: "white" }} to="https://github.com/giovgio90">
                  <strong style={{ fontFamily: "Raleway, sans-serif" }}>GitHub</strong>{" "}
                </Link>{" "}
                <br />{" "}
              </h5>
            </div>
            <h5 className="mt-3">
              <svg
                className="mb-1  me-1"
                style={{ marginLeft: "5px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-envelope-arrow-up-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697Zm.192 8.159 6.57-4.027L8 9.586l1.239-.757.367.225A4.49 4.49 0 0 0 8 12.5c0 .526.09 1.03.256 1.5H2a2 2 0 0 1-1.808-1.144ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z" />
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016Z" />
              </svg>
              <strong className="ms-1" style={{ fontFamily: "Raleway, sans-serif" }}>
                Email:
              </strong>{" "}
              <br /> giovdevelop90@gmail.com
            </h5>
          </Col>
          <Col xs={12} lg={6} className="ms-auto mt-5 mt-lg-0">
            <div className="text-white text-start">
              <h5 style={{ fontFamily: "Raleway, sans-serif" }}>
                Or send me a message and I will get back to you as soon as possible
              </h5>
              <div className="form">
                <Form action="https://formspree.io/f/xrgwvgvk" method="POST" className="text-start">
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label
                      className="mb-0"
                      style={{ fontFamily: "Kanit, sans-serif", fontSize: "0.9rem", fontWeight: "500" }}
                    >
                      NAME
                    </Form.Label>
                    <Form.Control
                      style={{ fontFamily: "Raleway, sans-serif" }}
                      type="text"
                      name="name"
                      placeholder="Insert your name"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label
                      className="mb-0"
                      style={{ fontFamily: "Kanit, sans-serif", fontSize: "0.9rem", fontWeight: "500" }}
                    >
                      EMAIL
                    </Form.Label>
                    <Form.Control
                      style={{ fontFamily: "Raleway, sans-serif" }}
                      type="email"
                      name="email"
                      placeholder="Insert your email"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formMessage">
                    <Form.Label
                      className="mb-0"
                      style={{ fontFamily: "Kanit, sans-serif", fontSize: "0.9rem", fontWeight: "500" }}
                    >
                      MESSAGE
                    </Form.Label>
                    <Form.Control
                      style={{ fontFamily: "Raleway, sans-serif" }}
                      as="textarea"
                      name="message"
                      placeholder="Insert your message"
                      required
                    />
                  </Form.Group>
                  <div className="text-center">
                    <Button
                      style={{ fontFamily: "Kanit, sans-serif", fontSize: "1rem" }}
                      variant="primary"
                      type="submit"
                      className="button-form"
                    >
                      SEND
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
