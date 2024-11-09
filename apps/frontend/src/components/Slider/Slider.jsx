import React from 'react';
import Proptypes from 'Proptypes';

const Slider = ({ id, register, name, value }) => {
  return (
    <input
      type="range"
      min="0"
      max="16"
      className="form-range"
      id={id}
      step="2"
      defaultValue={value}
      {...register(name)}
    ></input>
  );
};

Slider.propTypes = Proptypes.Form.Slider;

export default Slider;
