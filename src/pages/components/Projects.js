import React from "react"
import ProjectsBoxes from "./ProjectsBoxes"
import Plx from "react-plx"

const parallaxData = [
  {
    start: "self",
    duration: "1200vh",
    startOffset:"50vh",
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
        endValue: 10,
        unit: "vh",
        property: "translateY",
      },
    ],
  },
]

const Projects = () => (
  <section id="projects">
    <Plx parallaxData={parallaxData}>
      <div className="section-container-projects">
        <Plx parallaxData={parallaxText}>
            <h1 className="section-title-white">Projects</h1>
            <br></br>
            <p className="projects-intro">
              {" "}
              Click on any of the tiles below to see some of my recent projects.
            </p>
            <p className="projects-intro">
              I'm experienced with building user-friendly web & mobile
              applications.
            </p>
            <br></br>
            <ProjectsBoxes />
            <br></br>
            <br></br>
          <div className="skills-container">
            <div className="skills-box">
              <div className="title-heading-skills">Proficient</div>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>React - Native</li>
              <li>Redux</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Sequelize</li>
              <li>PostgreSQL</li>
              <li>Firebase</li>
              <li>Expo</li>
              <li>Metamask</li>
              <li>Rarible/OpenSea API</li>
              <li>Metaplex</li>
              <li>Candy Machine</li>
              <li>Hashlips</li>
              <li>Netlify</li>
              <li>Heroku</li>

            </div>
            <div className="skills-box">
              <div className="title-heading-skills">Knowledgeable</div>
              <li>Solidity</li>
              <li>Hardhat</li>
              <li>Gatsby.js</li>
              <li>Vue</li>
              <li>Vercel</li>
              <li>AWS</li>
              <li>Three.js</li>
              <li>Socket.io</li>
              <li>Websocket</li>
              <li>Mocha</li>
              <li>Chai</li>
              <li>jQuery</li>
              <li>Twitter Dev Tools</li>
              <li>Discord Dev Tools</li>
              <li>Apple Dev Tools</li>
            </div>
            <div className="skills-box-3">
              <div className="title-heading-skills">Skills</div>
              <li>Product/Project Management</li>
              <li>Teamwork & leadership</li>
              <li>Sales & marketing</li>
              <li>Oral & written communication</li>
              <li>Social content creation, curation & community management</li>
              <li>E-Commerce/webstore administration & promotion</li>
              <li>Product & graphic design</li>
              <li>Technical & fundamental analysis</li>
              <li>MS Office & Google Suite</li>
              <li>Photoshop & GIMP</li>
              <li>Shopify & Squarespace</li>
              <li>FinalCut & iMovie</li>
            </div>
          </div>
        </Plx>
      </div>
    </Plx>
  </section>
)

export default Projects
