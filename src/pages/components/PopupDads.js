import React, { Component } from "react"
import { FontAwesomeIcon } from
'@fortawesome/react-fontawesome'
import { faCircle, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons'
import dadsGif from "../../images/testNew.gif";
import dadsSS2 from "../../images/dadsSS2.png";


export default class PopupDads extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e)
  }

  render() {
    if (!this.props.seenDads) {
      return null
    }
    return (
      <div>
        <div className="modal-section">
          <div className="modal-info">
            <h3 className="modal-title">Rad Dads NFT</h3>
            <div className="subheading">
              Launched Solana NFT collection from art creation to minting
            </div>
            <ul>
              <li>
                Created artwork layers, set trait rarities, controlled for conflicts & generated art / metadata using HashLips.
              </li>
              <li>
                Uploaded asset data to Arweave & launched Solana NFT collection with Metaplex.
              </li>
              <li>
                Deployed minting site with Candy Machine & Vercel.
              </li>
              <li>Styled minting site front end and formatted for desktop & mobile.</li>
              <li>Built Twitter bot that regularly posts Dad jokes & memes with NFT examples & relevant hashtags to increase engagement.</li>
              <li>Built Discord bot that posts jokes, memes & more when prompted with commands in the Discord server.</li>
              <li>Built separate Discord bot that saves music to a playlist when prompted & plays Dad Rock in the voice channel.</li>
              <li>Created & managed Instagram account.</li>


            </ul>
            <div className="crum-images">
              <div>
                <br></br>
                <img src={dadsGif} className="modal-image-dad" />

              </div>
              <div>
                <br></br>
                <img src={dadsSS2} className="modal-image-dad" />
              </div>

            </div>
          </div>
          <br></br>
          <div className="modal-date">
            <div>
              <div className="date-heading-modal">December 2021 - Present</div>
              <div className="social-icons-modal">

                <a
                  key="https://raddadsnft.com/"
                  href="https://raddadsnft.com/"
                >
                <span className="fa-layers fa-fw fa1p">
                  <FontAwesomeIcon icon={faCircle} transform="grow-20"/>
                  <FontAwesomeIcon icon={faLaptop} transform="grow-5" inverse/>
                </span>
                </a>

                <a
                  key="https://twitter.com/raddadsnft.com/"
                  href="https://twitter.com/raddadsnft.com/"
                >
                <span className="fa-layers fa-fw fa1p">
                  <FontAwesomeIcon icon={faCircle} transform="grow-20"/>
                  <FontAwesomeIcon icon={faTwitter} transform="grow-5" inverse/>
                </span>
                </a>

                <a
                  key="https://discord.com/invite/CqKKBKVvEj"
                  href="https://discord.com/invite/CqKKBKVvEj"
                >
                <span className="fa-layers fa-fw fa1p">
                  <FontAwesomeIcon icon={faCircle} transform="grow-20"/>
                  <FontAwesomeIcon icon={faDiscord} transform="grow-5" inverse/>
                </span>
                </a>

                <a
                  key="https://instagram.com/raddadsnft"
                  href="https://instagram.com/raddadsnft"
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
                <div>Node.js</div>
                <div>React</div>
                <div>Hash Lips</div>
                <div>Metaplex</div>
                <div>Candy Machine</div>
                <div>Vercel</div>
                <div>Arweave</div>
                <div>Discord Developer Tools</div>
                <div>Twitter Developer Tools</div>
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
