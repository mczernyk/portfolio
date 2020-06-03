import React from "react"
import Plx from 'react-plx';

const parallaxData = [
  {
    start: 'self',
    duration: '500vh',
    startOffset: '100vh',
    properties: [
      {
        startValue: 0,
        endValue: -50,
        unit: 'vh',
        property: 'translateY',
      }
    ]
  }
]

const Music = () => (
  <section id="music">
    <Plx parallaxData={parallaxData}>
      <div className="section-container-music">
        <h1 className="section-title-coral">Music</h1>
        <br></br>
        <div className="music-intro">
          <p>I've always been a crate digger. My interest in music led me to DJing, and eventually music production.
          </p><p>
          You can hear some of my original tracks below -- a collection was released on <span className="subheading">lovecrypt</span> in 2018.</p>
        </div>
        <br></br>
        <div className="music-container">
          <div className="bandcamp-box">
            <iframe className="bandcamp-player"
               src="https://bandcamp.com/EmbeddedPlayer/album=1437004936/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless
            >
              <a href="http://lovecrypt.bandcamp.com/album/20-20">
                20¹¹-20¹³ by inner worlds
              </a>
            </iframe>
          </div>

          <div className="gear">
            <div className="gear-list">
            <div className="title-heading-music">Equipment</div>
              <div>Roland Juno 60</div>
              <div>Korg Wavestation EX</div>
              <div>Roland SH 101</div>
              <div>Novation Bass Station</div>
              <div>Casio SK1 (Circuit Bent)</div>
              <div>Roland TR 707</div>
              <div>Alesis HR 16 (Circuit Bent)</div>
              <div>Alesis Micron</div>
              <div>LSDJ</div>
              <div>Ableton Live</div>
              <div>Traktor Pro</div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
  </Plx>
  </section>
)

export default Music
