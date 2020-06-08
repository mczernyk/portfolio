import React, { Component } from "react"
import { FontAwesomeIcon } from
'@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faGithub} from '@fortawesome/free-brands-svg-icons'
import crum from "../../images/crum1.gif"
import crumMap from "../../images/crummap.gif"
import crumCollected from "../../images/crumCollected.gif"
import crumDropped from "../../images/crumDropped.gif"

export default class PopupCrum extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e)
  }

  render() {
    if (!this.props.seenCrum) {
      return null
    }

    return (
      <div>
        <div className="modal-section">
          <div className="modal-info">
            <h3 className="modal-title">Crum</h3>
            <div className="subheading">
              Location-based Augmented Reality Social Mobile App
            </div>
            <ul>
              <li>
                Allows users to drop & collect “Crums” - images with attached
                messages - that are tied to location.
              </li>
              <li>
                Crums can be dropped privately for a specific user or publically
                for all to see.
              </li>
              <li>
                Crums are visible in Augmented Reality via mobile camera or on
                map via icon.
              </li>
              <li>
                Map view provides distance & directions to nearby Crums.
              </li>
              <li>
                Users can comment on & collect Crums through screen tap in AR
                view.
              </li>
              <li>
                App provides different experiences based on device capability.
                No-AR mode available to users with older phones.
              </li>
              <li>
                Built with{" "}
                <a href="https://www.linkedin.com/in/april-angland/">
                  April Angland
                </a>
                ,{" "}
                <a href="https://www.linkedin.com/in/peterchen21/">
                  Peter Chen
                </a>{" "}
                &{" "}
                <a href="https://www.linkedin.com/in/thomaszhang1/">
                  Thomas Zhang
                </a>
                .
              </li>
            </ul>
            <div className="crum-images">
              <div>
                <br></br>
                <img src={crumCollected} className="modal-image-crum" />
              </div>
              <div>
                <br></br>
                <img src={crum} className="modal-image-crum" />
              </div>
              <div>
                <br></br>
                <img src={crumMap} className="modal-image-crum" />
              </div>
            </div>
          </div>
          <br></br>
          <div className="modal-date">
            <div>
              <div className="date-heading-modal">March - April 2020</div>
              <div className="social-icons-modal">
                <a
                  key="https://github.com/TeamKnown/Crum"
                  href="https://github.com/TeamKnown/Crum"
                >
                <span className="fa-layers fa-fw fa1p">
                  <FontAwesomeIcon icon={faCircle} transform="grow-20"/>
                  <FontAwesomeIcon icon={faGithub} transform="grow-5" inverse/>
                </span>
                </a>

                <a
                  key="https://www.youtube.com/watch?v=yui-dKm0ZwM&feature=youtu.be"
                  href="https://www.youtube.com/watch?v=yui-dKm0ZwM&feature=youtu.be"
                >
                <span className="fa-layers fa-fw fa1p">
                  <FontAwesomeIcon icon={faCircle} transform="grow-20"/>
                  <FontAwesomeIcon icon={faYoutube} transform="grow-5" inverse/>
                </span>
                </a>
              </div>
              <br></br>
              <div className="stack-title">stack:</div>
              <div className="modal-stack">
                <div>React-Native</div>
                <div>Redux</div>
                <div>Expo</div>
                <div>Three.js</div>
                <div>Sequelize</div>
                <div>Postgres</div>
                <div>ngrok</div>
                <br></br>
              </div>
            </div>
            <div className="button-div">
              <button className="button-project" onClick={this.onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
