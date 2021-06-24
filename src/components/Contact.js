import React, { useState } from "react";
import emailjs from "emailjs-com";

import { GrPhone, GrMail, GrLocation } from "react-icons/gr";
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";

const Contact = () => {
  const Service_ID = "service_id";
  const Template_ID = "template_gy6l33d";
  const user_ID = "user_eHn01qGgscfXzjcPRKntA";
  const { successMessage, setSuccessMessage } = useState("");
  const sendEmail = (Service_ID, Template_ID, variables, user_ID) => {
    emailjs
      .send(Service_ID, Template_ID, variables, user_ID)
      .then(() => {
        setSuccessMessage(
          "Form sent successfully, I will contact you as soon as possible"
        );
      })
      .catch((err) => console.error(`something went wrong ${err}`));
  };

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
            <div className="col-md-7 col-md-push-1">
              <div className="row">
                <div className="col-md-10 col-md-offset-1 col-md-pull-1">
                  <form >
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"                                              
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                      ></input>
                    </div>
                    <div className="form-group">
                      <input
                        id="subject"
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                      ></input>
                    </div>
                    <div className="form-group">
                      <textarea
                        id="description"
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        name="description"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <button
                        className="btn-main-offer contact-button"
                        type="submit"
                      >
                        contact me
                      </button>
                    </div>{" "}
                  </form>
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
