import React from 'react';
import ReactDOM from 'react-dom';
import Flickity from 'react-flickity-component';
import dad2 from '../../public/images/dad2.png';
import libertyDad from '../../public/images/libertydadfinalblack.png';
import dadHead from '../../public/images/dadhead.png';
import mtcLogo from '../../public/images/mtclogoRevised.png';
import crumLogo from '../../public/images/crumLogoAndText.png';
import mtcChina from '../../public/images/chinacardRevised.png';
import '../../public/flickity.css';

function CarouselDesign() {

  let designs = [
    {art: dad2, alt: "Rad Dads Modern Logo"},
    {art: dadHead, alt: "Rad Dads Classic Logo"},
    {art: libertyDad, alt: "Rad Dads Liberty Logo"},
    {art: crumLogo, alt: "Crum Logo"},
    {art: mtcLogo, alt: "MTC Logo"},
    {art: mtcChina, alt: "Red Hook Terminals Card"}
  ]

  return (
    <div className="design-carousel">
      <Flickity>
      {designs.map(design => (
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
          <img className="portfolioPic" src={design.art} alt={design.alt} height="350px" />
          <br></br>
          <div className="subheading mb-3">{design.alt}</div>
        </div>
      ))}
      </Flickity>
    </div>
  );
}

export default CarouselDesign;
