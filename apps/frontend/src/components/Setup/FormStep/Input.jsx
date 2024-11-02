import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ register, name, errors }) => {
  return (
    <>
      <input
        type="name"
        className="form-control"
        placeholder="enter name"
        {...register(name)}
      ></input>
      <p>{errors.player1Name?.message}</p>
      <p>{errors.player2Name?.message}</p>
      <p>{errors.searchTerm?.message}</p>
    </>
  );
};
Input.propTypes = {
  register: PropTypes.func,
  name: PropTypes.string,
  errors: PropTypes.object,
};

export default Input;
