import React from "react";
import { Animate } from "react-simple-animate";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./styles.scss";
import MyPdf from "../../resume/Siddharth Resume.pdf";

const Home = () => {
  function handleNavigateLinkedin() {
    window.open(
      "https://www.linkedin.com/in/siddharth-sheokand-02153b288/",
      "_blank"
    );
  }
  function handleNavigateGithub() {
    window.open("https://github.com/Siddharth0706", "_blank");
  }

  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Siddharth Sheokand
          <br />
          Front End Developer.
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(600px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="contact-me">
          <div className="contact-me__buttons-wrapper">
            <a href={MyPdf} download="Siddharth Resume.pdf">
              Download resume
            </a>
          </div>
          <div className="contact-me__socials-wrapper">
            <FaLinkedin onClick={handleNavigateLinkedin} size={32} />
            <FaGithub onClick={handleNavigateGithub} size={32} />
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
