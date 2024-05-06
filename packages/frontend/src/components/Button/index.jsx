import React from 'react';

const Button = ({ text, color }) => {
  return (
    <button type="submit" className={`btn btn-${color}`}>
      {text}
    </button>
  );
};

export default Button;
