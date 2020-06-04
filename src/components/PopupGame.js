import React, { Component } from "react"
import gameoflife from "../images/gameoflife.gif"

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
                Independently added custom CSS styling and design elements to
                further develop Front End skills.
              </li>
              <li>
                Implemented additional features (randomize board, pause, draw on
                hover) outside of workshop.
              </li>
            </ul>
            <img src={gameoflife} className="modal-image" />
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
                  <span className="fa-stack fa-lg fa1">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
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
