import React from "react";
import "./style.css";
import resume from "./CompetitiveResumeUpdated.pdf";

const Footer = () => {
  return (
    <div className="card-footer ">
      © 2021 Lauren Hutchinson
      <a href={resume} download>
        <p id="pdfDownload">Click me to download resume</p>
      </a>
      <a href="https://www.instagram.com/hutchdaddyy/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
          alt="instagram"
          className="social-media-img"
        />
      </a>
      <a href="https://www.linkedin.com/in/hutchinsonlauren/">
        <img
          src="https://www.fpsa.org/wp-content/uploads/linkedin-logo-copy.png"
          alt="linkedin"
          className="social-media-img"
        />
      </a>
      <a href="https://stackoverflow.com/users/14183525/lhutchinson22">
        <img
          src="https://cdn3.iconfinder.com/data/icons/inficons/512/stackoverflow.png"
          alt="stackoverflow"
          className="social-media-img"
        />
      </a>
      <a href="https://github.com/lhutchinson22/">
        <img
          src="https://image.flaticon.com/icons/png/512/25/25231.png"
          alt="github"
          className="social-media-img"
        />
      </a>
    </div>
  );
};

export default Footer;
