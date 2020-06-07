import React from "react"
import Plx from "react-plx"
import DesignBoxes from "./DesignBoxes"

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

const Design = () => (
  <section id="design">
    <Plx parallaxData={parallaxData}>
      <div className="section-container-design">
        <h1 className="section-title-white">Design</h1>
        <br></br>
        <p className="design-intro">
          Click on any of the tiles below to see some of my graphic design, art
          & photography.
        </p>
        <p className="design-intro">
          I've created logos & ad campaigns for employers, clients &
          personal brands in the past.
        </p>
        <p className="design-intro">
          I enjoy creating digital & physical art in my spare time, too.
        </p>
        <br></br>
        <DesignBoxes />
      </div>
    </Plx>
  </section>
)

export default Design
