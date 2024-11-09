import React from 'react';
import ProgressBar from 'components/Setup/ProgressBar';
import { useFormContext } from 'hooks/useFormContext';
import Proptypes from 'Proptypes';

const FormHeader = props => {
  const { text } = props;
  const {
    state: { currentStep, totalSteps },
  } = useFormContext();

  return (
    <header
      data-testid="setupFormHeader"
      aria-labelledby="form-header-text"
      className="text-center"
    >
      <h1 id="form-header-text" className="mt-2 mb-0">
        {text}
      </h1>
      <p className="mb-2">
        Step {currentStep} of {totalSteps}
      </p>
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
    </header>
  );
};

FormHeader.propTypes = Proptypes.Form.Header;

export default FormHeader;
