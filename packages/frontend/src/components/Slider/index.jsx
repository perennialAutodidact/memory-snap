import React from 'react';
// eslint-disable-next-line
const Slider = ({ id, register, name }) => {
  return (
    <input
      type="range"
      min="0"
      max="16"
      className="form-range"
      id={id}
      step="2"
      {...register(name)}
    ></input>
  );
};

export default Slider;
