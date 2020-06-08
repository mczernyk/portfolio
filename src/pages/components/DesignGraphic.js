import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import CarouselDesign from "./CarouselDesign"

export default class DesignDigital extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e)
  }

  render() {
    if (!this.props.seenGraphic) {
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

          <div className="title-heading-design">Graphic Design</div>
        </div>

        <div className="design-text">
          <div className="design-icon">
            <span className="fa-layers fa-fw fa-5x">
              <FontAwesomeIcon icon={faCircle} transform="grow-12"/>
              <FontAwesomeIcon icon={faPencilAlt} inverse/>
            </span>
          </div>

          <div className="design-right">
            <p>
              In my spare time, I enjoy making digital & physical art - check
              out a preview below. I regularly create new logos & designs for{" "}
              <span className="subheading">Rad Dads Official</span> that are
              used on apparel & other products. While at{" "}
              <span className="subheading">MTC Transportation</span>, I designed
              the company's logo, website, & ad campaigns. I also created
              promotional materials & business cards for{" "}
              <span className="subheading">Red Hook Container Terminal</span> in
              preparation for a trip to China for a Freight Expo in 2017.{" "}
            </p>
          </div>
        </div>
        <br></br>
        <div>
          <CarouselDesign />
        </div>
      </div>
    )
  }
}
