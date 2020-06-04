import React from "react"
import Flickity from "react-flickity-component"
import bench from "../images/bench.jpg"
import flhouse from "../images/flhouse.jpg"
import snow from "../images/snow.jpg"
import grass from "../images/grass.jpg"
import plant from "../images/plant2.jpg"
import "../styles/flickity.css"

function CarouselArt() {
  let works = [
    { art: bench, alt: `"Bench" Photograph` },
    { art: snow, alt: `"Snow" Oil on Canvas` },
    { art: flhouse, alt: `"Florida" Photograph` },
    { art: plant, alt: `"Plant" Oil on Canvas` },
    { art: grass, alt: `"Grass" Oil & Earth on Canvas` },
  ]

  return (

    <div className="design-carousel">
      <Flickity>
        {works.map(work => (
          <div className="carousel-cell">
            <img className="portfolio-pic" src={work.art} alt={work.alt} />
            <br></br>
            <div className="subheading mb-3">{work.alt}</div>
          </div>
        ))}
      </Flickity>
    </div>
  )
}

export default CarouselArt
