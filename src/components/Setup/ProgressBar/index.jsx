import React from "react";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const valueNow = Math.floor((currentStep / totalSteps) * 100);

  return (
    <div className="progress">
      <div
        role="progressbar"
        className="progress-bar progress-bar-animated"
        aria-valuenow={valueNow}
        aria-valuemax={100}
        style={{ width: `${valueNow}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
