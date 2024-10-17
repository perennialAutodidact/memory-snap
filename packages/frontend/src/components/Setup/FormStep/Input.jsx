import React from 'react';
import PropTypes from 'prop-types';
import useFormContext from 'hooks/useFormContext';

const Input = ({ register, name, errors }) => {
  const {
    state: { currentStep },
  } = useFormContext();
  return (
    <>
      <input
        type="name"
        className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
        placeholder={currentStep === 4 ? 'e.g. cats' : 'Enter name'}
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
