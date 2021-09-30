import React from "react";
import "./About.component.css";
import aboutImg from "../../images/logo.png";
const About = () => {
  return (
    <div className="about-section">
      <div className="row">
        <div className="col-md-4">
          <div className="about-img">
            <img src={aboutImg} alt="No preview" />
          </div>
        </div>
        <div className="col-md-8">
          <div className="about-heading">
            <h1>Who Am I?</h1>
          </div>
          <div className="intro">
            <h1>Sagun Shrestha</h1>
            <p>I am react developer</p>
          </div>

          <div className="about-me">
            <h1>About me</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="hire-btn">
            <div className="wrapper">
              <div className="link_wrapper">
                <a href="#">Hire me!</a>
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 268.832 268.832"
                  >
                    <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="skills"></div>
    </div>
  );
};

export default About;
