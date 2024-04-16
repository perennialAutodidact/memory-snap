import React from 'react';
import { useForm } from 'react-hook-form';

const FormStepOne = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // eslint-disable-next-line
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="Player 1 Name">Player 1 Name</label>
      <input
        id="name1"
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

export default FormStepOne;
