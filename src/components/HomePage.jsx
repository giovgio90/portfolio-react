import Photo from "../assets/photo.jpeg";
import { motion } from "framer-motion";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import LoadingTwo from "./LoadingTwo";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);
  const apriPDF = () => {
    window.open(`${process.env.PUBLIC_URL}/../assets/curriculum.pdf`);
  };

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <Navigation />
      <Container className="mb-5">
        <Row className="mt-3">
          <Col lg={5} className="text-start">
            <motion.h1
              className="homepage-title display-1 fw-bold text-white mb-0"
              style={{ fontSize: "7rem" }}
              initial="hidden"
              animate="visible"
              variants={container}
            >
              <motion.span
                className="homepage-title"
                variants={wordAnimation}
                style={{ fontSize: t("Welcome") === "Benvenuti" ? "5.8rem" : "" }}
              >
                {t("Welcome")}
              </motion.span>{" "}
              <motion.span
                className="homepage-title"
                variants={wordAnimation}
                style={{ fontSize: t("to") === "nel" ? "6rem" : "" }}
              >
                {t("to")}
              </motion.span>{" "}
              <motion.span
                className="homepage-title"
                variants={wordAnimation}
                style={{ fontSize: t("my") === "mio" ? "6rem" : "" }}
              >
                {t("my")}
              </motion.span>{" "}
              <motion.span
                className="homepage-title"
                style={{ color: "#D4FF00", fontSize: t("Profile.") === "Profilo." ? "6rem" : "" }}
                variants={wordAnimation}
              >
                {t("Profile.")}
              </motion.span>
            </motion.h1>
          </Col>
          <Col lg={7}>
            <div className="w-lg-100 mb-3">
              <Row>
                {isLoading ? (
                  <LoadingTwo />
                ) : (
                  <Col xs={12} md={6} lg={6}>
                    <Card.Img
                      className="rounded-2  mt-4"
                      style={{ border: "2px solid #D4FF00" }}
                      variant="top"
                      src={Photo}
                    />
                  </Col>
                )}
                <Col xs={12} md={6} lg={6}>
                  <div className="my-lg-5">
                    <div className="title mt-3 mt-md-4 mt-lg-0">
                      <h4 className="mb-0 " style={{ color: "#D4FF00", fontFamily: "Kanit, sans-serif" }}>
                        Front End Developer
                      </h4>
                    </div>
                    <div className="text mt-4">
                      <h4 className="mb-0 pb-3 " style={{ color: "white", fontFamily: "Kanit, sans-serif" }}>
                        Hard Skills
                      </h4>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="40"
                        height="40"
                        viewBox="0 0 48 48"
                      >
                        <linearGradient
                          id="SNASnMitCxQrIYk4GDibta_v8RpPQUwv0N8_gr1"
                          x1="18.208"
                          x2="34.159"
                          y1="2.413"
                          y2="46.236"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#f09701"></stop>
                          <stop offset="1" stop-color="#e36001"></stop>
                        </linearGradient>
                        <path
                          fill="url(#SNASnMitCxQrIYk4GDibta_v8RpPQUwv0N8_gr1)"
                          d="M7.192,7.176l2.627,29.77c0.109,1.237,0.97,2.28,2.164,2.621l10.643,3.041	c0.898,0.257,1.849,0.257,2.747,0l10.643-3.041c1.194-0.341,2.055-1.383,2.164-2.621l2.627-29.77C40.911,6.006,39.99,5,38.816,5	H9.184C8.01,5,7.089,6.006,7.192,7.176z"
                        ></path>
                        <path
                          fill="#f09601"
                          d="M24,8v31.9l9.876-2.822c0.797-0.228,1.371-0.924,1.443-1.749l2.286-26.242	C37.656,8.502,37.196,8,36.609,8H24z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5L24,25z M32.9,17l0.3-4H24v4H32.9z"
                        ></path>
                        <path
                          fill="#d6e0e9"
                          d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                        ></path>
                        <path
                          d="M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4 l-0.7-12H24H33.2 M34.278,12H33.2H24h-9.1h-1.06l0.062,1.058l0.7,12L14.657,26h-0.032l0.078,1.073l0.4,5.5l0.049,0.668 l0.636,0.209l7.9,2.6L24,36.153l0.313-0.103l7.9-2.6l0.644-0.212l0.041-0.677l0.7-11.5L33.663,20H32.6H24h-3.672l-0.15-2H24h8.9 h0.928l0.069-0.925l0.3-4L34.278,12L34.278,12z M20.623,26H24h3.331l-0.185,2.769L24,29.843l-3.156-1.077l-0.148-1.846L20.623,26 L20.623,26z"
                          opacity=".05"
                        ></path>
                        <path
                          d="M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4 l-0.7-12H24H33.2 M33.739,12.5H33.2H24h-9.1h-0.53l0.031,0.529l0.7,12l0.027,0.471H15.6H24h3.866l-0.242,3.634L24,30.372 l-3.628-1.239l-0.174-2.173l-0.037-0.46H19.7h-4h-0.538l0.039,0.536l0.4,5.5l0.024,0.334l0.318,0.105l7.9,2.6L24,35.626 l0.156-0.051l7.9-2.6l0.322-0.106l0.021-0.339l0.7-11.5l0.032-0.53H32.6H24h-4.136l-0.225-3H24h8.9h0.464l0.035-0.463l0.3-4 L33.739,12.5L33.739,12.5z"
                          opacity=".07"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="40"
                        height="40"
                        viewBox="0 0 48 48"
                      >
                        <linearGradient
                          id="TQDriqswrKwPOniLrPT12a_7gdY5qNXaKC0_gr1"
                          x1="16.33"
                          x2="32.293"
                          y1="-2.748"
                          y2="41.109"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#2aa4f4"></stop>
                          <stop offset="1" stop-color="#007ad9"></stop>
                        </linearGradient>
                        <path
                          fill="url(#TQDriqswrKwPOniLrPT12a_7gdY5qNXaKC0_gr1)"
                          d="M7.192,7.176l2.627,29.77c0.109,1.237,0.97,2.28,2.164,2.621l10.643,3.041	c0.898,0.257,1.849,0.257,2.747,0l10.643-3.041c1.194-0.341,2.055-1.383,2.164-2.621l2.627-29.77C40.911,6.006,39.99,5,38.816,5	H9.184C8.01,5,7.089,6.006,7.192,7.176z"
                        ></path>
                        <path
                          fill="#35c1f1"
                          d="M24,8v31.9l9.876-2.822c0.797-0.228,1.371-0.924,1.443-1.749l2.286-26.242	C37.656,8.502,37.196,8,36.609,8H24z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M33.1,13H24v4h4.9l-0.3,4H24v4h4.4l-0.3,4.5L24,30.9v4.2l7.9-2.6L32.6,21l0,0L33.1,13z"
                        ></path>
                        <path
                          fill="#d6e0e9"
                          d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4	L19.8,27z"
                        ></path>
                        <path
                          d="M33.1,13l-0.5,8l-0.7,11.5L24,35.1l-7.9-2.6L15.8,27h4l0.1,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-4.4l-0.2-4H24h4.6l0.3-4H24 h-8.9l-0.3-4H24H33.1 M34.164,12H33.1H24h-9.2h-1.078l0.081,1.075l0.3,4L14.172,18H15.1H24h3.822l-0.15,2H24h-4.6h-1.051 l0.052,1.05l0.2,4L18.649,26H15.8h-1.056l0.058,1.054l0.3,5.5l0.037,0.682l0.649,0.214l7.9,2.6L24,36.153l0.313-0.103l7.9-2.6 l0.644-0.212l0.041-0.677l0.7-11.5l0.5-7.998L34.164,12L34.164,12z M20.761,26H24h3.331l-0.185,2.769L24,29.843l-3.128-1.068 l-0.073-1.815L20.761,26L20.761,26z"
                          opacity=".05"
                        ></path>
                        <path
                          d="M33.1,13l-0.5,8l-0.7,11.5L24,35.1l-7.9-2.6L15.8,27h4l0.1,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-4.4l-0.2-4H24h4.6l0.3-4H24 h-8.9l-0.3-4H24H33.1 M33.632,12.5H33.1H24h-9.2h-0.539l0.04,0.537l0.3,4l0.035,0.463H15.1H24h4.361l-0.225,3H24h-4.6h-0.526 l0.026,0.525l0.2,4l0.024,0.475H19.6H24h3.866l-0.242,3.634L24,30.372l-3.614-1.234L20.3,26.98L20.28,26.5H19.8h-4h-0.528 l0.029,0.527l0.3,5.5l0.019,0.341l0.324,0.107l7.9,2.6L24,35.626l0.156-0.051l7.9-2.6l0.322-0.106l0.021-0.339l0.7-11.5l0.5-7.999 L33.632,12.5L33.632,12.5z"
                          opacity=".07"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="40"
                        height="40"
                        viewBox="0 0 48 48"
                      >
                        <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path>
                        <path
                          fill="#000001"
                          d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"
                        ></path>
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="40"
                        height="40"
                        viewBox="0 0 100 100"
                      >
                        <circle cx="50" cy="50" r="7" fill="#39c1d7"></circle>
                        <path
                          fill="#1f212b"
                          d="M50,58c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S54.411,58,50,58z M50,44c-3.309,0-6,2.691-6,6	s2.691,6,6,6s6-2.691,6-6S53.309,44,50,44z"
                        ></path>
                        <path
                          fill="#39c1d7"
                          d="M88.5,50c0-5.376-6.474-10.029-16.518-12.798c2.582-10.096,1.787-18.035-2.827-20.729	c-1.82-1.063-4.028-1.257-6.562-0.579C58.775,16.916,54.4,19.904,50,24.293c-4.4-4.389-8.775-7.376-12.593-8.399	c-2.534-0.679-4.742-0.484-6.562,0.579c-4.614,2.694-5.409,10.632-2.827,20.729C17.974,39.971,11.5,44.624,11.5,50	s6.474,10.029,16.518,12.799c-2.582,10.096-1.787,18.035,2.827,20.729c1.112,0.649,2.368,0.976,3.756,0.975	c0.883,0,1.82-0.132,2.806-0.396c3.818-1.023,8.193-4.01,12.593-8.399c4.4,4.389,8.775,7.376,12.593,8.399	c0.986,0.264,1.923,0.396,2.806,0.396c1.388,0,2.644-0.325,3.756-0.975c4.614-2.694,5.408-10.633,2.827-20.729	C82.026,60.029,88.5,55.376,88.5,50z M63.369,18.791c0.725-0.193,1.397-0.291,2.016-0.291c0.86,0,1.616,0.188,2.257,0.563	c3.092,1.806,3.723,8.42,1.42,17.411c-3.173-0.714-6.635-1.251-10.314-1.583c-2.159-3.113-4.405-5.947-6.668-8.429	C56.098,22.435,60.04,19.683,63.369,18.791z M60.755,56.299c-1.179,2.066-2.42,4.045-3.693,5.939C54.802,62.407,52.446,62.5,50,62.5	s-4.802-0.093-7.061-0.262c-1.273-1.894-2.514-3.873-3.693-5.939c-1.219-2.136-2.313-4.24-3.293-6.298	c0.98-2.058,2.074-4.162,3.293-6.299c1.18-2.067,2.42-4.046,3.694-5.94C45.199,37.593,47.554,37.5,50,37.5s4.801,0.093,7.061,0.262	c1.273,1.894,2.514,3.874,3.694,5.94c1.219,2.136,2.313,4.24,3.293,6.299C63.068,52.059,61.974,54.163,60.755,56.299z M65.644,53.545c1.041,2.461,1.901,4.83,2.597,7.082c-2.275,0.507-4.731,0.93-7.354,1.243c0.842-1.326,1.672-2.682,2.473-4.085	C64.171,56.366,64.928,54.951,65.644,53.545z M50,71.357c-1.636-1.809-3.269-3.812-4.864-5.979C46.728,65.455,48.348,65.5,50,65.5	s3.272-0.045,4.864-0.122C53.269,67.544,51.636,69.547,50,71.357z M39.112,61.87c-2.622-0.313-5.079-0.736-7.354-1.243	c0.696-2.252,1.556-4.622,2.597-7.082c0.716,1.406,1.474,2.821,2.284,4.24C37.441,59.189,38.27,60.545,39.112,61.87z M34.356,46.456	c-1.041-2.461-1.902-4.831-2.597-7.084c2.275-0.507,4.732-0.93,7.355-1.243c-0.843,1.326-1.672,2.683-2.473,4.086	C35.829,43.635,35.072,45.05,34.356,46.456z M50,28.644c1.636,1.809,3.269,3.812,4.864,5.979C53.272,34.545,51.652,34.5,50,34.5	s-3.272,0.045-4.864,0.122C46.731,32.456,48.364,30.453,50,28.644z M63.36,42.216c-0.801-1.404-1.631-2.76-2.473-4.086	c2.623,0.313,5.079,0.736,7.355,1.243c-0.696,2.253-1.556,4.622-2.597,7.084C64.928,45.05,64.171,43.635,63.36,42.216z M32.358,19.063C33,18.688,33.754,18.5,34.615,18.5c0.618,0,1.292,0.098,2.016,0.291c3.329,0.892,7.271,3.643,11.289,7.67	c-2.263,2.482-4.509,5.317-6.668,8.429c-3.679,0.332-7.142,0.869-10.314,1.583C28.635,27.482,29.266,20.868,32.358,19.063z M14.5,50	c0-3.596,5.401-7.44,14.335-9.901c0.969,3.159,2.241,6.486,3.806,9.901c-1.565,3.415-2.837,6.742-3.806,9.901	C19.901,57.44,14.5,53.596,14.5,50z M36.631,81.209c-1.733,0.462-3.17,0.371-4.273-0.271c-3.092-1.806-3.722-8.42-1.42-17.411	c3.172,0.714,6.635,1.251,10.313,1.583c2.159,3.113,4.405,5.947,6.668,8.43C43.902,77.566,39.96,80.317,36.631,81.209z M67.642,80.938c-1.103,0.644-2.539,0.734-4.273,0.271c-3.329-0.892-7.271-3.643-11.289-7.67c2.263-2.482,4.509-5.317,6.668-8.43	c3.679-0.332,7.141-0.869,10.313-1.583C71.365,72.518,70.734,79.132,67.642,80.938z M71.165,59.901	c-0.969-3.159-2.241-6.486-3.806-9.901c1.565-3.415,2.837-6.743,3.806-9.901C80.099,42.56,85.5,46.404,85.5,50	S80.099,57.44,71.165,59.901z"
                        ></path>
                        <path
                          fill="#1f212b"
                          d="M34.595,85.002c-1.471,0-2.817-0.351-4.001-1.043c-4.632-2.705-5.783-10.276-3.178-20.811	C16.975,60.179,11,55.4,11,50s5.975-10.179,16.415-13.148c-2.604-10.535-1.453-18.106,3.179-20.811	c1.938-1.134,4.273-1.346,6.943-0.63c3.718,0.996,8.02,3.82,12.463,8.179c4.444-4.359,8.746-7.183,12.463-8.179	c2.669-0.714,5.005-0.502,6.944,0.63c4.631,2.705,5.782,10.276,3.178,20.811C83.025,39.821,89,44.6,89,50	s-5.975,10.179-16.415,13.148c2.604,10.535,1.454,18.105-3.178,20.811c-1.927,1.125-4.286,1.342-6.943,0.63	c-3.719-0.996-8.021-3.82-12.464-8.178c-4.443,4.358-8.745,7.183-12.463,8.178c-1.023,0.274-2.011,0.413-2.936,0.413	C34.599,85.002,34.597,85.002,34.595,85.002z M34.604,15.999c-1.301,0-2.474,0.302-3.507,0.906	c-4.224,2.467-5.194,10.008-2.595,20.173c0.067,0.264-0.089,0.534-0.352,0.606C18.038,40.472,12,45.077,12,50	s6.038,9.528,16.151,12.316c0.263,0.072,0.419,0.342,0.352,0.606c-2.6,10.165-1.63,17.707,2.594,20.173	c1.03,0.601,2.207,0.906,3.498,0.906c0.002,0,0.004,0,0.006,0c0.838,0,1.738-0.127,2.677-0.378c3.647-0.977,7.925-3.836,12.369-8.27	c0.195-0.194,0.511-0.194,0.706,0c4.444,4.433,8.722,7.292,12.369,8.27c2.394,0.639,4.485,0.461,6.181-0.528	c4.224-2.467,5.194-10.008,2.594-20.173c-0.067-0.264,0.089-0.534,0.352-0.606C81.962,59.528,88,54.923,88,50	s-6.038-9.528-16.151-12.316c-0.263-0.072-0.419-0.342-0.352-0.606c2.599-10.165,1.629-17.707-2.595-20.173	c-1.699-0.993-3.779-1.17-6.181-0.528c-3.647,0.977-7.924,3.836-12.369,8.27c-0.195,0.194-0.511,0.194-0.706,0	c-4.445-4.434-8.722-7.293-12.369-8.27C36.336,16.125,35.444,15.999,34.604,15.999z M65.386,81.999	c-0.663,0-1.379-0.102-2.146-0.307c-3.331-0.893-7.312-3.589-11.514-7.8c-0.188-0.189-0.195-0.493-0.016-0.69	c2.265-2.484,4.494-5.303,6.627-8.378c0.084-0.122,0.218-0.2,0.366-0.213c3.612-0.326,7.06-0.855,10.249-1.573	c0.261-0.059,0.527,0.101,0.594,0.364c2.336,9.123,1.703,16.008-1.652,17.967l0,0C67.175,81.789,66.336,81.999,65.386,81.999z M52.771,73.521c3.951,3.894,7.653,6.381,10.727,7.205c1.599,0.427,2.909,0.353,3.892-0.22l0,0	c2.855-1.668,3.357-8.073,1.306-16.387c-3.028,0.659-6.277,1.152-9.67,1.467C57.01,68.478,54.908,71.144,52.771,73.521z M34.614,81.999c-0.95,0-1.789-0.21-2.508-0.629c-3.355-1.96-3.989-8.845-1.652-17.968c0.067-0.262,0.333-0.419,0.594-0.364	c3.188,0.718,6.636,1.247,10.249,1.573c0.147,0.013,0.282,0.091,0.366,0.213c2.133,3.075,4.362,5.894,6.627,8.378	c0.18,0.197,0.173,0.501-0.016,0.69c-4.202,4.21-8.183,6.907-11.513,7.8h0C35.993,81.896,35.276,81.999,34.614,81.999z M31.304,64.119c-2.051,8.313-1.549,14.719,1.306,16.387c0.982,0.572,2.292,0.647,3.892,0.22l0,0	c3.074-0.824,6.776-3.312,10.727-7.205c-2.136-2.377-4.238-5.043-6.254-7.935C37.582,65.271,34.332,64.778,31.304,64.119z M50,71.856c-0.141,0-0.276-0.06-0.371-0.165c-1.663-1.839-3.31-3.864-4.896-6.018c-0.114-0.155-0.129-0.363-0.038-0.533	c0.091-0.17,0.261-0.274,0.465-0.263c3.306,0.161,6.374,0.161,9.68,0c0.2-0.012,0.374,0.093,0.465,0.263	c0.091,0.17,0.077,0.377-0.038,0.533c-1.586,2.153-3.233,4.178-4.896,6.018C50.276,71.796,50.141,71.856,50,71.856z M46.167,65.924	c1.251,1.655,2.537,3.226,3.833,4.684c1.297-1.458,2.582-3.028,3.833-4.684C51.221,66.024,48.779,66.024,46.167,65.924z M50,63	c-2.369,0-4.757-0.088-7.099-0.263c-0.153-0.011-0.292-0.092-0.378-0.22c-1.337-1.989-2.586-3.998-3.712-5.97	c-1.18-2.068-2.294-4.198-3.31-6.332c-0.065-0.136-0.065-0.294,0-0.43c1.016-2.134,2.13-4.264,3.31-6.332	c1.125-1.97,2.374-3.979,3.713-5.971c0.085-0.127,0.225-0.208,0.378-0.22c4.684-0.35,9.513-0.35,14.196,0	c0.153,0.011,0.292,0.092,0.378,0.22c1.339,1.992,2.588,4.001,3.713,5.971c1.18,2.068,2.294,4.198,3.31,6.332	c0.065,0.136,0.065,0.294,0,0.43c-1.016,2.134-2.13,4.264-3.31,6.332l0,0c-1.126,1.972-2.375,3.981-3.712,5.97	c-0.085,0.127-0.225,0.208-0.378,0.22C54.757,62.912,52.369,63,50,63z M43.218,61.757c4.479,0.322,9.085,0.322,13.563,0	c1.273-1.903,2.463-3.822,3.539-5.707c1.128-1.977,2.195-4.011,3.173-6.05c-0.978-2.039-2.045-4.074-3.173-6.05	c-1.075-1.883-2.265-3.802-3.54-5.708c-4.479-0.322-9.084-0.322-13.563,0c-1.274,1.906-2.465,3.825-3.54,5.708	c-1.128,1.977-2.195,4.011-3.173,6.05c0.978,2.039,2.045,4.074,3.173,6.05C40.755,57.936,41.945,59.854,43.218,61.757z M60.888,62.371c-0.17,0-0.331-0.087-0.423-0.233c-0.103-0.164-0.102-0.372,0.001-0.535c0.928-1.461,1.733-2.791,2.46-4.065	c0.764-1.338,1.528-2.758,2.273-4.219c0.088-0.173,0.273-0.276,0.463-0.272c0.194,0.007,0.367,0.125,0.443,0.305	c1.015,2.399,1.894,4.798,2.614,7.129c0.042,0.133,0.025,0.278-0.045,0.398c-0.07,0.121-0.188,0.207-0.324,0.237	c-2.35,0.525-4.841,0.946-7.403,1.252C60.927,62.37,60.907,62.371,60.888,62.371z M65.596,54.731	c-0.594,1.138-1.198,2.245-1.801,3.302c-0.583,1.022-1.216,2.079-1.92,3.209c1.97-0.262,3.89-0.593,5.727-0.987	C67.025,58.441,66.353,56.59,65.596,54.731z M39.112,62.371c-0.02,0-0.04-0.001-0.06-0.003C36.491,62.061,34,61.64,31.65,61.115	c-0.136-0.03-0.253-0.116-0.324-0.237c-0.07-0.121-0.086-0.265-0.045-0.398c0.72-2.332,1.599-4.73,2.614-7.129	c0.076-0.179,0.249-0.298,0.443-0.305c0.182-0.019,0.375,0.099,0.463,0.272c0.745,1.461,1.509,2.881,2.273,4.219	c0.728,1.274,1.533,2.604,2.46,4.065c0.104,0.163,0.104,0.371,0.001,0.535C39.443,62.284,39.283,62.371,39.112,62.371z M32.399,60.255c1.837,0.394,3.757,0.725,5.727,0.987c-0.705-1.13-1.337-2.187-1.92-3.209c-0.604-1.057-1.207-2.165-1.801-3.302	C33.647,56.59,32.975,58.441,32.399,60.255z M71.165,60.401c-0.215,0-0.412-0.139-0.478-0.354c-0.975-3.179-2.248-6.489-3.782-9.838	c-0.061-0.132-0.061-0.285,0-0.417c1.534-3.349,2.807-6.66,3.783-9.84c0.08-0.259,0.354-0.404,0.611-0.335	C80.367,42.116,86,46.094,86,50s-5.634,7.884-14.703,10.383C71.253,60.395,71.208,60.401,71.165,60.401z M67.909,50	c1.436,3.155,2.643,6.277,3.589,9.288C79.717,56.945,85,53.322,85,50s-5.283-6.945-13.502-9.288	C70.551,43.724,69.344,46.846,67.909,50z M28.835,60.401c-0.044,0-0.088-0.006-0.133-0.018C19.634,57.884,14,53.906,14,50	s5.633-7.884,14.702-10.383c0.258-0.069,0.531,0.076,0.611,0.335c0.976,3.18,2.249,6.491,3.783,9.84	c0.061,0.132,0.061,0.284,0,0.417c-1.535,3.35-2.807,6.66-3.782,9.838C29.248,60.262,29.05,60.401,28.835,60.401z M28.502,40.712	C20.283,43.055,15,46.678,15,50s5.283,6.945,13.502,9.288c0.947-3.011,2.153-6.132,3.589-9.288	C30.656,46.846,29.449,43.724,28.502,40.712z M65.645,46.957c-0.188,0-0.36-0.105-0.446-0.273c-0.757-1.488-1.501-2.869-2.272-4.22	l0,0c-0.726-1.272-1.531-2.602-2.461-4.066c-0.104-0.163-0.104-0.371-0.001-0.535c0.103-0.163,0.287-0.253,0.483-0.23	c2.563,0.307,5.054,0.728,7.404,1.252c0.136,0.03,0.253,0.116,0.324,0.237c0.07,0.121,0.086,0.265,0.045,0.398	c-0.721,2.336-1.601,4.735-2.614,7.131c-0.076,0.179-0.249,0.298-0.443,0.305C65.656,46.957,65.65,46.957,65.645,46.957z M63.794,41.968c0.611,1.07,1.205,2.158,1.801,3.302c0.756-1.856,1.428-3.709,2.005-5.525c-1.837-0.394-3.757-0.725-5.728-0.987	C62.58,39.89,63.212,40.947,63.794,41.968L63.794,41.968z M34.355,46.957c-0.006,0-0.012,0-0.018,0	c-0.194-0.007-0.367-0.125-0.443-0.305c-1.013-2.396-1.893-4.795-2.614-7.131c-0.042-0.133-0.025-0.278,0.045-0.398	c0.07-0.121,0.188-0.207,0.324-0.237c2.35-0.525,4.841-0.946,7.404-1.252c0.195-0.02,0.38,0.067,0.483,0.23	c0.103,0.164,0.102,0.372-0.001,0.535c-0.93,1.464-1.735,2.794-2.461,4.066c-0.771,1.351-1.515,2.731-2.272,4.22	C34.715,46.852,34.543,46.957,34.355,46.957z M32.399,39.745c0.577,1.816,1.25,3.669,2.005,5.525	c0.597-1.144,1.19-2.232,1.801-3.302c0.583-1.021,1.215-2.078,1.921-3.21C36.156,39.02,34.236,39.351,32.399,39.745z M69.063,36.974	c-0.037,0-0.073-0.004-0.11-0.012c-3.188-0.718-6.637-1.247-10.25-1.573c-0.147-0.013-0.282-0.091-0.366-0.213	c-2.133-3.076-4.363-5.894-6.627-8.377c-0.18-0.197-0.173-0.501,0.016-0.69c4.201-4.21,8.183-6.908,11.514-7.8h0	c1.869-0.5,3.438-0.387,4.654,0.322c3.355,1.96,3.989,8.845,1.653,17.968C69.489,36.823,69.287,36.974,69.063,36.974z M59.025,34.414c3.393,0.315,6.643,0.808,9.671,1.467c2.051-8.313,1.549-14.719-1.307-16.387c-0.979-0.571-2.291-0.646-3.891-0.22	c-3.074,0.824-6.777,3.312-10.728,7.206C54.907,28.855,57.009,31.521,59.025,34.414z M30.937,36.974	c-0.224,0-0.426-0.151-0.484-0.376c-2.336-9.123-1.703-16.007,1.652-17.967c0,0,0,0,0.001,0c1.216-0.709,2.787-0.822,4.653-0.322	c3.332,0.893,7.313,3.59,11.514,7.8c0.188,0.189,0.195,0.493,0.016,0.69c-2.264,2.483-4.494,5.302-6.627,8.377	c-0.084,0.122-0.218,0.2-0.366,0.213c-3.612,0.326-7.061,0.855-10.25,1.573C31.01,36.97,30.974,36.974,30.937,36.974z M32.61,19.494	c-2.855,1.668-3.357,8.074-1.307,16.387c3.028-0.659,6.278-1.152,9.671-1.467c2.017-2.893,4.118-5.559,6.254-7.935	c-3.951-3.894-7.653-6.382-10.728-7.206C34.907,18.848,33.593,18.922,32.61,19.494L32.61,19.494z M54.864,35.122	c-0.008,0-0.016,0-0.024,0c-3.306-0.161-6.373-0.161-9.679,0c-0.206,0.005-0.374-0.094-0.465-0.263	c-0.091-0.17-0.077-0.377,0.038-0.533c1.587-2.155,3.234-4.18,4.896-6.018c0.19-0.209,0.552-0.209,0.742,0	c1.661,1.837,3.308,3.862,4.896,6.018c0.114,0.155,0.129,0.363,0.038,0.533C55.217,35.021,55.047,35.122,54.864,35.122z M50,34	c1.242,0,2.527,0.026,3.833,0.077c-1.252-1.657-2.538-3.228-3.833-4.684c-1.295,1.457-2.581,3.027-3.833,4.684	C47.473,34.026,48.758,34,50,34z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="40"
                        height="40"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#7e57c2"
                          d="M23,4c-6.617,0-12,7.27-12,16.205c0,4.834,1.582,9.169,4.078,12.136C15.03,32.554,15,32.773,15,33	c0,1.657,1.343,3,3,3s3-1.343,3-3s-1.343-3-3-3c-0.315,0-0.612,0.062-0.897,0.152C15.206,27.731,14,24.175,14,20.205	C14,12.924,18.037,7,23,7c3.837,0,7.111,3.547,8.404,8.518c1.122,0.346,2.237,0.782,3.33,1.308C33.579,9.508,28.759,4,23,4z"
                        ></path>
                        <path
                          fill="#7e57c2"
                          d="M35.507,20.084c-3.947-2.392-8.374-3.442-12.182-2.959C22.775,16.444,21.943,16,21,16	c-1.657,0-3,1.343-3,3s1.343,3,3,3c1.272,0,2.353-0.795,2.789-1.912c3.118-0.379,6.812,0.531,10.163,2.563	c6.403,3.881,9.67,10.569,7.282,14.911c-0.827,1.504-2.286,2.572-4.218,3.09c-2.286,0.611-5.007,0.394-7.727-0.528	c-0.839,0.772-1.749,1.498-2.725,2.168c2.552,1.117,5.196,1.704,7.669,1.704c1.24,0,2.438-0.147,3.559-0.447	c2.741-0.733,4.841-2.304,6.071-4.542C47.016,33.276,43.267,24.787,35.507,20.084z"
                        ></path>
                        <path
                          fill="#7e57c2"
                          d="M35,28.992C35,27.34,33.657,26,32,26s-3,1.34-3,2.992c0,0.669,0.228,1.281,0.6,1.779	c-1.279,2.802-3.744,5.567-7.062,7.578c-3.865,2.344-8.185,3.202-11.555,2.302c-1.932-0.518-3.391-1.586-4.218-3.09	c-1.702-3.094-0.521-7.376,2.61-10.988c-0.323-1.144-0.562-2.34-0.706-3.575c-5.07,4.797-7.109,11.323-4.532,16.009	c1.23,2.238,3.33,3.809,6.071,4.542c1.121,0.3,2.318,0.447,3.559,0.447c3.346,0,7.007-1.068,10.326-3.08	c3.836-2.325,6.683-5.577,8.209-8.962C33.815,31.801,35,30.541,35,28.992z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="40"
                        height="40"
                        viewBox="0 0 48 48"
                      >
                        <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect>
                        <polygon
                          fill="#fff"
                          points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
                        ></polygon>
                        <path
                          fill="#fff"
                          d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
                        ></path>
                      </svg>
                    </div>
                    <div className="text mt-4">
                      <Button
                        className="button-cv"
                        style={{ color: "white", fontFamily: "Kanit, sans-serif" }}
                        onClick={apriPDF}
                      >
                        <h5 className="mb-0">{t("My Curriculum Vitae")}</h5>
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
