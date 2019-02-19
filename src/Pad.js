import React, { Component } from "react";

class Pad extends Component {

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
    // window.focus();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.keyCode === this.props.pad.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  };

  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }

  render() {
    return (
      <div className="drum-pad"
            id={this.props.id}
            onClick={this.handleClick}>
        <h1>{this.props.pad}</h1>
        <audio
          id={this.props.pad}
          className="clip"
          src={this.props.sound}
          ref={(audio) => { this.audio = audio } }
        ></audio>
      </div>
    )
  }
}

export default Pad;
