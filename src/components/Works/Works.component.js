import React, { Component } from "react";
import "./Works.component.css";

import worksImg from "../../images/background.jpg";

class Works extends Component {
  render() {
    return (
      <div className="works-container">
        <div className="works-header">
          <p>Check out some of my works</p>
        </div>
        <div className="works-section">
          <div className="row">
            <div className="col-md-4">
              <div className="works-box">
                <img src={worksImg} alt="No preview available" />
                <div className="centered-text">
                  <span>MyWebsite</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="works-box">
                <img src={worksImg} alt="No preview available" />
                <div className="centered-text">
                  <span>MyWebsite</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="works-box">
                <img src={worksImg} alt="No preview available" />
                <div className="centered-text">
                  <span>MyWebsite</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="works-box">
                <img src={worksImg} alt="No preview available" />
                <div className="centered-text">
                  <span>MyWebsite</span>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-4">
              <div className="works-box">
                <img src={worksImg} alt="No preview available" />
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

export default Works;
