import React from "react";
import ProgressBar from "../ProgressBar";

const SetupForm = () => {
  return (
    <form className="bg-light">
      <ProgressBar currentStep={1} totalSteps={3} />
    </form>
  );
};

export default SetupForm;
