import React from 'react';

const Input = ({ register, name }) => {
  return (
    <input
      type="name"
      className="form-control"
      placeholder="enter name"
      {...register(name)}
    ></input>
  );
};

export default Input;
