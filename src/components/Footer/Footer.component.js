import React from "react";
import "./Footer.component.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-section">
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#">
              <i className="fas fa-arrow-up"></i>
            </a>
          </div>

          <div className=" footer-info row">
            <div className=" footer-logo col-md-4">
              <h1>Sagun Shrestha</h1>
              <p>© All right reserved. Sagun Shrestha</p>
            </div>
            <div className="col-md-8">
              <div className="footer-icons" data-aos="fade-up">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-facebook-square"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-text">© All right reserved</div>
      </div>
    </>
  );
}

export default Footer;
