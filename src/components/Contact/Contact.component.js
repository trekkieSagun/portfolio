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
                    <i class="fas fa-phone-alt"></i>
                  </li>
                  <li>
                    <i class="fas fa-envelope-open-text"></i>
                  </li>
                  <li>
                    <i class="fas fa-map-marker-alt"></i>
                  </li>
                </ul>
              </div>
              <div className="contact-details">
                <ul>
                  <li>
                    <h3>Call Me Right Away</h3>
                    <p>+977 - 9812322323</p>
                  </li>
                  <li>
                    <h3>Mail Me At</h3>
                    <p>sagun@gamil.com</p>
                  </li>
                  <li>
                    <h3>Get Me Here</h3>
                    <p>KTM, Nepal</p>
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
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="phone">Phone</label>
                  <input type="text" class="form-control" placeholder="Phone" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="message">Message</label>
                  <textarea
                    rows="5"
                    class="form-control"
                    placeholder="Message"
                  />
                </div>
              </div>

              <button type="submit" class="btn btn-primary">
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
