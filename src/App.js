import React, { Component } from 'react';
import Pad from './Pad'

const sounds = [
  { pad: "Q", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", id: "clap" },
  { pad: "W", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", id: "hihat" },
  { pad: "E", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", id: "kick" },
  { pad: "A", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", id: "openhat"},
  { pad: "S", sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", id: "boom" },
  { pad: "D", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", id: "ride" },
  { pad: "Z", sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", id: "snare" },
  { pad: "X", sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", id: "tom" },
  { pad: "C", sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", id: "tink" }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'Press key',
    }
  }

  handleDisplay = display => this.setState({ display })

  render() {
    return (
      <div id="drum-machine">
       <div id="display">{this.state.display}</div>
       <div className="btns">
          {sounds.map(i => (
            <Pad
               key={i.pad}
               id={i.id}
               pad={i.pad}
               sound={i.sound}
               handleDisplay={this.handleDisplay}
             />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
