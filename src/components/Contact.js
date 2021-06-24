import React from "react";
import { GrPhone, GrMail, GrLocation } from "react-icons/gr";
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="lara-main">
      <section id="lara-contact">
        <div className="lara-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated"
              data-animate-effect="fadeInLeft"
            >
              <h2 className="sub-heading">Contact</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div class="lara-feature lara-feature-sm">
                <div class="contact-icon">
                  <GrMail />
                </div>
                <div class="contact-text">
                  <p>
                    <a href="mailto:larafahmi1@hotmail.com">
                      larafahmi1@hotmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div class="lara-feature lara-feature-sm ">
                <div class="contact-icon">
                  <FaPhoneAlt />
                </div>
                <div class="contact-text">
                  <p>(416)-809-5993</p>
                </div>
              </div>
              <div class="lara-feature lara-feature-sm">
                <div class="contact-icon">
                  <FaLocationArrow />
                </div>
                <div class="contact-text">
                  <p>Toronto, ON. Canada</p>
                </div>
              </div>          
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
