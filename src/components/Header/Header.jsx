import React from "react";
import profile1 from '../../images/profile-1.png'
import './Header.css'
import { Facts } from "./Facts/Facts";
export const Header = () => {
  
  return (
    <header id="home" className="blur-effect">
      <div className="stroke__text intro__text">HELLO</div>
      <div className="section__wrapper header__container">
        <div className="column intro__container blur-effect">
          <div className="header__info">
            <div className="header__info__top">
              Hello There! I'm <span className="color__primary">Muhammad Waqar Rajput</span>
            </div>
            <div className="header__info__middle">
              <h1 className="primary__title header__title">
                I'M A Full Stack Developer
              </h1>
              <p className="text__muted header__description">
                I dissect intricate user experience challenges to engineer
                integrity-focused solutions that resonate with billions of
                users.
              </p>
            </div>
            <Facts/>
            <div className="header__info__bottom">
              <a href="../../images/EU5.pdf" className="btn" >Download CV</a>
              <a href="mailto:waqarmuhammadd337@gmail.com" className="btn">Email Me </a>
            </div>
          </div>
        </div>
        <div className="column profile__wrapper">
          <div className="profile__photo__container">
            <img src={profile1} className="profile__photo"  alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};
