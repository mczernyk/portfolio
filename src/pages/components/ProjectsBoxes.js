import React from "react"
import {
  PopupCrum,
  PopupMex,
  PopupFriend,
  PopupGame,
  PopupCoffee,
} from "./indexComp"
import crum from "../../../public/images/crum1.gif"
import mextrixdemo from "../../../public/images/mextrixdemo.gif"
import friendshopdemo from "../../../public/images/friendshop.gif"
import gameoflife from "../../../public/images/gameoflife.gif"
import coffeeClicker from "../../../public/images/coffeeclicker.gif"

class Projects extends React.Component {
  constructor() {
    super()
    this.state = {
      seenCrum: false,
      seenMex: false,
      seenFriend: false,
      seenGame: false,
      seenCoffee: false,
    }
    this.toggleCrum = this.toggleCrum.bind(this)
    this.toggleMex = this.toggleMex.bind(this)
    this.toggleFriend = this.toggleFriend.bind(this)
    this.toggleGame = this.toggleGame.bind(this)
    this.toggleCoffee = this.toggleCoffee.bind(this)
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
  onClose = e => {
    this.props.seenCrum = false
    this.props.seenMex = false
    this.props.seenFriend = false
    this.props.seenGame = false
    this.props.seenCoffee = false
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
      ) : (
        <div className="projects-main">
          <div className="projects-buffer">
            <div className="crum-section">
              <div
                className="crum-tile"
                onClick={e => {
                  this.toggleCrum(e)
                }}
              >
                <div className="project-image">
                  <img src={crum} className="image" alt="Crum" />

                  <div className="project-title">
                    <div className="project-category">
                      <span className="project-name">crum</span>
                      <br></br>
                      <span className="project-date">March - April 2020</span>
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
                  <img src={mextrixdemo} className="image" alt="MEXTrix" />

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

export default Projects
