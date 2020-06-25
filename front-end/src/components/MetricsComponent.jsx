import React from 'react';
import './Component.css';
function Metrics(props) {
  console.log(props, "1111")
  return (
    <div  data-test="metrics-component">
      <h3 className="green-bold-font">Metrics COMPONENT</h3>
      <p>----------------------------------------------</p>
      <p className="metrics-font-format">{props.metricsData}</p>
    </div>
  );
}

export default Metrics;
