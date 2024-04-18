import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import { Animate } from "react-simple-animate";

import { personalData } from "./utils";
import "./styles.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-800px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            {/* <h3 className="developerContent">Front end developer</h3> */}
            <p>
              Hello there! I'm Siddharth Sheokand, a second-year Computer
              Science enthusiast with an insatiable curiosity for technology. My
              journey in the field is driven by a passion to contribute
              meaningfully and embrace continuous learning and personal growth.
              As I navigate through my second year, I am fueled by the
              excitement of exploring diverse facets of Computer Science. My
              relentless curiosity and commitment to staying at the forefront of
              technological progress propel me towards cutting-edge domains,
              including artificial intelligence, data science, and web
              development. This journey ignites my eagerness to dive deeper into
              these areas, with the ultimate goal of applying my knowledge to
              create innovative solutions. Join me as I embark on this
              exhilarating adventure, leveraging my skills and enthusiasm to
              make a positive impact on the ever-evolving landscape of
              technology.
            </p>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalContent">Personal Information</h3>
            <ul>
              {personalData.map((item, key) => (
                <li key={key}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <DiApple size={60} color="var(--selected-theme-main-color)" />
              </div>
              <div>
                <FaDatabase
                  size={60}
                  color="var(--selected-theme-main-color)"
                />
              </div>
              <div>
                <DiAndroid size={60} color="var(--selected-theme-main-color)" />
              </div>
              <div>
                <FaDev size={60} color="var(--selected-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
