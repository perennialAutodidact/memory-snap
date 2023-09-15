import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from 'components/Setup/ProgressBar';
import useFormContext from 'hooks/useFormContext';

const Header = (props) => {
  const { headerText } = props;
  const { currentStep, totalSteps } = useFormContext();
  return (
    <header data-testid="setupFormHeader">
      <h1>{headerText}</h1>
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
    </header>
  );
};

Header.propTypes = {
  headerText: PropTypes.string,
};

export default Header;
