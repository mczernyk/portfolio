import React, { Component } from "react"
import { FontAwesomeIcon } from
'@fortawesome/react-fontawesome'
import { faCircle, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ll01 from "../../images/ll01.jpg";
import ll02 from "../../images/ll02.jpg";
import ll03 from "../../images/ll03.jpg";
import ll04 from "../../images/ll04.jpg";
import ll05 from "../../images/ll05.jpg";






export default class PopupLink extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e)
  }

  render() {
    if (!this.props.seenLink) {
      return null
    }
    return (
      <div>
        <div className="modal-section">
          <div className="modal-info">
            <h3 className="modal-title">LinkLater</h3>
            <div className="subheading">
              Save, organize & share links with friends
            </div>
            <ul>
              <li>
                Users save links to a chronological feed using their phone's clipboard or camera.
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


            <div className="crum-images">
              <div>
                <br></br>
                <img src={ll01} className="modal-image-link" />
              </div>
              <div>
                <br></br>
                <img src={ll03} className="modal-image-link" />
              </div>
              <div>
                <br></br>
                <img src={ll04} className="modal-image-link" />
              </div>
              <div>
              <br></br>
              <img src={ll05} className="modal-image-link" />
            </div>
            </div>

          </div>
          <br></br>
          <div className="modal-date">
            <div>
              <div className="date-heading-modal">July 2020 - August 2021</div>
              <div className="social-icons-modal">


                <a
                  key="https://linklater.app/"
                  href="https://linklater.app/"
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
