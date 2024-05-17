import React from "react";
import photo2 from "../../images/profile-2.jpg";
import './About.css'

export const About = () => {
  return (
    <div id="about" >
      <div className="section__wrapper about__container">
        <div className="me__container blur-effect">
          <div className="photo__container">
            <img src={photo2} alt="" />
          </div>
        </div>
        <div className="section__header">
          <h2 className="primary__title">About Me</h2>
          <h1 className="title">
            I am <span className="color__primary">Muhammad Waqar Rajput</span>
          </h1>
          <p className="text__muted description">
            Experienced Full Stack Developer with a passion for creating
            dynamic, intuitive, and responsive applications. Proficient in
            multiple programming languages and frameworks, as well as database
            design and management. Strong problem-solving and analytical skills,
            and a track record of delivering high-quality code on time and on
            budget.
          </p>
        </div>
      </div>
    </div>
  );
};
