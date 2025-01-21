import React from 'react';
import ProgressBar from '@/components/Setup/ProgressBar';
import { useFormContext } from '@/hooks/useFormContext';
import proptypes from '@/proptypes';

const FormHeader = (props) => {
  const { text, id } = props;
  const {
    formState: { step },
  } = useFormContext();

  return (
    <header
      data-testid="setupFormHeader"
      className="text-center"
      aria-labelledby={id}
    >
      <h1 id={id} className="mt-2 mb-0">
        {text}
      </h1>
      <p className="mb-2">
        Step {step.current} of {step.total}
      </p>
      <ProgressBar currentStep={step.current} totalSteps={step.total} />
    </header>
  );
};

FormHeader.propTypes = proptypes.Form.Header;

export default FormHeader;
