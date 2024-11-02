import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, color, textColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`btn text-${textColor} btn-${color}`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
