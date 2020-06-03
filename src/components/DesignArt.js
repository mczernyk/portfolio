import React, { Component } from 'react';
import {CarouselArt} from './indexComp'

export default class DesignDigital extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render(){
    if(!this.props.seenArt){
      return null;
    }

    return (
      <div className="design-section-right">

        <div className="heading-design">

          <div className="button-div-design">
            <button className="button-design"
              onClick={this.onClose}>
              Close
            </button>
          </div>

          <div className="title-heading-design">
            Photography & Paintings
          </div>
        </div>

        <div className="design-text">

          <div className="design-icon">
            <span className="fa-stack fa-5x">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i className='fa fa-picture-o fa-stack-1x fa-inverse'></i>
            </span>
          </div>

          <div className="design-right">
            <p>Designing on a computer is great, but there's still something special about working with paint. I especially like oil paint as a medium because of its texture and slow drying time.
            <br></br>
            </p>
          </div>
        </div>
        <br></br>
        <div>
          <CarouselArt />
        </div>
      </div>
    )
  }
}
