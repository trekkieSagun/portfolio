import React, { Component } from "react";
import "./Navbar.component.css";
// import logo from "../images/logo.png";
import background from "../../images/background.jpg";
import ParticlesComponent from "../Particle/Particle.component";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: {
        name: "Sagun Shrestha",
        description: "I am passionate JavaScript Developer",
        socialLinks: [
          {
            name: "facebook",
            url: "www.facebook.com",
            icon: "fab fa-facebook",
          },
          {
            name: "instagram",
            url: "www.facebook.com",
            icon: "fab fa-instagram",
          },

          {
            name: "linkedin",
            url: "www.facebook.com",
            icon: "fab fa-linkedin",
          },
          {
            name: "github",
            url: "www.facebook.com",
            icon: "fab fa-github",
          },
        ],
      },
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", function () {
      var element = document.getElementById("top-navbar");

      if (window.scrollY > 200) {
        element.classList.add("toggleNavbar");
      } else {
        document.body.style.paddingTop = "0";
        element.classList.remove("toggleNavbar");
      }
    });
  }
  render() {
    return (
      <div>
        <nav id="top-navbar" className="navbar navbar-expand-lg fixed-top ">
          <div className="container">
            <div className="logo">
              <a href="#">Sagun Shrestha</a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#resume">
                    Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#works">
                    Works
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="masthead">
          {/* <img src={background} /> */}
          <ParticlesComponent />
          <div className="centered container h-100">
            <div className="row h-100 align-items-center">
              <div className=" col-md-10 banner-content">
                <div className="center-text">
                  <h1 className="fw-light">{this.state.header.name}</h1>
                  <p className="lead">{this.state.header.description}</p>

                  <a href="#about">
                    {" "}
                    <button className="about-me-btn">Know About me</button>
                  </a>
                </div>
              </div>

              <div className="banner-icons col-md-2">
                {this.state.header.socialLinks.map((item, index) => (
                  <a href={item.url} target="_blank" key={index}>
                    <i className={item.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </header>
        <div id="about"></div>
      </div>
    );
  }
}

export default Navbar;
