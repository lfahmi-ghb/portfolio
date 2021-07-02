import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import resume from "../Lara's Resume.pdf"


const Home = () => {
  return (
    <div id="lara-main">
      <section id="lara-home">
        <div className="lara-narrow-content">
          <div className="row home-content">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={true}>
          <h1 className="home-h1">Hi! I'm Lara</h1>
            <div className="col-md-12">
              <div
                className=""
                data-animate-effect="fadeInLeft"
              >
               
                  <p>
                    I'm a full-stack developer, specializing in web development
                    currently based in Toronto.
                  </p>
                  <p>
                    Professionally, I tend to thrive when I have opportunities
                    to express my creativity and insight in projects. 
                    I love being able to create solutions that
                    will have a real impact on clients, I also love 
                    learning new impactful things. And most of all, I love to develop fun things!
                  </p>
                  <p>
                    My place in the world seems to be at the intersection of
                    creativity and logic. Whenever possible, I also apply my
                    passion for developing products with Modern Javascript
                    Frameworks like Node.js and React.js
                  </p>
                
                <div className="button-wrapper">
                  <a href={resume} target="_blank">
              <button className="btn-main-offer resume-button" type="submit">
                Resume
              </button>
              </a>
            </div>
              </div>
            </div>
            </ScrollAnimation>
          </div>
        
        </div>
      </section>
    </div>
  );
};

export default Home;
