import React from "react";
import { SiMongodb, SiMysql } from "react-icons/si";
import { DiNodejs, DiJqueryLogo } from "react-icons/di";
import {
  FaHtml5,
  FaJsSquare,
  FaCss3Alt,
  FaDatabase,
  FaReact,
  FaAngular,
  FaBootstrap,
} from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
const Technologies = () => {
  return (
    <div id="lara-main">
      <section id="lara-tools">
        <div className="lara-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated"
              data-animate-effect="fadeInLeft"
            >
              <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={true}>
                <h2 className="sub-heading">Technologies</h2>
              </ScrollAnimation>
            </div>
          </div>
          
          <div className="row">
            <h4 className="tools-heading text-center">Frontend</h4>
            <div className="lara-tools col-md-12 text-center">
              <ul className="list-inline mx-auto skill-icon">
                <li className="list-inline-item mx-3">
                  <span>
                    <div className="d-flex justify-content-center text-center skills-tile">
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                      <i>
                        <FaHtml5 className="tool-icon" />
                        <p class="text-center card-tools-txt ">HTML 5</p>
                      </i>
                      </ScrollAnimation>
                    </div>
                  </span>
                </li>
                <li className="list-inline-item mx-3">
                  <span>
                    <div className="d-flex justify-content-center text-center skills-tile">
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                      <i>
                        <FaJsSquare className="tool-icon" />
                        <p class="text-center card-tools-txt ">JavaScript</p>
                      </i>
                      </ScrollAnimation>
                    </div>
                  </span>
                </li>
                <li className="list-inline-item mx-3">
                  <span>
                    <div className="d-flex justify-content-center text-center skills-tile">
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                      <i>
                        <FaCss3Alt className="tool-icon" />
                        <p class="text-center card-tools-txt ">CSS</p>
                      </i>
                      </ScrollAnimation>
                    </div>
                  </span>
                </li>
                <li className="list-inline-item mx-3">
                  <span>
                    <div className="d-flex justify-content-center text-center skills-tile">
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                      <i>
                        <FaReact className="tool-icon" />
                        <p class="text-center card-tools-txt ">React</p>
                      </i>
                      </ScrollAnimation>
                    </div>
                  </span>
                </li>
                <li className="list-inline-item mx-3">
                  <span>
                    <div className="d-flex justify-content-center text-center skills-tile">
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                      <i>
                        <FaAngular className="tool-icon" />
                        <p class="text-center card-tools-txt ">Angular</p>
                      </i>
                      </ScrollAnimation>
                    </div>
                  </span>
                </li>
                <li className="list-inline-item mx-3">
                  <span>
                    <div className="d-flex justify-content-center text-center skills-tile">
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                      <i>
                        <FaBootstrap className="tool-icon" />
                        <p class="text-center card-tools-txt ">BootStrap</p>
                      </i>
                      </ScrollAnimation>
                    </div>
                  </span>
                </li>

                <li className="list-inline-item mx-3">
                  <span>
                    <div className="d-flex justify-content-center text-center skills-tile">
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                      <i>
                        <DiJqueryLogo className="tool-icon" />
                        <p class="text-center card-tools-txt ">JQuery</p>
                      </i>
                      </ScrollAnimation>
                    </div>
                  </span>
                </li>
              </ul>
            </div>
          </div>
       
          <div className="row">
            <h4 className="tools-heading text-center">Backend</h4>
            <div className="lara-tools col-md-12 text-center">
              <ul className="list-inline mx-auto skill-icon">
                <li className="list-inline-item mx-3">
                  <span>
                    <div className="d-flex justify-content-center text-center skills-tile">
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                      <i>
                        <DiNodejs className="tool-icon" />
                        <p class="text-center card-tools-txt ">NodeJs</p>
                      </i>
                      </ScrollAnimation>
                    </div>
                  </span>
                </li>
                <li className="list-inline-item mx-3">
                  <span>
                    <div className="d-flex justify-content-center text-center skills-tile">
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                      <i>
                        <SiMongodb className="tool-icon" />
                        <p class="text-center card-tools-txt ">MongoDB</p>
                      </i>
                      </ScrollAnimation>
                    </div>
                  </span>
                </li>

                <li className="list-inline-item mx-3">
                  <span>
                    <div className="d-flex justify-content-center text-center skills-tile">
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                      <i>
                        <SiMysql className="tool-icon" />
                        <p class="text-center card-tools-txt ">MySQL</p>
                      </i>
                      </ScrollAnimation>
                    </div>
                  </span>
                </li>
                <li className="list-inline-item mx-3">
                  <span>
                    <div className="d-flex justify-content-center text-center skills-tile">
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                      <i>
                        <DiNodejs className="tool-icon" />
                        <p class="text-center card-tools-txt ">NodeJs</p>
                      </i>
                      </ScrollAnimation>
                    </div>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
