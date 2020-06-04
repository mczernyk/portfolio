import React from "react"
import {
  Intro,
  Projects,
  Experience,
  Education,
  Design,
  Music,
  Info,
  Sidebar,
} from "./components/indexComp"
import "../styles/styles.css"

const IndexPage = () => (
  <div className="main-container">
    <div className="content-container">
      <Intro />
      <Projects />
      <Experience />
      <Education />
      <Design />
      <Music />
      <Info />
    </div>
    <div className="sidebar-container">
      <Sidebar />
    </div>
  </div>
)

export default IndexPage
