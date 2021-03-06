import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faFileImage  } from '@fortawesome/free-solid-svg-icons'
import CarouselDigital from "./CarouselDigital"

export default class DesignDigital extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e)
  }

  render() {
    if (!this.props.seenDigital) {
      return null
    }

    return (
      <div className="design-section-right">
        <div className="heading-design">
          <div className="button-div-design">
            <button className="button-design" onClick={this.onClose}>
              Close
            </button>
          </div>

          <div className="title-heading-design">Digital Art</div>
        </div>

        <div className="design-text">
          <div className="design-icon">
            <span className="fa-layers fa-fw fa-5x">
              <FontAwesomeIcon icon={faCircle} transform="grow-12"/>
              <FontAwesomeIcon icon={faFileImage} inverse/>
            </span>
          </div>

          <div className="design-right">
            <p>
              I created this series of digital art as a submission for{" "}
              <span className="subheading">Gli.tc/h</span>, a <i>“conference, festival and gathering hybrid [that] aims to gather glitch artists, theorists, coders and enthusiasts for a short time, to share their work and ideas.”</i>  <br></br>
              I made
              these images by deliberately corrupting video files, then
              manipulating playback to generate visual glitches.
            </p>
          </div>
        </div>
        <br></br>
        <div>
          <CarouselDigital />
        </div>
      </div>
    )
  }
}
