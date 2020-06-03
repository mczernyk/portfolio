import React from "react"
import {Intro, Projects, Experience, Education, Design, Music, Info, Sidebar} from '../components/indexComp'
import '../../public/styles.css';


const IndexPage = () => (
  <div className="mainContainer">
    <div className="contentContainer">
        <Intro/>
        <Projects/>
        <Experience/>
        <Education/>
        <Design/>
        <Music/>
        <Info/>
    </div>
    <div className="sidebarContainer">
      <Sidebar/>
    </div>

  </div>
)


export default IndexPage
