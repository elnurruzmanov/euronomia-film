import React from "react";
import "./Projects.css";

import { Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

//images
import ProjectRights from "../../images/about-rights2.png"
import ProjectLefts from "../../images/proect-left.png"

const Projects = () => {
  return (
    <div className="projects">
      <div className="project1">
        <div className="project2">
          <div className="projects2">
            <div className="container">
              <Navbar />
              <div className="polyglots-info">
                <Link to="/polyglots" className="polyglots-link">
                  <h1 className="projects-title">POLYGLOTS</h1>
                </Link>
                <div className="drama-info">
                  <h4 className="drama">2022 Drama, comedy</h4>
                  <p className="drama-text text2">In production</p>
                  <Link to="/polyglots" className="polyglots2-link">Learn more</Link>
                </div>
              </div>
              
              <hr className="hr" />

              <div className="polyglots-info lunik">
                
                <Link to="/lunik" className="polyglots-link">
                  <h1 className="projects-title">LUNIK-3</h1>
                </Link>
                <div className="drama-info">
                  <h4 className="drama">2023 Black, comedy</h4>
                  <p className="drama-text">In production</p>
                  <Link to="/polyglots" className="polyglots2-link">Learn more</Link>
                  <img src={ProjectRights} alt="project-rights" className="project-rights" />
                  <img src={ProjectLefts} alt="project-rights" className="project-lefts" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
