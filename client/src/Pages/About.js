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
        </div>
      </div>
    </>
  );
};

export default About;
