import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const valueNow = Math.floor((currentStep / totalSteps) * 100);

  return (
    <div className="progress bg-primary">
      <div
        role="progressbar"
        className="progress-bar progress-bar-animated bg-secondary"
        aria-valuenow={valueNow}
        aria-valuemax={100}
        style={{ width: `${valueNow}%` }}
      ></div>
    </div>
  );
};

ProgressBar.propTypes = {
  currentStep: PropTypes.number,
  totalSteps: PropTypes.number,
};

export default ProgressBar;
