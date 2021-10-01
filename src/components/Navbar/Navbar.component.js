import React from "react";
import "./Navbar.component.css";
// import logo from "../images/logo.png";
import background from "../../images/background.jpg";

function Navbar() {
  // document.addEventListener("DOMContentLoaded", function () {

  // if (window.innerWidth < 900) {
  //   document.getElementById("top-navbar").style.backgroundColor = "black";
  // }
  window.addEventListener("scroll", function () {
    var element = document.getElementById("top-navbar");

    if (window.scrollY > 200) {
      element.classList.add("toggleNavbar");
    } else {
      document.body.style.paddingTop = "0";
      element.classList.remove("toggleNavbar");
    }
  });

  // });

  return (
    <div>
      <nav
        id="top-navbar"
        className="navbar navbar-dark navbar-expand-lg fixed-top "
      >
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
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
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
        <div className="centered container h-100">
          <div className="row h-100 align-items-center">
            <div className=" col-md-10 banner-content">
              <div className="center-text">
                <h1 className="fw-light">Welcome to my portfolio</h1>
                <p className="lead">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>

                <button className="about-me-btn">Know About me</button>
              </div>
            </div>
            <div className="banner-icons col-md-2">
              <i class="fab fa-facebook"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-linkedin"></i>
              <i class="fab fa-facebook-square"></i>
            </div>
          </div>
        </div>
      </header>
      <div id="about"></div>
    </div>
  );
}

export default Navbar;
