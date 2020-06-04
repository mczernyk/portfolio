import React, { Component } from "react"
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
            <span className="fa-stack fa-5x">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i className="fa fa-file-image-o fa-stack-1x fa-inverse"></i>
            </span>
          </div>

          <div className="design-right">
            <p>
              I created a series of digital art as a submission for{" "}
              <span className="subheading">Gli.tc/h Festival</span>. I made
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
