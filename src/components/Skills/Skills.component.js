import React, { Component } from "react";
import "./Skills.component.css";

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          name: "Git",
          level: "60%",
        },

        {
          name: "ReactJs",
          level: "50%",
        },
        {
          name: "CSS",
          level: "80%",
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
      <div className="skills-container">
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
        <div id="portfolio"></div>
      </div>
    );
  }
}

export default Skills;
