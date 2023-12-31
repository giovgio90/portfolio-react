import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="footer-sec mt-auto">
        <Container className="my-3">
          <Row>
            <Col>
              <div className="text-start text-white">
                <h6 style={{ fontFamily: "Kanit, sans-serif" }}>{t("CONTACT")}</h6>
                <p className="mb-1" style={{ fontSize: "0.8rem" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-envelope-arrow-up"
                    viewBox="0 0 16 16"
                    style={{ marginBottom: "2px" }}
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99V4Zm1 7.105 4.708-2.897L1 5.383v5.722ZM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1Z" />
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016Z" />
                  </svg>
                  <strong className="ms-1">Email: </strong>giovdevelop90@gmail.com
                </p>
                <div className="d-flex">
                  <p className="mb-1 me-5" style={{ fontSize: "0.8rem" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                      style={{ marginBottom: "2px" }}
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                    <Link
                      to="https://www.linkedin.com/in/giovannigiordanowebdeveloper/"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      <strong className="ms-1">Linkedin </strong>
                    </Link>
                  </p>

                  <p className="mb-1" style={{ fontSize: "0.8rem" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-github"
                      viewBox="0 0 16 16"
                      style={{ marginBottom: "2px" }}
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <Link to="https://www.github.com/giovgio90" style={{ color: "white", textDecoration: "none" }}>
                      <strong className="ms-1">GitHub </strong>
                    </Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="mt-4 mt-lg-2" style={{ fontFamily: "Caveat, cursive", fontSize: "1.4rem" }}>
                <p className="text-white">
                  {" "}
                  <span style={{ color: "#D4FF00" }}>" </span>
                  {t(
                    "Every line of code is an opportunity, a digital brush for painting interactive worlds and transform the ordinary into the extraordinary."
                  )}
                  <span style={{ color: "#D4FF00" }}> "</span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <div
          className="footer-copyright  "
          style={{ color: "#040e20", fontSize: "0.8rem", fontFamily: "Kanit, sans-serif" }}
        >
          COPYRIGHT © GIOVANNI GIORDANO, 2023
        </div>
      </div>
    </>
  );
};

export default Footer;
