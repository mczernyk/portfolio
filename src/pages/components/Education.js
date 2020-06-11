import React from "react"
import Plx from "react-plx"

const parallaxData = [
  {
    start: "self",
    duration: "500vh",
    startOffset: "100vh",
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

const Education = () => (
  <section id="education">
    <Plx parallaxData={parallaxData}>
      <div className="section-container-education">
        <div>
          <h1 className="section-title-blue">Education</h1>
          <br></br>

          <div className="resume-item-edu">
            <div className="resume-content">
              <div className="title-heading-edu">Fullstack Academy</div>
              <div className="subheading">Software Engineering</div>
              <br></br>
              <div>
                Immersive software engineering bootcamp focused on JavaScript
                & the NERD stack - Node.js, Express, React, Redux, Sequelize,
                PostgreSQL
              </div>
              <br></br>
            </div>
            <div className="resume-date">
              <div className="date-heading">December 2019 - April 2020</div>
            </div>
          </div>
          <br></br>

          <div className="resume-item-edu">
            <div className="resume-content">
              <div className="title-heading-edu">Swarthmore College</div>
              <div className="subheading">Bachelor of Arts</div>

              <ul>
                <li>Political Science & History Major</li>
                <li>Men's Varsity Lacrosse</li>
                <li>Avery Blake Award</li>
              </ul>
            </div>
            <div className="resume-date">
              <div className="date-heading">August 2007 - May 2011</div>
            </div>
          </div>
          <br></br>

          <div className="resume-item-edu">
            <div className="resume-content">
              <div className="title-heading-edu">Delbarton School</div>
              <div className="subheading">High School Diploma</div>

              <ul>
                <li>National Merit Commended Student</li>
                <li>AP Scholar with Distinction</li>
                <li>Psychology Award</li>
                <li>Varsity Lacrosse, Varsity Squash</li>
              </ul>
            </div>
            <div className="resume-date">
              <div className="date-heading">August 2003 - May 2007</div>
            </div>
          </div>
          <br></br>
        </div>
      </div>
    </Plx>
  </section>
)

export default Education
