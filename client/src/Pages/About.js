import React from "react";
import mePic from "./../Pages/imgs/me.png";
import "./../App.css";

const About = () => {
  return (
    <>
      <div className="banner-image paraPort">
        <h1 className="banner-header">About</h1>
      </div>
      <div className="under-paraport">
        <div className="about-me">
          <img
            className="about-me-img"
            src={mePic}
            alt="this is me"
            style={{ width: "500px" }}
          />
          <p id="aboutMeText">
            Hey! Welcome to my site! My name is Lauren Hutchinson and after
            moving home to the SF Bay Area from spending a couple of years
            working as a Barrys Bootcamp fitness instructor in New York City, I
            decided to go back to school for coding. Currently, I train clients
            part-time, while full-time building new projects, learning new
            coding languages, and constantly looking to grow as a web developer.
            <br />
            <br />
            I'm so excited to begin my new coding career as I look for my first
            developer job. When I'm not coding, I'm usually teaching myself how
            to DJ, skateboarding, or hanging out with friends. Coding challenges
            me in a new way and I'm grateful for this opportunity to expand.
            Check out my portfolio and contact me about anything, I'd love to
            connect with and learn from my fellow developers!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
