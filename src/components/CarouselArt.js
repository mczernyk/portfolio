import React from 'react';
import ReactDOM from 'react-dom';
import Flickity from 'react-flickity-component';
import bench from '../../public/images/bench.jpg';
import flhouse from '../../public/images/flhouse.jpg';
import snow from '../../public/images/snow.jpg';
import grass from '../../public/images/grass.jpg';
import plant from '../../public/images/plant2.jpg';
import '../../public/flickity.css';

function CarouselArt() {
  let works = [
    {art: bench, alt: `"Bench" Photograph`},
    {art: snow, alt: `"Snow" Oil on Canvas`},
    {art: flhouse, alt: `"Florida" Photograph`},
    {art: plant, alt: `"Plant" Oil on Canvas`},
    {art: grass, alt: `"Grass" Oil & Earth on Canvas`},

  ]

  return (
    <div className="design-carousel">
      <Flickity>
      {works.map(work => (
        <div className="carousel-cell"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '20px',
            paddingLeft: '10px',
            paddingRight: '10px'
          }}
        >
          <img className="portfolioPic" src={work.art} alt={work.alt} height="350px" />
          <br></br>
          <div className="subheading mb-3">{work.alt}</div>
        </div>
      ))}
      </Flickity>
    </div>
  );
}

export default CarouselArt;
