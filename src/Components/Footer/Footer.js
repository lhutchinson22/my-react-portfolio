import React from "react";

const Footer = () => {
  return (
    <div>
      © 2021 Lauren Hutchinson
      <a href="./Assets/Images/ResumeCodingPDF.zip" download>
        <p id="pdfDownload">Click me to download resume</p>
      </a>
      <a href="https://www.instagram.com/hutchdaddyy/">
        <img src="./insta.png" alt="instagram" className="social-media-img" />
      </a>
      <a href="https://www.linkedin.com/in/hutchinsonlauren/">
        <img src="./linkedin.png" alt="linkedin" className="social-media-img" />
      </a>
      <a href="https://stackoverflow.com/users/14183525/lhutchinson22">
        <img
          src="./stackover.png"
          alt="stackoverflow"
          className="social-media-img"
        />
      </a>
      <a href="https://github.com/lhutchinson22/">
        <img src="./github.png" alt="github" className="social-media-img" />
      </a>
    </div>
  );
};

export default Footer;
