import React from "react";

const Projects = () => {
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
        </div>
      </section>
    </div>
  );
};

export default Projects;
