import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ register, name, errors, placeholder }) => {
  return (
    <>
      <input
        type="name"
        className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
        placeholder={placeholder}
        autoFocus
        {...register(name)}
      ></input>
      <p className="align-self-start mt-3">{errors[name]?.message}</p>
    </>
  );
};
Input.propTypes = {
  register: PropTypes.func,
  name: PropTypes.string,
  errors: PropTypes.object,
  placeholder: PropTypes.string,
};

export default Input;
