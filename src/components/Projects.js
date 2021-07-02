import React from "react";
import portImg from "../music-app-proj.png";
import restImg from "../resturants-project.png";

import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Project = () => {
  return (
    <div id="lara-main">
      <section id="lara-project">
        <div className="lara-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated"
              data-animate-effect="fadeInLeft"
            >
              <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={true}>
              <h2 className="sub-heading">Projects</h2>
              </ScrollAnimation>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 projects-card">
            <ScrollAnimation animateIn="fadeInLeft"  animateOnce={true}>
              <div class="card">
               <a href="https://github.com/lfahmi-ghb/music-app" target="_blank"> <img src={portImg} class="card-img-top" alt="..." /></a>
                <div class="card-body">
                  <h5 class="card-title">Music App</h5>
                  <p class="card-text">
                  Full-Stack website developed using Angular, Bootstrap and MongoDB. Prompts the user to register, JWT was used for authentication.
                  </p>
                </div>
              </div>
              </ScrollAnimation>
            </div>
            
            <div class="col-sm-6 projects-card">
            <ScrollAnimation animateIn="fadeInRight"  animateOnce={true}>
              <div class="card">
                <a href="https://github.com/lfahmi-ghb" target="_blank"><img src={restImg} class="card-img-top" alt="..." /></a>
                <div class="card-body">
                  <h5 class="card-title">API Demo</h5>
                  <p class="card-text">
                  Full-Stack website developed using React, MongoDB and Bootstrap.
                  </p>
                </div>
              </div>
              </ScrollAnimation>
            </div>           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
