import React from 'react';
import { fetchData } from '../fetchData';
import './Component.css';

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverTime: null,
      diffTime: null,
      time: null
    }
  }

  async componentDidMount() {
    let serverTimeInMilliseconds = null;

    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);

    const timeData = await fetchData({route: '/time', method: 'GET'});
    if(!timeData.error) {
      serverTimeInMilliseconds = timeData.data.timeData.properties.epoch.timeInSeconds * 1000;
    }

    this.setState({
      serverTime: serverTimeInMilliseconds,
      diffTime: new Date().getTime() - serverTimeInMilliseconds
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.time !== prevState.time) {
      this.setState({
        diffTime: new Date().getTime() - this.state.serverTime
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
          <h3 data-test="time-component-title">TIME COMPONENT</h3>
          <h4 data-test="time-component-server-time">Server time: <span className="green-bold-font">{new Date(this.state.serverTime).toLocaleTimeString('en-US')}</span></h4>
          <h4 data-test="time-component-machine-time">Machine time: <span className="green-bold-font">{new Date().toLocaleTimeString('en-US')}</span></h4>
          <h4 data-test="time-component-difference-time">The difference between machine and server times: <span className="green-bold-font">{this.msToTime(this.state.diffTime)}</span></h4>
      </div>
    )
  }
}

export default Time;