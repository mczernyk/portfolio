import React from "react"
import {DesignGraphic, DesignDigital, DesignArt} from './indexComp'
import dad from '../../public/images/libertydadfinalblack.png';
import glitch01 from '../../public/images/01.glitch.png';
import snow from '../../public/images/snow.jpg';

class DesignBoxes extends React.Component {
  constructor(){
    super();
    this.state = {
      seenGraphic: false,
      seenDigital: false,
      seenArt: false
    }
    this.toggleGraphic = this.toggleGraphic.bind(this);
    this.toggleDigital = this.toggleDigital.bind(this);
    this.toggleArt = this.toggleArt.bind(this);
  }

  toggleGraphic = (e) => {
    this.setState({
      seenGraphic: !this.state.seenGraphic
    });
  };

  toggleDigital = (e) => {
    this.setState({
      seenDigital: !this.state.seenDigital
    });
  };

  toggleArt = (e) => {
    this.setState({
      seenArt: !this.state.seenArt
    });
  };

  onClose = e => {
    this.props.seenGraphic = false;
    this.props.seenDigital = false;
    this.props.seenArt = false;
  };

  render() {

    return (

      (this.state.seenGraphic) ?
      (<div className="design-main">
      <DesignGraphic onClose={this.toggleGraphic} seenGraphic={this.state.seenGraphic} />
      </div>) : (

      (this.state.seenDigital) ?
      (<div className="design-main">
      <DesignDigital onClose={this.toggleDigital} seenDigital={this.state.seenDigital} />
      </div>) :  (

      (this.state.seenArt) ?
      (<div className="design-main">
      <DesignArt onClose={this.toggleArt} seenArt={this.state.seenArt} />
      </div>) :

      (<div className="design-main">
        <div className="design-buffer">
          <div className="design-box">
            <div className="title-heading-design">
            Graphic Design
            </div>
            <br></br>
            <div className="design-image"
            onClick={(e) => {
              this.toggleGraphic(e);
            }}>
            <img src={dad} className="image" alt="Rad Dads Logo" />
            </div>
          </div>
          <div className="design-box">
            <div className="title-heading-design">
              Digital Art
            </div>
            <br></br>
            <div className="design-image"
            onClick={(e) => {
              this.toggleDigital(e);
            }}>
            <img src={glitch01} className="image" alt="Glitch Art" />
            </div>
          </div>
          <div className="design-box">
            <div className="title-heading-design">
            Photography & Paintings
            </div>
            <br></br>
            <div className="design-image"
            onClick={(e) => {
              this.toggleArt(e);
            }}>
            <img src={snow} className="image" alt="Snow" />
            </div>
          </div>
        </div>
      </div>)
      ))

    )
  }





}

export default DesignBoxes
