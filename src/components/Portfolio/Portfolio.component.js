import React, { Component } from "react";
import "./Portfolio.component.css";

import portfolioImg from "../../images/background.jpg";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h1>Portfolio</h1>
          <p>Check out some of my works</p>
        </div>
        <div className="portfolio-section">
          <div className="row">
            <div className="col-md-4">
              <div className="portfolio-box">
                <img src={portfolioImg} alt="No preview available" />
                <div className="centered-text">
                  <span>MyWebsite</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="portfolio-box">
                <img src={portfolioImg} alt="No preview available" />
                <div className="centered-text">
                  <span>MyWebsite</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="portfolio-box">
                <img src={portfolioImg} alt="No preview available" />
                <div className="centered-text">
                  <span>MyWebsite</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="portfolio-box">
                <img src={portfolioImg} alt="No preview available" />
                <div className="centered-text">
                  <span>MyWebsite</span>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-4">
              <div className="portfolio-box">
                <img src={portfolioImg} alt="No preview available" />
                <div className="centered-text">
                  <span>MyWebsite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contact"></div>
      </div>
    );
  }
}

export default Portfolio;
