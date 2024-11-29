import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Slider = ({ id, register, name }) => {
  const [sliderValue, setSliderValue] = useState('10');

  const handleChange = e => {
    setSliderValue(e.target.value);
  };

  return (
    <>
      <div className={'container d-flex justify-content-center'}>
        <h3>{sliderValue}</h3>
      </div>
      <input
        type="range"
        min="4"
        max="16"
        value={sliderValue}
        className="form-range mb-4"
        id={id}
        step="2"
        {...register(name)}
        onChange={handleChange}
      ></input>
    </>
  );
};

Slider.propTypes = {
  id: PropTypes.string,
  register: PropTypes.func,
  name: PropTypes.string,
};

export default Slider;
