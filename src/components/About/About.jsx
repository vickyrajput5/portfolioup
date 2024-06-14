import photo2 from "../../images/profile-2.jpg";
import "./About.css";

export const About = () => {
  return (
    <div id="about">
      <div className="section__wrapper about__container">
        <div
          className="me__container blur-effect"
          data-aos="flip-right"
          data-aos-duration="2000"
        >
          <div className="photo__container">
            <img src={photo2} alt="" />
          </div>
        </div>
        <div
          className="section__header"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h2 className="primary__title">About Me</h2>
          <h1 className="title">
            I am <span className="color__primary">Muhammad Waqar Rajput</span>
          </h1>
          <p className="text__muted description">
            {/* Experienced Full Stack Developer with a passion for creating
            dynamic, intuitive, and responsive applications. Proficient in
            multiple programming languages and frameworks, as well as database
            design and management. Strong problem-solving and analytical skills,
            and a track record of delivering high-quality code on time and on
            budget. */}
            I'm a highly skilled Full Stack Developer with 4 years of expertise
            in building intuitive and engaging user interfaces for web
            applications. I have a solid track record of delivering high-quality
            work and maintaining excellent client relationships.
            <br />
            <br /> <b>🚀Key Highlights🚀 </b> <br />
            <br />
            🏅 4+ Years of Professional Experience in Full Stack Development{" "}
            <br />
            💻 Expert in React.js, Next.js, Framer, Figma , PSD and UI
            Development <br />
            🌐 Worked with Clients Worldwide across various industries <br />
            💼 Experience with Long-Term Contracts and successful project
            deliveries <br />
            🌍 Fluent in English Communication for seamless collaboration <br />
            {/* 🌐 🌍 🌎 🌏 💻 🖥️ 📱 🖱️ */}
          </p>
        </div>
      </div>
    </div>
  );
};
