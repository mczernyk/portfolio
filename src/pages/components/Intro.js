import React from "react"
import avatar from "../../../public/images/2014selfportrait.kago.jpg"
import Plx from "react-plx"

const parallaxData = [
  {
    start: "self",
    duration: "500vh",
    properties: [
      {
        startValue: 0,
        endValue: -50,
        unit: "vh",
        property: "translateY",
      },
    ],
  },
]

const parallaxIntro = [
  {
    start: "self",
    duration: "70vh",
    startOffset: "100vh",
    properties: [
      {
        startValue: 0,
        endValue: -50,
        unit: "vh",
        property: "translateY",
      },
      {
        startValue: 1,
        endValue: 2,
        property: "scale",
      },
    ],
  },
]

const Intro = () => (
  <Plx parallaxData={parallaxData}>
    <div className="section-container-intro">
      <section id="about">
        <div className="intro-container">
          <div className="avi">
            <div className="avatar-main">
              <img src={avatar} alt="" />
            </div>
            <Plx parallaxData={parallaxIntro}>
              <div>
                <span className="intro-name">
                  <h1>
                    Mark
                    <span> Czernyk</span>
                  </h1>
                </span>
              </div>

              <div className="skills-info">
                <span className="skills-color">Full Stack </span> ·{" "}
                <span className="skills-color"> Front End</span> ·{" "}
                <span className="skills-color"> UX / UI</span>
              </div>
              <br></br>
              <div className="contact-info">Brooklyn, NY</div>
              <br></br>
              <div className="social-icons-intro">
                <a
                  key="https://github.com/mczernyk"
                  href="https://github.com/mczernyk"
                >
                  <span className="fa-stack fa-2x fa1">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>

                <a
                  key="https://linkedin.com/in/czernyk/"
                  href="https://linkedin.com/in/czernyk/"
                >
                  <span className="fa-stack fa-2x fa1">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
                <a key="email" href={`mailto:mczernyk@gmail.com`}>
                  <span className="fa-stack fa-2x fa1">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-envelope fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </div>
              <br></br>
            </Plx>
          </div>
          <div className="intro-text">
            <p>
              I'm Mark, a Software Engineer & Cryptocurrency Enthusiast with
              prior professional experience in Trading, Consulting, Sales,
              Operations & Law.
            </p>
            <p>
              I'm passionate about building stylish, intuitive products that
              solve problems & provide a pleasant user experience -- scroll down
              to learn more about me.
            </p>
          </div>
        </div>
      </section>
    </div>
  </Plx>
)

export default Intro
