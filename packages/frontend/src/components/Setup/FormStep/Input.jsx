import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ register, name, errors }) => {
  return (
    <>
      <input
        type="name"
        className={`form-control ${
          errors.player1Name || errors.player2Name || errors.imageSearchTerm
            ? 'is-invalid'
            : ''
        }`}
        placeholder="Enter name"
        {...register(name)}
      ></input>
      <p className="align-self-start mt-3">
        {errors.player1Name?.message ||
          errors.player2Name?.message ||
          errors.imageSearchTerm?.message}
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
