import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { GrPhone, GrMail, GrLocation } from "react-icons/gr";
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";

import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { successMessage, setSuccessMessage } = useState("");
  const Service_ID = "service_id";
  const Template_ID = "template_gy6l33d";
  const user_ID = "user_eHn01qGgscfXzjcPRKntA";

  const onSubmit = (data, r) => {
    sendEmail(
      Service_ID,
      Template_ID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      user_ID
    );
    r.target.reset();
  };

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
    <div id="contacts" className="contacts">
    <div id="lara-main">
      <section id="lara-contact">
        <div className="lara-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated"
              data-animate-effect="fadeInLeft"
            >
               <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={true}>
              <h2 className="sub-heading">Contact</h2>
              </ScrollAnimation>
            </div>
          </div>
          
          <div className="row">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <div className="col-md-5">
              <div
                class="lara-feature lara-feature-sm animate-box fadeInLeft animated"
                data-animate-effect="fadeInLeft"
              >
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
              <div
                class="lara-feature lara-feature-sm animate-box fadeInLeft animated"
                data-animate-effect="fadeInLeft"
              >
                <div class="contact-icon">
                  <FaPhoneAlt />
                </div>
                <div class="contact-text">
                  <p>(416)-809-5993</p>
                </div>
              </div>
              <div
                class="lara-feature lara-feature-sm animate-box fadeInLeft animated"
                data-animate-effect="fadeInLeft"
              >
                <div class="contact-icon">
                  <FaLocationArrow />
                </div>
                <div class="contact-text">
                  <p>Toronto, ON. Canada</p>
                </div>
              </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true} >
            <div className="col-md-7 col-md-push-1">
              <div className="row">
                <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box fadeInRight animated">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        aria-invalid={errors.name ? "true" : "false"}
                        {...register("name", {
                          required: "Please enter your name",
                          maxLength: {
                            value: 20,
                            message:
                              "Please enter a name with fewer than 20 characters",
                          },
                        })}
                      />
                      <span className="error-message">
                        {errors.name && errors.name.message}
                      </span>
                    </div>
                    <div className="form-group">
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        aria-invalid={errors.email ? "true" : "false"}
                        {...register("email", {
                          required: "Please enter your email address",
                          pattern: {
                            value: "[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+",
                            message:
                              "invalid email address, please provide a valid email address",
                          },
                        })}
                      ></input>
                      <div className="line"></div>
                      <span className="error-message">
                        {errors.email && errors.email.message}
                      </span>
                    </div>
                    <div className="form-group">
                      <input
                        id="subject"
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        aria-invalid={errors.subject ? "true" : "false"}
                        {...register("subject", {
                          required: "Please enter the subject",
                        })}
                      ></input>
                      <div className="line"></div>
                      <span className="error-message">
                        {errors.subject && errors.subject.message}
                      </span>
                    </div>
                    <div className="form-group">
                      <textarea
                        id="description"
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        name="description"
                        aria-invalid={errors.description ? "true" : "false"}
                        {...register("description", {
                          required: "Please enter the description",
                        })}
                      ></textarea>
                      <div className="line"></div>
                      <span className="error-message">
                        {errors.subject && errors.subject.message}
                      </span>
                    </div>
                    <div className="form-group">
                      <button
                        className="btn-main-offer contact-button"
                        type="submit"
                      >
                        contact me
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Contact;
