import React from 'react';
import proptypes from '@/proptypes';

const Button = ({
  bgColor,
  buttonText,
  textColor = 'dark',
  handleClick,
  type = 'submit',
}) => {
  return (
    <button
      type={type}
      className={`btn text-${textColor} btn-${bgColor}`}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = proptypes.App.Button;

export default Button;
