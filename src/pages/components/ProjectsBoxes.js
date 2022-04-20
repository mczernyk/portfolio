import React, { Component } from "react"
import PopupCrum from "./PopupCrum"
import PopupMex from "./PopupMex"
import PopupFriend from "./PopupFriend"
import PopupGame from "./PopupGame"
import PopupCoffee from "./PopupCoffee"
import PopupDads from "./PopupDads"
import PopupMonke from "./PopupMonke"
import PopupScan from "./PopupScan"
import PopupLink from "./PopupLink"



import crum from "../../images/crum1.gif"
import mextrixdemo from "../../images/mextrixdemo.gif"
import friendshopdemo from "../../images/friendshop.gif"
import gameoflife from "../../images/gameoflife.gif"
import coffeeClicker from "../../images/coffeeclicker.gif"
import dadsGif from "../../images/testNew.gif";
import dapMonkey from "../../images/dapMonkey.png"
import scanSaver from "../../images/scanSaver.png"
import ll01 from "../../images/ll01.jpg";





export default class ProjectsBoxes extends Component {
  constructor() {
    super()
    this.state = {
      seenCrum: false,
      seenMex: false,
      seenFriend: false,
      seenGame: false,
      seenCoffee: false,
      seenDads: false,
      seenMonke: false,
      seenScan: false,
      seenLink: false,

    }
    this.toggleCrum = this.toggleCrum.bind(this)
    this.toggleMex = this.toggleMex.bind(this)
    this.toggleFriend = this.toggleFriend.bind(this)
    this.toggleGame = this.toggleGame.bind(this)
    this.toggleCoffee = this.toggleCoffee.bind(this)
    this.toggleDads = this.toggleDads.bind(this)
    this.toggleMonke = this.toggleMonke.bind(this)
    this.toggleScan = this.toggleScan.bind(this)
    this.toggleLink = this.toggleLink.bind(this)



  }

  toggleCrum = e => {
    this.setState({
      seenCrum: !this.state.seenCrum,
    })
  }

  toggleMex = e => {
    this.setState({
      seenMex: !this.state.seenMex,
    })
  }

  toggleFriend = e => {
    this.setState({
      seenFriend: !this.state.seenFriend,
    })
  }

  toggleGame = e => {
    this.setState({
      seenGame: !this.state.seenGame,
    })
  }

  toggleCoffee = e => {
    this.setState({
      seenCoffee: !this.state.seenCoffee,
    })
  }

  toggleDads = e => {
    this.setState({
      seenDads: !this.state.seenDads,
    })
  }

  toggleMonke = e => {
    this.setState({
      seenMonke: !this.state.seenMonke,
    })
  }

  toggleScan = e => {
    this.setState({
      seenScan: !this.state.seenScan,
    })
  }

  toggleLink = e => {
    this.setState({
      seenLink: !this.state.seenLink,
    })
  }

  onClose = e => {
    this.props.seenCrum = false
    this.props.seenMex = false
    this.props.seenFriend = false
    this.props.seenGame = false
    this.props.seenCoffee = false
    this.props.seenDads = false
    this.props.seenMonke = false
    this.props.seenScan = false
    this.props.seenLink = false

  }

