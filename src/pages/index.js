import React from "react"
import Intro from "./components/Intro"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Design from "./components/Design"
import Music from "./components/Music"
import Info from "./components/Info"
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"

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
    <div className="topbar-container">
      <Topbar/>
    </div>
  </div>
)

export default IndexPage
