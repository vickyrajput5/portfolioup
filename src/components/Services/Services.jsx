import React from "react";
import "./Services.css";
// import { FaPaintBrush } from "react-icons/fa";
// import { BsCodeSquare } from "react-icons/bs";
// import { FaMobileAlt } from "react-icons/fa";
export const Services = () => {
  return (
    <div id="services" className="blur-effect">
      <div className="section__wrapper services__wrapper">
        <div className="section__header center">
          <h2
            className="primary__title"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Services
          </h2>
          <p
            className="text__muted description"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            I transform your ideas, and consequently your desires, into a
            distinctive web project that both inspires you and captivates your
            customers
          </p>
        </div>
        <div className="services__group">
          <article
            className="service"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
          >
            <div className="service__top">
              <div className="icon__container">
                <div className="icon">🎨</div>
              </div>
              <h2 className="title">UI/UX Design</h2>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
                <br />
                🎨 UI/UX Design Expertise: Crafting intuitive and visually
                appealing designs.
                <br />
                🖌️ Adobe Photoshop & PSD: Intermediate experience in creating
                and editing high-quality design assets.
                <br />
                📐 Figma: Proficient in designing and prototyping user
                interfaces for web and mobile apps.
                <br />
                ✏️ Adobe XD: Skilled in creating interactive prototypes and
                design systems.
                <br />
                🎨 Sketch: Experienced in developing sleek and modern UI
                designs.
              </p>
            </div>
            <div className="service__bottom">
              <button className="btn btn__primary">Read More</button>
            </div>
          </article>
          <article
            className="service"
            style={{ "--color-primary": "var(--color-success)" }}
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="service__top">
              <div className="icon__container">
                <div className="icon">💻 </div>
              </div>
              <h2 className="title">Web Development</h2>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
                🚀 Framer Website & Development: Seamless design and development
                using Framer. <br />
                🌐 React.js & Next.js Development: Crafting visually stunning
                and user-friendly interfaces. <br />
                🖥️ Full Stack Development: Expertise in both frontend and
                backend technologies including Node.js, Express.js, MongoDB,
                MySQL, SQL Server, and PostgreSQL. <br />
                💼 API Development & Integration: Reliable and scalable API
                solutions. <br />
                📈 Conversion Optimization: Implementing strategies for maximum
                impact. <br />
              </p>
            </div>

            <div className="service__bottom">
              <button className="btn btn__primary">Read More</button>
            </div>
          </article>
          <article
            className="service"
            style={{ "--color-primary": "blueviolet" }}
            data-aos="zoom-in-left"
            data-aos-duration="1000"
          >
            <div className="service__top">
              <div className="icon__container">
                <div className="icon">📱</div>
              </div>
              <h2 className="title">App Development</h2>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
                <br />
                🚀 React Native & Node.js Development: Seamless mobile app
                development with a focus on performance and user experience.
                <br />
                🌐 React Native UI Design: Crafting visually stunning and
                user-friendly mobile interfaces.
                <br />
                🖥️ Full Stack Mobile Development: Expertise in both frontend and
                backend technologies for mobile applications.
                <br />
                💼 API Development & Integration: Reliable and scalable API
                solutions for mobile apps.
                <br />
                📈 Performance Optimization: Implementing strategies for maximum
                app efficiency and responsiveness.
              </p>
            </div>
            <div className="service__bottom">
              <button className="btn btn__primary">Read More</button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
