import React from 'react';
import './Component.css';

class Time extends React.Component {
  constructor(props) {
    super(props);
  }

  msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }

  render(){
    return (
      <div>
          <h3 data-test="time-component-title" className="green-bold-font">TIME COMPONENT</h3>
          <p>----------------------------------------------</p>
          <h4 data-test="time-component-server-time">Server time in seconds: <span className="green-bold-font">{this.props.serverTime}</span></h4>
          <h4 data-test="time-component-difference-time">The difference between machine and server times: <span className="green-bold-font">{this.msToTime(this.props.diffTime)}</span></h4>
      </div>
    )
  }
}

export default Time;