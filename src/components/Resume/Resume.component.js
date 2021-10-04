import React, { Component } from "react";
import "./Resume.component.css";

class Resume extends Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          name: "Git",
          level: "50%",
        },

        {
          name: "ReactJs",
          level: "60%",
        },
        {
          name: "NodeJS",
          level: "55%",
        },
        {
          name: "CSS",
          level: "70%",
        },
        {
          name: "HTML5",
          level: "80%",
        },

        {
          name: "MongoDB",
          level: "50%",
        },
        {
          name: "MySQL",
          level: "60%",
        },
      ],

      education: [
        {
          collegeName: "Softwarica College of IT & E-Commerce",
          degree: "Bachelors in Computing",
          completedYear: "2020",
          description: `Started on 2016, Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries`,
        },
        {
          collegeName: "Capital College & Research Center",
          degree: "+2 in Science",
          completedYear: "2016",
          description: `Started on 2016, Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries`,
        },
      ],
    };
  }

  render() {
    var skills = this.state.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}>
            {" "}
          </span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <div className="resume-container">
        <div className="row education">
          <div className=" heading col-md-4">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="col-md-8">
            {this.state.education.map((item, index) => (
              <div className="education-level">
                <h3>{item.collegeName}</h3>
                <span className="education-degree">{item.degree}</span>
                <button className="education-date">
                  <i class="fas fa-check-double"></i>Completed{" "}
                  {item.completedYear}
                </button>
                <p>{item.description}</p>
              </div>
            ))}
            <div id="skills"></div>
          </div>
        </div>

        <hr />
        <div className="row skill">
          <div className=" heading col-md-4">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="col-md-8">
            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
        <div id="works"></div>
      </div>
    );
  }
}

export default Resume;
