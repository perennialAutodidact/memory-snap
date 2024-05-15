import React from 'react';
import PropTypes from 'prop-types';

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

Slider.propTypes = {
  id: PropTypes.string,
  register: PropTypes.func,
  name: PropTypes.string,
};

export default Slider;
