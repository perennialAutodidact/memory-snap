import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, color, onClick }) => {
  return (
    <button onClick={onClick} type="submit" className={`btn btn-${color}`}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
