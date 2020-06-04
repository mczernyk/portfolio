import React, { Component } from "react"
import { CarouselDesign } from "./indexComp"

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
            <span className="fa-stack fa-5x">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
            </span>
          </div>

          <div className="design-right">
            <p>
              In my spare time, I enjoy making digital and physical art - check
              out a preview below. I regularly create new logos and designs for{" "}
              <span className="subheading">Rad Dads Official</span> that are
              used on apparel and other products. While at{" "}
              <span className="subheading">MTC Transportation</span>, I designed
              the company's logo, website, and ad campaigns. I also created
              promotional materials and business cards for{" "}
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
