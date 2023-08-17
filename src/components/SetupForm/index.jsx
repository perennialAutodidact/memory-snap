import React from "react";
import ProgressBar from "./ProgressBar";

const SetupForm = () => {
  return (
    <form>
      <h2>Game Setup</h2>
      <ProgressBar currentStep={1} totalSteps={3} />
    </form>
  );
};

export default SetupForm;
