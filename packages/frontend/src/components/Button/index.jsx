import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, color }) => {
  return (
    <button type="submit" className={`btn btn-${color} align-self-end`}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
