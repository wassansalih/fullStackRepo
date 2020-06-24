import React from 'react';
import './App.css';

import Time from './components/TimeComponent';
import Metrics from './components/MetricsComponent'

function App() {
  return (
    <div className="App" data-test="main-component">
      <header className="App-header">
      <div className="container">
        <h1 data-test="main-component-header">Full stack project</h1>
        <div class="row">
          <div className="col white-border max-width">
            <Time />
          </div>
          <div className="col white-border max-width">
            <Metrics />
          </div>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
