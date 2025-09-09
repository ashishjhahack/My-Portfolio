import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Profile from "../../assets/Profile.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate Full-Stack Web Developer with hands-on experience in building scalable MERN stack applications. Enthusiastic about AI, Cloud, and DevOps, with a strong foundation in Data Structures, Algorithms, and problem-solving. 
            </p>
            <p>
              My passion for full stack development is not only reflected in my extensive experience, but also in the enthisiasm and dedication i bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <h4>Skills</h4>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>TailwindCSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>NodeJs</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Express</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Docker</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>Kubernetes</p>
              <hr style={{ width: "50%" }} />
            </div>
              </div>
        </div>
      </div>

    </div>
  );
};

export default About;