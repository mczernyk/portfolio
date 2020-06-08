import React, { Component } from "react"
import { FontAwesomeIcon } from
'@fortawesome/react-fontawesome'
import { faCircle, faLaptop } from '@fortawesome/free-solid-svg-icons'
import coffeeClicker from "../../images/coffeeclicker.gif"

export default class PopupCoffee extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e)
  }

  render() {
    if (!this.props.seenCoffee) {
      return null
    }
    return (
      <div>
        <div className="modal-section">
          <div className="modal-info">
            <h3 className="modal-title">Coffee Clicker</h3>
            <div className="subheading">
              Incremental game based on Cookie Clicker by Julien Thiennot
            </div>
            <ul>
              <li>
                Core functionality built as first Checkpoint at Fullstack
                Academy following initial week of classes.
              </li>
              <li>
                Independently added custom CSS styling & design elements to
                further develop Front End skills.
              </li>
            </ul>
            <img src={coffeeClicker} className="modal-image" />
          </div>
          <br></br>
          <div className="modal-date">
            <div>
              <div className="date-heading-modal">January 2020</div>
              <div className="social-icons-modal">
                <a
                  key="https://mczernyk.github.io/Checkpoint.DOM/"
                  href="https://mczernyk.github.io/Checkpoint.DOM/"
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
