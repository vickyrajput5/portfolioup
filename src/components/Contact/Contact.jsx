import React from "react";
import "./Contact.css";
export const Contact = () => {
  return (
    <div id="contact" className="blur-effect">
      <div className="section__wrapper contact__container">
        <div
          className="section__header"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="primary__title">Contact Me</h2>
          <p className="text__muted description">
            Ready to take your digital presence to the next level? Whether
            you're looking to launch a new website, revamp an existing one, or
            need expert advice on the best web technologies, I'm here to help.
            Reach out to discuss your project, ask questions, or just say hello.
          </p>
        </div>
        <div
          className="contact__group"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <form>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email..."
              required
            />
            <textarea
              name="message"
              rows={7}
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="btn btn__primary">
              send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
