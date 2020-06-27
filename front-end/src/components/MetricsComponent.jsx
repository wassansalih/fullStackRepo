import React from 'react';
import './Component.css';
import PropTypes from 'prop-types';
function Metrics(props) {
  return (
    <div  data-test="metrics-component">
      <h3 className="green-bold-font" data-test="metrics-title">Metrics COMPONENT</h3>
      <p>----------------------------------------------</p>
      <p className="metrics-font-format" data-test="metrics-value">{props.metricsData}</p>
    </div>
  );
}
Metrics.propTypes = {
  metricsData: PropTypes.string
}
export default Metrics;
