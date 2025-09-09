import React from "react";
import "./Hero.css";
import Profile from "../../assets/Profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id='home' className="hero">
      <img src={Profile} alt="" />
      <h1>
        <span>I'm Ashish Jha,</span> Full Stack Developer based in India.
      </h1>
      <p>
        Passionate Full-Stack Web Developer with hands-on experience in building scalable MERN stack applications. Enthusiastic about AI and DevOps, with a strong foundation in Data Structures, Algorithms, and problem-solving.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;