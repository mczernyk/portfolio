import React, { Component } from "react"
import { FontAwesomeIcon } from
'@fortawesome/react-fontawesome'
import { faCircle, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import scanSS from "../../images/scanSS.png";

export default class PopupScan extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e)
  }

  render() {
    if (!this.props.seenScan) {
      return null
    }
    return (
      <div>
        <div className="modal-section">
          <div className="modal-info">
            <h3 className="modal-title">ScanSaver</h3>
            <div className="subheading">
              Scan, save & share QR Code links with your phone
            </div>
            <ul>
              <li>
                Pivoted LinkLater app to focus on QR Code scanning & saving.
              </li>
              <li>Users can check to see if QR Code link is malicious then save it to a feed.</li>
              <li>
                Users can save links to collections & share them with friends.
              </li>
              <li>
                Friends can like & reply to links.
              </li>
              <li>
                Integrates with user's contact list.
              </li>
              <li>
                Uses Firebase for backend & device-based authentication.
              </li>
              <li>Delivers push notifications to users when they receive a new link, like or addition to a group collection.</li>
              <li>Depolyed landing page with Gatsby.js & Netlify.</li>
              <li>Formatted landing page for desktop & mobile.</li>
              <li>Recorded a <a href="https://www.youtube.com/watch?v=wxNPL6MRW_k/">Demo Video</a> to demonstrate app functionality.</li>

            </ul>


                <img src={scanSS} className="modal-image" />

          </div>
          <br></br>
          <div className="modal-date">
            <div>
              <div className="date-heading-modal">September 2021</div>
              <div className="social-icons-modal">


                <a
                  key="https://scansaver.app/"
                  href="https://scansaver.app/"
                >
                <span className="fa-layers fa-fw fa1p">
                  <FontAwesomeIcon icon={faCircle} transform="grow-20"/>
                  <FontAwesomeIcon icon={faLaptop} transform="grow-5" inverse/>
                </span>
                </a>

                <a
                  key="https://www.youtube.com/watch?v=wxNPL6MRW_k/"
                  href="https://www.youtube.com/watch?v=wxNPL6MRW_k/"
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
                <div>Node.js</div>
                <div>React Native</div>
                <div>Expo</div>
                <div>Firebase</div>
                <div>Gatsby.js</div>
                <div>Netlify</div>
                <div>Apple Developer Tools</div>
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
