import React from 'react';
import { useForm } from 'react-hook-form';

const FormStepTwo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // eslint-disable-next-line
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Player 2 Name</label>
      <input
        id="name2"
        {...register('name', { required: true, maxLength: 30 })}
      />
      {errors.name && errors.name.type === 'required' && (
        <span>This is required</span>
      )}
      {errors.name && errors.name.type === 'maxLength' && (
        <span>Max length exceeded</span>
      )}
      <input type="submit" />
    </form>
  );
};

export default FormStepTwo;
