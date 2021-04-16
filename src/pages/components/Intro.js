import React from "react"
import avatar from "../../images/2014selfportrait.kago.jpg"
import Plx from "react-plx"
import { FontAwesomeIcon } from
'@fortawesome/react-fontawesome'
import { faCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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

const parallaxText = [
  {
    start: "self",
    duration: "800vh",
    properties: [
      {
        startValue: 0,
        endValue: 20,
        unit: "vh",
        property: "translateY",
      }
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
      <Plx parallaxData={parallaxText}>
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
              </Plx>


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
                <span className="fa-layers fa-fw fa1">
                  <FontAwesomeIcon icon={faCircle} transform="grow-60"/>
                  <FontAwesomeIcon icon={faGithub} inverse transform="grow-30"/>
                </span>
                </a>

                <a
                  key="https://linkedin.com/in/czernyk/"
                  href="https://linkedin.com/in/czernyk/"
                >
                <span className="fa-layers fa-fw fa1">
                  <FontAwesomeIcon icon={faCircle} transform="grow-60"/>
                  <FontAwesomeIcon icon={faLinkedin} inverse transform="grow-30"/>
                </span>
                </a>
                <a key="email" href={`mailto:mczernyk@gmail.com`}>
                <span className="fa-layers fa-fw fa1">
                  <FontAwesomeIcon icon={faCircle} transform="grow-60"/>
                  <FontAwesomeIcon icon={faEnvelope} inverse transform="grow-30"/>
                </span>
                </a>
              </div>
              <br></br>
          </div>
          <div className="intro-text">
            <p>
              I'm Mark, a Software Engineer & Cryptocurrency Enthusiast with
              prior professional experience in Sales, Operations, Trading, Consulting & Law.
            </p>
            <p>
              I'm passionate about building stylish, intuitive products that
              solve problems & provide a pleasant user experience -- scroll down
              to learn more about me.
            </p>
          </div>
        </div>
        </Plx>
      </section>
    </div>
  </Plx>
)

export default Intro
