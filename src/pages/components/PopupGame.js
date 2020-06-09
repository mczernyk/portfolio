import React, { Component } from "react"
import { FontAwesomeIcon } from
'@fortawesome/react-fontawesome'
import { faCircle, faLaptop } from '@fortawesome/free-solid-svg-icons'
import gameoflife from "../../images/gameoflife.mp4"

export default class PopupGame extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e)
  }

  render() {
    if (!this.props.seenGame) {
      return null
    }
    return (
      <div>
        <div className="modal-section">
          <div className="modal-info">
            <h3 className="modal-title">Game Of Life</h3>
            <div className="subheading">
              Visualization of Conway's Game of Life
            </div>
            <ul>
              <li>
                Core functionality built over a single day as a Fullstack
                Academy in-class project.
              </li>
              <li>
                Independently added custom CSS styling & design elements to
                further develop Front End skills.
              </li>
              <li>
                Implemented additional features (randomize board, pause, draw on
                hover) outside of workshop.
              </li>
            </ul>
            <video className="modal-image" autoPlay loop muted>
              <source src={gameoflife} type="video/mp4"/>
            </video>
          </div>
          <br></br>
          <div className="modal-date">
            <div>
              <div className="date-heading-modal">January 2020</div>
              <div className="social-icons-modal">
                <a
                  key="https://mczernyk.github.io/PairProject.Game-of-life/"
                  href="https://mczernyk.github.io/PairProject.Game-of-life/"
                >
                <span className="fa-layers fa-fw fa1p">
                  <FontAwesomeIcon icon={faCircle} transform="grow-20"/>
                  <FontAwesomeIcon icon={faLaptop} transform="grow-5" inverse/>
                </span>
                </a>
              </div>
              <br></br>
              <div className="stack-title">stack:</div>
              <div className="modal-stack">
                <div>Node.js</div>
                <div>CSS</div>
                <div>HTML</div>
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
