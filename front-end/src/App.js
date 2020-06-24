import React from 'react';
import './App.css';

import Time from './components/TimeComponent';
import Metrics from './components/MetricsComponent'

function App() {
  return (
    <div className="App" data-test="main-component">
      <header className="App-header">
      <div class="container">
            <h1 data-test="main-component-header">Full stack project</h1>
        <div class="row">
          <div class="col">
            <Time />
          </div>
          <div class="col">
            <Metrics />
          </div>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
