import React from "react";
import "./Services.css";
import { FaPaintBrush } from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
export const Services = () => {
  return (
    <div id="services" className="blur-effect">
      <div className="section__wrapper services__wrapper">
        <div className="section__header center">
          <h2 className="primary__title">Services</h2>
          <p className="text__muted description">
            I transform your ideas, and consequently your desires, into a
            distinctive web project that both inspires you and captivates your
            customers
          </p>
        </div>
        <div className="services__group">
          <article className="service">
            <div className="service__top">
              <div className="icon__container">
                <FaPaintBrush className="icon"/>
              </div>
              <h2 className="title">UI/UX Design</h2>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione voluptatum earum quam tempore, repellat aut vero ut eum,
                provident accusamus recusandae eligendi, adipisci sequi
                reiciendis quisquam? Sapiente optio rerum sequi!
              </p>
            </div>
            <div className="service__bottom">
              <button className="btn btn__primary">Read More</button>
            </div>
          </article>
          <article className="service" style={{"--color-primary":"var(--color-success)"}}>
            <div className="service__top">
              <div className="icon__container">
                <BsCodeSquare className="icon"/>
              </div>
              <h2 className="title">Web Development</h2>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione voluptatum earum quam tempore, repellat aut vero ut eum,
                provident accusamus recusandae eligendi, adipisci sequi
                reiciendis quisquam? Sapiente optio rerum sequi!
              </p>
            </div>
            <div className="service__bottom">
              <button className="btn btn__primary">Read More</button>
            </div>
          </article>
          <article className="service" style={{"--color-primary":"blueviolet"}}>
            <div className="service__top">
              <div className="icon__container">
                <FaMobileAlt className="icon"/>
              </div>
              <h2 className="title">App Development</h2>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione voluptatum earum quam tempore, repellat aut vero ut eum,
                provident accusamus recusandae eligendi, adipisci sequi
                reiciendis quisquam? Sapiente optio rerum sequi!
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
