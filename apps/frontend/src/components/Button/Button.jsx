import React from 'react';
import Proptypes from 'Proptypes';

const Button = ({
  bgColorClass,
  text,
  textColor = 'dark',
  type = 'submit',
}) => {
  return (
    <button type={type} className={`btn text-${textColor} btn-${bgColorClass}`}>
      {text}
    </button>
  );
};

Button.propTypes = Proptypes.App.Button;

export default Button;
