import React from "react"
import Flickity from "react-flickity-component"
import dad2 from "../../images/dad2.png"
import libertyDad from "../../images/libertydadfinalblack.png"
import dadHead from "../../images/dadhead.png"
import mtcLogo from "../../images/mtclogoRevised.png"
import crumLogo from "../../images/crumLogoAndText.png"
import mtcChina from "../../images/chinacardRevised.png"
import nobodyCircle from "../../images/nbCircleLogoInverse.png"
import nobodyMilady from "../../images/nbLogoMilady.png"
import nobodyAllstarz from "../../images/nbLogoAllstarz.png"

import "../../styles/flickity.css"

function CarouselDesign() {
  let designs = [
    { art: nobodyCircle, alt: "Nobody Logo" },
    { art: nobodyAllstarz, alt: "Nobody Allstarz Logo" },
    { art: nobodyMilady, alt: "Nobody Milady Logo" },
    { art: dad2, alt: "Rad Dads Modern Logo" },
    { art: dadHead, alt: "Rad Dads Classic Logo" },
    { art: libertyDad, alt: "Rad Dads Liberty Logo" },
    { art: crumLogo, alt: "Crum Logo" },
    { art: mtcLogo, alt: "MTC Logo" },
    { art: mtcChina, alt: "Red Hook Terminals Card" },
  ]

  return (
    <div className="design-carousel">
      <Flickity>
        {designs.map(design => (
          <div className="carousel-cell-graphic" key={design.alt}>
            <img className="portfolio-pic-graphic" src={design.art} alt={design.alt} />
            <br></br>
            <div className="subheading mb-3">{design.alt}</div>
          </div>
        ))}
      </Flickity>
    </div>
  )
}

export default CarouselDesign
