import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from 'components/Setup/ProgressBar';
import useFormContext from 'hooks/useFormContext';

const Header = (props) => {
  const { headerText } = props;
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
        {headerText}
      </h1>
      <p className="mb-2">
        Step {currentStep} of {totalSteps}
      </p>
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
    </header>
  );
};

Header.propTypes = {
  headerText: PropTypes.string,
};

export default Header;
