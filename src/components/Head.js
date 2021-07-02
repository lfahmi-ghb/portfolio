import React from "react";
import { Link} from "react-scroll";
import photo from "../images/about2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "animate.css/animate.min.css";
import { SiDiscord, SiGithub, SiTelegram, SiLinkedin } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";

const Head = () => {
  return (
    <aside id="lara-aside" role="complementary">
        <button
        class="navbar-toggler lara-nav-toggle"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div className="text-center">
          <div className="photo-wrap">
            <img className="profile-img" src={photo} alt="author" />
          </div>
          <h1 className="Lara-Name"> Lara Fahmi </h1>
          <span className="position">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Developer
            </a>{" "}
            in Toronto
          </span>
        </div>
        <nav id="lara-main-menu" role="navigation" className="navbar">
          <div id="navbar" className="collapse">
            <ul>

              <li >
                <Link
                  to="lara-home"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  offset={-40}
                  to="lara-tools"
                  className="nav-link"
                  href="#"
                >
                  Skills
                </Link>
              </li>

              <li>
                <Link
                  duration={500}
                  delay={1000}
                  to="lara-project"
                  className="nav-link"
                  href="#"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="lara-contact"
                  className="nav-link"
                  href="#"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav-footer-icons d-flex justify-content-center">
        <a href="https://discordapp.com/users/766427252543062037/">
          {" "}
          <SiDiscord className="lara-icons" />{" "}
        </a>
        <a href="https://github.com/lfahmi-ghb">
          <SiGithub className="lara-icons" />
        </a>
        <a href="https://t.me/pepepopo123">
          <SiTelegram className="lara-icons" />
        </a>
        <a href="https://www.linkedin.com/in/lara-fahmi-3818aa210/">
          <RiLinkedinFill className="lara-icons" />
        </a>
      </div>
      <div className="contain">
      <p className=" copy-rights text-center justify-content-center">
        &copy; Copyright <sxript>{new Date().getFullYear()}&nbsp;</sxript> Lara
        Fahmi
      </p>
      </div>
      </div>
    </aside>
  );
};

export default Head;
