import React from 'react';
import proptypes from '@/proptypes';

const Slider = ({ register, name, value, label }) => {
  return (
    <>
      <label htmlFor={name}>
        <h3>{label}</h3>
        <input
          type="range"
          min="0"
          max="16"
          className="form-range"
          id={name}
          step="2"
          defaultValue={value}
          {...register(name)}
        />
      </label>
    </>
  );
};

Slider.propTypes = proptypes.Form.Slider;

export default Slider;
