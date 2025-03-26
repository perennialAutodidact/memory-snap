import React from 'react';
import proptypes from '@/proptypes';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const valueNow = Math.floor((currentStep / totalSteps) * 100);

  return (
    <div className="progress bg-secondary">
      <div
        role="progressbar"
        className="progress-bar progress-bar-animated bg-primary"
        aria-valuenow={valueNow}
        aria-valuemax={100}
        style={{ width: `${valueNow}%` }}
      ></div>
    </div>
  );
};

ProgressBar.propTypes = proptypes.Form.ProgressBar;

export default ProgressBar;
