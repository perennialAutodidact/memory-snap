import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ register, name, errors, value }) => {
  return (
    <>
      <input
        type="name"
        className="form-control"
        placeholder="enter name"
        defaultValue={value}
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
  value: PropTypes.string,
};

export default Input;
