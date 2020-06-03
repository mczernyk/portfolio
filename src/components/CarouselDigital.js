import React from "react"
import ReactDOM from "react-dom"
import Flickity from "react-flickity-component"
import glitch01 from "../../public/images/01.glitch.png"
import glitch02 from "../../public/images/02.glitch.png"
import glitch03 from "../../public/images/03.glitch.gif"
import glitch04 from "../../public/images/04.glitch.png"
import glitch05 from "../../public/images/05.glitch.png"
import glitch06 from "../../public/images/06.glitch.png"
import glitch07 from "../../public/images/07.glitch.gif"
import glitch08 from "../../public/images/08.glitch.png"
import glitch09 from "../../public/images/09.glitch.png"
import glitch10 from "../../public/images/10.glitch.png"
import glitch11 from "../../public/images/11.glitch.png"
import glitch12 from "../../public/images/12.glitch.gif"
import glitch13 from "../../public/images/13.glitch.png"
import glitch14 from "../../public/images/14.glitch.png"
import glitch15 from "../../public/images/15.glitch.png"
import glitch16 from "../../public/images/16.glitch.png"
import glitch17 from "../../public/images/17.glitch.png"
import glitch18 from "../../public/images/18.glitch.png"
import glitch19 from "../../public/images/19.glitch.png"
import glitch20 from "../../public/images/20.glitch.png"
import glitch21 from "../../public/images/21.glitch.png"
import glitch22 from "../../public/images/22.glitch.png"
import glitch23 from "../../public/images/23.glitch.png"
import glitch24 from "../../public/images/24.glitch.png"

import "../../public/flickity.css"

function CarouselDesign() {
  let glitches = [
    { art: glitch01, alt: "Glitch01" },
    { art: glitch02, alt: "Glitch02" },
    { art: glitch03, alt: "Glitch03" },
    { art: glitch04, alt: "Glitch04" },
    { art: glitch05, alt: "Glitch05" },
    { art: glitch06, alt: "Glitch06" },
    { art: glitch07, alt: "Glitch07" },
    { art: glitch08, alt: "Glitch08" },
    { art: glitch09, alt: "Glitch09" },
    { art: glitch10, alt: "Glitch10" },
    { art: glitch11, alt: "Glitch11" },
    { art: glitch12, alt: "Glitch12" },
    { art: glitch13, alt: "Glitch13" },
    { art: glitch14, alt: "Glitch14" },
    { art: glitch15, alt: "Glitch15" },
    { art: glitch16, alt: "Glitch16" },
    { art: glitch17, alt: "Glitch17" },
    { art: glitch18, alt: "Glitch18" },
    { art: glitch19, alt: "Glitch19" },
    { art: glitch20, alt: "Glitch20" },
    { art: glitch21, alt: "Glitch21" },
    { art: glitch22, alt: "Glitch22" },
    { art: glitch23, alt: "Glitch23" },
    { art: glitch24, alt: "Glitch24" },
  ]

  return (
    <div className="design-carousel">
      <Flickity>
        {glitches.map(glitch => (
          <div className="carousel-cell">
            <img className="portfolio-pic" src={glitch.art} alt={glitch.alt} />
            <br></br>
          </div>
        ))}
      </Flickity>
    </div>
  )
}

export default CarouselDesign
