import React from 'react';
import './App.css';

import Time from './components/TimeComponent';
import Metrics from './components/MetricsComponent';
import { fetchData } from './fetchData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverTime: null,
      diffTime: null,
      time: null,
      fetchTimer: 30,
      metricsData: null
    }
  }
  async componentDidMount() {
    let serverTimeInMilliseconds = null;

    this.interval = setInterval(() => 
      this.setState({
        time: Date.now()}),
    1000);

    const timeData = await fetchData({route: '/time', method: 'GET'});
    if(!timeData.error) {
      serverTimeInMilliseconds = timeData.data.timeData.properties.epoch.timeInSeconds * 1000;
    }
    const metrics = await fetchData({route: '/metrics', method: 'GET'});

    this.setState({
      serverTime: serverTimeInMilliseconds,
      diffTime: new Date().getTime() - serverTimeInMilliseconds,
      metricsData: metrics.data
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.time !== prevState.time) {
      this.setState({
        diffTime: new Date().getTime() - this.state.serverTime,
        fetchTimer: this.state.fetchTimer -1
      });
    }
    if (this.state.fetchTimer <= 0) {
      const timeData = await fetchData({route: '/time', method: 'GET'});
      const metrics = await fetchData({route: '/metrics', method: 'GET'});
      if(!timeData.error && !metrics.error) {
        this.setState({
          serverTime: timeData.data.timeData.properties.epoch.timeInSeconds * 1000,
          metricsData: metrics.data,
          fetchTimer: 30
        });
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    return (
      <div className="App" data-test="main-component">
        <header className="App-header">
          <p>{typeof(this.state.metricsData)}</p>
        <div className="container">
          <h1 data-test="main-component-header">Full stack project</h1>
          <div className="row">
            <div className="col white-border max-width">
              {this.state.serverTime
                ? <Time  serverTime={this.state.serverTime} diffTime={this.state.diffTime}/>
                : <p>LOADING DATA</p>
              }
            </div>
            <div className="col white-border max-width">
              {this.state.serverTime
                ? <Metrics metricsData={this.state.metricsData} />
                : <p>LOADING DATA</p>
              }
            </div>
          </div>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
