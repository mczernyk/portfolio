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
import SEO from "../components/SEO"

import "../styles/styles.css"

// test: gatsby develop
// deploy: normal git push origin master

const IndexPage = () => (
  <div>
  <SEO />
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
  </div>

)

export default IndexPage
