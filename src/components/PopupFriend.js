import React, { Component } from "react"
import friendshopdemo from "../images/friendshop.gif"

export default class PopupFriend extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e)
  }

  render() {
    if (!this.props.seenFriend) {
      return null
    }

    return (
      <div>
        <div className="modal-section">
          <div className="modal-info">
            <h3 className="modal-title">friendShop</h3>
            <div className="subheading"> E-Commerce Platform</div>
            <ul>
              <li>
                Uses models and associations created with Sequelize in
                PostgreSQL to allow users to edit / retrieve account information
                and past orders.
              </li>
              <li>
                Supports both guests and users; uses session data to track guest
                cart contents.
              </li>
              <li>
                Admins are able to view custom page elements to edit inventory
                and user info.
              </li>
              <li>
                Built in ten days with{" "}
                <a href="https://www.linkedin.com/in/april-angland/">
                  April Angland
                </a>
                ,{" "}
                <a href="https://www.linkedin.com/in/peterchen21/">
                  Peter Chen
                </a>{" "}
                and{" "}
                <a href="https://www.linkedin.com/in/gabriel-postelnicu92/">
                  Gabriel Postelnicu
                </a>
                .
              </li>
            </ul>
            <img src={friendshopdemo} className="modal-image" />
          </div>
          <br></br>
          <div className="modal-date">
            <div>
              <div className="date-heading-modal">March 2020</div>
              <div className="social-icons-modal">
                <a
                  key="https://github.com/teamunknownfullstack2001/graceShopperProducts"
                  href="https://github.com/teamunknownfullstack2001/graceShopperProducts"
                >
                  <span className="fa-stack fa-lg fa1">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
                <a
                  key="https://unknowngraceshopper.herokuapp.com/"
                  href="https://unknowngraceshopper.herokuapp.com/"
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
                <div>Sequelize</div>
                <div>Postgres</div>
                <div>Express</div>
                <div>OAuth</div>
                <div>Heroku</div>
                <div>Mocha</div>
                <div>Chai</div>
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