  render() {
    return (
      // Render component inside projects container, otherwise show project tiles

      this.state.seenCrum ? (
        <div className="projects-main">
          <PopupCrum onClose={this.toggleCrum} seenCrum={this.state.seenCrum} />
        </div>
      ) : this.state.seenMex ? (
        <div className="projects-main">
          <PopupMex onClose={this.toggleMex} seenMex={this.state.seenMex} />
        </div>
      ) : this.state.seenFriend ? (
        <div className="projects-main">
          <PopupFriend
            onClose={this.toggleFriend}
            seenFriend={this.state.seenFriend}
          />
        </div>
      ) : this.state.seenGame ? (
        <div className="projects-main">
          <PopupGame onClose={this.toggleGame} seenGame={this.state.seenGame} />
        </div>
      ) : this.state.seenCoffee ? (
        <div className="projects-main">
          <PopupCoffee
            onClose={this.toggleCoffee}
            seenCoffee={this.state.seenCoffee}
          />
        </div>
      ) : this.state.seenDads ? (
        <div className="projects-main">
          <PopupDads
            onClose={this.toggleDads}
            seenDads={this.state.seenDads}
          />
        </div>
      ) : this.state.seenMonke ? (
        <div className="projects-main">
          <PopupMonke
            onClose={this.toggleMonke}
            seenMonke={this.state.seenMonke}
          />
        </div>
      ) : this.state.seenScan ? (
        <div className="projects-main">
          <PopupScan
            onClose={this.toggleScan}
            seenScan={this.state.seenScan}
          />
        </div>
      ) : this.state.seenLink ? (
        <div className="projects-main">
          <PopupLink
            onClose={this.toggleLink}
            seenLink={this.state.seenLink}
          />
        </div>
      ) : (
        <div className="projects-main">
          <div className="projects-buffer">
            <div className="project-section">
              <div
                className="project-tile"
                onClick={e => {
                  this.toggleDads(e)
                }}
              >
                <div className="project-image">
                  <img src={dadsGif} className="image" alt="Rad Dads NFT" />

                  <div className="project-title">
                    <div className="project-category">
                      <span className="project-name">Rad Dads NFT </span>
                      <br></br>
                      <span className="project-date">December 2021 -<br></br>Present</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="project-tile"
                onClick={e => {
                  this.toggleMonke(e)
                }}
              >

                <div className="project-image">
                  <img
                    src={dapMonkey}
                    className="image"
                    alt="MonkeDap"
                  />

                  <div className="project-title">
                    <div className="project-category">
                      <span className="project-name">MonkeDap</span>
                      <br></br>
                      <span className="project-date">March 2022</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="project-tile"
                onClick={e => {
                  this.toggleScan(e)
                }}
              >

                <div className="project-image">
                  <img
                    src={scanSaver}
                    className="image"
                    alt="crum"
                  />

                  <div className="project-title">
                    <div className="project-category">
                      <span className="project-name">ScanSaver</span>
                      <br></br>
                      <span className="project-date">September 2021</span>
                    </div>
                  </div>
                </div>
              </div>
        </div>

            <div className="project-section">

            <div
              className="project-tile"
              onClick={e => {
                this.toggleLink(e)
              }}
            >

              <div className="project-image">
                <img
                  src={ll01}
                  className="image-link"
                  alt="LinkLater"
                />

                <div className="project-title">
                  <div className="project-category">
                    <span className="project-name">LinkLater</span>
                    <br></br>
                    <span className="project-date">July 2020 -<br></br>August 2021</span>
                  </div>
                </div>
              </div>
            </div>
              <div
                className="project-tile"
                onClick={e => {
                  this.toggleCrum(e)
                }}
              >
                <div className="project-image">
                  <img src={crum} className="image-crum" alt="crum" />

                  <div className="project-title">
                    <div className="project-category">
                      <span className="project-name">Crum </span>
                      <br></br>
                      <span className="project-date">March - April 2020</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="project-tile"
                onClick={e => {
                  this.toggleFriend(e)
                }}
              >
                <div className="project-image">
                  <img
                    src={friendshopdemo}
                    className="image"
                    alt="friendShop"
                  />

                  <div className="project-title">
                    <div className="project-category">
                      <span className="project-name">friendShop</span>
                      <br></br>
                      <span className="project-date">March 2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-section">
              <div
                className="project-tile"
                onClick={e => {
                  this.toggleMex(e)
                }}
              >
                <div className="project-image">
                  <img src={mextrixdemo} className="image-mex" alt="MEXTrix" />

                  <div className="project-title">
                    <div className="project-category">
                      <span className="project-name">MEXTrix </span>
                      <br></br>
                      <span className="project-date">March 2020</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="project-tile"
                onClick={e => {
                  this.toggleGame(e)
                }}
              >
                <div className="project-image">
                  <img src={gameoflife} className="image" alt="Game of Life" />

                  <div className="project-title">
                    <div className="project-category">
                      <span className="project-name">Game of Life</span>
                      <br></br>
                      <span className="project-date">February 2020</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="project-tile"
                onClick={e => {
                  this.toggleCoffee(e)
                }}
              >
                <div className="project-image">
                  <img
                    src={coffeeClicker}
                    className="image"
                    alt="Coffee Clicker"
                  />
                  <div className="project-title">
                    <div className="project-category">
                      <span className="project-name">Coffee Clicker</span>
                      <br></br>
                      <span className="project-date">January 2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    )
  }
}
