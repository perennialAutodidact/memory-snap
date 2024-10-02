import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ register, name, errors }) => {
  return (
    <>
      <input
        type="name"
        className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
        placeholder="Enter name"
        {...register(name)}
      ></input>
      <p className="align-self-start mt-3">
        {errors[name]?.message ||
          errors[name]?.message ||
          errors[name]?.message}
      </p>
    </>
  );
};
Input.propTypes = {
  register: PropTypes.func,
  name: PropTypes.string,
  errors: PropTypes.object,
};

export default Input;
