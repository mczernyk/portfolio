import React, { Component } from "react"
import mextrixdemo from "../../public/images/mextrixdemo.gif"

export default class PopupMex extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e)
  }

  render() {
    if (!this.props.seenMex) {
      return null
    }
    return (
      <div>
        <div className="modal-section">
          <div className="modal-info">
            <h3 className="modal-title">MEXTrix</h3>
            <div className="subheading">
              Realtime Bitmex Orderbook with Liquidation and Whale Tracker
            </div>
            <ul>
              <li>
                Queries external API feed to track key trading metrics on a
                popular Bitcoin exchange.
              </li>
              <li>
                Orderbook shows live bid/ask spread with volume visualization at
                local price levels.
              </li>
              <li>
                Tracks and displays liquidations and all orders of greater than
                100k contracts.
              </li>
              <li>Formatted for web and mobile.</li>
            </ul>
            <img src={mextrixdemo} className="modal-image" />
          </div>
          <br></br>
          <div className="modal-date">
            <div>
              <div className="date-heading-modal">March 2020</div>
              <div className="social-icons-modal">
                <a
                  key="https://github.com/mczernyk/Stackathon"
                  href="https://github.com/mczernyk/Stackathon"
                >
                  <span className="fa-stack fa-lg fa1">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>

                <a
                  key="https://stackathon-mc.herokuapp.com/"
                  href="https://stackathon-mc.herokuapp.com/"
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
                <div>React</div>
                <div>Redux</div>
                <div>Websocket</div>
                <div>Sequelize</div>
                <div>Postgres</div>
                <div>Express</div>
                <div>Heroku</div>
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
