import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faImage  } from '@fortawesome/free-solid-svg-icons'
import CarouselArt from "./CarouselArt"

export default class DesignArt extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e)
  }

  render() {
    if (!this.props.seenArt) {
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

          <div className="title-heading-design">Photography & Paintings</div>
        </div>

        <div className="design-text">
          <div className="design-icon">
            <span className="fa-layers fa-fw fa-5x">
              <FontAwesomeIcon icon={faCircle} transform="grow-10"/>
              <FontAwesomeIcon icon={faImage} inverse/>
            </span>
          </div>

          <div className="design-right">
            <p>
              Designing on a computer is great, but there's still something
              special about working with paint. I especially like oil paint as a
              medium because of its texture & slow drying time.
              <br></br>
            </p>
          </div>
        </div>
        <br></br>
        <div>
          <CarouselArt />
        </div>
      </div>
    )
  }
}
