import React, { Component } from "react"
import { FontAwesomeIcon } from
'@fortawesome/react-fontawesome'
import { faCircle, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import nbSS from "../../images/nbSS.png";

export default class PopupNobody extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e)
  }

  render() {
    if (!this.props.seenNobody) {
      return null
    }
    return (
      <div>
        <div className="modal-section">
          <div className="modal-info">
            <h3 className="modal-title">Nobody Clothing</h3>
            <div className="subheading">
              Making digital assets real
            </div>
            <ul>
              <li>Custom built ecommerce platflorm with web3 wallet integration.</li>
              <li>
              Users can create 1/1 products from a curated group of NFT collections using assets in their web3 wallet.
              </li>
              <li>Uses Rarible API & custom wallet integration to retrieve NFTs from curated collections.</li>
              <li>
                Uses Stripe API for payment flow & order collection.
              </li>
              <li>
                Uses Sanity.io for product managment.
              </li>
              <li>Depolyed site with Next.js & Vercel.</li>
              <li>Formatted for desktop & mobile.</li>


            </ul>


                <img src={nbSS} className="modal-image" />

          </div>
          <br></br>
          <div className="modal-date">
            <div>
              <div className="date-heading-modal">July 2022 - Present</div>
              <div className="social-icons-modal">


                <a
                  key="https://nobody.clothing/"
                  href="https://nobody.clothing/"
                >
                <span className="fa-layers fa-fw fa1p">
                  <FontAwesomeIcon icon={faCircle} transform="grow-20"/>
                  <FontAwesomeIcon icon={faLaptop} transform="grow-5" inverse/>
                </span>
                </a>

                <a
                  key="https://www.twitter.com/nobody_clothing"
                  href="https://www.twitter.com/nobody_clothing"
                >
                <span className="fa-layers fa-fw fa1p">
                  <FontAwesomeIcon icon={faCircle} transform="grow-20"/>
                  <FontAwesomeIcon icon={faTwitter} transform="grow-5" inverse/>
                </span>
                </a>

                <a
                  key="https://www.instagram.com/nobodyclothingnyc"
                  href="https://www.instagram.com/nobodyclothingnyc"
                >
                <span className="fa-layers fa-fw fa1p">
                  <FontAwesomeIcon icon={faCircle} transform="grow-20"/>
                  <FontAwesomeIcon icon={faInstagram} transform="grow-5" inverse/>
                </span>
                </a>
              </div>
              <br></br>
              <div className="stack-title">stack:</div>
              <div className="modal-stack">
                <div>Next.js</div>
                <div>Node.js</div>
                <div>Rarible API</div>
                <div>Stripe API</div>
                <div>Sanity.io</div>
                <div>Vercel</div>
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
