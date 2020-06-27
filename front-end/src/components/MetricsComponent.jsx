import React from 'react';
import './Component.css';
function Metrics(props) {
  return (
    <div  data-test="metrics-component">
      <h3 className="green-bold-font" data-test="metrics-title">Metrics COMPONENT</h3>
      <p>----------------------------------------------</p>
      <p className="metrics-font-format" data-test="metrics-value">{props.metricsData}</p>
    </div>
  );
}

export default Metrics;
