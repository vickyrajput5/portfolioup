// import React, { useEffect } from "react";
import profile1 from "../../images/profile-1.png";
import LinkedIn from "../../images/linkedin3D.png";
import Facebook from "../../images/Facebook3D.png";
import Instagram from "../../images/insta3D.png";
import Github from "../../images/github3d.png";
import "./Header.css";
import { Facts } from "./Facts/Facts";
// import Aos from "aos";
// import "aos/dist/aos.css";
export const Header = () => {
  return (
    <header id="home" className="blur-effect">
      <div className="stroke__text intro__text">HELLO</div>
      <div className="section__wrapper header__container">
        <div
          className="column intro__container blur-effect"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="header__info">
            <div className="header__info__top">
              Hello There! I'm{" "}
              <span className="color__primary">Muhammad Waqar Rajput</span>
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
            <Facts />
            <div className="header__info__bottom">
              <a
                href="https://res.cloudinary.com/dbxq0nuzl/raw/upload/v1718362424/book-pdf/xytc2wvvxfn6xe5j2xhm.pdf"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
              <a href="mailto:waqarmuhammadd337@gmail.com" className="btn">
                Email Me{" "}
              </a>
            </div>
          </div>
        </div>
        <div
          className="column profile__wrapper"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div className="profile__photo__container">
            <img src={profile1} className="profile__photo" alt="" />
          </div>
          <div className="social-icons">
            <div className="social-main">
              <div className="icons">
                <a
                  href="https://www.linkedin.com/in/muhammad-waqar-rajput/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="linkedin">
                    <img src={LinkedIn} alt="" />
                  </div>
                </a>
                <a
                  href="https://github.com/vickyrajput5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="Github">
                    <img src={Github} alt="" />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/waqarbhatti.waqarbhatti.7374?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="Facebook">
                    <img src={Facebook} alt="" />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/muhammad_waqar_rajput1/?igsh=NW82YWd5MWd6dmZp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="Instagram">
                    <img src={Instagram} alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
