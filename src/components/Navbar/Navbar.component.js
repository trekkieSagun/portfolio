import React, { Component } from "react";
import "./Navbar.component.css";
import ParticlesComponent from "../Particle/Particle.component";
import { Button, Container, Navbar, Nav } from "react-bootstrap";

class NavbarComponent extends Component {
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
    var element = document.getElementById("top-navbar");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        element.classList.add("toggleNavbar");
        document.getElementById("logo").style.display = "none";
      } else {
        element.classList.remove("toggleNavbar");
        document.getElementById("logo").style.display = "";
      }
    });

    if (window.innerWidth < 768) {
      element.classList.add("toggleNavbar");
    }
  }
  render() {
    return (
      <div className="header-page">
        <Navbar
          className="nav-bar"
          id="top-navbar"
          collapseOnSelect
          expand="sm"
          fixed="top"
          variant="dark"
        >
          <Navbar.Brand href="#" id="logo">
            <h1 className="logo-header">Sagun Shrestha</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto "></Nav>
            <Nav>
              {/* <Nav.Link href="#">Home</Nav.Link> */}
              <Nav.Link href="#about" className="nav-link">
                About
              </Nav.Link>
              <Nav.Link href="#resume" className="nav-link">
                Resume
              </Nav.Link>
              <Nav.Link href="#works" className="nav-link">
                Works
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <header className="masthead">
          <div className="w-100 h-100">
            <div
              style={{ height: "100vh" }}
              className="d-flex h-100 align-items-center justify-content-around position-relative"
            >
              <div id="tsp">
                <ParticlesComponent
                  className="position-absolute"
                  style={{ height: "100vh" }}
                />
              </div>
              <div className="banner-content">
                <div
                  className="center-text"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <h1 className="fw-light">{this.state.header.name}</h1>
                  <p className="lead">{this.state.header.description}</p>

                  <a
                    href="#about"
                    className="position-relative "
                    style={{ "z-index": "5" }}
                  >
                    {" "}
                    <button className="about-me-btn" data-aos="fade-up">
                      Know About me
                    </button>
                  </a>
                </div>
              </div>

              <div
                className="banner-icons position-relative "
                style={{ "z-index": "5" }}
                data-aos="zoom-out-left"
              >
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

export default NavbarComponent;
