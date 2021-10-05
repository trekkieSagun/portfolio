import React, { Component } from "react";
import "./Contact.component.css";
class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Me</h1>
          <p>You can easily contact me for any queries</p>
        </div>
        <div className="contact-row row">
          <div className="col-md-5">
            <h3>Get in touch</h3>
            <div className="contact-links">
              <div className="contact-icons">
                <ul>
                  <li>
                    <i class="fas fa-phone-alt" data-aos="fade-right"></i>
                  </li>
                  <li>
                    <i
                      class="fas fa-envelope-open-text"
                      data-aos="fade-right"
                    ></i>
                  </li>
                  <li>
                    <i class="fas fa-map-marker-alt" data-aos="fade-right"></i>
                  </li>
                </ul>
              </div>
              <div className="contact-details">
                <ul>
                  <li>
                    <h3 data-aos="fade-left">Call Me Right Away</h3>
                    <p data-aos="fade-up">+977 - 9812322323</p>
                  </li>
                  <li>
                    <h3 data-aos="fade-left">Mail Me At</h3>
                    <p data-aos="fade-up">sagun@gamil.com</p>
                  </li>
                  <li>
                    <h3 data-aos="fade-left">Get Me Here</h3>
                    <p data-aos="fade-up">KTM, Nepal</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <h3>Let me know</h3>
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label data-aos="fade-right" for="email">
                    Email
                  </label>
                  <input
                    data-aos="fade-left"
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label data-aos="fade-right" for="password">
                    Password
                  </label>
                  <input
                    data-aos="fade-left"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label data-aos="fade-right" for="phone">
                    Phone
                  </label>
                  <input
                    data-aos="fade-left"
                    type="text"
                    class="form-control"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label data-aos="fade-right" for="message">
                    Message
                  </label>
                  <textarea
                    data-aos="fade-left"
                    rows="5"
                    class="form-control"
                    placeholder="Message"
                  />
                </div>
              </div>

              <button
                type="submit"
                class="btn btn-primary"
                data-aos="flip-left"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
