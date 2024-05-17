import React, { useEffect, useRef, useState } from "react";
import { sumArray } from "../helper";
import './Projects.css'

import { Card } from "./Card/Card";
import {projects} from '../../data'
const tabs = [
  { name: "All" },
  { name: "Web" },
  { name: "UI/UX" },
  { name: "Apps" },
];
export const Projects = () => {
  const [displayProject, setDisplayProject] = useState(projects)
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);

  // eslint-disable-next-line no-array-constructor
  const itemEls = useRef(new Array());
  useEffect(() => {
    const preEl = itemEls.current.filter((_, index) => index < activeIndex);
    setOffset(sumArray(preEl.map((item) => item.OffsetWidth)));
    setIndicatorWidth(itemEls.current[activeIndex].OffsetWidth);
  }, [activeIndex]);

  const setProjects = (category) =>{
    if(category === 'All'){
      return setDisplayProject(projects)
    }
    const pro = projects.filter((item)=>item.category.toLowerCase() === category.toLowerCase())
    setDisplayProject(pro)
  }
  return (
    <section id="projects" className="blur-effect">
      <div className="section__wrapper projects__container">
        <div className="section__header center">
          <h2 className="primary__title">Porjects</h2>
        </div>
        <nav>
          {tabs.map((tab, index) => (
            <button
              ref={el =>itemEls.current[index] = el}
              onClick={() => {
                setActiveIndex(index);
                setProjects(tab.name)
              }}
              key={index}
            >
              {tab.name}
            </button>
          ))}
          <span
            className="active__indicator"
            style={{ left: `${offset}px`, width: `${indicatorWidth}px` }}
          ></span>
        </nav>
        <div className="card__container">
          {
            displayProject.map((project, index)=>(
              <Card
              title={project.title}
              image={project.image}
              data={project.data}
              stack={project.stack}
              key={index}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};
