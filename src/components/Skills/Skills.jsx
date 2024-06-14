import React from "react";
import { experience } from "../../data";
import { SkillCard } from "./SkillCard/SkillCard";
import "./Skills.css";
export const Skills = () => {
  return (
    <div id="skill" className="blur-effect">
      <div className="section__wrapper">
        <div className="section__header center">
          <h2 className="primary__title">My Skills</h2>
        </div>
        <div
          className="skill__container"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {experience.map((list, index) => (
            <SkillCard {...list} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
