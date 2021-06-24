import React from "react";
import photo from "../images/about2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
const Head= () => {
  return ( 

<aside id="lara-aside" role="complementary"> 
<button class="navbar-toggler lara-nav-toggle" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
      </button>
<div class="collapse navbar-collapse" id="navbarNav">  
    <div className="text-center">
    <div className="photo-wrap">
          <img className="profile-img" src={photo} alt="author" />
        </div>
        <h1 className="Lara-Name"> Lara Fahmi </h1>
        <span class="position"><a href="#" target="_blank" rel="noopener noreferrer">Developer</a> in Toronto</span>
    </div>
    <nav id="felix-main-menu" role="navigation" class="navbar">
        <div id="navbar" class="collapse">
          <ul>
            <li class="active">
              <a href="#" data-nav-section="home">
                Home
              </a>
            </li>
            <li>
              <a href="#" data-nav-section="about">
                About
              </a>
            </li>
            <li>
              <a href="#" data-nav-section="skills">
                Skills
              </a>
            </li>
            <li>
              <a href="#" data-nav-section="projects">
                Projects
              </a>
            </li>
            <li>
              <a href="#" data-nav-section="contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
      </aside>



  );
};

export default Head;
