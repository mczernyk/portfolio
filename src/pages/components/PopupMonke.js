import React, { Component } from "react"
import { FontAwesomeIcon } from
'@fortawesome/react-fontawesome'
import { faCircle, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import dapSS from "../../images/dapSS2.png";

export default class PopupMonke extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e)
  }

  render() {
    if (!this.props.seenMonke) {
      return null
    }
    return (
      <div>
        <div className="modal-section">
          <div className="modal-info">
            <h3 className="modal-title">MonkeDap</h3>
            <div className="subheading">
              Leave a comment and potentially win a prize with Ethereum
            </div>
            <ul>
              <li>
                Created a Solidity contract that allows users to either "dap up" or "flip off" a cute monkey & leave a comment.
              </li>
              <li>Tested contract with Hardhat.</li>
              <li>
                Added potential to receive a reward when submitting the transaction.
              </li>
              <li>
                Deployed contract on Rinkeby Testnet & Alchemy.
              </li>
              <li>
                Deployed website with Heroku with counter reflecting balance between daps and flips.
              </li>
              <li>Styled front end & formatted for desktop & mobile.</li>

            </ul>


                <img src={dapSS} className="modal-image" />

          </div>
          <br></br>
          <div className="modal-date">
            <div>
              <div className="date-heading-modal">March 2022</div>
              <div className="social-icons-modal">


                <a
                  key="https://ethbuildspace.herokuapp.com/"
                  href="https://ethbuildspace.herokuapp.com/"
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
                <div>React</div>
                <div>Solidity</div>
                <div>Hardhat</div>
                <div>Alchemy</div>
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
