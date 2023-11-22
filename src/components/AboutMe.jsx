import { Container } from "react-bootstrap";
import Navigation from "./Navigation";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navigation />
      <Container className="mb-0">
        <div className="my-5 text-start text-white" style={{ fontFamily: "Raleway, sans-serif" }}>
          <h2 style={{ fontFamily: "Kanit, sans-serif" }}>{t("Who is Giovanni Giordano")}</h2>
          <h5 className="mb-3">
            {t("Hello! I'm a passionate Front-End Developer successfully completing the course at EPICODE,")}{" "}
            {t("where I've gained advanced skills in the world of web development.")}{" "}
            {t("My passion for aesthetically pleasing and functional design has driven me to delve deeper")}{" "}
            {t("into my abilities in HTML, CSS, and JavaScript, transforming ideas into")}{" "}
            {t("incredible digital experiences.")}
          </h5>
          <h5 className="mb-3">
            {t(
              "My educational journey has allowed me to dive into the intricacies of Front-End development, exploring the"
            )}{" "}
            {t(
              "creation of engaging and optimized user interfaces. I've solidified my knowledge in using the Bootstrap"
            )}{" "}
            {t(
              "framework and React library, harnessing their potential to develop responsive and interactive interfaces."
            )}
          </h5>
          <h5 className="mb-3">
            {t("Throughout the course, I've had the opportunity to work on complex projects, honing my skills in")}{" "}
            {t(
              "problem-solving and adapting to various challenges. Collaborating with other development enthusiasts has"
            )}{" "}
            {t("helped me understand the importance of communication and synergy within a team.")}
          </h5>
          <h5 className="mb-3">
            {t("I'm constantly seeking new opportunities to apply and deepen my skills, continuing to grow both")}{" "}
            {t("professionally and personally in the vast world of front-end development.")}
          </h5>
          <h5>{t("Thank you for taking the time to get to know a bit about me!")}</h5>
        </div>
      </Container>
    </>
  );
};

export default AboutMe;
